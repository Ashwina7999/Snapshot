import React, { Component } from "react";

class SearchBox extends Component {

    render() {

        const {placeholder, handleChanges, handleFashion} = this.props;

        return(
            <div>
                <select className={"sortFashion"} onChange={(e)=>handleFashion(e.target.value)}>
                    <option value="Trending">Trending</option>
                    <option value="Old">Old</option>
                </select> 

                <form role="search" className={"search_bar"} onSubmit={(e)=>e.preventDefault()}>
                    <div className={"input-group"}>
                        <input id="box" type="text" className={"form-control"} placeholder={placeholder} onChange={(e)=>handleChanges(e.target.value)}></input>
                        <div className={"input-group-btn"}>
                            <button type="submit" className={"btn btn btn-warning"}>
                                <span className={"glyphicon glyphicon-search"}></span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBox