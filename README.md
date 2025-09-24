# 🛍️ Mi E-commerce

Un proyecto de e-commerce moderno y responsive desarrollado con React, Vite y Tailwind CSS. Ofrece una experiencia de compra intuitiva con navegación fluida entre páginas y un diseño atractivo.

## 🚨 Inicio Rápido

```bash
# 1. Clonar el proyecto
git clone <url-del-repositorio>
cd ecommerce

# 2. Instalar dependencias (OBLIGATORIO)
npm install

# 3. Ejecutar el proyecto
npm run dev
```

> **⚠️ IMPORTANTE**: Siempre ejecuta `npm install` antes de `npm run dev`. Si ves el error "vite no se reconoce como un comando", significa que las dependencias no están instaladas.

## ✨ Características

- 🎨 **Diseño Responsive**: Se adapta perfectamente a dispositivos móviles, tablets y desktop
- 🚀 **Navegación SPA**: Navegación fluida sin recargas de página usando React Router
- 🎠 **Carrusel Interactivo**: Presentación dinámica de productos con Swiper.js
- 🎯 **Múltiples Páginas**: Estructura modular con páginas separadas
- 🎨 **UI Moderna**: Interfaz atractiva con Tailwind CSS y fuentes personalizadas
- 📱 **Componentes Reutilizables**: Arquitectura modular y escalable

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida para desarrollo moderno
- **React Router DOM** - Navegación entre páginas
- **Tailwind CSS** - Framework CSS utility-first
- **Swiper.js** - Carrusel interactivo y responsive
- **Bootstrap Icons** - Iconografía moderna

## 📁 Estructura del Proyecto

```
ecommerce/
├── public/
│   └── images/          # Imágenes del proyecto
│       ├── moda/        # Imágenes de moda
│       ├── accesorios/  # Imágenes de accesorios
│       ├── hogar/       # Imágenes de hogar
│       └── tecnologia/  # Imágenes de tecnología
├── src/
│   ├── components/      # Componentes reutilizables
│   │   └── Menu.jsx     # Menú móvil
│   ├── pages/           # Páginas de la aplicación
│   │   ├── Home.jsx     # Página principal
│   │   └── Moda.jsx     # Página de moda
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── package.json         # Dependencias y scripts
└── README.md           # Este archivo
```

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd ecommerce
```

2. **Instalar dependencias** ⚠️ **IMPORTANTE**
```bash
npm install
```
> **Nota**: Este paso es **OBLIGATORIO** antes de ejecutar cualquier comando. Si no instalas las dependencias, verás errores como "vite no se reconoce como un comando".

3. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

4. **Abrir en el navegador**
```
http://localhost:5173
```

### ⚠️ Problemas Comunes y Soluciones

#### Error: "vite no se reconoce como un comando"
**Causa**: Las dependencias no están instaladas
**Solución**: Ejecutar `npm install` antes de `npm run dev`

#### Error: "Cannot find module"
**Causa**: Dependencias faltantes o corruptas
**Solución**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

#### Error: Puerto 5173 ocupado
**Solución**: Vite automáticamente usará el siguiente puerto disponible (5174, 5175, etc.)

### Comandos disponibles

```bash
npm run dev          # Ejecutar en modo desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de la build
npm run lint         # Ejecutar ESLint
```

## 📱 Páginas y Navegación

### 🏠 Página Principal (Home)
- **URL**: `/`
- **Contenido**: Carrusel de presentación, sección de productos por categorías
- **Secciones**:
  - Carrusel interactivo
  - Productos de Moda
  - Productos de Accesorios
  - Productos de Hogar
  - Productos de Tecnología

### 👗 Página de Moda
- **URL**: `/moda`
- **Contenido**: Colección específica de moda
- **Funcionalidades**: Filtros por categorías, productos destacados

### 🔗 Navegación con Hash
- `/#productos` - Ir a la sección de productos en Home
- `/moda#productos2` - Ir a una sección específica en Moda

## 🎨 Diseño y Estilo

### Fuentes Utilizadas
- **Viga** - Títulos principales
- **Michroma** - Subtítulos
- **Goldman** - Textos destacados
- **Inter** - Texto general
- **Poppins** - Texto secundario

### Paleta de Colores
- **Naranja** (`#f97316`) - Color principal
- **Gris** (`#6b7280`) - Texto secundario
- **Blanco** - Fondos principales
- **Gris oscuro** - Footer

## 📱 Responsive Design

El proyecto está optimizado para:
- 📱 **Móviles** (< 768px)
- 📱 **Tablets** (768px - 1024px)
- 💻 **Desktop** (> 1024px)

## 🔧 Configuración de Desarrollo

### Breakpoints de Tailwind CSS
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Estructura de Rutas
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/moda" element={<Moda />} />
</Routes>
```

## 🚀 Próximas Funcionalidades

- [ ] Sistema de autenticación
- [ ] Pasarela de pago
- [ ] Filtros avanzados

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Cristian**
- Email: cristian24121997@gmail.com
- Teléfono: +34 662 174 211

## 🛠️ Tecnologías

- [React](https://reactjs.org/) - Biblioteca de JavaScript
- [Vite](https://vitejs.dev/) - Herramienta de construcción
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [React Router](https://reactrouter.com/) - Navegación
- [Swiper](https://swiperjs.com/) - Carrusel interactivo

---

⭐ Si te gusta este proyecto, ¡dale una estrella!
