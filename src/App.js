import React from 'react';
import PropTypes from "prop-types"
import axios from "axios"
import Movie from "./Movie"

import "./App.css"
class App extends React.Component
{
  
  state = {
    isLoading: true
    ,movies:[]
  }

  
  getMovies = async () => {
    //const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
    const {data: {data : {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    this.setState( {movies, isLoading:false})
  }

  componentDidMount()
  {
    this.getMovies();
  }

  render()
  {
    const {isLoading,movies} = this.state;
    return (
    <section className="container">
      {
      isLoading ? 
        (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        )
      
      : (
        <div className="movies">
          {
            movies.map(movie => (
           <Movie key={movie.id} id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_image} genres={movie.genres}/>
           ))}
        </div>
      )}
    </section>
    )
  }
}


export default App;
