# 📊 Dashboard de Telemetría - Angular 17

Un dashboard en tiempo real para visualización de datos de telemetría construido con Angular 17, WebSockets (STOMP) y ECharts.

## 🚀 Características

- **Visualización en tiempo real** de datos de telemetría
- **Múltiples tipos de gráficos**: líneas, barras, áreas, donut, gauge, scatter y stacked bars
- **Comunicación WebSocket** usando STOMP sobre SockJS
- **Arquitectura modular** con componentes standalone
- **Diseño responsive** con CSS Grid
- **Server-Side Rendering (SSR)** habilitado

## 📋 Prerrequisitos

- **Node.js** (versión 18 o superior)
- **npm** (incluido con Node.js)
- **Angular CLI** (versión 17)

## 🛠️ Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Megex04/telemetry-dashboard-system-with-Angular-17-and-Spring-boot-3-java-17.git
   cd telemtry-dashboard-ng
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Verificar instalación:**
   ```bash
   ng version
   ```

## 🏃‍♂️ Ejecución

### Desarrollo
```bash
npm start
# o
ng serve
```
La aplicación estará disponible en `http://localhost:4200`

### Producción
```bash
npm run build
```

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── charts/                 # Componentes de gráficos
│   │   ├── area-chart/         # Gráfico de área
│   │   ├── bar-chart/          # Gráfico de barras
│   │   ├── donut-chart/        # Gráfico de donut
│   │   ├── gauge-chart/        # Gráfico de gauge
│   │   ├── line-chart/         # Gráfico de líneas
│   │   ├── scatter-chart/      # Gráfico de dispersión
│   │   └── stacked-chart/      # Gráfico de barras apiladas
│   ├── core/
│   │   └── socket.service.ts   # Servicio WebSocket
│   ├── dashboard/
│   │   ├── dashboard.component.html
│   │   ├── dashboard.component.scss
│   │   └── dashboard.component.ts
│   └── intefaces/
│       └── linechartdata.ts    # Interfaces de datos
├── assets/                     # Recursos estáticos
└── styles.scss                 # Estilos globales
```

## 🔧 Tecnologías Utilizadas

### Frontend
- **Angular 17** - Framework principal
- **TypeScript** - Lenguaje de programación
- **SCSS** - Preprocesador CSS
- **RxJS** - Programación reactiva

### Gráficos y Visualización
- **ECharts** - Biblioteca de gráficos
- **ngx-echarts** - Wrapper de Angular para ECharts

### Comunicación en Tiempo Real
- **STOMP** - Protocolo de mensajería
- **SockJS** - Cliente WebSocket
- **@stomp/stompjs** - Cliente STOMP para JavaScript

### Desarrollo y Build
- **Angular CLI** - Herramientas de desarrollo
- **Express** - Servidor backend

## 📊 Tipos de Gráficos

El dashboard incluye los siguientes tipos de visualizaciones:

1. **Gráfico de Líneas** - Para datos de telemetría en tiempo real
2. **Gráfico de Área** - Visualización de tendencias
3. **Gráfico de Barras** - Comparación de datos categóricos
4. **Gráfico de Donut** - Distribución de dispositivos
5. **Gráfico de Gauge** - Porcentaje de CPU
6. **Gráfico de Dispersión** - Correlación entre variables
7. **Gráfico de Barras Apiladas** - Datos de estado

## 🔌 Configuración WebSocket

El servicio `SocketService` se conecta automáticamente a:
- **URL**: `http://localhost:8080/ws`
- **Protocolo**: STOMP sobre SockJS
- **Reconexión automática**: Cada 5 segundos

### Topics Suscritos
- `/topic/telemetryData` - Datos de telemetría
- `/topic/barData` - Datos para gráfico de barras
- `/topic/statusData` - Datos de estado
- `/topic/deviceDistribution` - Distribución de dispositivos
- `/topic/cpuPercent` - Porcentaje de CPU
- `/topic/scatterData` - Datos de dispersión

## 🎨 Diseño y Layout

El dashboard utiliza CSS Grid para un layout responsive:

```scss
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
}

.span-2 {
  grid-column: span 2;
}
```

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run watch` | Construye en modo watch |
| `npm test` | Ejecuta los tests unitarios |

## 🔧 Configuración del Entorno

### Variables de Entorno
Crea un archivo `.env` en la raíz del proyecto:

```env
# Configuración del servidor WebSocket
WS_URL=http://localhost:8080/ws

# Configuración de la API
API_URL=http://localhost:8080/api
```

## 🚀 Despliegue

### Build de Producción
```bash
npm run build
```

Los archivos generados estarán en `dist/telemetry-dashboard-ng/`

### Despliegue en Servidor Web
1. Copiar los archivos de `dist/telemetry-dashboard-ng/` al servidor web
2. Configurar el servidor para servir `index.html` para rutas no encontradas
3. Asegurar que el servidor backend esté disponible en la URL configurada

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🆘 Soporte

Si encuentras algún problema o tienes preguntas:

1. Revisa la documentación de Angular: https://angular.io/docs
2. Consulta la documentación de ECharts: https://echarts.apache.org/
3. Abre un issue en el repositorio

---

**Desarrollado con ❤️ usando Angular 17**
