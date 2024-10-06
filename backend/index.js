// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const session = require('express-session');
const path = require('path');

// Import custom modules
const connectDB = require('./db/connectDB.js');
const authRoutes = require('./routes/routes.js');
const userRoutes = require('./routes/user.js'); 
const productRoutes = require('./routes/productRoutes');
const itemRoutes = require('./routes/itemroutes');
const managerRoutes = require("./routes/ManagerRoutes.js");
const deliveryPersonRoutes = require('./routes/DeliperRoutes.js');
const tableRoutes = require('./Routes/tableRoutes');
const paymentRoutes = require('./Routes/paymentRoutes');
const cartRoutes = require('./routes/CartRoutes.js');
const packagingMaterialsRoutes = require('./routes/packMatRoutes.js');
const packingOrdersRoutes = require('./routes/packOrdRoutes.js');
const complaintsRoutes = require('./routes/complaintRoutes.js');
const returnRoutes = require('./routes/returnRoutes.js');
const AdmincartRoutes = require("./routes/AdminCartRoute.js")
const AdminRoutes = require("./routes/AdminRoute.js");
const AdminUserRoutes = require("./routes/AdminUserRoutes.js");

// Load environment variables
dotenv.config();

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON and static files
app.use(express.json());
app.use(express.static('public'));
app.use(express.static('uploads'));


// CORS configuration to allow any localhost port in development
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or CURL requests)
      if (!origin) return callback(null, true);

      // Allow localhost origins on any port
      const allowedLocalhostPattern = /^http:\/\/localhost:\d+$/;
      if (allowedLocalhostPattern.test(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // Allow cookies and credentials to be sent with the request
  })
);


// Session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production", // Enable in production (HTTPS)
      sameSite: "lax", // Adjust based on needs
      maxAge: 10 * 60 * 1000, // 10 minutes session timeout
    },
  })
);

// Route handling
app.use("/api/auth", authRoutes);         // Auth routes
app.use("/api", userRoutes);              // User routes
app.use("/api/items", itemRoutes);        // Item routes
app.use('/api/products', productRoutes);  // Product routes
app.use('/api', tableRoutes);
app.use('/api', paymentRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/packaging-materials', packagingMaterialsRoutes);
app.use('/api/packing-orders', packingOrdersRoutes);
app.use("/api/managers", managerRoutes);  // Manager routes (commented out)
app.use('/api/delivery-person', deliveryPersonRoutes);  // Delivery person routes (commented out)
app.use('/api/complaints', complaintsRoutes);
app.use('/api', returnRoutes);
app.use("/api/cartItems",AdmincartRoutes );
app.use("/api/admin", AdminRoutes);
app.use("/api/AdUsers", AdminUserRoutes);

// Serve frontend in production mode
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  // Serve index.html for any other requests
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'));
  });
}

// Connect to the database
connectDB();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
