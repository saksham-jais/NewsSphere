const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Post = require("./models/Post"); // make sure this path is correct

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect("mongodb+srv://sakshamjais100:h4lXArkR0RhZGWir@backenddb.wexxcxs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Blog API running");
});

// GET all posts
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// GET post by ID
app.get("/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

// GET posts by category
app.get("/category/:category", async (req, res) => {
  try {
    const posts = await Post.find({ category: req.params.category });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts by category" });
  }
});
//Post 
// POST create new post (updated to match frontend)
app.post("/posts", async (req, res) => {
  try {
    const { title, description, category, image } = req.body; // Changed from 'content' to 'description'

    // Log incoming request body for debugging
    console.log("Incoming POST data:", req.body);

    // Validate required fields
    if (!title || !description) { // Changed from 'content' to 'description'
      console.error("Validation failed: Title and description are required");
      return res.status(400).json({ error: "Title and description are required" });
    }

    // Proceed if validation passes
    const newPost = new Post({
      title,
      content: description, // Map frontend's 'description' to backend's 'content'
      category: category || "General",
      image: image || 'https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      createdAt: new Date(),
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);

  } catch (err) {
    console.error("Post creation error:", err);
    res.status(500).json({ 
      error: "Failed to create post", 
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
});
// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🌐 Server running at http://192.168.1.3:${PORT}`);
});



