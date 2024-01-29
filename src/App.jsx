import "./Reset.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Corpo from "./components/Corpo";

function App() {
  return (
    <>
      <div className="root">
        <NavBar />

        <Corpo />

        <div className="fundo-mobile">
          <ion-icon name="home"></ion-icon>
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="add-circle-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </>
  );
}

export default App;
