package com.lacunza.telemetry.dashboard.api;

import com.lacunza.telemetry.dashboard.model.*;
import com.lacunza.telemetry.dashboard.service.DataGenerator;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DataRestController {

  private final DataGenerator gen;

  public DataRestController(DataGenerator gen) { this.gen = gen; }

  @GetMapping("/bar-data")            
  public List<BarItem>      bar()     { 
    return gen.genBar();
  }
  
  @GetMapping("/status-data")         
  public List<StatusItem>    status()  { 
    return gen.genStatus(); 
  }

  @GetMapping("/device-distribution") 
  public List<DeviceItem>    device()  { 
    return gen.genDevice(); 
  }

  @GetMapping("/cpu-percent")         
  public int                 cpu()     { 
    return gen.genCpu();
  }

  @GetMapping("/scatter-data")        
  public List<ScatterPoint>  scatter() { 
    return gen.genScatter(); 
  }

}
