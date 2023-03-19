import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../MovieListing/MovieListscss.scss";

function MovieList() {
  const contact = useSelector((state) => state.data);
  const show = useSelector((state) => state.shows);
 
  return (
    <>
      <div className="container">
        <h1 className="head">Movies</h1>
        {contact ? (
          contact.map((item) => {
            const { Poster, Title, Type, Year,imdbID } = item;
            return (
              <>
              <div className="cards">
                <div className="card " style={{ width: "18rem" }}>
              <NavLink to={`/movie/${item.imdbID}`}>
                  <img
                    src={Poster}
                    className="card-img-top img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title title">
                      {Title.slice(0, 10)}...
                    </h5>
                    <p className="card-text type">{Type}</p>
                    <p className="year">{Year}</p>
                  </div>
                    </NavLink>
                </div>
              </div>
              </>
            );
          })
        ) : (
          <h1>Page Not Found</h1>
        )}
      </div>

      <section>
        <h1 className="head">Shows</h1>
        {show ? (
          show.map((item) => {
            const { Poster, Title, Type, Year } = item;
            return (
              <div className="cards show">
                <div className="card " style={{ width: "18rem" }}>
                <NavLink to={`/movie/${item.imdbID}`}>
                  <img
                    src={Poster}
                    className="card-img-top img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title title">
                      {Title.slice(0, 10)}...
                    </h5>
                    <p className="card-text type">{Type}</p>
                    <p className="year">{Year}</p>
                  </div>
                  </NavLink>
                </div>
              </div>
            );
          })
        ) : (
          <h1>Page Not Found</h1>
        )}
      </section>
    </>
  );
}

export default MovieList;
