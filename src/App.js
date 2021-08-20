// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   let [movieinfo, setMovieinfo] = useState(null);
//   let [title, setTitle] = useState("the avengers");

//   useEffect(() => {
//     getMovieData();
//   }, [ ]);

//   function readTitle(value) {
//     setTitle(value);
//   }

//   function getMovieData() {
//     let url = `http://www.omdbapi.com/?t=${title}&apikey=fbfa66cd`;

//     fetch(url)
//       .then((Response) => Response.json())
//       .then((movie) => {
//         console.log(movie);
//         setMovieinfo(movie);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }

import {useState,useEffect} from 'react';
import './App.css';

function App() {

  let [movieinfo,setMovieinfo]=useState(null);
  let [title,setTitle]=useState("the avengers");

  useEffect(()=>{

    getMovieData();

  },[])


  function readTitle(value){
    setTitle(value);
  }

  function getMovieData(){

    let url=`https://omdbapi.com/?t=${title}&apikey=784a9d41`;
  
    fetch(url)
    .then((response)=>response.json())
    .then((movie)=>{
        console.log(movie);
        setMovieinfo(movie);
    })
    .catch((err)=>{
      console.log(err);
    })
  

  }


  
















  return (
    <div className="App">
      <div className="container">
        <div className="spacing">
          <h1>Movie Search</h1>
          <div className="inp-grp">
            <input
              type="text"
              placeholder="Enter the name of movie"
              className="search__field"
              onChange={(event)=>{readTitle(event.target.value)}}
            />
            <button onClick={getMovieData} className="inp_btn">
              Get Movie
            </button>
          </div>
              {
                movieinfo?.Error===undefined?(

                  <div className="movie">
                  <div className="poster">
                    <img
                      src={movieinfo?.Poster}
                      alt="Movie Poster"
                      className="poster__img"
                    />
                  </div>
                  <div className="details">
                    <div className="spacing pd">
                      <h1>{movieinfo?.Title}</h1>
                      <p>
                        <strong>Genre: </strong> {movieinfo?.Genre}
                      </p>
                      <p>
                        <strong>Actors: </strong>
                        {movieinfo?.Actors}
                      </p>
                      <p>
                        <strong>Plot: </strong>
                        {movieinfo?.Plot}
                      </p>
                      <p>
                        <strong>Rated: </strong>
                        {movieinfo?.Rated}
                      </p>
                      <p>
                        <strong>Language: </strong>
                        {movieinfo?.Language}
                      </p>
                      <p>
                        <strong>Runtime: </strong>
                        {movieinfo?.Runtime}
                      </p>
      
                      <div className="ratings">
                        {movieinfo?.Ratings.map((rating, index) => (
                          <div key={index}>
                            <strong>{rating.Source}</strong>
                            <h3>{rating.Value}</h3>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                ):(
                  <h1>Movie Not Found</h1>
                )
              }

         
        </div>
      </div>
    </div>
  );
}

export default App;
