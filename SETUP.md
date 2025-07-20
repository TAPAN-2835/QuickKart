# BlinkIt Clone Setup Guide

## Issues Fixed

1. **MongoDB Connection Error**: Fixed by providing proper environment configuration
2. **401 Unauthorized Errors**: Fixed by adding proper authentication checks
3. **500 Internal Server Error**: Fixed by replacing text search with regex search
4. **Missing Environment Files**: Created example environment files

## Setup Instructions

### 1. Environment Configuration

#### Backend Setup
1. Copy `backend/env.example` to `backend/.env`
2. Update the `.env` file with your configuration:

```bash
# MongoDB Connection (Choose one option)
# Option 1: Local MongoDB
MONGODB_URI=mongodb://localhost:27017/blinkit-clone

# Option 2: MongoDB Atlas (replace with your connection string)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/blinkit-clone

# JWT Secrets (generate secure random strings)
JWT_SECRET=your-super-secret-jwt-key-here
JWT_REFRESH_SECRET=your-super-secret-refresh-jwt-key-here

# Server Configuration
PORT=8080
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173
```

#### Frontend Setup
1. Copy `frontend/env.example` to `frontend/.env`
2. Update the `.env` file:

```bash
VITE_API_URL=http://localhost:8080
VITE_NODE_ENV=development
```

### 2. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Create database: `blinkit-clone`

#### Option B: MongoDB Atlas
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in backend `.env`

### 3. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

### 4. Start the Application

#### Terminal 1 - Backend
```bash
cd backend
npm run dev
```

#### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```

### 5. Verify Setup

1. Backend should be running on `http://localhost:8080`
2. Frontend should be running on `http://localhost:5173`
3. Check console for any remaining errors

## Common Issues & Solutions

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string format
- Verify network connectivity (for Atlas)

### 401 Unauthorized Errors
- These are expected when not logged in
- The app now handles these gracefully
- Login to access protected features

### Search Functionality
- Fixed text search issues
- Now uses regex search for better compatibility
- Should work without MongoDB text indexes

### CORS Issues
- Ensure `FRONTEND_URL` in backend `.env` matches your frontend URL
- Check that both servers are running

## Features Working After Fix

✅ User authentication (login/register)  
✅ Product search  
✅ Category and subcategory display  
✅ Cart functionality (when logged in)  
✅ Address management (when logged in)  
✅ Order management (when logged in)  

## Next Steps

1. Add sample data to MongoDB
2. Configure email settings (if needed)
3. Set up Stripe for payments (if needed)
4. Customize the application as needed 