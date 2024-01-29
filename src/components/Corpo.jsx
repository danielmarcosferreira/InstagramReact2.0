import Posts from "./Posts";
import SideBar from "./SideBar";
import Stories from "./Stories";

function Corpo() {
  return (
    <div className="corpo">
      <div className="esquerda">
        <Stories />

        <Posts />
      </div>

      <SideBar />
    </div>
  );
}

export default Corpo;
