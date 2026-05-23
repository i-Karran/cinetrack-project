import { createContext, useState, useEffect } from "react";

// 1. Create the Context object
export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [userToken, setUserToken] = useState(
    localStorage.getItem("user-token"),
  );

  const login = (token) => {
    localStorage.setItem("user-token", token);
    setUserToken(token); // This triggers a re-render!
  };

  const logout = () => {
    localStorage.removeItem("user-token");
    setUserToken(null); // This triggers a re-render!
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
    <WatchlistContext.Provider value={{ 
      watchlist, 
      addToWatchlist, 
      removeFromWatchlist,
      userToken, // 2. Provide these to the app
      login, 
      logout 
    }}>
      {children}
    </WatchlistContext.Provider>
  );
};
