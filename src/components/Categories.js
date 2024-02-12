import React, {Component} from "react";

class Categories extends Component {

    render() {
            
        const {handleChanges} = this.props;

        return(
            <div className={"options"}>
                <button type="submit" className={"btn all-button choosing_btn"} onClick={()=>handleChanges('')}>All</button>
                <button type="submit" className={"btn btn btn-primary choosing_btn"} onClick={()=>handleChanges('Mountain')}>Mountain</button>
                <button type="submit" className={"btn btn btn-success choosing_btn"} onClick={()=>handleChanges('Beaches')}>Beaches</button>
                <button type="submit" className={"btn btn btn-warning choosing_btn"} onClick={()=>handleChanges('Birds')}>Birds</button>
                <button type="submit" className={"btn btn btn-danger"} onClick={()=>handleChanges('Food')}>Food</button> 
            </div>
        )
    }
}

export default Categories