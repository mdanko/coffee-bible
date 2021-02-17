import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'ONEDAY';
        src: local('ONEDAY'), url(./fonts/ONEDAY.ttf) format('truetype');
      }
      `}
  />
);

export default Fonts;
