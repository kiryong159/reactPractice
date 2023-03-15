import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const movie = ({ coverImg, title, summary, genres, id }) => {
  return (
    <div>
      <img src={coverImg} />
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
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
