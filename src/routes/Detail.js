import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import style from "../css/detail.module.css";
import style2 from "../css/home.module.css";
import style3 from "../css/movie.module.css";

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
    <div className={style2.main}>
      {loading ? (
        <h1>로딩중</h1>
      ) : (
        <>
          <Link to="/" className={style3.linkto}>
            {" "}
            <h3>Home</h3>
          </Link>
          <h1>Movie Detail</h1>
          <div className={style3.movieBox}>
            <img
              className={style.movieDetailImg}
              src={moviee.medium_cover_image}
            ></img>
            <div>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
