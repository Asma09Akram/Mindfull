# How to Run the Project

This is a full-stack application with a Node.js/Express backend and a frontend application. Here's how to run it:

## Prerequisites

1. Node.js and npm installed on your system (version 12 or higher recommended)
2. MongoDB installed and running locally (or a MongoDB Atlas connection string)
3. A text editor or IDE of your choice

Note: If you don't have MongoDB installed locally, you can create a free MongoDB Atlas account and use their cloud database. The connection string should look something like:
`mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/meditation-app?retryWrites=true&w=majority`

## Environment Setup

1. Create a `.env` file in the `backend` directory with the following variables:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

2. Create a `.env` file in the `frontend` directory with:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

Note: Replace `your_mongodb_connection_string` with your actual MongoDB connection string. If you're using a local MongoDB installation, it might be something like: `mongodb://localhost:27017/meditation-app`

## Installation & Running

1. Install Backend Dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Start the Backend Server:
   ```bash
   node server.js
   ```
   The backend server will start on port 5000 (or the port specified in your .env file)

3. Install Frontend Dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Build the Frontend (for production):
   ```bash
   npm run build
   ```
   
   Or for development:
   ```bash
   npm start
   ```

## Alternative Installation Method

You can also use the project's built-in commands from the devfile.yaml:

1. Install all dependencies (both frontend and backend):
   ```bash
   # This will install dependencies for both frontend and backend
   cd backend && npm install && cd ../frontend && npm install
   ```

2. Build the frontend:
   ```bash
   cd frontend && npm run build
   ```

3. Run tests (optional):
   ```bash
   cd backend && npm run test && cd ../frontend && npm run test
   ```

## Verification

1. Backend should be running at: http://localhost:5000
2. You should see "Connected to MongoDB" in the console if the database connection is successful
3. The API endpoints available are:
   - Authentication: /api/auth
   - Users: /api/users
   - Meditation: /api/meditation

## Troubleshooting

### Common Issues:

1. **MongoDB Connection Error**
   - Make sure MongoDB is running locally or your Atlas connection string is correct
   - Check if your IP address is whitelisted in MongoDB Atlas
   - Verify the MONGODB_URI in your .env file

2. **Node.js Dependencies Issues**
   ```bash
   # Clear npm cache and node_modules
   rm -rf node_modules
   npm cache clean --force
   npm install
   ```

3. **Port Already in Use**
   - Change the PORT in .env file
   - Or kill the process using the port:
     ```bash
     lsof -i :5000
     kill -9 <PID>
     ```

4. **Frontend Can't Connect to Backend**
   - Verify the REACT_APP_API_URL in frontend .env is correct
   - Check if the backend server is running
   - Ensure CORS is properly configured in the backend

5. **OpenSSL Error When Building Frontend**
   If you see an error like `error:0308010C:digital envelope routines::unsupported`, this is due to Node.js v18+ and the older version of React Scripts. You can fix this by either:

   Option 1 - Set Node.js environment variable (recommended):
   ```bash
   # On Unix/Mac:
   export NODE_OPTIONS=--openssl-legacy-provider

   # On Windows (Command Prompt):
   set NODE_OPTIONS=--openssl-legacy-provider

   # On Windows (PowerShell):
   $env:NODE_OPTIONS="--openssl-legacy-provider"
   ```

   Option 2 - Downgrade Node.js to version 16:
   ```bash
   # Using nvm (Node Version Manager):
   nvm install 16
   nvm use 16
   ```

   After applying either fix, try building the frontend again.

For any other issues, check the console logs for error messages and refer to the project documentation or create an issue in the project repository.