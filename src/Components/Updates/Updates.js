import React, {Component} from 'react'


export default class Updates extends Component{
    state = {
        updates: []
    }

    componentDidMount(){
        this.props.getUpdates()
        .then(res => this.setState({updates: res.appnews.newsitems}))
    }

    render(){
        const {updates} = this.state
        const liste = updates.map((news, index) =>{
            let date = new Date(1000*news.date)
            return <ul key={index}><a href={news.url}>{news.title}</a> {date.toDateString()}</ul>
        })
        return(
            <div>
            {liste}
            </div>
        )
    }
}