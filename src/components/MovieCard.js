import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <h2><Link to={`/movie/${movie.id}`}>{movie.title}</Link></h2>
    </article>
  );
};

export default MovieCard;