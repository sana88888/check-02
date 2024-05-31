import React from "react";

const Player = ({ name, rating, image, backgroundColor }) => {
  return (
    <div className="player-box">
      <div className="player-img" style={{ backgroundColor }}>
        <img width={165} height={259} src={image} alt={name} />
      </div>
      <h3>
        {name} {rating}
      </h3>
    </div>
  );
};

export default Player;
