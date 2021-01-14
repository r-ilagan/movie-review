const Show = ({ show }) => {
  return (
    <article>
      <img src={show.poster} alt="movie poster" />
      <h3>{show.Title}</h3>
      <p>Year: {show.Year}</p>
      <p>Type: {show.Type}</p>
      <a href={`/show/${show.imdbID}`}>More</a>
    </article>
  );
};

export default Show;
