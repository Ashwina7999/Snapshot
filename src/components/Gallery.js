import React from "react";

function Gallery(props) {

    let filterValues = props.filterValues;

    if(props.sort==="Old") {
        filterValues = filterValues.slice().sort((a, b) => b.id - a.id);
    }

    const importAll = (r) => {
        let images = {};
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item) });
        return images
    }
    
    const images = importAll(require.context('/src/assets/', false, /\.(png|jpe?g|svg)$/))

    return(   
        <div className={"row"}>
            {
                filterValues.map(
                    data => (
                        <div key={data.id} className={"column"}>
                            <div className={"card"} >
                                <img src={images[data.image]} className="card-image" alt="Cards"></img>
                            </div>
                        </div>
                    )
                )
            }
        </div> 
    )
}

export default Gallery