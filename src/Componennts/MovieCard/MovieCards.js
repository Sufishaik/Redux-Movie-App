import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MovieApi from "../Apis/MovieApi";
import "../MovieCard/MovieCardscss.scss";
function MovieCards() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const ApiKey = "cad23ee4";
  const contact = useSelector((state) => state.fetchData);
  console.log(contact);
  useEffect(() => {
    const fetchQuery = async () => {
      const resp = await MovieApi.get(
        `?apikey=${ApiKey}&i=${imdbID}&Plot=full`
      ).catch((err) => {
        console.log("Err ", err);
      });
      console.log("The resp from api show is ", resp.data);
      dispatch({ type: "FETCHQUERY", payload: resp.data });
    };
    fetchQuery();
    
  }, [dispatch, imdbID]);
  return (
    <>
      <div className="container">
        <div className="details-left">
          <div className="title"><h1>{contact.Title}</h1></div>
          <div className="rating">
            <span>
              IMDB Rating : <i className="fa fa-star">{contact.imdbRating}</i>
            </span>
            <span>
              IMDB Votes : <i className="fa fa-star">{contact.imdbVotes}</i>
            </span>
            <span>
              Runtime : <i className="fa fa-star">{contact.Runtime}</i>
            </span>
            <span>
              Year : <i className="fa fa-star">{contact.Year}</i>
            </span>
          </div>
          <div className="plot">{contact.Plot}</div>
          <div className="info">
            <div>
              <span>Director : </span>
              <span>{contact.Director}</span>
            </div>
            <div>
              <span>Stars : </span>
              <span>{contact.Actors}</span>
            </div>
            <div>
              <span>Generes : </span>
              <span>{contact.Genre}</span>
            </div>
            <div>
              <span>Language : </span>
              <span>{contact.Language}</span>
            </div>
            <div>
              <span>Awards : </span>
              <span>{contact.Awards}</span>
            </div>
          </div>
        </div>
        <div className="details-right">
          <img src={contact.Poster} alt={contact.Title} />
        </div>
      </div>
    </>
  );
}

export default MovieCards;
