# Dashboard de Telemetría 🚀

Proyecto full-stack que muestra métricas en tiempo real mediante:

| Capa      | Stack                               |
|-----------|-------------------------------------|
| Frontend  | **Angular 17** + RxJS + Ngx-ECharts |
| Backend   | **Spring Boot 3** (Java 17) + STOMP |
| Transporte| SockJS + STOMP                      |

---

## ✨ Características

- Streaming de datos cada **3 s** (WebSocket).
- 7 gráficos interactivos: Línea, Área, Barras, Barras apiladas, Dona, Gauge, Dispersión.
- Endpoints REST de respaldo con la misma data mock.
- Reconexión automática y acumulación de puntos en el cliente.

---

## 🛠️ Requisitos

- **Node ≥ 18** (frontend)
- **Java 17** (backend)
- **Maven 3.9+**
- (Opcional) Docker para despliegue

---

## 📂 Estructura

frontend-angular/
└── src/app/
├── charts/ # 7 componentes standalone Ngx-ECharts
├── core/socket.service.ts
└── dashboard/

backend-spring/
└── src/main/java/com/example/telemetry/
├── TelemetryBackendApplication.java
├── config/WebSocketConfig.java
├── model/...
├── service/DataGenerator.java
└── api/DataRestController.java

---

## 🚀 Arranque rápido

### Backend

```bash
cd backend-spring
mvn spring-boot:run
# WebSocket endpoint: ws://localhost:8080/ws

### Frontend
cd frontend-angular
npm install
ng serve
# http://localhost:4200

```
