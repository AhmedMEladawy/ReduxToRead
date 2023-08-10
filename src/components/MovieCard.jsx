import { useDispatch } from "react-redux";
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AddToFavs } from "../sotre/actions";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const addToFavs = () => {
    dispatch(AddToFavs(movie));
  };
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={movie.imageUrl} />
      <Card.Body>
        <Card.Title>{movie.tile}</Card.Title>
        <Card.Text>
          <h5>{movie.genre}</h5>
          by<h5>{movie.director}</h5>
        </Card.Text>
        <Button variant="primary" onClick={addToFavs}>
          {movie.favorited ? "Remove From favorites" : "Add to favotites"}
        </Button>
      </Card.Body>
    </Card>
  );
}
