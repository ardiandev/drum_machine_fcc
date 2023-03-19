import { useState, useEffect } from "react";
import "./App.css";

const keypads = [
  {
    keyCode: 81,
    key: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    key: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    key: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    key: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    key: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    key: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    key: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    key: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    key: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const KeyboardKey = ({ code, play, sound: { keyCode, key, id, url } }) => {
  useEffect(() => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === keyCode) {
        play(key);
        code(id);
      }
    });
  }, []);

  return (
    <button
      key={keyCode}
      className="drum-pad"
      id={id}
      onClick={() => {
        play(key);
        code(id);
      }}
    >
      {key}
      <audio id={key} className="clip" src={url}></audio>
    </button>
  );
};

const Keyboard = ({ play, code }) => {
  return keypads.map(({ keyCode, url, id, key }) => {
    document.addEventListener("keydown", e => {
      if (e.keyCode === keyCode) {
        play(key);
        code(id);
      }
    });
    return (
      <button
        key={keyCode}
        id={id}
        className="drum-pad"
        onClick={() => {
          play(key);
          code(id);
        }}
      >
        {key}
        <audio id={key} className="clip" src={url}></audio>
      </button>
    );
  });
};

function App() {
  const [display, setDisplay] = useState("Click to Play");
  const startPlay = key => {
    const sound = document.getElementById(key);
    sound.currentTime = 0;
    sound.play();
  };
  return (
    <div className="app" id="drum-machine">
      <h1 className="title">Drum Machine freeCodeCamp</h1>
      <h1 id="display" className="display">
        {display}
      </h1>
      <div className="keyboard">
        <Keyboard play={startPlay} code={setDisplay} />
      </div>
      <div className="social-media">
        <p>
          source:{" "}
          <span>
            <a href="#">GitHub</a>
          </span>
        </p>
        <p>
          created by:{" "}
          <span>
            <a href="#">Ardian Pradana</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default App;
