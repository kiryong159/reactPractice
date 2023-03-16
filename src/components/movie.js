import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import style from "../css/movie.module.css";

const movie = ({ coverImg, title, summary, genres, id }) => {
  return (
    <div className={style.movieBox}>
      <img src={coverImg} className={style.coverImg} />
      <div>
        <Link to={`/movie/${id}`} className={style.linkto}>
          <h2>{title.length > 24 ? `${title.slice(0, 20)}...` : title}</h2>
        </Link>
        <p>
          {summary.length > 300 ? `${summary.slice(0, 290)}...(more)` : summary}
        </p>
        <div className={style.ulBox}>
          <ul className={style.movieUl}>
            {genres?.map((item) => (
              <li className={style.movieLi} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default movie;
