import { useEffect, useState } from 'react';
import './Movie.css';
import axios from '../api/index';
import { NavLink } from 'react-router-dom';

function Movie() {
  const [shows, setShows] = useState([]);
  const [corrent, setCorrent] = useState(8);
  const [searchValue, setSearchValue] = useState('');
  const [filteredShows, setFilteredShows] = useState([]);

  useEffect(() => {
    axios.get("shows")
      .then((response) => {
        setShows(response.data);
        setFilteredShows(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const result = shows.filter(show =>
      show.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredShows(result);
  }, [searchValue, shows]);

  const viewMore = () => {
    setCorrent(corrent + 4);
  };

  const search = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <section>
      <div className="container">
        <h1 className='wrapper-title'>TV SHOWS</h1>
        <form id='form'>
          <input type="text" autoComplete='off' placeholder='Search' id='search' onChange={search} />
        </form>
        <div className="wrapper">
          { 
            filteredShows.slice(0, corrent).map((data) => {
              return (
                <div className="wrapper-card" key={data.id}>
                  <img src={data.image.original} alt={data.name} />
                  <div className="card-text">
                    <h1>{data.name}</h1>
                    <div className="title" style={{display: "flex", justifyContent: "space-between"}}>
                      <p>Genres: #{data.genres[0]}</p>
                      <p>Watch: {data.schedule.time}</p>
                    </div>
                    <div className="btn">
                      <NavLink to={`/details/${data.id}`}><button className="button">Watch</button></NavLink>    
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="buttonView">
          <button className='viewBtn' onClick={viewMore}>View More</button>
        </div>
      </div>
    </section>
  )
}

export default Movie;
