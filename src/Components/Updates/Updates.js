import React, {Component} from 'react'


export default class Updates extends Component{
    state = {
        updates: []
    }

    getUpdates = async () =>{
        const req = await fetch('http://localhost:1234/api/updates')
        const res = await req.json()
        this.setState({updates: res.appnews.newsitems})
        console.log(res.appnews.newsitems)
    }

    componentDidMount(){
        this.getUpdates()
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