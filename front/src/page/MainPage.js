// import AuthTemplate from '../components/auth/AuthTemplate';
// import AuthForm from '../components/auth/AuthForm';
import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Button from '../components/common/Button';
import Input from "../components/common/Input";
import styled from 'styled-components';
import Logout from '../components/auth/Logout';
import UserInfo from '../components/auth/UserInfo'

const handleButtonClick = (e) => {
  e.preventDefault(); // 이벤트 객체를 받아온 후 preventDefault 호출
  return(
    Logout()
  )
};


function Dropdown() {

  return (
    <>
      <div><Link to="/mypage">마이페이지</Link></div>
      {/* <li>마이페이지</li> */}
      <Button onClick={(e) => handleButtonClick(e)}>로그아웃</Button>
      {/* <li>로그아웃</li> */}
    </>
  );
}




const GameCreateButton = styled(Button)`
  margin-top: 1rem;
`;

const StyledInput = styled(Input)``;


const MainPage = (props) => {
  const jwtToken = localStorage.getItem("accessToken");
  const userName = localStorage.getItem("userName")
  // console.dir(jwtToken)
  if (!jwtToken) {
    window.location.href = '/login';
  }
  // console.log('jwtToken 있음')
  const [view, setView] = useState(false);
  return (
    <>
      <span
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => setView(!view)}
      >
        {userName}
      </span>
      {view && <Dropdown />}
      <h1>두뇌 풀 가동 메인 페이지</h1>
      <form>
          <StyledInput autoComplete="code" name="code" placeholder="입장 코드" />
          <GameCreateButton><Link to="/gamecreate">방 만들기</Link></GameCreateButton>
      </form>
    </>
    
  );
};

export default MainPage;