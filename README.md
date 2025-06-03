# 📰 NewsSphere - A Fullstack News Website Built with React

## 🌐 Overview

**NewsSphere** is a responsive and modern React-based news website that displays a list of news articles with engaging visuals, categories, and detailed descriptions. Users can browse the latest headlines and explore full articles seamlessly through a clean, intuitive UI.

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

## 🌐 Backend API Specification

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

## 📦 Tech Stack
- Frontend: React, React Router DOM, Axios
- Backend: Node.js + Express
- Database: MongoDB Atlas or JSON file
- Deployment: Vercel (Frontend) + Render (Backend)
---

## 🌱 Future Enhancements

- ⏭️ Pagination or infinite scrolling
- 🔍 Search and filtering by category
- 🔐 User authentication for submitting news
- 📝 Use Markdown rendering for descriptions

---
## 🛠️ Extend as a Blog Platform
You can easily convert NewsSphere into a full-fledged mini blog system with these additions:

## 🔧 Frontend Components
- CreatePost.jsx – Form to add new blog posts (with auth)
- CategoryFilter.jsx – Category-based filtering
- MarkdownRenderer.jsx – Render Markdown content beautifully
- Nav bar.jsx – Add top navigation with routing links

## 🌐 Backend Endpoints
- GET /posts – Fetch all posts
- GET /posts/:id – Fetch a specific post
- GET /posts?category=Tech – Filter posts by category
- (Optional) POST /posts – Add new post with auth

---

## 👤 Author

**Saksham Jaiswal**  

---
## 📌 License
- This project is open-source and available under the MIT License.

---
