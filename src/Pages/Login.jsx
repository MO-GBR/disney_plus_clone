import React, {useEffect, useState} from 'react'

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";

import { LoginBg, LoginContainer, LoginContent, LoginCTA, LoginImg2, LoginImg1, LoginBtn, LoginText } from '../Style/Login'

import { auth } from '../Request/FirebaseApp';

import { LoginWithGoogle } from '../Redux/Actions/UserActions';

const Login = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user) {
        LoginWithGoogle(dispatch, user);
        navigate("/");
      }
    });
  }, [currentUser]);
  return (
    <LoginContainer>
        <LoginContent>
            <LoginCTA>
                <LoginImg1 src="/images/cta-logo-one.svg" alt="cta-logo-one" />
                <LoginBtn>GET AT THERE</LoginBtn>
                <LoginText>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</LoginText>
                <LoginImg2 src="/images/cta-logo-two.png" alt="cta-logo-two" />
            </LoginCTA>
        </LoginContent>
        <LoginBg />
    </LoginContainer>
  )
}

export default Login