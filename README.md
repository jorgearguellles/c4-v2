# 🚛 C4 Logística y Transporte - Sitio Web

Sitio web estático moderno y optimizado para C4 Logística y Transporte, empresa especializada en servicios logísticos integrales.

## 🎯 Características

- **Diseño Responsivo**: Optimizado para móvil, tablet y desktop
- **SEO Optimizado**: Meta tags, Schema.org y Open Graph implementados
- **Performance**: Imágenes WebP, lazy loading y CSS crítico
- **Accesibilidad**: WCAG 2.1 AA compliant
- **Integración WhatsApp**: CTAs directos para conversión
- **Google Maps**: Ubicación interactiva

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Grid + Flexbox + Custom Properties
- **JavaScript ES6+**: Vanilla JS para funcionalidad
- **Google Fonts**: Roboto font family
- **WebP**: Imágenes optimizadas
- **Schema.org**: Datos estructurados

## 📁 Estructura del Proyecto

```
c4Logistica/
├── src/
│   ├── css/
│   │   └── styles.css          # Estilos principales
│   ├── js/
│   │   └── main.js             # JavaScript funcional
│   ├── images/                 # Imágenes optimizadas
│   │   ├── logo.png            # Logo corporativo C4
│   │   ├── foto-hero-bg.png    # Imagen de fondo hero section
│   │   ├── foto-hero-bg.webp   # Versión WebP optimizada
│   │   └── ...                 # Otras imágenes del sitio
│   └── assets/                 # Assets adicionales
│       ├── favicon-32x32.png
│       ├── apple-touch-icon.png
│       └── site.webmanifest
├── index.html                  # Página principal
├── c4.md                      # Especificaciones de arquitectura
├── specs.md                   # Especificaciones técnicas
└── README.md                  # Documentación
```

## 🚀 Desarrollo Local

### Prerrequisitos

- Navegador web moderno
- Editor de código (VS Code recomendado)
- Live Server extension

### Instalación

1. Clona el repositorio

```bash
git clone [repo-url]
cd c4Logistica
```

2. **Agrega las imágenes requeridas:**
   - Copia `logo.png` a `src/images/logo.png`
   - Copia `foto-hero-bg.png` a `src/images/foto-hero-bg.png`
   - Opcionalmente, convierte a WebP para optimización:
     ```bash
     npm run webp:convert
     ```

3. Instala Live Server en VS Code o usa cualquier servidor local

4. Abre `index.html` con Live Server

### Scripts de Desarrollo

```bash
# Servidor local con Live Server
npx live-server --port=3000

# Optimización de imágenes (opcional)
npx imagemin src/images/*.jpg --out-dir=src/images/optimized
```

## 🖼️ Imágenes Requeridas

Para que el sitio web funcione correctamente, necesitas agregar las siguientes imágenes:

### **Imágenes Obligatorias:**
- **`src/images/logo.png`**: Logo corporativo de C4 Logística
- **`src/images/foto-hero-bg.png`**: Imagen de fondo para la sección hero

### **Imágenes Adicionales Recomendadas:**
- **`src/images/whatsapp-icon.svg`**: Icono de WhatsApp para botones CTA
- **`src/images/infrastructure-icon.svg`**: Icono de infraestructura
- **`src/images/logistics-icon.svg`**: Icono de servicios logísticos
- **`src/images/technology-icon.svg`**: Icono de tecnología
- **`src/images/check-icon.svg`**: Icono de checkmark verde
- **`src/images/warehouse-interior.jpg`**: Imagen interior de bodega
- **`src/images/play-icon.svg`**: Icono de play para video

### **Optimización Automática:**
```bash
# Convertir imágenes a WebP
npm run webp:convert

# Optimizar todas las imágenes
npm run optimize:images
```

## 📋 Secciones de la Página

### 1. Header/Navegación

- Logo corporativo
- Botón CTA "Contacto"

### 2. Hero Section

- Imagen de instalaciones
- "Las 4C que mueven tu negocio"
- Pilares: Cumplimiento, Coordinación, Confiabilidad, Conocimiento
- CTA WhatsApp

### 3. Servicios Principales

- **Infraestructura**: 1.672,49 m² de bodegas
- **Servicios Logísticos**: Picking, FIFO/LIFO, inventarios
- **Tecnología**: WMS, códigos de barras, CCTV

### 4. Razones para Elegirnos

- 8 beneficios principales
- Video testimonial de instalaciones

### 5. Clientes

- Logos: Mayán Huevo, Todoen, Salsas & Confites, Berkka

### 6. Casos de Éxito

- PREMEX (5 años)
- NUTRITECH
- ADIQUIM

### 7. Testimonios

- Paola Vásquez - Administradora Adiquim

### 8. Soluciones

- 4 problemas que resolvemos
- Fondo azul degradado

### 9. Ubicación

- Km. 5 Autopista Medellín-Bogotá
- Google Maps integrado
- Teléfono: 300 7377368

### 10. Footer

- CTA final WhatsApp

## 🎨 Paleta de Colores

```css
:root {
  --color-green-primary: #00b04a; /* Verde corporativo */
  --color-blue-primary: #1e3a8a; /* Azul corporativo */
  --color-blue-light: #3b82f6; /* Azul claro */
  --color-gray-light: #f8f9fa; /* Gris fondos */
  --color-white: #ffffff; /* Blanco principal */
}
```

## 📱 Responsivo

### Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Estrategia Mobile-First

- CSS escrito primero para móvil
- Media queries para pantallas más grandes
- Imágenes adaptativas con `<picture>`

## ⚡ Optimizaciones de Performance

### Imágenes

- Formato WebP con fallback JPEG
- Lazy loading implementado
- Tamaños responsivos

### CSS

- Critical CSS inline
- Preload de archivos importantes
- Custom Properties para consistencia

### JavaScript

- Vanilla JS (sin frameworks)
- Carga diferida con `defer`
- Intersection Observer para animaciones

## 🔧 SEO y Accesibilidad

### SEO

- **Meta tags** optimizados
- **Schema.org** markup completo
- **Open Graph** para redes sociales
- **Sitemap.xml** generado
- **URLs** semánticas

### Accesibilidad

- **Contraste** WCAG AA compliant
- **Alt text** descriptivo
- **ARIA labels** apropiados
- **Navegación** por teclado
- **Semantic HTML** estructurado

## 🌐 Integración de APIs

### WhatsApp Business API

```javascript
// Enlaces directos configurados
https://wa.me/573007377368?text=Mensaje+personalizado
```

### Google Maps API

```javascript
// Integración con coordenadas específicas
// Km. 5 Autopista Medellín-Bogotá
```

## 📊 Métricas de Performance

### Objetivos Google Lighthouse

- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

### Core Web Vitals

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## 🚀 Deployment

### Hosting Recomendado

- **Netlify**: Deploy automático desde Git
- **Vercel**: Optimizaciones automáticas
- **GitHub Pages**: Hosting gratuito

### Configuración de Producción

1. Optimizar imágenes
2. Minificar CSS/JS
3. Configurar headers de cache
4. Activar compresión Gzip/Brotli
5. Instalar certificado SSL

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para detalles.

## 📞 Contacto

**C4 Logística y Transporte**

- **Dirección**: Km. 5 Autopista Medellín-Bogotá
- **Teléfono**: 300 7377368
- **WhatsApp**: https://wa.me/573007377368
- **Web**: https://c4logistica.com

---

Desarrollado con ❤️ para C4 Logística y Transporte
