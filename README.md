# 🎬 React Movie App

A dynamic and responsive web application for Browse and managing a collection of movies, built with **React.js**. This project serves as a practical demonstration of core React concepts, state management, and efficient component design.

## 📸 Screenshots

### Home Page - Initial View
![Home Page Initial View](https://github.com/Khaled-J7/ReactMovie/blob/main/ReactMovie/docs/homepage.png)

### Home Page - Searching for "Final Destination"
![Home Page Search Final Destination](https://github.com/Khaled-J7/ReactMovie/blob/main/ReactMovie/docs/search_movies_2.png)

### Home Page - Searching for "Avengers"
![Home Page Search Avengers](https://github.com/Khaled-J7/ReactMovie/blob/main/ReactMovie/docs/search_movies.png)

### Favorites Page
![Favorites Page](https://github.com/Khaled-J7/ReactMovie/blob/main/ReactMovie/docs/favorites.png)

## ✨ Features

* **Extensive Movie Library:** Browse a curated list of movies.
* **Search Functionality:** Easily find movies by title with a real-time, case-insensitive search.
* **Favorites Management:** Add and remove movies from your personal favorites list.
* **Persistent Favorites:** Your favorite movies are saved locally using `localStorage`, ensuring they persist across browser sessions.
* **Intuitive Navigation:** Seamlessly switch between the main movie catalog and your favorites.
* **Responsive UI:** Designed to provide an optimal viewing experience across various devices.

## 🚀 Technologies Used

* **React.js:** A JavaScript library for building user interfaces.
* **Vite:** A fast and opinionated build tool for modern web projects.
* **React Context API:** Utilized for efficient global state management, avoiding prop drilling for shared data like movie lists and search queries.
* **`useContext` Hook:** For consuming context values within functional components.
* **Local Storage:** For persistent storage of user's favorite movies.
* **CSS:** For styling and ensuring a clean, modern, and responsive user interface.

## 📁 Project Structure

The project follows a logical and scalable directory structure:

├── public/                 # Static assets
├── src/
│   ├── App.jsx             # Main application component
│   ├── assets/             # Images, icons
│   ├── components/
│   │   ├── MovieCard.jsx   # Displays individual movie details
│   │   └── NavBar.jsx      # Application navigation bar
│   ├── contexts/
│   │   └── MovieContext.jsx # React Context for global movie data/state
│   ├── css/                # Centralized styling for components and pages
│   │   ├── App.css
│   │   ├── Favorites.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── main.jsx            # Entry point of the React application
│   ├── pages/
│   │   ├── Favorites.jsx   # Displays user's favorite movies
│   │   └── Home.jsx        # Displays the main movie catalog and search
│   └── services/
│       └── api.js          # Placeholder for potential API calls (or mock data)
├── .gitignore              # Specifies intentionally untracked files to ignore
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # This README file

### Author
**Khaled Jallouli**
