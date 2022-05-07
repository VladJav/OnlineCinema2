import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main/Main";
import themoviedb from "themoviedb-javascript-library";




function App() {
    themoviedb.common.api_key="enter TMDB API key";
    themoviedb.common.language="uk";
  return (
    <div>
        <Header/>
        <Main/>
    </div>
  );
}

export default App;
