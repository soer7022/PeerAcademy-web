import {Button, Card, Col} from "react-bootstrap";
import React from "react";
import placeholder from "../img/video-placeholder.png"
import {Link} from "react-router-dom";

export type VideoCardProps = {
    name: string,
    date: string,
    magnetLink: string,
    key: number,
    description: string,
    onSelect: (newMagnet: string) => void
}

const VideoCard: React.FC<VideoCardProps> = (props: VideoCardProps) => {
    return (
        <Col md={4} lg={3} className="top-margin">
            <Card>
                <Card.Img variant="top" src={placeholder}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button as={Link} onClick={() => props.onSelect(props.magnetLink)} to="/watch" variant="primary">Go
                        somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-center text-secondary">
                    {props.date}
                </Card.Footer>
            </Card>
        </Col>
    )
}
export default VideoCard;