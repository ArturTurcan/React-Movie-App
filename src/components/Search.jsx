import React, {useState} from "react";
const Search = (props) =>{
    const {searchMovies = Function.prototype,} = props
    const [type, setType] = useState("all")
    const [search, setSearch] = useState(localStorage.getItem("key"))
  const  handleKey = (event) =>{
if (event.key === "Enter"){
    searchMovies(search,type)
}
    };
   const  handleFilter = (event) =>{
          setType(event.target.dataset.type)
         searchMovies(search, event.target.dataset.type)
    };
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="search"
                            id="email_inline saveServer"
                            type="search"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value)
                                localStorage.setItem("key", e.target.value)
                            }}
                            onKeyDown={handleKey}
                            />
                        <button className="search-btn btn"
                                 onClick={() =>
                                    searchMovies(search, type)}>Search</button>
                    </div>
                    <div>
                        <label>
                            <input className="with-gap"
                                   name="type"
                                   type="radio"
                                   data-type="all"
                                   onChange={handleFilter}
                                   checked={type === "all"}/>
                            <span>All</span>
                        </label>  <label>
                        <input className="with-gap" name="type"
                               type="radio" data-type="movie"
                               onChange={handleFilter}
                               checked={type === "movie"}/>
                        <span>Movies Only</span>
                    </label> <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               data-type="series"
                               onChange={handleFilter}
                               checked={type === "series"}/>
                        <span>Series Only</span>
                    </label>
                        <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               data-type="game"
                               onChange={handleFilter}
                               checked={type === "game"}/>
                        <span>Game Only</span>
                    </label>
                    </div>
                </div>
            </div>

    )
}

export {Search}
