import React, {Component} from "react";
import SearchBox from "./SearchBox";
import Categories from "./Categories";
import Gallery from "./Gallery";
import Footer from "./Footer";

class Header extends Component {

    constructor() {
        super()
        this.state = { cards : [], searchValues : '', sort : ''};
    }

    componentDidMount() {
        fetch('https://ashwina7999.github.io/JsonAPI/Snapshot.json')
        .then(response => response.json())
        .then(response => this.setState({cards : response}));
    }

    handleChanges = (event) => {
        this.setState({searchValues : event});
    }

    handleFashion = (event) => {
        this.setState({sort : event});
    }
      
    render() {

        const {cards, searchValues, sort} = this.state;

        const filterValues = cards.filter(value => value.category.toLowerCase().includes(searchValues.toLowerCase()));
        
        return(
            <div>
                <div className="headerTab">
                    <h1 className="heading">Snap Shot's</h1>
                    <SearchBox placeholder={"Search Your Photos..."} handleChanges={this.handleChanges} handleFashion={this.handleFashion}/>
                    <Categories handleChanges={this.handleChanges}/>
                </div>
                <h4 className="freeStock">Free Stock Photos</h4>
                <Gallery filterValues={filterValues} sort={sort}/>
                <Footer />
            </div>
        )
    }
}

export default Header