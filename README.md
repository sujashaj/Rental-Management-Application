# Rental Management Application

## Problem Statement

- Develop a web-based Rental Management Application to streamline the process of managing rental   properties. 
- The application provides a user-friendly interface for users to add, view, and manage rental properties, while also offering features for user authentication and authorization.

## High Level Design

The application consists of the following components:

### 1. Sign Up

   - New users can create an account by providing their first name, last name, email, and password.
   - After successful sign-up, users are redirected to the sign-in page.
   - When a user signs up, a verification email is sent to the user's email address containing a link with a JWT token.
   - Clicking on the link from the email triggers a process to check if the token in the link is valid.
   - If the user is successfully identified, the system proceeds with access authorization.

  ![SignUp](https://github.com/sujashaj/rental-management-application/blob/resources/images/SignUp%20.png)

### 2. Sign In

   - Existing users can log in using their email and password.
   - Upon successful login, users are redirected to the dashboard.

   ![SignIn](https://github.com/sujashaj/rental-management-application/blob/resources/images/SignIn.png)

### 3. Add Rentals

   - Authenticated users can add new rental properties.
   - Once signed in, users can navigate to the "Add Rentals" section to add new rental properties by filling out the required details and clicking the "Add Rental" button.
   - Required details include the rental name, address, renter name, and rent amount.
   - After adding a rental, it appears in the list of rentals on the dashboard.

   ![AddRentals](https://github.com/sujashaj/rental-management-application/blob/resources/images/Add%20Rentals.png)

### 4. View Rentals

   - Users can switch to the "View Rentals" tab on the dashboard to see all existing rental properties listed in a sortable table format.
   - Allows users to view all rental properties added to the system.

   ![ViewRentals](https://github.com/sujashaj/rental-management-application/blob/resources/images/View%20Rentals.png)

### 5. Logout Option

   - Users have the option to log out from their accounts.
   - Clicking on the logout button will securely log the user out and redirect them to the sign-in page.

### 6. Routing

   - React Router DOM: Navigation between different pages is handled using React Router DOM.
   - Dashboard: After logging in, users are directed to the dashboard where they can access various features.

## Technologies Used

### Frontend

- React.js – Javascript library for building user interfaces.
- React Router DOM - A library for handling routing in React applications.
- Material UI – CSS framework that provides CSS components out of the box.

### Backend

- Flask - A micro web framework written in Python.
- SQLite - SQLite is used as the backend database for storing user and rental data.
- SQLAlchemy - An ORM (Object-Relational Mapping) library for Python. SQLAlchemy is used for database interactions, allowing the application to communicate with the SQLite database.
- Mailjet and JWT - When a user signs up, a verification email is sent to the user's email address containing a link with a JWT token. The system sends email via Mailjet to the user's email address.


