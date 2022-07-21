import {Movie} from "./Movie";
function Movies(props){
const {movies = [] } = props;
    return (
        <div className="movies">
            {movies.length ? movies.map((movie) =>  <Movie key={movies.imdbID} {...movie}/>) : (<h4>NOTHING FOUND</h4>)
            }
        </div>
    )
}
export {Movies}
