const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String, // Markdown content
  image: {type:String,default:"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  category: String,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Post", postSchema);
