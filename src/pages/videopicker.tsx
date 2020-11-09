import React from "react";
import VideoCard from "../components/videocard";
import {Row} from "react-bootstrap";

type VideoPickerProps = {
    onSelect: (newMagnet: string) => void
}

const VideoPicker: React.FC<VideoPickerProps> = (props: VideoPickerProps) => {
    const items = [1, 2, 3, 4, 5, 6]
    return (
        <Row>
            {items.map(i =>
                <VideoCard onSelect={props.onSelect} name={"Lecture " + i} date={i + "/10-2017"} magnetLink={'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=udp%3A%2F%2Fexplodie.org%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.empire-js.us%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'}
                           description="This week we'll be focusing on how to train a dragon" key={i}/>
            )}
        </Row>
    )
}

export default VideoPicker