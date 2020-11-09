import React from "react";
import VideoPlayer from "../components/videoplayer";
import {Row} from "react-bootstrap";
import QuestionList from "../components/questionlist";

type WatchProps = {
    magnet: string
}

const Watch: React.FC<WatchProps> = (props: WatchProps) => {
    return (
        <Row className="watch-page">
            <VideoPlayer magnet={props.magnet}/>
            <QuestionList/>
        </Row>
    )
}

export default Watch