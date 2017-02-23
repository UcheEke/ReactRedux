/**
 * Created by ekeu on 17/02/17.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            term : '',
            canSearch : true
        };

        setInterval(()=>{
            this.setState({canSearch : !this.state.canSearch});
        },300);
    }



    onInputChange(term){
        this.setState({term});

        // Throttling the input change. Alternatively, use lodash's debounce function.
        if (this.state.canSearch){
            this.props.onSearchTermChange(term);
        }
    }

    render(){
        return (
            <div className="search-bar">
                <input value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
        );
    }
}

export default SearchBar;
