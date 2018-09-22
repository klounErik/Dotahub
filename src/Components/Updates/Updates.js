import React, {Component} from 'react'
import './Updates.css'

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
            return <h1>Loading...</h1>
        }
        const parser = new DOMParser()
        const htmlDoc = parser.parseFromString(this.state.html, "text/html")
        const update = htmlDoc.getElementsByClassName('entry-content')
        const content = update[0].innerHTML
        const content1 = update[1].innerHTML
        const content2 = update[2].innerHTML
        const content3 = update[3].innerHTML
        const content4 = update[4].innerHTML
        const splitcontentA = content.split('<br>')
        const splitcontentB = content1.split('<br>')
        const splitcontentC = content2.split('<br>')
        const splitcontentD = content3.split('<br>')
        const splitcontentE = content4.split('<br>')
        
        const liste = splitcontentA.map((a, b) =>{
            let c = a.split('<br clear="left">')
            return (<div key={b}>
            <ul>{c[0].split('*')}</ul>
            </div>)
        })
        const liste1 = splitcontentB.map((a, b) =>{
            let c = a.split('<br clear="left">')
            return (<div key={b}>
            <ul>{c[0].split('*')}</ul>
            </div>)
        })
        const liste2 = splitcontentC.map((a, b) =>{
            let c = a.split('<br clear="left">')
            return (<div key={b}>
            <ul>{c[0].split('*')}</ul>
            </div>)
        })
        const liste3 = splitcontentD.map((a, b) =>{
            let c = a.split('<br clear="left">')
            return (<div key={b}>
            <ul>{c[0].split('*')}</ul>
            </div>)
        })
        const liste4 = splitcontentE.map((a, b) =>{
            let c = a.split('<br clear="left">')
            return (<div key={b}>
            <ul>{c[0].split('*')}</ul>
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