import { useState } from "react";

function Usuario({name, nickName, image}) {

  const [nomeDoUsuario, setNomeDoUsuario] = useState(name);
  const [userImage, setUserImage] = useState(image)

  function changeName() {
    let newName = prompt("Digite o novo nome");
    if (!newName) {
      alert("Digite um nome valido!");
      changeName()
    } else {
      setNomeDoUsuario(newName);
    }
  }

  function changeImage () {
    let newImage = prompt("Coloque o link da nova imagem")
    if (!newImage) {
      alert("Link invalido, digite outro!")
      changeImage()
    } else {
      setUserImage(newImage)
    }
  }

  return (
    <div className="usuario">
      <img src={userImage} onClick={changeImage}/>
      <div className="texto">
        <strong>{nickName}</strong>
        <span>
          {nomeDoUsuario}
          <ion-icon onClick={changeName} name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}

export default Usuario;
