function Sugestion({name, image, reason}) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={image} />
        <div className="texto">
          <div className="nome">{name}</div>
          <div className="razao">{reason}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}

function Sugestoes() {
  const suggestions = [
    {
      name: "bad.vibes.memes",
      image: "assets/img/bad.vibes.memes.svg",
      reason: "Segue você",
    },
    {
      name: "chibirdart",
      image: "assets/img/chibirdart.svg",
      reason: "Segue você",
    },
    {
      name: "razoesparaacreditar",
      image: "assets/img/razoesparaacreditar.svg",
      reason: "Novo no Instagram",
    },
    {
      name: "adorable_animals",
      image: "assets/img/adorable_animals.svg",
      reason: "Segue você",
    },
    {
      name: "smallcutecats",
      image: "assets/img/smallcutecats.svg",
      reason: "Segue você",
    },
  ];
  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestions.map((s) => (
        <Sugestion key={s.name} name={s.name} image={s.image} reason={s.reason} />
      ))}
    </div>
  );
}

export default Sugestoes;
