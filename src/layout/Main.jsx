import React, {useState, useEffect} from "react";
import { Movies } from "../components/Movies"
import { Search } from "../components/Search"
import { Preloader } from "../components/Preloader";
import {Pagination} from "../components/Pagination"
const API_KEY = process.env.REACT_APP_API_KEY
function Main (){
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage,setCurrentPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    const  searchMovies = (str, type = "all") => {
        setLoading(true)
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=${currentPage}&s=${str}${type !== "all" ?`&type=${type}` : '' }`)
            .then(response => response.json())
            .then((data) => {
                setLoading(false)
                let newArr = data.Search
                const arrMovie = newArr.filter(el => el.Type.includes("movie"))
                const arrSeries = newArr.filter(el => el.Type.includes("series"))
                const arrGame = newArr.filter(el => el.Type.includes("game"))
                console.log(arrMovie);
                console.log(arrSeries);
                console.log(arrGame);
                const sorted = data.Search.sort((a,b) => {
                    return parseFloat(a.Year) - parseFloat(b.Year)
                })
                setTotalResults(data.totalResults)
                setMovies(sorted)
            })
            .catch((err) =>{
                console.error(err)
                setLoading(false)
            })
    };
        useEffect(()=> {
            console.log("useeffect")
            fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&page=${currentPage}&s=${localStorage.getItem("key")}`)
                .then((response) => response.json())
                .then((data) =>{
                    setMovies(data.Search)
                    setTotalResults(data.totalResults)
                setLoading(false)
        })
            .catch((err) => {
                console.error(err)
                setLoading(false)
})
        }, [currentPage])
            return (
                <main className="container content">
                <Search searchMovies={searchMovies} />
                {loading ?( <Preloader/> ) :( <Movies movies={movies}/>)}
                    <Pagination currentPage={currentPage}  totalPosts={totalResults} paginate={(e)=> {
                            // totalResults.classList.add("active")
                        console.log(e)
                        setCurrentPage(e)
                    }} />
                </main>
            )
    }
export {Main}
