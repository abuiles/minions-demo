# Minions Demo

This repository hosts a tiny Cloudflare Workers-backed demo called **Minion Mayhem**, where a snake-style canvas game lets Minions chase bananas and dodge hazards. Wrangler handles the local development server and deployment.

## Running Locally

1. Clone the repo and install dependencies: `npm install`.
2. Start the Workers dev server: `npx wrangler dev`. It serves on http://localhost:8787 by default.
3. Open the URL in a browser, then use the arrow keys or WASD to steer the Minion through the lab.

## Español: Sección Minions

### ¿Qué es Minions?
Minions es una demostración lúdica que se ejecuta sobre Cloudflare Workers y muestra un pequeño juego de estilo "snake" ambientado en un laboratorio lleno de bananas y explosivos. Fue generado por AgentBoard para ilustrar cómo un agente podría crear y servir contenido interactivo simple.

### Pasos para configurar localmente
1. Asegúrate de tener Node.js instalado (es compatible con las versiones que admite el runtime de Workers). Clona este repositorio y entra en la carpeta.
2. Ejecuta `npm install` para instalar `wrangler`, la herramienta oficial de Cloudflare Workers.
3. Lanza el servidor local usando `npx wrangler dev` y mantén abierto el terminal mientras juegas.

### Ejemplo rápido de uso
Una vez que el servidor de desarrollo esté activo, abre `http://localhost:8787` en tu navegador. El lienzo renderiza a un Minion que puedes mover con las flechas o WASD; el objetivo es comer bananas mientras esquivas obstáculos. El marcador en pantalla muestra tu puntuación en tiempo real.
