import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/PostList.css";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/posts`)
      .then((res) => {
        setPosts(res.data);
        // Extract unique categories
        const uniqueCategories = [...new Set(res.data.map(post => post.category))];
        setCategories(["All", ...uniqueCategories]);
      })
      .catch((err) => console.error("Failed to fetch posts:", err));
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(posts.filter(post => post.category === selectedCategory));
    }
  }, [selectedCategory, posts]);

  return (
    <div className="post-list-container">
      <h2 className="section-title">Latest News</h2>
      
      <div className="category-filter">
        <label htmlFor="category-select">Filter by Category: </label>
        <select 
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="category-select"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="post-grid">
        {filteredPosts.map((post) => (
          <div className="post-card" key={post._id}>
            <Link to={`/post/${post._id}`} className="post-link">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-content">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-category">{post.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}