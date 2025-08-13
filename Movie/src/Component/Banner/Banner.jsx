import React, { useEffect, useState } from "react";
import './Banner.css'
import axios from "../../utils/axios.js";
import requests from "../../utils/requests.js";

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request)
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <button>Play</button>
          <button>List</button>
        </div>
        {/* <h1>{truncate(movie?.overview, 150)}</h1> */}
      </div>

      <div className="banner--fadeBottom" />
    </div>
  );

};

export default Banner;
