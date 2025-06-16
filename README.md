## ✨ Features

- ✅ User Signup & Login
- ✅ JWT-based Authentication (cookie-based sessions)
- ✅ Dashboard to view Holdings and Positions
- ✅ Order Simulation (Buy Stock)
- ✅ Backend REST API with MongoDB
- ✅ Secure CORS and Cookie Handling
- ✅ Fully responsive UI

## 🛠️ Tech Stack

### Frontend and Dashboard
- React.js
- React Router DOM
- Axios
- Tailwind CSS (or custom CSS)

### Backend:
- Node.js
- Express.js
- MongoDB & Mongoose
- dotenv, cors, cookie-parser, body-parser

## ✅ How Can you use this Project

### 1. Clone the Repository

git clone https://github.com/yourusername/zerodhaa-dashboard.git
cd zerodhaa-dashboard

###2. Install Dependencies
Install for all three directories:

####For Backend:
cd backend
npm install

####For Frontend:
cd ../frontend
npm install

####For Dashboard:
cd ../dashboard
npm install

###3. Set Up Environment Variables
In the backend folder, create a .env file and add:

PORT=8000
MONGO_URL=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key

###4. Run Locally
In three different terminals 

####Start Backend:
cd backend
node index.js

####Start Frontend:
cd frontend
npm start

####Start Dashboard:
cd dashboard
npm start

The frontend will open at http://localhost:3000
Dashboard may run on a different port (e.g., http://localhost:3001)




##🔧 How to Contribute
1. Fork the repo
2. Create a new branch: git checkout -b feature-name
3. Make your changes
4. Commit: git commit -m "Add feature"
5. Push: git push origin feature-name
6. Open a Pull Request



