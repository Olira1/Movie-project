import React from 'react';
import './RowList.css'
import Row from '../Row/Row';
import requests from '../../../utils/requests';

const RowList = () => {
    return (
      <div className="row_list">
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow={true}
        />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      </div>
    );
}

export default RowList;
