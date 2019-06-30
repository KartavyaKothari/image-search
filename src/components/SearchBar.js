import React,{Component} from 'react';

class SearchBar extends Component{
    onInputChanged(event){
        console.log(event.target.value);
    }

    state = {term: ''};

    // constructor(){
    //     this.state = this.state.bind(this);
    // }
    
    onFormsubmitted=(e)=>{
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormsubmitted}>
                    <div className="field">
                        <label>Image search</label>
                        <input 
                            type="text" 
                            onChange={e=>this.setState({term: e.target.value})}
                            value ={this.state.term}    
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;