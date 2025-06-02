# News Website React App

## Overview

This is a responsive React news website that displays a list of news articles with images, titles, categories, and descriptions. Users can view the latest news and click on articles to see details.

---

## Features

- Fetches news articles from a backend API
- Displays news in a card-based grid layout with images
- Responsive design for desktop and mobile
- Navigation with React Router for article detail pages
- Categories displayed on each news card

---

## Project Structure

/src /components  
- PostList.jsx # Displays all news cards  
- PostDetail.jsx # Displays detailed news article  
- Home.jsx # Home page with post list and routing  
- PostList.css # CSS for news cards  
- App.jsx # Main app with routing and navbar

---

## Setup Instructions

1. Clone the repository

```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies

```bash
npm install
```

3. Start the React development server

```bash
npm start
```

Ensure your backend API is running and accessible at `http://localhost:5000/posts`

---

## Backend

The backend is expected to provide a REST API endpoint `/posts` returning news articles in JSON format with the following fields:

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

## Dependencies

- React  
- React Router DOM  
- Axios  

---

## Future Enhancements

- Add pagination or infinite scroll  
- Add search and filtering by category  
- Implement user authentication for submitting news  
- Use Markdown rendering for descriptions  

---

## Author

Saksham jaiswal 

