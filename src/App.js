import React from "react";
import Player from "./Player";
import "./App.css";

const players = [
  {
    name: "LEBRON JAMES-",
    rating: 96,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    backgroundColor: "#3c2d64",
  },
  {
    name: "KAWHI LEONARD-",
    rating: 94,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/202695.png",
    backgroundColor: "#043b85",
  },

  {
    name: "JIMMY BUTLER-",
    rating: 93,
    image: "https://a.espncdn.com/i/headshots/nba/players/full/4278572.png",
    backgroundColor: "#f54345",
  },
  {
    name: "JAYSON TATUM-",
    rating: 93,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1628369.png",
    backgroundColor: "#369c5c",
  },
  {
    name: "DEMAR DEROZAN-",
    rating: 89,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201942.png",
    backgroundColor: "#f2473e",
  },
  {
    name: "BRANDON INGRAM-",
    rating: 86,
    image: "https://www.basketstats.fr/images/faces/10914.png",
    backgroundColor: "#c49b4d",
  },
  {
    name: "JAYLEN BROWN-",
    rating: 87,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/1627759.png",
    backgroundColor: "#3cb374",
  },

  {
    name: "KHRIS MIDDLETON-",
    rating: 86,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203114.png",
    backgroundColor: "#002d30",
  },

  {
    name: "ANDREW WIGGINS-",
    rating: 84,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203952.png",
    backgroundColor: "#344ba3",
  },
  {
    name: "MIKAL BRIDGES-",
    rating: 84,
    image: "https://www.basketstats.fr/images/faces/12095.png",
    backgroundColor: "#ffa954",
  },
];

const App = () => {
  return (
    <div>
      <div className="App">
        <img
          width={1000}
          height={70}
          src="https://cdn.prgloo.com/media/83e0ede1eb6c40738a084f4308124ad1.png?width=1200&height=1800"
          alt=""
        />
        <div className="player-list">
          {players.map((player, i) => (
            <Player {...player} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
