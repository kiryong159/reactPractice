import { Link } from "react-router-dom";

const movie = ({ coverImg, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImg} />
      <Link to="/movie">
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

export default movie;
