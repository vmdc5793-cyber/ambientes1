# 🏫 Aula Modelo (6 m × 4 m) — Sectores de Aprendizaje

Aplicación web interactiva y sistema de presentación docente para la planificación, distribución espacial y consulta pedagógica de un aula de **6 m × 4 m (24 m²)** con **9 sectores de aprendizaje**. Incluye exportación en documento **PDF en formato vertical (A4 Portrait)** e impresión nativa del navegador.

---

## ✨ Características Principales

- **Vista en Planta Arquitectónica Interactiva (6 m × 4 m)**:
  - Distribución fiel al anexo curricular con cotas perimetrales (6 m y 4 m).
  - Capas de visualización seleccionables: *Plano Real*, *Zonificación Acústica*, *Rutas de Circulación y Evacuación*, y *Cotas Métricas*.
  - 6 mesas centrales de trabajo colaborativo para alumnos (12 a 18 puestos).
  - Estación docente frontal con línea de visión de 360° hacia los sectores y puerta de acceso.

- **Los 9 Sectores de Aprendizaje Integrados**:
  1. 📖 **Lectura**: Alfombra sensorial verde, cojines y estantería baja.
  2. 🎨 **Arte y Creatividad**: Mesa de trabajo colectivo y estante de materiales.
  3. 🔬 **Ciencias**: Muestrarios, lupas, tubos y globo terráqueo.
  4. 🔢 **Matemática**: Ábacos, regletas de Cuisenaire y gavetas numéricas 1-2-3.
  5. 🧱 **Construcción**: Bloques de madera, tapete amortiguador de ruido.
  6. 💻 **Tecnología**: Mesa lineal, ordenadores y auriculares infantiles.
  7. 🌍 **Personal Social**: Árbol genealógico, disfraces y materiales de identidad.
  8. 📚 **Biblioteca**: Librero vertical de consulta libre.
  9. 👩‍🏫 **Docente**: Escritorio de planificación y supervisión general.

- **Fichas Pedagógicas Detalladas**:
  - Al hacer clic en cualquier sector se despliega su objetivo formativo, competencias del Currículo Nacional, inventario de materiales y recomendaciones ergonómicas.

- **Exportación a PDF en Vertical (A4 Portrait)**:
  - Generación de archivo PDF de alta resolución apaisado o vertical con ajuste de márgenes automáticos utilizando `jsPDF` y `html-to-image` (soporte nativo para Tailwind v4 y colores `oklch`).
  - Compatible con el cuadro de impresión nativo del navegador (`@media print` con saltos de página por diapositiva).

- **Modo Presentación y Teclado**:
  - Navegación con flechas del teclado `←` / `→` o barra espaciadora.
  - Tecla `F` para activar/desactivar pantalla completa.
  - Reproducción automática cronometrada (*Autoplay*).

---

## 🚀 Ejecución Directa (Sin Terminal ni Instalaciones)

¡Ya no necesitas instalar Node.js ni usar comandos en la terminal para abrir la presentación!

1. **Doble clic directo:**
   - Abre directamente el archivo **`aula_modelo_interactiva.html`** (o **`index.html`**) con doble clic desde el Explorador de Windows o el Finder de macOS en cualquier navegador (Chrome, Edge, Firefox, Safari).
   - Todo el código JavaScript, estilos CSS e imágenes vienen incrustados en un único archivo autocontenido listo para ejecutarse offline o localmente.

---

## 🛠️ Desarrollo con Node.js (Opcional)

Si deseas modificar el código fuente con recarga en vivo:

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

3. **Compilar versión autocontenida:**
   ```bash
   npm run build
   ```
   Esto actualiza automáticamente el archivo `aula_modelo_interactiva.html` y la carpeta `dist/`.

---

## 📦 Scripts Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo Vite en el puerto 3000 |
| `npm run build` | Compila y empaqueta la aplicación lista para producción en la carpeta `dist/` |
| `npm run preview` | Previsualiza localmente la compilación de producción |
| `npm run lint` | Valida tipos y sintaxis con TypeScript (`tsc --noEmit`) |
| `npm run clean` | Elimina la carpeta `dist/` |

---

## 🌐 Despliegue en GitHub Pages

Este proyecto ya viene configurado con un flujo de trabajo automatizado de **GitHub Actions** (`.github/workflows/deploy.yml`):

1. Sube tu proyecto a un repositorio de GitHub (rama `main` o `master`).
2. En GitHub, ve a **Settings** → **Pages**.
3. En la sección **Build and deployment** > **Source**, selecciona **GitHub Actions**.
4. ¡Listo! Cada vez que hagas `git push`, GitHub compilará automáticamente el proyecto y lo publicará en tu enlace de GitHub Pages:
   `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

---

## 📐 Tecnologías Utilizadas

- **React 19** + **TypeScript**
- **Vite 8**
- **Tailwind CSS v4**
- **Lucide Icons**
- **jsPDF** & **html-to-image** (Renderizado y generación de PDF en alta definición)
