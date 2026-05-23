const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock Data for Social Media Metrics
const dashboardData = {
    platform: "Global Dashboard",
    summary: {
        totalFollowers: 45200,
        totalLikes: 120400,
        engagementRate: "4.8%"
    },
    platforms: [
        { name: "Twitter", followers: 12000, engagement: "3.2%" },
        { name: "Instagram", followers: 25000, engagement: "6.5%" },
        { name: "LinkedIn", followers: 8200, engagement: "4.1%" }
    ]
};

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Social Media Dashboard Backend API! Access data at /api/dashboard');
});

// API Route to fetch social media data
app.get('/api/dashboard', (req, res) => {
    res.json(dashboardData);
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running smoothly on port ${PORT}`);
});
