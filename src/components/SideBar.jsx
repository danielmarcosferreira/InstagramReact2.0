import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";

function SideBar() {
  return (
    <div className="sidebar">
      <Usuario
        name={"Catana"}
        nickName={"catanacomics"}
        image={"assets/img/catanacomics.svg"}
      />

      <Sugestoes />

      <div className="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div className="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}

export default SideBar;
