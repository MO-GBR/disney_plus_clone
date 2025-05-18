import React from 'react'
import { RowContainer, RowContent, RowWrap } from '../Style/MoviesRow'
import { Link } from 'react-router-dom';

const MoviesRow = ({movies, title}) => {
  return (
    <RowContainer>
        <h4>{title}</h4>
        <RowContent>
            {
                movies && movies.map((movie, index) => (
                    <RowWrap key={index}>
                        <Link to = {`/detail/` + movie.id}>
                            <img src = {movie.cardImg} alt = {movie.title} />
                        </Link>
                    </RowWrap>
                ))
            }
        </RowContent>
    </RowContainer>
  )
}

export default MoviesRow