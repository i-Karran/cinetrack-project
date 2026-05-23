import { useState, useEffect } from "react";
import MovieCard from "../components/movieCard";

const Home = () => {
  // 1. All available movies (The Source of Truth)
  const allMovies = [
    {
      id: 1,
      title: "Inception",
      poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oYuS360pZp9p9uC6YpZ7Z9q9.jpg", // Real link
      release_date: "2010",
    },
    {
      id: 2,
      title: "Interstellar",
      poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6vCU6m3oEPvja.jpg", // Real link
      release_date: "2014",
    },
    {
      id: 3,
      title: "The Dark Knight",
      poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDp9QEQvTlvvSpsLob.jpg",
      release_date: "2008",
    }
  ];

  const [query, setQuery] = useState(''); // What the user types
  const [filteredMovies, setFilteredMovies] = useState(allMovies); // What we show

  // 2. Logic: Whenever 'query' changes, filter the list
  useEffect(() => {
    const results = allMovies.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(results);
  }, [query]); 

  return (
    <div className="home-container" style={{ padding: "20px" }}>
      <h1>Popular Movies</h1>
      
      {/* 3. The Search Input */}
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          placeholder="Search movies..." 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: "10px", width: "100%", maxWidth: "400px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>

      <div className="movie-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found matching "{query}"</p>
        )}
      </div>
    </div>
  );
};

export default Home;