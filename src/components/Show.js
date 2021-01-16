import { useMobileSize } from '../hooks';
import { getImageURL } from '../utils';
import filmSVG from './icons/svg/film.svg';

const Show = ({ show }) => {
  const imageSize = useMobileSize() ? 'SMALL' : 'MEDIUM';
  let imageURL;
  if (!show.poster_path) {
    imageURL = filmSVG;
  } else {
    imageURL = getImageURL(imageSize, show.poster_path);
  }

  return (
    <article className="flex">
      <img src={imageURL} alt="show poster" />
      <div className="flex flex-col py-3 px-2">
        <h3 className="font-semibold text-lg">
          <a href={`/show/${show.id}`}>
            {show.title}{' '}
            <span className="font-thin text-sm italic text-gray-300 text-opacity-40">
              {show.release_date && new Date(show.release_date).getFullYear()}
            </span>
          </a>
        </h3>

        <p className="italic text-sm pt-1">{show.media_type}</p>
      </div>
    </article>
  );
};

export default Show;
