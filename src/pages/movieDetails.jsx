import { useParams, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams(); // Grabs the "id" from the URL
  const navigate = useNavigate();

  // In a real app, you'd fetch the movie by ID here.
  // For now, we'll just show the ID.
  return (
    <div style={{ padding: "40px", color: "white" }}>
      <button onClick={() => navigate(-1)}>Go Back</button>
      <h1>Movie ID: {id}</h1>
      <p>This is where the full description, trailer, and cast would go.</p>
      <div style={{ background: "#333", padding: "20px", marginTop: "20px" }}>
        <h2>Movie Detail Logic</h2>
        <p>You are currently viewing details for movie index: {id}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
