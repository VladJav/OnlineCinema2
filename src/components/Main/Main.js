import Container from "react-bootstrap/Container";
import './Main.css';
import Categories from "../Categories/Categories";
import Movies from "../Movies/Movies";

import {BrowserRouter,Routes, Route} from "react-router-dom";
import Player from "../Player/Player";
function Main(){

    return(
        <div className="main">
            <Container>
                <div className="main_wrapper">
                    <Categories/>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/watch/*" element={<Player/>}></Route>
                            <Route exact path="/*" element={<Movies/>}></Route>
                        </Routes>

                    </BrowserRouter>

                </div>
            </Container>
        </div>
    );
}
export default Main;