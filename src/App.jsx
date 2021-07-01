import React, { useState } from "react";
import Chirp from "./components/Chirp";
import Moment from "react-moment";
import "moment-timezone";

const App = () => {
  const [user, setUserName] = useState("");
  const [message, setNewMessage] = useState("");
  const [timeLinePosts, setTimeLinePosts] = useState([
    {
      user: "Drama4YoMama",
      message: "Hit Me Up on Snapchat @SugarDaddiesAnnonymous",
    },
    {
      user: "MikeWazowski",
      message: `Hey I'm new on ChirpR, i'm a 4' even (s/o to my tall girls) sagitarius ball of fun, looking for someone because Celia left me, has to want kids (human or non)`,
    },
    {
      user: "RandomOlCoot",
      message: "Back in my day we had Vine, and everything was alright",
    },
  ]);
  const dateToFormat = new Date;
  <Moment>{dateToFormat}</Moment>
  const handleUserChange = (e) => {
    setUserName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();
    // new Chirp(userName, newMessage);

    let newChirp = {
      user: user,
      message: message,
    };
    setTimeLinePosts([...timeLinePosts, newChirp]);
    setUserName("");
    setNewMessage("");
  };

  //1st param of map method is always the name you're giving to each individual array item
  //2nd param is the id or index (numbers given to )
  const myChirps = timeLinePosts.map((chirp, id) => (
    <Chirp key={id} chirp={chirp} />
  ));

  //   class Chirp {
  //     constructor(userName, newMessage) {
  //       this.userName = userName;
  //       this.NewMessage = newMessage;
  //       this.div = document.createElement("div");
  //       this.div.id = "newPost";
  //       //   this.div.style.backgroundColor = "red";
  //       //   this.div.style.width = "50px";
  //       //   this.div.style.height = "50px";
  //       this.div.style.border = "1px solid black";
  //       this.div.innerText = `@${userName}, ${newMessage}`;
  //       timeLine.appendChild(this.div);
  //     };
  //   };
  return (
    <>
      <h1 className="text-center">
        <span className="text-primary">Chirp</span>
        <span className="p-1 mb-2 bg-primary border border-primary rounded text-white mt-1">
          R
        </span>
      </h1>
      <div className="mh-100 mw-100">
        <div
          id="containerForm"
          //   style={{ boxShadow: "10px 5px 34px 6px #000000" }}
          className="p-1 position-relative top-50 end-0 translate-middle-y"
        >
          <form className="d-flex flex-column">
            <input
              type="text"
              value={user}
              onChange={handleUserChange}
              placeholder="Username"
              className="border border-primary rounded"
            ></input>
            <textarea
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Chirp Message"
              className="border border-primary rounded"
            ></textarea>
            <button
              className="border border-primary rounded bg-primary text-white"
              onClick={handleBtnClick}
              //   style={{ color: "white" }}
            >
              Post To Timeline.
            </button>
          </form>
        </div>
        <div id="timeLine" className="border-primary rounded">
          {myChirps}
        </div>
        <h1 id="feedback">
          {user}
          <br />
          <br />
          {message}
        </h1>
      </div>
    </>
  );
};

export default App;
