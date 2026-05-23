import { createContext, useState, useEffect } from "react";

// 1. Create the Context object
export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("user-token"),
  );

  const login = () => {
    localStorage.setItem("user-token", "12345");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("user-token");
    setIsLoggedIn(false);
  };

  // 2. Load data from LocalStorage on first mount
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("my-watchlist"));
    if (storedMovies) setWatchlist(storedMovies);
  }, []);

  // 3. Sync data to LocalStorage whenever watchlist changes
  useEffect(() => {
    localStorage.setItem("my-watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (!watchlist.find((m) => m.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  const removeFromWatchlist = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
