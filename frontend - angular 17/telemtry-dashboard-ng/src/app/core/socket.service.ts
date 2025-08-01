import { Injectable } from '@angular/core';
import { Client, IMessage } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SocketService {

  private client: Client;
  private subjects = new Map<string, Subject<any>>();

  constructor() {
    // 1. crea el cliente STOMP sobre SockJS
    this.client = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      debug:  msg => console.log('[STOMP]', msg),
      reconnectDelay: 5000               // reconexión automática
    });

    // 2. Una vez conectado, suscribe a cada topic solicitado
    this.client.onConnect = () => {
      this.subjects.forEach((subj, topic) => {
        this.subscribeTopic(topic, subj);
      });
    };

    this.client.activate();             // inicia conexión
  }

  /** Observable para un topic: p.ej. 'telemetryData' */
  listen<T>(topicName: string): Observable<T> {
    const topic = `/topic/${topicName}`;
    let subj = this.subjects.get(topic);
    if (!subj) {
      subj = new Subject<T>();
      this.subjects.set(topic, subj);

      // si ya está conectado, nos suscribimos de inmediato
      if (this.client.connected) {
        this.subscribeTopic(topic, subj);
      }
    }
    return subj.asObservable();
  }

  private subscribeTopic(topic: string, subj: Subject<any>) {
    this.client.subscribe(topic, (msg: IMessage) => {
      try {
        subj.next(JSON.parse(msg.body));
      } catch {
        subj.next(msg.body);
      }
    });
  }
}