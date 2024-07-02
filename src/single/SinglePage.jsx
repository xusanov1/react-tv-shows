import "./SinglePage.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "../api/index"
const SinglePage = () => {
     const [movie, setMovie] = useState(null)
     const location = useParams()     
     useEffect(() => {
          axios.get(`shows/${location.id}`)
               .then((response) => setMovie(response.data))
               .catch((error) => console.log(error))   
     }, [])

  return (
     <section className="single-section">
          <div className="container">
               <div className="single-wrapper">
                    <div className="wrapperCard">
                         <div className="cardImage">
                              <img src={movie?.image?.original} alt="" />
                         </div>
                         <div className="wrapperCardContent">
                              <h1>{movie?.name}</h1>
                              <p>{movie?.summary}</p>
                              <div className="contentFooter">
                                   <p>Genres: #{movie?.genres[0]}</p>
                                   <p>Language: {movie?.language}</p>
                                   <p>Status: {movie?.status}</p>
                                   <p>Rating: {movie?.rating.average}</p>
                                   <p>
                                   <a href={movie?.officialSite}> View Site </a>
                                   </p>
                                   <p>timezone: {movie?.network?.country.code}</p>                                
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section>
  )
}

export default SinglePage