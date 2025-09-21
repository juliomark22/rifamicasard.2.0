# 🎟️ RifaMiCasaRD 2.0

![Logo](frontend/public/next.svg)

Plataforma digital moderna para la gestión de rifas de casas, boletos y afiliados en República Dominicana.  
Diseñada con un **frontend en Next.js 15 + TailwindCSS** y un **backend en NestJS + FastAPI**, desplegada en servidores Linux con **PM2, Nginx y Certbot (SSL)**.

---

## 🚀 Características principales

- ✅ **Rifas online** con compra de boletos en tiempo real.  
- ✅ **Panel de administración** con métricas de ventas, afiliados y sorteos.  
- ✅ **Sistema de afiliados** integrado para marketing digital.  
- ✅ **Autenticación segura** con JWT.  
- ✅ **Frontend moderno** con animaciones (Framer Motion + Tailwind).  
- ✅ **Backend robusto** escalable con NestJS y FastAPI.  
- ✅ **Despliegue productivo** con Nginx + PM2 + Certbot (SSL automático).  

---

## 🛠️ Tecnologías utilizadas

### Frontend
- [Next.js 15 (App Router + Turbopack)](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

### Backend
- [NestJS](https://nestjs.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- PostgreSQL + Redis (soporte en roadmap)

### Infraestructura
- **PM2**: Gestión de procesos Node.js  
- **Nginx**: Proxy reverso y SSL  
- **Certbot**: Certificados HTTPS automáticos  

---

## 📦 Instalación

### 1. Clonar el repositorio
```bash
git clone https://github.com/juliomark22/rifamicasard.2.0.git
cd rifamicasard.2.0
2. Frontend
bash
Copiar código
cd frontend
npm install
npm run build
npm run start
3. Backend
bash
Copiar código
cd backend
npm install
npm run build
npm run start:prod
⚡ Despliegue en Producción
PM2 para ejecutar backend y frontend:

bash
Copiar código
pm2 start ecosystem.config.js
pm2 save
Nginx como reverse proxy:

bash
Copiar código
sudo nginx -t
sudo systemctl reload nginx
SSL con Certbot:

bash
Copiar código
sudo certbot --nginx -d rifamicasard.com -d www.rifamicasard.com
📊 Panel de Administración
URL: https://rifamicasard.com/admin

Muestra:

🎫 Boletos vendidos

👥 Afiliados activos

💰 Ventas totales

👨‍💻 Autor
Julio Vásquez (@juliomark22)
📧 Contacto: doshrd13@gmail.com
🌐 Proyecto: RifaMiCasaRD

📝 Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

yaml
Copiar código

---

### 👉 Próximo paso
Ejecuta esto en tu servidor para aplicar el cambio:

```bash
cd /home/rifas/apps
cat > README.md <<'EOF'
[PEGA AQUÍ TODO EL CONTENIDO QUE TE PASÉ]
EOF

git add README.md
git commit -m "Agregar README profesional"
git push origin main
