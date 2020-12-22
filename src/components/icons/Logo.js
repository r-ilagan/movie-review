// Logo taken from https://svgbox.net/p/docs
import { ReactComponent as Popcorn } from './svg/popcorn.svg';

const Logo = ({ height }) => {
  return <Popcorn className={`h-${height}`} />;
};

export default Logo;
