import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const [loading, setloading] = useState(true);
  const [moviee, setMoviee] = useState();

  const { id } = useParams();
  const getMovieData = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    const MovieData = json.data.movie;
    setMoviee(MovieData);
    setloading(false);
  };
  useEffect(() => {
    getMovieData();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>로딩중</h1>
      ) : (
        <>
          <Link to="/">
            {" "}
            <small>Home</small>
          </Link>
          <h1>Movie Detail</h1>
          <img src={moviee.medium_cover_image}></img>
          <h1>{moviee.title_long}</h1>
          <h3>Rating : {moviee.rating}</h3>
          <h3>Runtime : {moviee.runtime} min</h3>
          <h3>Genres</h3>
          <ul>
            {moviee.genres.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>Discription</h3>
          <p>{moviee.description_intro}</p>
        </>
      )}
    </div>
  );
};

export default Detail;
