# Movie Search App

This is a React-based app that allows users to search movies from the OMDb API and manage a list of favorite movies.

## Features
- Search movies by title using the OMDb API.
- View search results with movie posters and details.
- Add/remove movies to/from a Favorites section.
- Favorites persist across page refresh (via localStorage).

## How to Run Locally

1. **Clone or Download**
   - Clone the repo:
     ```bash
     git clone https://github.com/yourusername/movie-search-app.git
     cd movie-search-app
     ```
   - OR unzip the project ZIP.

2. **Install dependencies**
   ```bash
   npm install

3.** Run the app **

npm start
The app will open at http://localhost:3000.

4. Get your OMDb API key

Visit http://www.omdbapi.com/apikey.aspx

const API_URL = "http://www.omdbapi.com?apikey=YOUR_KEY";
