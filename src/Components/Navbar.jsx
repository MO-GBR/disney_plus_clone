import React, { useState } from 'react'
import { LogoContainer, NavbarStyle, LoginLink, NavbarMenu, NavbarMenuItem, UserInfosContainer, UserInfos, UserSignOut, UserAvatar, NavbarMenuInfo, NavbarMenuItemInfo } from '../Style/Navbar';
import { NavList } from '../Constants';

import {LoginWithGoogle} from '../Redux/Actions/UserActions';

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from 'react-router-dom';

import { BiLoaderCircle } from 'react-icons/bi';

import { auth, provider } from '../Request/FirebaseApp';

import { signInWithPopup, signOut } from "firebase/auth";
import { logoutAuth } from '../Redux/Reducers/UserSlice';

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const dispatch = useDispatch();

  const { isFetching, currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    try {
      signInWithPopup(auth, provider).then((result) => {
        const user = result.user;
        LoginWithGoogle(dispatch, user);
        navigate('/');
      }).catch((error) => {
        alert(error.message);
      })
    } catch (error) {
      console.log(error);
    }
  };

  const logUserOut = () => {
    dispatch(logoutAuth());
    signOut(auth).then(() => navigate("/login"));
  };

  return (
    <header>
      <NavbarStyle>
        <LogoContainer href="/">
          <img src='/images/logo.svg' alt='logo' />
        </LogoContainer>
        {
          currentUser
            ? (
              <NavbarMenu>
                {
                  NavList.map((item, index) => (
                    <NavbarMenuItem key={index}>
                      <a href="#">
                        {item.icon}
                        <p>{item.link}</p>
                      </a>
                    </NavbarMenuItem>
                  ))
                }
                <UserInfosContainer onClick={handleToggle}>
                  <UserAvatar src={currentUser.photo || "/images/group-icon.png"} alt='avatar' />
                  <p>{currentUser.username}</p>
                </UserInfosContainer>
                { toggle && 
                  (
                    <UserInfos>
                      you signed in as <br />
                      <p>{currentUser.email}</p>
                      <NavbarMenuInfo>
                        {
                          NavList.map((item, index) => (
                            <NavbarMenuItemInfo key={index}>
                              <a href="#">
                                {item.icon}
                                <p>{item.link}</p>
                              </a>
                            </NavbarMenuItemInfo>
                          ))
                        }
                      </NavbarMenuInfo>
                      <UserSignOut onClick={logUserOut}>Sign Out</UserSignOut>
                    </UserInfos>
                  ) 
                }
              </NavbarMenu>
            ) : (
              <form onSubmit={login}>
                <LoginLink type="submit">
                  {isFetching ? <BiLoaderCircle /> + "Loaiding..." : 'Login'}
                </LoginLink>
              </form>
            )
        }
      </NavbarStyle>
    </header>
  )
}

export default Navbar