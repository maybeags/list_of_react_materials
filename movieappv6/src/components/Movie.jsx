import { Link } from "react-router-dom";
import "./Movie.css"; // 🎯 스타일 분리해서 이쪽으로도 확장 가능

function Movie({ id, coverImg, title, genres }) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt={title} />
      </Link>
      <div className="movie-card-title">
        <Link to={`/movie/${id}`}>{title}</Link>
      </div>
      <ul className="movie-card-genres">
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
