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

<pre> ## 📁 Project Structure ``` . ├── public/ │ └── vite.svg ├── src/ │ ├── App.jsx │ ├── assets/ │ │ └── react.svg │ ├── components/ │ │ ├── MovieCard.jsx │ │ └── NavBar.jsx │ ├── contexts/ │ │ └── MovieContext.jsx │ ├── css/ │ │ ├── App.css │ │ ├── Favorites.css │ │ ├── Home.css │ │ ├── MovieCard.css │ │ ├── Navbar.css │ │ └── index.css │ ├── main.jsx │ ├── pages/ │ │ ├── Favorites.jsx │ │ └── Home.jsx │ └── services/ │ └── api.js ├── .gitignore ├── index.html ├── package-lock.json ├── package.json ├── vite.config.js └── README.md ``` </pre>

### Author
**Khaled Jallouli**
