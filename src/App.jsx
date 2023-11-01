import Card from "./components/Card"
import "./styles/globals.css"
import esbPosterImg from "./assets/esb-poster.jpeg"
import rotjPosterImg from "./assets/rotj-poster.jpeg"
import swPosterImg from "./assets/sw-poster.jpeg"


export default

function App() {
  return (
  <div>
    <Card title="Poster: Star Wars (1977)" posterImg={swPosterImg}/>
    <Card title="Poster: Empire Strikes Back (1980)" posterImg={esbPosterImg}/>
    <Card title="Poster: Return of the Jedi (1983)" posterImg={rotjPosterImg}/>
  </div>
  );
}
