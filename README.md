# Real Estate MERN App

## Description

A real estate marketplace built with the MERN stack. This Single Page Application allows users to browse different real estates for both renting and selling. Registered users can create listings for apartments or houses for sale or rent. The search page enables users to filter their searches based on criteria such as parking, furnishing, rent, or sale. Users can register and personalize their profiles by changing their profile pictures.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built With](#built-with)
- [Contributing](#contributing)


## Features

- Login/Signup User Account
- Login using Email/Username
- Login using Google Account
- Update Profile/Password User Account
- Update Profile picture
- Delete Profile
- Search real estates by rent, sale, and other filters
- Upload a real estate for sale/rent
- Delete/Edit real estate
- Contact form to send messages to the owner of the real estate
- About page

## Demo

You can check the app in real-time at [https://real-estate-app-mern-qxrr.onrender.com/](https://real-estate-app-mern-qxrr.onrender.com/)

## Getting Started

To set up this project locally, follow these instructions:

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (included with Node.js installation)
- [MongoDB](https://www.mongodb.com/) (for the backend)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/GGarenov/real-estate-app
   cd real-estate-app

2. Install dependencies for the server (in the root folder):
    npm install

3. Install dependencies for the client (in the client folder):
    cd client
    npm install 

### Configuration

1. Create a .env file in the root folder and set PORT and MONGODB_URL.

2. Running the application:
    - Start the server from the root folder:
        - npm run dev
    - Start the client in the client folder:
        - npm run dev

3. Building for Production:
    - npm run build

### Usage

1. Register/Login:

Open the application in your browser.
Click on the "Sign In" button to create a new account or log in if you already have one.
Alternatively, use the Google Account option for a quicker login process.

2. Browse Real Estates:

Explore the available real estates on the main page by clicking the "Search Now" button.
Use the search functionality to filter results based on criteria such as rent, sale, parking availability, and furnishing.

3. Create Your Listing:

Click on the "Create Listing" button on the profile page to create a new listing for a property.
Provide details such as title, description, address, type (for sale or rent), and any additional information.
Upload images to showcase the property.

4. Manage Your Listings:

Access the "Show Listings" section to view, edit, or delete your existing real estate listings.

5. Contact Owners:

Use the contact form by clicking on the "Contact Landlord" button on each real estate page to send messages to the owners.

6. Update Profile:

Navigate to the profile section to update your account details.
Change your profile picture or username to personalize your account.

### Deployment

The application is deployed and can be accessed in real-time at https://real-estate-app-mern-qxrr.onrender.com/

### Built With

# Frontend:
- React
- React Redux Toolkit
- Firebase (Authentication)
- Tailwind CSS

# Backend:
- Node.js
- Express.js
- MongoDB

### Contributing

Feel free to contribute to the development of this project. Fork the repository, make your changes, and submit a pull request.

