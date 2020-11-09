import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom';
import Watch from "./pages/watch";
import VideoPicker from "./pages/videopicker";
import {Container, Nav, Navbar, NavbarBrand, NavLink, Row} from "react-bootstrap";

function App() {
    const [currentMagnet, setCurrentMagnet] = useState<string>('')

    const onSelect = (newMagnet: string) => {
        console.log("onSelect Called")
        setCurrentMagnet(newMagnet)
    }

    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <NavbarBrand as={Link} to="/">PeerAcademy</NavbarBrand>
                <Nav>
                    <NavLink as={Link} to="/">Home</NavLink>
                    {currentMagnet.length > 0 && <NavLink as={Link} to="/watch">Continue watching</NavLink>}
                </Nav>
            </Navbar>
            <Container fluid>
                <Switch>
                    <Route path="/watch">
                        <Watch magnet={currentMagnet}/>
                    </Route>
                    <Route path="/">
                        <VideoPicker onSelect={onSelect}/>
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
