# 📊 Dashboard de Telemetría - Backend

## 📋 Descripción

Backend Spring Boot para un dashboard de telemetría en tiempo real que proporciona datos simulados para monitoreo de sistemas IoT. El proyecto incluye APIs REST y WebSocket para streaming de datos en tiempo real.

## 🚀 Características

- **APIs REST** para obtener datos de telemetría
- **WebSocket** para streaming en tiempo real
- **Generación automática** de datos simulados
- **CORS configurado** para integración con frontend Angular
- **Scheduling** para actualización automática de datos

## 🛠️ Tecnologías

- **Java 17**
- **Spring Boot 3.5.4**
- **Spring WebSocket**
- **Maven**
- **Lombok**

## 📁 Estructura del Proyecto

```
src/main/java/com/lacunza/telemetry/dashboard/
├── api/
│   └── DataRestController.java          # Controlador REST
├── config/
│   └── WebSocketConfig.java             # Configuración WebSocket
├── model/
│   ├── BarItem.java                     # Modelo para gráficos de barras
│   ├── DeviceItem.java                  # Modelo para distribución de dispositivos
│   ├── LineChart.java                   # Modelo para gráficos de líneas
│   ├── ScatterPoint.java                # Modelo para gráficos de dispersión
│   └── StatusItem.java                  # Modelo para estados del sistema
├── service/
│   └── DataGenerator.java               # Servicio generador de datos
└── TelemetryBackendApplication.java     # Clase principal
```

## 🔧 Configuración

### Prerrequisitos

- Java 17 o superior
- Maven 3.6+
- IDE compatible (IntelliJ IDEA, Eclipse, VS Code)

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd com.lacunza.telemetry
   ```

2. **Compilar el proyecto**
   ```bash
   mvn clean compile
   ```

3. **Ejecutar la aplicación**
   ```bash
   mvn spring-boot:run
   ```

La aplicación estará disponible en: `http://localhost:8080`

## 📡 APIs REST

### Endpoints Disponibles

| Endpoint | Método | Descripción | Respuesta |
|----------|--------|-------------|-----------|
| `/bar-data` | GET | Datos para gráficos de barras | `List<BarItem>` |
| `/status-data` | GET | Estados del sistema | `List<StatusItem>` |
| `/device-distribution` | GET | Distribución de dispositivos | `List<DeviceItem>` |
| `/cpu-percent` | GET | Porcentaje de CPU | `int` |
| `/scatter-data` | GET | Datos para gráficos de dispersión | `List<ScatterPoint>` |

### Ejemplo de Respuesta

```json
// GET /bar-data
[
  {
    "timestamp": 1703123456789,
    "value": 25
  },
  {
    "timestamp": 1703123456789,
    "value": 18
  },
  {
    "timestamp": 1703123456789,
    "value": 12
  }
]
```

## 🔌 WebSocket

### Configuración

- **Endpoint WebSocket**: `ws://localhost:8080/ws`
- **Broker**: `/topic`
- **Prefijo de aplicación**: `/app`

### Topics Disponibles

| Topic | Descripción | Frecuencia |
|-------|-------------|------------|
| `/topic/telemetryData` | Datos de telemetría en tiempo real | Cada 3 segundos |
| `/topic/barData` | Datos de barras actualizados | Cada 3 segundos |
| `/topic/statusData` | Estados del sistema | Cada 3 segundos |
| `/topic/deviceDistribution` | Distribución de dispositivos | Cada 3 segundos |
| `/topic/cpuPercent` | Porcentaje de CPU | Cada 3 segundos |
| `/topic/scatterData` | Datos de dispersión | Cada 3 segundos |

### Ejemplo de Conexión WebSocket

```javascript
// Conexión con SockJS
const socket = new SockJS('http://localhost:8080/ws');
const stompClient = Stomp.over(socket);

stompClient.connect({}, function (frame) {
    console.log('Conectado: ' + frame);
    
    // Suscribirse a datos de telemetría
    stompClient.subscribe('/topic/telemetryData', function (message) {
        const data = JSON.parse(message.body);
        console.log('Datos recibidos:', data);
    });
});
```

## 🔄 Generación de Datos

El servicio `DataGenerator` genera datos simulados cada 3 segundos:

- **Datos de línea**: Timestamp y valores aleatorios (0-100)
- **Datos de barras**: 3 valores aleatorios (5-30)
- **Estados**: Datos para centros "Centro" y "Norte"
- **Dispositivos**: Distribución de IoT, Gateway y PLC
- **CPU**: Porcentaje aleatorio (0-100)
- **Dispersión**: 20 puntos con valores CPU y memoria

## 🌐 Configuración CORS

El proyecto está configurado para permitir conexiones desde:
- **Origen**: `http://localhost:4200` (Angular)
- **Métodos**: GET, POST

## 🧪 Testing

```bash
# Ejecutar tests
mvn test

```

## 📦 Build

```bash
# Crear JAR ejecutable
mvn clean package

# Ejecutar JAR
java -jar target/com.lacunza.telemetry-1.0.0.jar
```

## 🔍 Monitoreo

### Health Check
- **Endpoint**: `http://localhost:8080/actuator/health` (si se agrega Spring Boot Actuator)

### Logs
Los logs se muestran en la consola durante la ejecución.

## 🤝 Integración con Frontend

Este backend está diseñado para trabajar con un frontend Angular que se ejecuta en `http://localhost:4200`. Los datos se actualizan automáticamente cada 3 segundos a través de WebSocket.

## 📝 Licencia

Este proyecto es un demo de telemetría para propósitos educativos.

## 👨‍💻 Desarrollo

### Agregar Nuevos Endpoints

1. Crear método en `DataGenerator`
2. Agregar endpoint en `DataRestController`
3. Configurar WebSocket si es necesario

### Agregar Nuevos Modelos

1. Crear clase en el paquete `model`
2. Implementar getters/setters o usar Lombok
3. Actualizar `DataGenerator` para generar datos

---

**Desarrollado con ❤️ usando Spring Boot** 