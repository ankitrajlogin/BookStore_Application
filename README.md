
# Bookstore Application (Personal Project) (Proof of Concept (PoC))
bookstore-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── bookController.js
│   │   └── bookmarkController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Book.js
│   │   └── Bookmark.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── bookRoutes.js
│   │   └── bookmarkRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── AuthForm.js
    │   │   ├── Dashboard.js
    │   │   ├── BookList.js
    │   │   └── BookForm.js
    │   ├── App.js
    │   ├── api.js
    │   └── index.js
    └── package.json


## Overview
The Bookstore is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides a dynamic and interactive platform for users to browse books, register, and log in for personalized book recommendations. Guests can also explore the books, but registered users get access to exclusive content. The application features dark and light mode themes and ensures a responsive and intuitive user interface.

## Features
- **User Authentication (Login and Register)**: Secure authentication system allowing users to sign up and log in.
- **Dynamic Slider for Featured Books**: A carousel displaying featured books that updates dynamically.
- **Dark and Light Mode Toggle**: Users can switch between dark and light themes for better user experience.
- **Protected Routes**: Authenticated users can access certain routes, ensuring privacy and security.
- **Responsive Design**: Fully responsive interface, making it accessible across devices including desktop, tablet, and mobile.
- **MongoDB Integration**: MongoDB is used for efficient data storage and retrieval, with data management done via Mongoose ORM.

## Tech Stack
### Frontend:
- **React.js**: JavaScript library for building the user interface.
- **Redux**: State management for maintaining global app state.
- **React Router**: For navigation between different pages.
- **CSS**: Styling of the application.

### Backend:
- **Node.js**: JavaScript runtime for server-side logic.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing user and book data.
- **Mongoose**: ORM (Object Relational Mapping) for MongoDB, simplifying data interaction.

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/bookstore-application.git


# Introduction
The Bookstore is a full-stack web application built using the MERN (MongoDB, Express, React, Node.js) stack. It provides functionalities for user authentication (login and register), a dynamic book slider, dark and light mode themes, protected routes, and more.

# Features
User Authentication (Login and Register)
Dynamic Slider for Featured Books
Dark and Light Mode Toggle
Secure Backend with Express.js
Protected Routes for Authenticated Users
Data Storage with MongoDB


# Frontend:
React.js
Redux (for state management)
React Router (for routing)
CSS (for styling)


# Backend:
Node.js
Express.js
MongoDB (with Mongoose ORM)

# Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
