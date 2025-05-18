import React, { useEffect } from 'react'
import ImgSlider from '../Components/ImgSlider'
import VideosBanner from '../Components/VideosBanner'

import { useDispatch, useSelector } from "react-redux";
import { setMovie } from '../Redux/Reducers/MovieSlice';
import { db } from '../Request/FirebaseApp';
import { collection, getDocs } from 'firebase/firestore';
import MoviesRow from '../Components/MoviesRow';
import Footer from '../Components/Footer';

const Hero = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { recommanded, originals, trendings, newDisney } = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const getMovies = async () => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    const movies = collection(db, 'movies');
    const moviesData = await getDocs(movies);

    const moviesList = moviesData.docs.map((doc) => {
      switch(doc.data().type) {
        case "recommend":
          recommends = [...recommends, { id: doc.id, ...doc.data() }];
          break;
  
        case "new":
          newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
          break;
  
        case "original":
          originals = [...originals, { id: doc.id, ...doc.data() }];
          break;
  
        case "trending":
          trending = [...trending, { id: doc.id, ...doc.data() }];
          break;
      }
    });
    dispatch(
      setMovie({
        recommanded: recommends,
        originals: originals,
        trendings: trending,
        newDisney: newDisneys,
      })
    );
    return moviesList
  };

  useEffect(() => {
    getMovies();
  }, [currentUser.username]);

  return (
    <div>
      <ImgSlider />
      <VideosBanner />
      <MoviesRow movies={trendings} title="Trending" />
      <MoviesRow movies={originals} title="Originals" />
      <MoviesRow movies={newDisney} title="New to Disney+" />
      <MoviesRow movies={recommanded} title="Recommended for You" />
      <Footer />
    </div>
  )
}

export default Hero