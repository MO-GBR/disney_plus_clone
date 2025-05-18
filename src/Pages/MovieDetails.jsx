import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

import { doc, getDoc } from "@firebase/firestore";

import { db } from '../Request/FirebaseApp';

import { MovieContainer, MovieAddList, MovieBackground, MovieContent, MovieControls, MovieDescription, MovieGroupWatch, MoviePlay, MovieSubTitle, MovieTitle, MovieTrailer } from '../Style/MovieDetails';

const MovieDetails = () => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    const getDetails = async () => {
        const moviesDoc = doc(db, `movies/${id}`);
        const moviesSnapshot = await getDoc(moviesDoc).then((doc) => {
            if(doc.exists) {
                setDetailData(doc.data());
            } else {
              console.log("no such document in firebase 🔥");
            }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
        return moviesSnapshot
    };

    useEffect(() => {
        getDetails();
    }, [id]);

    return (
        <MovieContainer>
            <MovieBackground>
                <img alt={detailData.title} src={detailData.backgroundImg} />
            </MovieBackground>
            <MovieTitle>
                <img alt={detailData.title} src={detailData.titleImg} />
            </MovieTitle>
            <MovieContent>
                <MovieControls>
                    <MoviePlay>
                        <img src="/images/play-icon-black.png" alt="play-icon-black" />
                        <span>PLAY</span>
                    </MoviePlay>
                    <MovieTrailer>
                        <img src="/images/play-icon-white.png" alt="play-icon-white" />
                        <span>Trailer</span>
                    </MovieTrailer>
                    <MovieAddList>
                        <span />
                        <span />
                    </MovieAddList>
                    <MovieGroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="group-icon" />
                        </div>
                    </MovieGroupWatch>                  
                </MovieControls>
                <MovieSubTitle>{detailData.subTitle}</MovieSubTitle>
                <MovieDescription>{detailData.description}</MovieDescription>
            </MovieContent>
        </MovieContainer>
    )
}

export default MovieDetails