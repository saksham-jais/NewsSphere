const mongoose = require("mongoose");
const Post = require("./models/Post");

async function seedDB() {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      "mongodb+srv://sakshamjais100:h4lXArkR0RhZGWir@backenddb.wexxcxs.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB");

    // Optional: Clear existing posts
    await Post.deleteMany();

    // Insert sample posts
    const samplePosts = [
      {
        "title": "India Launches New Weather Satellite",
        "description": "ISRO has successfully launched a new satellite to improve weather forecasting across the country.",
        "image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Global Markets React to Tech Earnings",
        "description": "Stock markets across the world reacted positively after major tech companies posted strong quarterly earnings.",
        "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Historic Monsoon Hits Kerala Early",
        "description": "This year's monsoon has hit Kerala a week ahead of schedule, promising a better agricultural season.",
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "New Education Policy Introduced",
        "description": "The government has rolled out a new education policy focusing on skill development and digital literacy.",
        "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Breakthrough in Renewable Energy Storage",
        "description": "Scientists develop new battery technology that could revolutionize renewable energy storage capabilities.",
        "image": "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Major Bank Announces Digital Currency Plans",
        "description": "One of the world's largest banks reveals roadmap for implementing its own digital currency by 2025.",
        "image": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Record Heatwave Sweeps Across Europe",
        "description": "Meteorologists report unprecedented temperatures across southern Europe this summer.",
        "image": "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Online Learning Platform Reaches 10M Users",
        "description": "Popular education platform hits milestone as demand for remote learning continues to grow.",
        "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "AI System Diagnoses Diseases with 95% Accuracy",
        "description": "New medical AI outperforms human doctors in preliminary diagnostic tests.",
        "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Cryptocurrency Regulations Tighten Globally",
        "description": "Financial authorities from 20 countries agree on new framework for cryptocurrency oversight.",
        "image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Hurricane Warning Issued for Coastal Areas",
        "description": "Category 4 storm expected to make landfall within 48 hours, residents urged to evacuate.",
        "image": "https://images.unsplash.com/photo-1500673922987-e212871fec22?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Universities Adopt Hybrid Learning Permanently",
        "description": "Top institutions announce plans to continue offering online options post-pandemic.",
        "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Quantum Computer Breaks Encryption Record",
        "description": "Researchers demonstrate quantum computer solving problems considered impossible for classical computers.",
        "image": "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Stock Markets Reach All-Time High",
        "description": "Major indices surge as economic recovery exceeds expectations in Q2.",
        "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Drought Conditions Worsen in Western States",
        "description": "Water restrictions implemented as reservoir levels drop to historic lows.",
        "image": "https://images.unsplash.com/photo-1509316785289-025f5b846b35?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Coding Added to National School Curriculum",
        "description": "Elementary schools will now teach basic programming skills starting next academic year.",
        "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Space Tourism Flights to Begin Next Month",
        "description": "First commercial space flights open to public after successful test missions.",
        "image": "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Central Bank Raises Interest Rates Again",
        "description": "Latest 0.5% hike aims to combat persistent inflation concerns.",
        "image": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Winter Storm Paralyzes Northeast",
        "description": "Record snowfall disrupts travel and knocks out power for millions.",
        "image": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Student Loan Forgiveness Program Expanded",
        "description": "500,000 more borrowers now eligible for debt relief under new guidelines.",
        "image": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Self-Driving Cars Approved for City Streets",
        "description": "Regulators give green light for autonomous vehicles to operate without safety drivers.",
        "image": "https://images.unsplash.com/photo-1549317661-bd32bbc8e7e1?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Major Merger Creates Tech-Finance Giant",
        "description": "$120 billion deal combines payment platform with social media company.",
        "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Tornado Outbreak Sets New Records",
        "description": "Midwest experiences unprecedented number of twisters in single weather system.",
        "image": "https://images.unsplash.com/photo-1500673922987-e212871fec22?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "STEM Enrollment Reaches Historic High",
        "description": "University reports 40% increase in science and technology program applications.",
        "image": "https://images.unsplash.com/photo-1555421689-3f034debb7a6?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Fusion Energy Breakthrough Announced",
        "description": "Scientists achieve net energy gain in latest fusion reactor experiment.",
        "image": "https://images.unsplash.com/photo-1579803815615-1203fb5a2e9d?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Recession Fears Ease as GDP Grows",
        "description": "Strong consumer spending helps economy avoid predicted downturn.",
        "image": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Climate Change Affecting Seasonal Patterns",
        "description": "Study shows spring arriving earlier and winters becoming shorter globally.",
        "image": "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Vocational Training Programs Expand Nationwide",
        "description": "Government initiative aims to prepare workers for high-demand technical jobs.",
        "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "6G Network Tests Begin in Major Cities",
        "description": "Next-generation wireless technology promises speeds 100x faster than 5G.",
        "image": "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Bitcoin Surges After Institutional Adoption",
        "description": "Price jumps 30% as three major asset managers announce crypto products.",
        "image": "https://images.unsplash.com/photo-1621761191319-c6fb62004040?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Coastal Cities Prepare for Rising Sea Levels",
        "description": "New infrastructure projects aim to protect against predicted ocean increases.",
        "image": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Language Learning Apps See Record Growth",
        "description": "Demand for multilingual skills drives 200% increase in users this year.",
        "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Robotic Surgeons Outperform Humans in Trial",
        "description": "AI-assisted systems demonstrate better precision and faster recovery times.",
        "image": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Sustainable Investing Now Mainstream",
        "description": "ESG funds capture over 50% of all new investment dollars this quarter.",
        "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Pollen Levels Break Records Nationwide",
        "description": "Allergy season worsens as climate change extends flowering periods.",
        "image": "https://images.unsplash.com/photo-1490750967868-88aa4486c946?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Digital Literacy Now Required for Graduation",
        "description": "High schools add technology competency requirements to diploma standards.",
        "image": "https://images.unsplash.com/photo-1588072432836-e10032774350?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Brain-Computer Interface Trials Show Promise",
        "description": "Paralyzed patients control devices with thoughts in groundbreaking study.",
        "image": "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Central Bank Digital Currency Launches",
        "description": "Nation becomes first major economy to roll out official digital currency.",
        "image": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Arctic Ice Melting Faster Than Predicted",
        "description": "New satellite data shows accelerated loss of polar ice caps.",
        "image": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Gamification Boosts Student Engagement",
        "description": "Schools report better outcomes after implementing game elements in curriculum.",
        "image": "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Space Hotel Construction Begins",
        "description": "First commercial space station module launches with luxury accommodations.",
        "image": "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Fintech Startups Disrupt Traditional Banking",
        "description": "Digital-only banks capture 25% of new customer accounts this quarter.",
        "image": "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Wildfire Season Starts Early in West",
        "description": "Dry conditions lead to unprecedented June fire activity.",
        "image": "https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "AI Tutors Help Close Learning Gaps",
        "description": "Personalized learning assistants prove effective in struggling schools.",
        "image": "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Holographic Displays Ready for Consumers",
        "description": "After years in development, 3D hologram technology hits retail market.",
        "image": "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Global Minimum Tax Agreement Reached",
        "description": "130 countries agree to 15% minimum corporate tax rate to prevent tax havens.",
        "image": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Flooding Displaces Thousands in Asia",
        "description": "Unusually heavy rains cause rivers to overflow their banks across region.",
        "image": "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Micro-Credentials Gain Popularity",
        "description": "Workers increasingly turning to short courses for career advancement.",
        "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&q=80",
        "category": "Education"
      },
      {
        "title": "Lab-Grown Meat Approved for Sale",
        "description": "Regulators clear cultured meat products for commercial distribution.",
        "image": "https://images.unsplash.com/photo-1589927986089-35812388d1f4?fit=crop&w=800&q=80",
        "category": "Science & Tech"
      },
      {
        "title": "Remote Work Impacts Commercial Real Estate",
        "description": "Office vacancies reach record high as hybrid work becomes standard.",
        "image": "https://images.unsplash.com/photo-1559526324-593bc073d938?fit=crop&w=800&q=80",
        "category": "Finance"
      },
      {
        "title": "Drought-Resistant Crops Show Promise",
        "description": "New genetically modified varieties thrive with 40% less water.",
        "image": "https://images.unsplash.com/photo-1509316785289-025f5b846b35?fit=crop&w=800&q=80",
        "category": "Weather"
      },
      {
        "title": "Apprenticeship Programs Double Enrollment",
        "description": "Earn-while-you-learn models attract more students than traditional college.",
        "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?fit=crop&w=800&q=80",
        "category": "Education"
      }
    ];
    ;

    await Post.insertMany(samplePosts);

    console.log("Database seeded!");
  } catch (err) {
    console.error("Seeding error:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
