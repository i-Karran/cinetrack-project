import { useContext } from "react";
import { WatchlistContext } from "../context/watchlistContext";
import MovieCard from "../components/movieCard";
import { Link } from "react-router-dom";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className="watchlist-page" style={{ padding: "20px" }}>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        // --- ADD THIS BLOCK ---
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Your watchlist is empty. Go find some favorites!
          </p>
          <Link
            to="/"
            style={{
              padding: "10px 25px",
              backgroundColor: "#e50914",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Browse Movies
          </Link>
        </div>
      ) : (
        // ---------------------
        // ---------------------
        <div
          className="movie-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {watchlist.map((movie) => (
            <div key={movie.id} className="watchlist-item">
              <MovieCard movie={movie} />
              <button
                onClick={() => removeFromWatchlist(movie.id)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  marginTop: "10px",
                  width: "100%",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;
