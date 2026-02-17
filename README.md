# Guess The Number Game 🎮

A fun and interactive number guessing game built with HTML, CSS, and JavaScript. Challenge yourself to guess the secret number between 0 and 100 in just 10 attempts!

## 🎯 Game Features

- **Interactive Gameplay**: Guess a randomly generated number between 0 and 100
- **10 Chances**: You get 10 attempts to find the correct number
- **Real-time Feedback**: Instant hints telling you if your guess is too high or too low
- **Personalized Experience**: Enter your name and receive time-based greetings
- **Score Tracking**: See how many attempts it took you to win
- **Play Again**: Quick restart functionality to play multiple rounds
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 What You Can Do in the Cloud

Deploying this game to the cloud offers numerous benefits and possibilities:

### Cloud Deployment Benefits

1. **Global Accessibility**: Host your game online and share it with friends worldwide
2. **Zero Server Management**: No need to maintain servers or infrastructure
3. **Automatic Scaling**: Handle unlimited players without performance issues
4. **Free Hosting Options**: Many cloud platforms offer free tiers perfect for static websites
5. **HTTPS by Default**: Secure connections for all players
6. **CDN Distribution**: Fast loading times from anywhere in the world
7. **Continuous Deployment**: Automatic updates when you push changes to your repository

### Cloud Deployment Options

#### 1. **GitHub Pages** (Recommended for Beginners)
GitHub Pages is perfect for static websites and offers free hosting directly from your repository.

**Steps to Deploy:**
```bash
# 1. Go to your repository settings on GitHub
# 2. Navigate to "Pages" section
# 3. Select the branch (usually 'main' or 'master')
# 4. Choose root directory
# 5. Click Save
# Your game will be live at: https://yourusername.github.io/Guess-the-number-game/
```

#### 2. **Netlify**
Netlify offers one-click deployment with continuous integration.

**Steps to Deploy:**
```bash
# 1. Sign up at netlify.com
# 2. Click "New site from Git"
# 3. Connect your GitHub repository
# 4. Configure build settings (not needed for static sites)
# 5. Deploy!
# Your game will be live at: https://your-site-name.netlify.app
```

#### 3. **Vercel**
Vercel provides lightning-fast deployments with preview URLs for every commit.

**Steps to Deploy:**
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Navigate to your project directory
cd Guess-the-number-game

# 3. Deploy
vercel

# Follow the prompts, and your game will be live!
```

#### 4. **AWS S3 + CloudFront**
Enterprise-grade hosting with Amazon Web Services.

**Steps to Deploy:**
```bash
# 1. Create an S3 bucket
# 2. Enable static website hosting
# 3. Upload your files (index.html, game.html, script.js, style.css)
# 4. Configure bucket policy for public access
# 5. (Optional) Set up CloudFront for CDN distribution
```

#### 5. **Azure Static Web Apps**
Microsoft Azure's solution for static web applications.

**Steps to Deploy:**
```bash
# 1. Install Azure CLI
# 2. Create a Static Web App in Azure Portal
# 3. Connect your GitHub repository
# 4. Configure build settings
# 5. Azure automatically deploys your app
```

#### 6. **Google Cloud Storage**
Host static websites using Google Cloud Platform.

**Steps to Deploy:**
```bash
# 1. Create a GCS bucket
# 2. Upload your website files
gsutil cp -r * gs://your-bucket-name/

# 3. Make files publicly accessible
gsutil iam ch allUsers:objectViewer gs://your-bucket-name

# 4. Configure bucket for website hosting
```

### Potential Cloud Enhancements

Once deployed in the cloud, you can add these features:

- **Leaderboard**: Store high scores in a cloud database (Firebase, MongoDB Atlas)
- **User Authentication**: Allow players to create accounts and track their progress
- **Multiplayer Mode**: Compete with friends in real-time using WebSockets
- **Analytics**: Track game statistics with Google Analytics or cloud-based analytics
- **Progressive Web App (PWA)**: Make it installable on mobile devices
- **Social Sharing**: Share scores on social media platforms
- **Difficulty Levels**: Store preferences in cloud storage
- **Achievement System**: Track milestones and unlock badges

## 💻 Local Development

To run this game locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Guess-the-number-game.git
   cd Guess-the-number-game
   ```

2. **Open the game:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Play the game:**
   - Navigate to `http://localhost:8000` in your browser
   - Enter your name and start guessing!

## 🛠️ Technology Stack

- **HTML5**: Structure and content
- **CSS3**: Styling and responsive design
- **JavaScript (Vanilla)**: Game logic and interactivity
- **No Dependencies**: Pure client-side code, no frameworks needed

## 📁 Project Structure

```
Guess-the-number-game/
├── index.html      # Landing page with game rules
├── game.html       # Main game interface
├── script.js       # Game logic and functionality
├── style.css       # Styling and design
└── README.md       # This file
```

## 🎮 How to Play

1. Open the game and enter your name
2. The computer will randomly select a number between 0 and 100
3. You have 10 attempts to guess the correct number
4. After each guess, you'll receive feedback:
   - "Too low!" - Your guess is below the secret number
   - "Too high!" - Your guess is above the secret number
   - "Congratulations!" - You've guessed correctly!
5. Try to win in as few attempts as possible
6. Click "Play Again" to start a new round

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📄 License

This project is open source and available for educational purposes.

## 🌟 Acknowledgments

A simple yet engaging game perfect for learning web development basics and cloud deployment strategies!

---

**Ready to deploy?** Choose your favorite cloud platform from the options above and share your game with the world! 🚀
