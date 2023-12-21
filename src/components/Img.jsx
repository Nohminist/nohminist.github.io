
import { darken, lighten } from '@mui/system';


export const Img = ({ name, width, height, square, borderRadius = 0, rhombus, style ,isDark }) => {

  return (
    <img
      src={`${process.env.PUBLIC_URL}/${name}.png`}
      alt=''
      style={{
        ...style,
        width: square ?? width,
        height: square ?? height,
        borderRadius,
        clipPath: rhombus ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : '',
        filter: isDark ? 'grayscale(100%) brightness(0.5)' : ''

      }}
    />
  );
};





