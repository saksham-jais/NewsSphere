# 📰 News Website React App

## 🌐 Overview

This is a responsive and modern React news website that displays a list of news articles with images, titles, categories, and descriptions. Users can browse the latest news and click on individual articles to view detailed content.

---

## 🚀 Live Demo

🔗 [Visit NewsSphere on Vercel](https://news-sphere-ten.vercel.app/)

---

## ✨ Features

- 🔄 Fetches news articles from a backend API
- 🧱 Displays news in a card-based grid layout with images
- 📱 Fully responsive design for desktop and mobile
- 🧭 Navigation with React Router for article detail pages
- 🏷️ Categories shown on each news card

---

## 🗂️ Project Structure

```
/src
  /components
    - PostList.jsx       # Displays all news cards
    - PostDetail.jsx     # Displays detailed news article
    - Home.jsx           # Home page with post list and routing
    - PostList.css       # CSS for news cards
  App.jsx                # Main app with routing and navbar
```

---

## 🛠️ Setup Instructions

1. **Clone the repository**
```bash
git clone <repository-url>
cd <repository-folder>
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the React development server**
```bash
npm start
```

🔧 Backend API is running and accessible at:  
`https://newssphere-1pah.onrender.com/posts`

---

## 🌐 Backend API

The backend should provide a REST API at `/posts`, returning articles in the following JSON format:

```json
[
  {
    "_id": "unique-id",
    "title": "News Title",
    "description": "Detailed description of the news",
    "image": "https://link-to-image.jpg",
    "category": "Category Name",
    "date": "2025-06-01"
  }
]
```

---

## 📦 Dependencies

- React  
- React Router DOM  
- Axios  

---

## 🌱 Future Enhancements

- ⏭️ Pagination or infinite scrolling
- 🔍 Search and filtering by category
- 🔐 User authentication for submitting news
- 📝 Use Markdown rendering for descriptions

---

## 👤 Author

**Saksham Jaiswal**  

