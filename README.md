# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
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

### 2. Sign In

   - Existing users can log in using their email and password.
   - Upon successful login, users are redirected to the dashboard.

### 3. Add Rentals

   - Authenticated users can add new rental properties.
   - Once signed in, users can navigate to the "Add Rentals" section to add new rental properties by filling out the required details and clicking the "Add Rental" button.
   - Required details include the rental name, address, renter name, and rent amount.
   - After adding a rental, it appears in the list of rentals on the dashboard.

### 4. View Rentals

   - Users can switch to the "View Rentals" tab on the dashboard to see all existing rental properties listed in a sortable table format.
   - Allows users to view all rental properties added to the system.

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

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
