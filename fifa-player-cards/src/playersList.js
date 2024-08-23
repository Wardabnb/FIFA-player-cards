import React from "react";
import Player from "./player.js";
import players from "./players.js";

const PlayersList = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "red" }}>List Of Players</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {players.map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
