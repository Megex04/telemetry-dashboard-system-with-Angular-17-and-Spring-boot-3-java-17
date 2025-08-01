package com.lacunza.telemetry.dashboard.service;

import com.lacunza.telemetry.dashboard.model.*;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;
import java.util.random.RandomGenerator;

@Service
public class DataGenerator {

  private final SimpMessagingTemplate broker;
  private final RandomGenerator rnd = new SecureRandom();

  public DataGenerator(SimpMessagingTemplate broker) {
    this.broker = broker;
  }

  // ------------- streaming cada 3 s -----------------

  @Scheduled(fixedRate = 3000)
  public void streamAll() {
    broker.convertAndSend("/topic/telemetryData", genLineChart());
    broker.convertAndSend("/topic/barData", genBar());
    broker.convertAndSend("/topic/statusData", genStatus());
    broker.convertAndSend("/topic/deviceDistribution", genDevice());
    broker.convertAndSend("/topic/cpuPercent", genCpu());
    broker.convertAndSend("/topic/scatterData", genScatter());
  }

  // ----------------- REST getters -------------------

  public LineChart genLineChart() {
    return new LineChart(System.currentTimeMillis(),
                      Math.round(rnd.nextDouble(0, 100) * 100.0) / 100.0);
  }
  public List<BarItem> genBar() {
    return List.of(
      new BarItem(System.currentTimeMillis(), rnd.nextInt(5, 30)),
      new BarItem(System.currentTimeMillis(), rnd.nextInt(5, 30)),
      new BarItem(System.currentTimeMillis(), rnd.nextInt(5, 30))
    );
  }
  public List<StatusItem> genStatus() {
    return List.of(
      new StatusItem("Centro", rnd.nextInt(5,15), rnd.nextInt(0,5), rnd.nextInt(0,3)),
      new StatusItem("Norte" , rnd.nextInt(5,15), rnd.nextInt(0,5), rnd.nextInt(0,3))
    );
  }
  public List<DeviceItem> genDevice() {
    return List.of(
      new DeviceItem("IoT",     rnd.nextInt(10,50)),
      new DeviceItem("Gateway", rnd.nextInt(10,50)),
      new DeviceItem("PLC",     rnd.nextInt(10,50))
    );
  }
  public int genCpu() { return rnd.nextInt(0, 100); }

  public List<ScatterPoint> genScatter() {
    return rnd.ints(20, 0, 100)
              .mapToObj(cpu -> new ScatterPoint(cpu, rnd.nextInt(50, 500)))
              .toList();
  }
}
