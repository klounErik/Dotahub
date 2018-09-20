import React, {Component} from 'react'
import './Updates.css'
import Loader from '../Loader/Loader';

export default class Updates extends Component{
    state = {
        updates: [],
        html: ''
    }

    fetchUpdate = async () =>{
        const req = await fetch('http://localhost:1234/api/dotaupdate')
        const res = await req.text()
        this.setState({html: res})
    }

    componentDidMount(){
        this.fetchUpdate()
    }

    render(){
        if(this.state.html.length === 0){
            return <Loader/>
        }
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(this.state.html, "text/html")
        const update = htmlDoc.getElementsByClassName('entry-content')
        const content = update[0].innerHTML
        const content1 = update[1].innerHTML
        const content2 = update[2].innerHTML
        const content3 = update[3].innerHTML
        const content4 = update[4].innerHTML
        const splitcontent = content.split('<br>')
        const splitcontent1 = content1.split('<br>')
        const splitcontent2 = content2.split('<br>')
        const splitcontent3 = content3.split('<br>')
        const splitcontent4 = content4.split('<br>')
        console.log(splitcontent)
        const liste = splitcontent.map((a, b) =>{
            return <ul key={b}>{a}</ul>
        })
        const liste1 = splitcontent1.map((a, b) =>{
            return (<div key={b}>
            <ul>{a}</ul>
            </div>)
        })
        const liste2 = splitcontent2.map((a, b) =>{
            return (<div key={b}>
                <ul>{a}</ul>
                </div>)
        })
        const liste3 = splitcontent3.map((a, b) =>{
            return (<div key={b}>
                <ul>{a}</ul>
                </div>)
        })
        const liste4 = splitcontent4.map((a, b) =>{
            return (<div key={b}>
                <ul>{a}</ul>
                </div>)
        })
        return(
            <div className="newsWrapper">
                <div className="textWrapper">
                {liste}
                <hr/>
                {liste1}
                <hr/>
                {liste2}
                <hr/>
                {liste3}
                <hr/>
                {liste4}
                </div>
            </div>
        )
    }
}