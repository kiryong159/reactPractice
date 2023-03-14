// import Button from "./button";
import { useState, useEffect } from "react";
//import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movie </h1>
      {loading ? (
        "로딩중"
      ) : (
        <div>
          {movies.map((movie) => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} />
              <h2>{movie.title}</h2>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
