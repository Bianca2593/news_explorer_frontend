# News Explorer

News Explorer is a responsive React-based web application that allows users to search for the latest news articles by keyword.  
It integrates with a third-party news API to display real-time results, while also providing user-friendly features such as loading indicators, error messages, and modal authentication forms.

---

## 🌐 Live Demo
[View the deployed project on Vercel](https://newsexplorerfrontend-35hmd8top-bianca025s-projects.vercel.app)

---

## 📁 Repository
[GitHub Repository](https://github.com/Bianca2593/news_explorer_frontend)

---

## ✨ Features

- **Responsive layout** for desktop, tablet, and mobile  
- **Search functionality**: fetches news from the external [NewsAPI](https://newsapi.org) (via `nomoreparties.co` proxy)  
- **Preloader** animation while fetching data  
- **Error handling** for “Nothing found” and network/server issues  
- **Modal windows**:
  - Sign In  
  - Sign Up  
  - Registration Success  
- **Dynamic card layout** for displaying articles (image, title, date, description, source)  
- **“Show More”** button for incremental loading  
- **About section** with author info and project details  

---

## 🧠 Tech Stack

- **React** (with hooks)  
- **React Router** (for navigation)  
- **Vite** (build tool)  
- **CSS (BEM methodology)**  
- **Deployment:** Vercel (Production)  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Bianca2593/news_explorer_frontend.git
cd news_explorer_frontend
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Create a .env file in the root directory
bash
Copy code
VITE_NEWS_API_URL_PROD=https://nomoreparties.co/news/v2/everything
VITE_NEWS_API_KEY=your_api_key_here
4️⃣ Start the development server
bash
Copy code
npm run dev
5️⃣ Build for production
bash
Copy code
npm run build


🗓️ Project Work Calendar
Stage 1.1
Day 1–2: Create base layout (Header, Search bar, Main, Footer)

Day 3: Implement About section and modal windows

Day 4: Responsive styles for all devices

Day 5: UI testing and bug fixing

Stage 1.2
Day 6: Configure API and environment variables

Day 7: Connect search form to API

Day 8: Add preloader and “Nothing found” state

Day 9: Render articles in cards

Day 10: Final testing, README, and deploy

🚀 Deployment
The project is deployed via Vercel, tracking the stage-1-frontend-and-api branch.
Every commit triggers an automatic build and deployment.

👩 Author
Bianca Nechita
Software Engineering Student at TripleTen
Focused on building clean, maintainable, and user-friendly web applications.