# Red Dead Redemption 2 - Informational Web App

A high-performance, interactive full-stack web application dedicated to the world of Red Dead Redemption 2. Built with a decoupled architecture using Django REST Framework and React.

![Project Preview](https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg)

## 🤠 Features

- **5-Page Cinematic Experience**: Dedicated pages for Introduction, Gameplay, Synopsis, Development, and Reception.
- **Interactive Navigation**: Seamless transitions using `framer-motion` for a modern, fluid feel.
- **Dynamic Content**: Data is served via a REST API from a Django backend, allowing for easy content management.
- **Embedded Gameplay**: Integrated official RDR2 gameplay footage on the Gameplay page.
- **Western Aesthetic**: Custom-styled UI with "aged parchment" textures, cinematic typography, and responsive design.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Framer Motion (Animations), Lucide React (Icons), Axios.
- **Backend**: Django, Django REST Framework, Django-CORS-headers.
- **Database**: SQLite (Development).

## 🚀 Getting Started

### Prerequisites
- Python 3.x
- Node.js (v18+)
- npm

### 1. Backend Setup (Django)
```bash
cd backend
# Install dependencies (ensure you have django and djangorestframework installed)
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install django djangorestframework django-cors-headers

# Setup Database
python manage.py migrate
python manage.py seed  # Custom command to populate RDR2 content

# Start Server
python manage.py runserver
```

### 2. Frontend Setup (React)
```bash
cd frontend
# Install dependencies
npm install

# Start Development Server
npm run dev
```

## 📂 Project Structure

- `/backend`: Django project containing the API logic and database models.
  - `/api/management/commands/seed.py`: Automation script for content population.
- `/frontend`: Vite + React application.
  - `/src/App.jsx`: Main routing and layout logic.
  - `/src/index.css`: Custom cinematic styling.

## 📜 License
This project is for demonstration purposes. "Red Dead Redemption 2" and all associated assets are trademarks of Rockstar Games.
