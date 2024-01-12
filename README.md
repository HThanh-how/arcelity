# E-commerce Game Marketplace 

## Overview

Welcome to the Game Marketplace project! This platform is designed to sell and showcase various games, similar to platforms like Epic Games. The project uses Next.js for the frontend, MongoDB for data storage, and Java with Spring Boot for the backend.

## Demo

Explore the live demo: [Game Marketplace Demo](https://arcelity.vercel.app/)

## Features

1. **Game Listing:**
   - Browse a diverse collection of games available for purchase.
   - Each game has detailed information, including description, price, and user ratings.

2. **User Authentication:**
   - Register an account or log in to an existing account to access personalized features.
   - User authentication ensures secure and personalized interactions.

3. **Shopping Cart:**
   - Add games to your shopping cart for easy checkout.
   - Review and modify your cart before making a purchase.

4. **Order History:**
   - View a history of your past game purchases.
   - Keep track of your gaming experiences over time.

5. **Admin Dashboard:**
   - Admin users have access to a dashboard for managing games, users, and orders.
   - Add new games, update information, and monitor user activity.

6. **Next.js Framework:**
   - The frontend is developed using Next.js, providing a fast and dynamic user experience.
   - Server-side rendering ensures optimal performance.

7. **MongoDB Database:**
   - Game data, user information, and order history are stored in MongoDB for flexibility and scalability.
   - A NoSQL database allows for efficient and structured data storage.

8. **Java with Spring Boot Backend:**
   - The backend is powered by Java with the Spring Boot framework.
   - RESTful APIs handle communication between the frontend and the database.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js and npm](https://nodejs.org/)
- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/HThanh-how/arcelity


2. **Navigate to the project directory:**

   ```bash
   cd arcelity
   ```

3. **Install frontend dependencies:**

   ```bash
   cd client
   npm install
   ```

4. **Run the frontend development server:**

   ```bash
   npm run dev
   ```

   The frontend should now be accessible at [http://localhost:3000](http://localhost:3000).

5. **Switch to the backend directory:**

   ```bash
   cd ../server
   ```

6. **Install backend dependencies:**

   ```bash
   ./mvnw clean install
   ```

   Note: On Windows, use `mvnw.cmd` instead.

7. **Start the Spring Boot application:**

   ```bash
   ./mvnw spring-boot:run
   ```

   The backend should now be running at [http://localhost:8080](http://localhost:8080).

8. **MongoDB Configuration:**

   - Ensure that MongoDB is running locally or update the MongoDB connection settings in the `application.properties` file located in the `backend/src/main/resources` directory.

9. **Accessing the Application:**

   - Open your web browser and go to [http://localhost:3000](http://localhost:3000) to interact with the Game Marketplace.

10. **Admin Dashboard:**

   - To access the admin dashboard, use the provided admin credentials in the application or create a new admin account.

Congratulations! You've successfully set up the E-commerce Game Marketplace project. Feel free to explore the features and customize the platform based on your requirements.

For any issues or further assistance, refer to the project's documentation or community forums. Enjoy your Game Marketplace!