import styled from "styled-components";

export const NavbarStyle = styled.nav`
   position: fixed;
   top: 0;
   left: 0;
   height: 70px;
   background-color: #090b13;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 30px;
   width: 100%;
   letter-spacing: 16px;
   z-index: 3;
`;

export const LogoContainer = styled.a`
   padding: 0;
   width: 80px;
   margin-top: 4px;
   max-height: 70px;
   font-size: 0;
   display: inline-block;
   img {
      display: block;
      width: 100%;
   }
`;

export const LoginLink = styled.button`
   background-color: rgba(0, 0, 0, 0.6);
   padding: 8px 16px;
   text-transform: uppercase;
   letter-spacing: 1.5px;
   border: 1px solid #f9f9f9;
   border-radius: 4px;
   transition: all 0.2s ease 0s;
   text-decoration: none;
   color: #f9f9f9;
   cursor: pointer;
   &:hover {
     background-color: #f9f9f9;
     color: #000;
     border-color: transparent;
  }
`;

export const NavbarMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    height: 100%;
    margin: 0;
    padding: 0;
`;

export const NavbarMenuItem = styled.li`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 12px;
    a {
        color: #f9f9f9;
        text-decoration: none;
        font-size: 14px;
        letter-spacing: 1.42px;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
            margin-left: 6px;
        }
        &:before {
            content: "";
            height: 2px;
            background-color: #f9f9f9;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
        &:hover:before {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const UserInfos = styled.div`
    width: fit-content;
    height: 20vh;
    background-color: #090b13;
    border: 1px solid #f9f9f9;
    border-radius: 4px;
    color: #f9f9f9;
    position: absolute;
    letter-spacing: 1.42px;
    right: 5px;
    top: 70px;
    padding: 10px;

    @media (max-width: 768px) {
        right: 25px;
        height: 70vh;
    }
`;

export const UserInfosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1.42px;
    cursor: pointer;
    &:hover {
        color:rgb(201, 201, 201)
    }

    @media (max-width: 768px) {
        flex-direction: row-reverse;
    }
`;

export const UserSignOut = styled.p`
    margin: 5px;
    color:rgb(255, 177, 74);
    cursor: pointer;
    width: 100%;
    text-align: center;
    font-size: x-large;
    margin-top: 10px;
    font-weight: 600;
`;

export const UserAvatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`;

export const NavbarMenuInfo = styled.ul`
    display: none;
    height: 70%;
    margin: 0;
    padding: 0;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        list-style: none;
        justify-content: center;
        flex-direction: column;
    }
`;

export const NavbarMenuItemInfo = styled.li`
    height: 100%;
    display: none;
    padding: 0 12px;
    a {
        color: #f9f9f9;
        text-decoration: none;
        font-size: 14px;
        letter-spacing: 1.42px;
        position: relative;
        display: flex;
        p {
            margin-left: 6px;
        }
        &:before {
            content: "";
            height: 2px;
            background-color: #f9f9f9;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        }
        &:hover:before {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;