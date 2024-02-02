import { useState } from "react";

function Post(props) {
  const {
    userName,
    userImage,
    contentImage,
    likedByImage,
    likedByText,
    initialLikesAmount,
    isSaved,
    isLiked,
  } = props;

  const [saved, setSaved] = useState(isSaved);
  const [liked, setIsliked] = useState(isLiked);
  const [countLike, setCountLike] = useState(initialLikesAmount);

  function changeSaved() {
    setSaved(!saved);
  }

  function changeLiked() {
    setIsliked(!liked);
    if (liked == true) {
      let newCountLike = countLike - 1;
      setCountLike(newCountLike);
    } else {
      let newCountLike = countLike + 1;
      setCountLike(newCountLike);
    }
  }

  return (
    <div className="post">
      <div className="topo">
        <div className="usuario">
          <img src={userImage} />
          {userName}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img onClick={changeLiked} src={contentImage} />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            {/* <ion-icon onClick={changeLiked} name={liked ? ("heart") : "heart-outline"}></ion-icon> */}

            {liked ? (
              <ion-icon
                onClick={changeLiked}
                class="liked"
                name="heart"
              ></ion-icon>
            ) : (
              <ion-icon onClick={changeLiked} name="heart-outline"></ion-icon>
            )}

            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              onClick={changeSaved}
              name={saved ? "bookmark" : "bookmark-outline"}
            ></ion-icon>
          </div>
        </div>

        <div className="curtidas">
          <img src={likedByImage} />
          <div className="texto">
            Curtido por <strong>{likedByText}</strong> e{" "}
            <strong>outras {countLike} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Posts() {
  const posts = [
    {
      userName: "meowed",
      userImage: "assets/img/meowed.svg",
      contentImage: "assets/img/gato-telefone.svg",
      likedByImage: "assets/img/respondeai.svg",
      likedByText: "respondeai",
      initialLikesAmount: 101523,
      isSaved: true,
      isLiked: false,
    },
    {
      userName: "barked",
      userImage: "assets/img/barked.svg",
      contentImage: "assets/img/dog.svg",
      likedByImage: "assets/img/adorable_animals.svg",
      likedByText: "adorable_animals",
      initialLikesAmount: 200541,
      isSaved: false,
      isLiked: false,
    },
  ];
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post
          key={p.userImage}
          userName={p.userName}
          userImage={p.userImage}
          contentImage={p.contentImage}
          likedByImage={p.likedByImage}
          likedByText={p.likedByText}
          initialLikesAmount={p.initialLikesAmount}
          isSaved={p.isSaved}
          isLiked={p.isLiked}
        />
      ))}
    </div>
  );
}

export default Posts;
