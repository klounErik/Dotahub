import React, {Component} from 'react'
import './Search.css'

export default class Search extends Component{

    state = {
        result: []
    }
  

    componentWillReceiveProps(){
        this.setState({result: this.props.result})
        console.log(this.state.result)
    }
 
    render(){
        const {result} = this.state
        const liste = result.map((result, index) =>{
            console.log(result)
            return (
            <div key={index} className="searchContainer">
            <a href={`/profile/${result.account_id}`}>
            <img alt="" height={50} src={result.avatarfull}/>
            <ul>{result.personaname}</ul>
            </a>
            </div>
            )
        })
        return(<div className="searchWrapper">
            {liste}
        </div>)
    }
}