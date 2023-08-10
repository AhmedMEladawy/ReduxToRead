/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const movies = useSelector((state) => state.movies);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
