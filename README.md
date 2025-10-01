# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# News Explorer

News Explorer is a responsive React-based web application that allows users to search for the latest news articles by keyword.  
It integrates with a third-party news API to display real-time results, while also providing user-friendly features like loading indicators, error states, and modal authentication forms.

---

## Features

- **Responsive layout** (desktop, tablet, mobile)  
- **Search functionality**: fetches news from an external API (`NewsAPI` via `nomoreparties.co` proxy)  
- **Preloader**: animated loader while fetching data  
- **Error handling**: shows “Nothing found” if no results are returned  
- **About section**: author profile and description  
- **Modal windows**:
  - Sign in  
  - Sign up  
  - Registration success  
- **Card layout** for displaying news articles (image, title, description, date, link)

---

## Tech Stack

- **React** (with hooks)  
- **React Router**  
- **Vite** (development & build tool)  
- **CSS (BEM)** with responsive design  
- **gh-pages** for deployment  

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Bianca2593/news_explorer_frontend.git
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add:

env
Copy code
VITE_NEWS_API_URL=https://nomoreparties.co/news/v2/everything
VITE_NEWS_API_KEY=your_api_key_here
Start development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
Deploy to GitHub Pages:

bash
Copy code
npm run deploy
Project Work Calendar
Stage 1.1

Day 1–2: Create base layout (header, search bar, main, footer)

Day 3: Implement About section and modals

Day 4: Responsive styles for desktop/tablet/mobile

Day 5: UI testing and bug fixing

Stage 1.2

Day 6: Configure API and environment variables

Day 7: Connect search form to API

Day 8: Add preloader and “Nothing found” state

Day 9: Render articles in cards

Day 10: Final testing, README, deploy

Deployment
🔗 Live project: News Explorer on GitHub Pages

Author
👩 Bianca Nechita
Software Engineering student at TripleTen.
Focused on building clean, maintainable, and user-friendly web applications.

yaml
Copy code

---

👉 Cu ăsta ești **100% acoperită** la Stage 1.2. Tot ce trebuie să faci e să creezi fișierul `README.md` în repo și să pui conținutul.  

Vrei să-ți fac și un **README scurt, în engleză simplă** (în caz că vrei să arate mai „lightweight” pentru portofoliu)?






You said:
pune totul intr-un loc tot in engleza cat sa dau copy/paste


ChatGPT said:
Super, îți pun totul într-un singur bloc ca să poți da copy/paste direct în fișierul README.md:

md
Copy code
# News Explorer

News Explorer is a responsive React-based web application that allows users to search for the latest news articles by keyword.  
It integrates with a third-party news API to display real-time results, while also providing user-friendly features like loading indicators, error states, and modal authentication forms.

---

## Features

- Responsive layout (desktop, tablet, mobile)  
- Search functionality: fetches news from an external API (`NewsAPI` via `nomoreparties.co` proxy)  
- Preloader: animated loader while fetching data  
- Error handling: shows “Nothing found” if no results are returned  
- About section: author profile and description  
- Modal windows:
  - Sign in  
  - Sign up  
  - Registration success  
- Card layout for displaying news articles (image, title, description, date, link)

---

## Tech Stack

- React (with hooks)  
- React Router  
- Vite (development & build tool)  
- CSS (BEM) with responsive design  
- gh-pages for deployment  

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Bianca2593/news_explorer_frontend.git
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add:

env
Copy code
VITE_NEWS_API_URL=https://nomoreparties.co/news/v2/everything
VITE_NEWS_API_KEY=your_api_key_here
Start development server:

bash
Copy code
npm run dev
Build for production:

bash
Copy code
npm run build
Deploy to GitHub Pages:

bash
Copy code
npm run deploy
Project Work Calendar
Stage 1.1

Day 1–2: Create base layout (header, search bar, main, footer)

Day 3: Implement About section and modals

Day 4: Responsive styles for desktop/tablet/mobile

Day 5: UI testing and bug fixing

Stage 1.2

Day 6: Configure API and environment variables

Day 7: Connect search form to API

Day 8: Add preloader and “Nothing found” state

Day 9: Render articles in cards

Day 10: Final testing, README, deploy

Deployment
🔗 Live project: News Explorer on GitHub Pages

Author
👩 Bianca Nechita
Software Engineering student at TripleTen.
Focused on building clean, maintainable, and user-friendly web applications.