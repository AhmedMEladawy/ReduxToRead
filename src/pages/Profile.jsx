import { useSelector } from "react-redux";
/* eslint-disable react/prop-types */
import MovieCard from "../components/MovieCard";

export default function Profile() {
  const favoriteList = useSelector((state) => state.favoriteList);
  return (
    <div>
      {favoriteList.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
