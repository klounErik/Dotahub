import React,{Component} from 'react'
import './FavouriteStreams.css'

export default class FavouriteStreams extends Component{
    render(){
        return(
        <div className="FavstreamWrapper">
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=admiralbulldog&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=moonmoon_ow&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div> 
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=s4&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=purgegamers&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=day9tv&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=wagamamatv&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=dotacapitalist&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=draskyl&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        <div className="videoContainer">
        <iframe
        src="https://player.twitch.tv/?channel=odpixel&autoplay=false"
        height={250}
        width={400}
        allowFullScreen={true}>
        </iframe>
        </div>
        
        </div> 
    )}
}