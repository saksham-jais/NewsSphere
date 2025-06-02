import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "../styles/PostDetail.css";

export default function PostDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setPost(null);
      });
  }, [id]);

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading post...</p>
      </div>
    );

  if (!post) return <p className="not-found">Post not found.</p>;

  return (
    <div className="post-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <h2 className="post-title">{post.title}</h2>
      <div className="post-content">
        <ReactMarkdown>{post.description}</ReactMarkdown>
      </div>
    </div>
  );
}
