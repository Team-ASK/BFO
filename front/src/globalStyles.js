// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
// import backgroundImage from './assets/images/bfo_bgimg.png';
// import backgroundImage from './assets/images/bfo_move_bg.gif';
import backgroundImage1 from './assets/images/bfo_left.gif';
import backgroundImage2 from './assets/images/bfo_right.gif';

const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${backgroundImage2}), url(${backgroundImage1});
    // background-size: cover;
    background-size: 30% 100%, 30% 100%;
    // background-size: contain;
    background-repeat: no-repeat, no-repeat;
    background-attachment: fixed;
    background-position: left, right;
    // background-position: left top, right top;
    /* 추가적인 스타일링을 원하는 경우 여기에 작성 */
    margin: 0; /* body의 기본 margin을 제거 */
    font-family: Ftstardust;
    background-color: black;
  }

  ::placeholder {
    font-family: Ftstardust;
    
    /* 다른 스타일 옵션 추가 가능 */
  }

  /* 추가: input 요소의 value 스타일 변경 */
  input {
    font-family: Ftstardust;
    padding-top: 8px;
    /* 다른 스타일 옵션 추가 가능 */
  }

  button {
    font-family: Ftstardust;
    /* 다른 스타일 옵션 추가 가능 */
  }
`;

export default GlobalStyles;