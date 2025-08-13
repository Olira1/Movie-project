import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState([]);
  // const [traileUrl, setTraileUrl] = useState("")

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        console.log(fetchUrl);
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  // const handleClick = (movie) => {
  //     if(traileUrl){
  //         setTraileUrl("")
  //     }else{
  //         movieTrailer(movie?.title||movie?.name||movie?.original_name)
  //         .then((url) => {
  //             console.log(url)
  //             const urlparams = new URLSearchParams(new URL(url).search)
  //             console.log(urlparams)
  //             console.log(urlparams.get('v'))
  //             setTraileUrl(urlparams.get('v'))
  //         })
  //     }
  // }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <h1>{title}</h1>
      <div>
        {movie?.map((movie, index) => {
          <img
            // onClick={()=> handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row_poster $ {isLargeRow && "row_posterLarge"}`}
          />;
        })}
        {/* <div style={{padding: '40px'}}>
                    {traileUrl && <YouTube videoId={traileUrl} opts={opts} />}
                </div> */}
      </div>
    </div>
  );
};

export default Row;
