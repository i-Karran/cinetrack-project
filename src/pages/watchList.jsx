import { useContext } from "react";
import { WatchlistContext } from "../context/watchlistContext";
import MovieCard from "../components/movieCard";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className="watchlist-page" style={{ padding: "20px" }}>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>Your watchlist is empty. Go back and add some movies!</p>
      ) : (
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
