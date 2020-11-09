import React from "react";
import {Col} from "react-bootstrap";

type VideoPlayerProps = {
    magnet: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = (props: VideoPlayerProps) => {
    const WebTorrent = require('webtorrent');
    let client = new WebTorrent();

    client.add(props.magnet, (torrent: any) => {

        // Torrents can contain many files. Let's use the .mp4 file
        let file = torrent.files.find(function (file: File) {
            return file.name.endsWith('.mp4')
        })

        // Display the file by adding it to the DOM.
        // Supports video, audio, image files, and more!
        // @ts-ignore
        file.renderTo('video#video-player')

    });


    return (
        <Col md={8} className="top-margin">
            <video id="video-player">yo</video>
        </Col>
    )
}

export default VideoPlayer