<div align="center">
  <h1>Dashboard interactivo</h1>
  <p><strong>Pizarra interactiva de Emprendimiento y Legislación Laboral</strong></p>
  <p>Universidad Técnica de Ambato · FISEI · Carrera de Software</p>
  <p><code>React 19</code> · <code>Vite 8</code> · <code>JavaScript</code> · <code>CSS</code></p>
  <p>
    <a href="#instalacion">Instalación</a> ·
    <a href="#ejecucion">Ejecución</a> ·
    <a href="#modulos">Módulos</a> ·
    <a href="#estructura">Estructura</a>
  </p>
</div>

<hr>

<a id="proyecto"></a>
<h2>¿De qué trata el proyecto?</h2>

<p><strong>Aula Integrada</strong> es un portafolio académico que organiza los trabajos del semestre alrededor de <strong>MySubs Smart</strong>. El recorrido empieza con la propuesta de una aplicación para gestionar suscripciones y continúa con los talleres de formalización tributaria, contratación, nómina y liquidación laboral.</p>

<p>La pizarra conecta los cuatro módulos con el proyecto central. Cada módulo presenta indicadores, actividades y accesos a páginas concretas de los informes. La biblioteca reúne los PDF resumidos y los informes originales. El módulo de Remuneraciones y nómina también enlaza a la aplicación externa MySubs Smart.</p>

<a id="modulos"></a>
<h2>Módulos del semestre</h2>

<table>
  <thead>
    <tr><th align="left">Módulo</th><th align="left">Actividades y evidencias</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Emprendimiento</strong></td><td>Oportunidad de negocio, Canvas, perfil estratégico, sondeo, operación y viabilidad financiera de MySubs.</td></tr>
    <tr><td><strong>Obligaciones tributarias</strong></td><td>RUC simulado, comprobantes, declaración de IVA, registro de marca e importaciones de tecnología.</td></tr>
    <tr><td><strong>Remuneraciones y nómina</strong></td><td>Comparación de casos de contratación, remuneraciones, beneficios, pitch de derechos laborales y acceso a MySubs Smart.</td></tr>
    <tr><td><strong>Liquidación laboral</strong></td><td>Formas de terminación, rubros de liquidación, matriz de casos, gincana y guía de cálculo.</td></tr>
  </tbody>
</table>

<a id="instalacion"></a>
<h2>Instalación</h2>

<h3>Requisitos</h3>

<ul>
  <li><strong>Node.js</strong> 20.19 o posterior dentro de la rama 20, o Node.js 22.12 o posterior, según el requisito de Vite.</li>
  <li><strong>npm</strong>, incluido con Node.js.</li>
  <li><strong>Git</strong> para clonar el repositorio.</li>
</ul>

Comprueba tu entorno con `node -v`, `npm -v` y `git --version`.

<h3>1. Abre el proyecto</h3>

Si ya tienes la carpeta del proyecto, abre una terminal dentro de ella. Para obtener una copia nueva desde el remoto configurado, ejecuta estos comandos.

```bash
git clone https://github.com/Ale-2906/Dashboard_Integrador.git
cd Dashboard_Integrador
```

<h3>2. Instala las dependencias</h3>

```bash
npm ci
```

`npm ci` instala las versiones registradas en `package-lock.json`. Git ignora la carpeta `node_modules/`.

<a id="ejecucion"></a>
<h2>Ejecución</h2>

<h3>Desarrollo local</h3>

```bash
npm run dev
```

Abre la dirección que muestra Vite en la terminal, normalmente [http://localhost:5173/](http://localhost:5173/). Los cambios en el código se reflejan durante el desarrollo. Usa <kbd>Ctrl</kbd> + <kbd>C</kbd> para detener el servidor.

<h3>Compilación y vista previa</h3>

```bash
npm run build
npm run preview
```

La compilación genera el sitio estático y copia los PDF a `dist/`. La vista previa sirve esa compilación localmente, normalmente en [http://localhost:4173/](http://localhost:4173/).

<details>
  <summary><strong>Si PowerShell bloquea npm o el puerto está ocupado</strong></summary>

  En PowerShell puedes usar `npm.cmd ci`, `npm.cmd run dev`, `npm.cmd run build` y `npm.cmd run preview`. Si el puerto predeterminado está ocupado, usa la URL que Vite indique o elige un puerto con `npm run dev -- --port 5174`.
</details>

<h2>Cómo recorrer la pizarra</h2>

<ol>
  <li>Abre <strong>Mapa completo</strong> para explorar los cuatro módulos conectados a MySubs Smart.</li>
  <li>Usa <strong>Ancho</strong> para leer las tarjetas o <strong>Ajustar vista</strong> para ver el mapa completo. Los controles <strong>+</strong> y <strong>−</strong> ajustan el zoom.</li>
  <li>Activa <strong>3D</strong> para inclinar las tarjetas con el cursor. Pulsa <strong>Voltear 3D</strong> para acceder al reverso y abrir la evidencia asociada.</li>
  <li>En cada módulo, cambia de actividad con el selector numerado. Usa el buscador para localizar temas o documentos.</li>
  <li>Activa <strong>Modo defensa</strong> para presentar en seis pasos, desde el panorama general hasta la biblioteca de evidencias.</li>
</ol>

<a id="estructura"></a>
<h2>Estructura del proyecto</h2>

<table>
  <thead><tr><th align="left">Ruta</th><th align="left">Contenido</th></tr></thead>
  <tbody>
    <tr><td><code>src/main.jsx</code></td><td>Pizarra, navegación, buscador, paneles, modo defensa y visor de PDF.</td></tr>
    <tr><td><code>src/data.js</code></td><td>Módulos, tareas, evidencias y enlaces externos.</td></tr>
    <tr><td><code>src/boardData.js</code></td><td>Tarjetas de la pizarra, tablas e indicadores.</td></tr>
    <tr><td><code>src/style.css</code></td><td>Diseño visual, perspectiva 3D y adaptación a distintos tamaños de pantalla.</td></tr>
    <tr><td><code>public/docs/</code></td><td>Informes originales y resúmenes de cada módulo.</td></tr>
    <tr><td><code>dist/</code></td><td>Sitio estático generado por Vite al compilar.</td></tr>
  </tbody>
</table>

<p>La pizarra funciona como una aplicación estática en el navegador. Los enlaces a plataformas externas requieren conexión a internet y, en algunos casos, acceso institucional.</p>

<hr>

<div align="center">
  <p><strong>Melanie Silva · Michelle Tunja · Thomas Vaca</strong></p>
  <p>Emprendimiento y Legislación Laboral · Julio a diciembre de 2026</p>
</div>
