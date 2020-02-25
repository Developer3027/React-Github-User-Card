import React from 'react';


class Search extends React.Component {
    constructor() {
        super();
    this.state = {
        query: ""
    }
}

    handleChange = (e) => {
        this.setState({
          query: e.target.value
        });
      };

render() {
    return(
        <div className="navBase">
            <div className="mainNav">
                <div className="logo">
                    <h3>Github Friends</h3>
                </div>
                <div className="searchForm">
                
                    <input 
                        type="text"
                        name="find" 
                        placeholder="Search" 
                        value={this.state.query}
                        onChange={this.handleChange}/>
                    <button onClick={()=> this.props.search(this.state.query)}>Go</button>
                    
                </div>
            </div>
        </div>
        );
    }
}


export default Search