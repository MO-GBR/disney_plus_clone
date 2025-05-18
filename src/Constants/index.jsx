import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { FaFilm, FaRegStar } from "react-icons/fa";
import { MdOutlineLibraryAdd } from "react-icons/md";

export const SliderList = [
    {
        src: "/images/slider/1.jpg",
        alt: "slide-1"
    },
    {
        src: "/images/slider/2.jpg",
        alt: "slide-2"
    },
    {
        src: "/images/slider/3.jpg",
        alt: "slide-3"
    },
    {
        src: "/images/slider/4.jpg",
        alt: "slide-4"
    }
];

export const NavList = [
    { link: "HOME", icon: <AiOutlineHome /> },
    { link: "SERIES", icon: <BiMoviePlay /> },
    { link: "FILMS", icon: <FaFilm /> },
    { link: "NEW & POPULAR", icon: <FaRegStar /> },
    { link: "MY LIST", icon: <MdOutlineLibraryAdd /> }
];

export const BannerList = [
    {
      img: "/images/viewers-disney.png",
      video: "/videos/1564674844-disney.mp4"
    },
    {
      img: "/images/viewers-marvel.png",
      video: "/videos/1564676115-marvel.mp4"
    },
    {
      img: "/images/viewers-national.png",
      video: "/videos/1564676296-national-geographic.mp4"
    },
    {
      img: "/images/viewers-pixar.png",
      video: "/videos/1564676714-pixar.mp4"
    },
    {
      img: "/images/viewers-starwars.png",
      video: "/videos/1608229455-star-wars.mp4"
    },
];