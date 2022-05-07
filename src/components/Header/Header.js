import './Header.css';
import Container from 'react-bootstrap/Container'
import Search from "../../utils/Search";


function Header(){
    return (
        <div className="header">
            <Container>
                <div className="header_wrapper">
                    <div className="logo">
                        <a id ="logo" href="/">MY CINEMA</a>
                    </div>
                    <div className="search">
                        <Search></Search>
                    </div>
                </div>
            </Container>
        </div>
    );

}
export default Header;