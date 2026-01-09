# url_shortner
🚀 This project is a simple and practical URL Shortener built using Node.js, Express, and MongoDB. The main goal of this project is to take long and complex website links and convert them into short, clean, and easy-to-share URLs 🔗. When a user opens the short link in a browser, it automatically redirects them to the original website without any delay ⚡. The backend stores all URLs securely in a MongoDB database and also keeps track of how many times each short link is clicked 📊. The application can be used directly from a web browser, so there is no need for Postman or any extra tools 🌐. MongoDB Atlas is used as a cloud database, making the project scalable, reliable, and ready for real-world deployment ☁️. Building this project helped me understand core backend concepts like API creation, routing, database connections, environment variables, and debugging real production-like issues 🧠💻. Overall, this project is a beginner-friendly but real-world backend application that demonstrates how modern web services work behind the scenes 🚀✨.
🖥️ ALL TERMINAL COMMANDS USED (EXPLAINED CLEARLY)
1️⃣ Create project folder
mkdir url-shortener
cd url-shortener
📌 What it does:
Creates a new folder for the project
Moves inside it
📌 Why needed:
Keeps backend files organized
2️⃣ Initialize Node project
npm init -y
📌 What it does:
Creates package.json
📌 Why needed:
Node needs this file to manage dependencies & scripts
3️⃣ Install main dependencies
npm install express mongoose shortid dotenv
📌 What it installs & why:
express → create backend server
mongoose → connect to MongoDB
shortid → generate short URLs
dotenv → load .env variables
4️⃣ Install dev dependency (nodemon)
npm install --save-dev nodemon
📌 What it does:
Installs nodemon for development
📌 Why needed:
Automatically restarts server when code changes
5️⃣ Run server (development)
npm run dev
📌 What it does:
Starts server using nodemon
📌 Why needed:
Faster development (no manual restart)
6️⃣ Run server (normal)
npm start
or
node index.js
📌 What it does:
Runs server normally
📌 Why needed:
Used in production & deployment
