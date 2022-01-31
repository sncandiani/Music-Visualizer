import React, {useState , useEffect, useRef} from "react"
import Wave from "@foobar404/wave"
import './css/musicContainer.css'

const MusicVisualizer = () => {
    let [wave] = useState(new Wave())
    let options = {type:["orbs", "shockwave", "shockwave"], colors: ["white", "red", "purple"]};
    let songList = [
        "./bjork.mp3", 
        "./kelela.mp3", 
        "./batabid.mp3"
    ]
    //shuffles an array of song pathways 
    function shuffleSongs() {
        let song = songList[Math.floor(Math.random() * songList.length)];
        return song
    }
    //running wave after audio has loaded 
    useEffect(() => {
        wave.fromElement("player","myCanvas", options);
    }, [])
    return (
        <div className="container">
            <audio autoPlay id="player" src={shuffleSongs()} crossOrigin="anonymous"></audio>
            <canvas id="myCanvas" height="500px" width="1000px"></canvas>
        </div>
    )

}

export default MusicVisualizer 