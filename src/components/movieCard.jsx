import { useContext } from "react";
import { WatchlistContext } from "../context/watchlistContext";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const { addToWatchlist, watchlist } = useContext(WatchlistContext);
  const isStored = watchlist.find((m) => m.id === movie.id);

  // Use the TMDB URL, but if the path is missing/mocked, use a placeholder
  const imageUrl = movie.poster_path.startsWith("http")
    ? movie.poster_path
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div
      className="movie-card"
      style={{
        border: "1px solid #444",
        borderRadius: "8px",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <Link
        to={`/movie/${movie.id}`}
        style={{ cursor: "pointer", textDecoration: "none" }}
      >
      <img
        src={imageUrl}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "4px" }}
        // If the image still fails to load, show a local backup
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
        }}
      />
      <div className="info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
        <button disabled={isStored} onClick={() => addToWatchlist(movie)}>
          {isStored ? "In Watchlist" : "Add to Watchlist"}
        </button>
      </div>
       </Link>
    </div>
   
  );
};

export default MovieCard;
