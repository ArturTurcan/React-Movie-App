import React from "react";

class Search extends React.Component {
    state ={ search: "",
    }
    handleKey = (event) =>{
if (event.key === "Enter"){
    this.props.searchMovies(this.state.search)
}
    }
    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="search"
                            id="email_inline"
                            type="search"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}
                            />
                        <button className="search-btn btn" onClick={() => this.props.searchMovies(this.state.search)}>Search</button>
                    </div>
                </div>
            </div>
    )
    }
}
export {Search}
