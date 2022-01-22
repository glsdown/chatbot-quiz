import React from "react";

const ShowGif = ({ gifType = "excited" }) => {
  let gifUrl = "";
  if (gifType === "excited") {
    gifUrl =
      "https://media1.tenor.com/images/f7acff8c48d9916c878f3e372a6566c0/tenor.gif";
  } else if (gifType === "goodLuck") {
    gifUrl = "https://i.giphy.com/media/9gvXLeszhMfra/giphy.webp";
  } else if (gifType === "endgameHammer") {
    gifUrl =
      "https://img.mensxp.com/media/content/2019/May/image11-1558018123.gif";
  } else if (gifType === "justWait") {
    gifUrl =
      "https://media1.giphy.com/media/11FRmJRii0I8iA/giphy.gif?cid=ecf05e470d2hu2sux3rblxkc013akkpzcu4b9tkgyv6at5dk&rid=giphy.gif&ct=g";
  } else if (gifType === "godspeed") {
    gifUrl =
      "https://media1.giphy.com/media/xTiTnirRhNvRJiSf96/giphy.gif?cid=ecf05e47v3pv8ap7cvxvcbfm8gu0j72dy3j08ddx1ynatndd&rid=giphy.gif&ct=g";
  }
  return (
    <div style={{ textAlign: "left" }}>
      <img src={gifUrl} alt={gifType} style={{ maxHeight: "200px" }} />
    </div>
  );
};

export default ShowGif;
