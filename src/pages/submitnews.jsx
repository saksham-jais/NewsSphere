import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/SubmitNews.css';

const SubmitNews = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Science & Tech',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const categories = [
    'Science & Tech',
    'Finance',
    'Weather',
    'Education',
    'Politics',
    'Health',
    'Sports',
    'Entertainment'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      // Validate form
      if (!formData.title.trim() || !formData.description.trim()) {
        throw new Error('Title and description are required');
      }

      // Prepare data for submission
      const postData = {
        ...formData,
        // Use default image if none provided
        image: formData.image || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      };

      // Submit to backend
      const response = await axios.post('http://localhost:5000/posts', postData);
      
      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to submit news');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submit-news-container">
      <div className="submit-news-card">
        <h2 className="submit-news-title">
          <i className="fas fa-plus-circle"></i> Submit Your News
        </h2>
        <p className="submit-news-subtitle">
          Share your story with our community
        </p>

        {success && (
          <div className="alert alert-success">
            <i className="fas fa-check-circle"></i> News submitted successfully! Redirecting...
          </div>
        )}

        {error && (
          <div className="alert alert-error">
            <i className="fas fa-exclamation-circle"></i> {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="submit-news-form">
          <div className="form-group">
            <label htmlFor="title">News Title*</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter a compelling headline"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">News Content* (Markdown supported)</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write your news content here..."
              rows="6"
              required
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category">Category*</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="image">Image URL (optional)</label>
              <input
                type="url"
                id="image"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          <div className="form-actions">
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Submitting...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Submit News
                </>
              )}
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={() => navigate('/')}
            >
              <i className="fas fa-times"></i> Cancel
            </button>
          </div>
        </form>

        <div className="submit-news-footer">
          <p>
            <i className="fas fa-info-circle"></i> All submissions are reviewed before publishing
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubmitNews;