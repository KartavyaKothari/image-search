import React , {Component} from 'react';
import SearchBar from './SearchBar';
import axios from './axios';

class App extends Component{
    onFormSubmit(term){
        console.log(term);
    }

    render (){
        return (
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onSubmit={this.onFormSubmit}/>
            </div>
        );
    }
}

export default App;