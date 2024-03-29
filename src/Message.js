import React from "react";

const Message = ({ message }) => {
  return (
    <div className="messageCard">
      {message.isBot ? (
        <div className="botCard">
          <p
            style={{
              paddingLeft: "16px",
              paddingRight: "10px",
              fontFamily: "Montserrat",
              paddingTop: "7.5px",
              paddingBottom: "7.5px",
              fontWeight: 700
            }}
          >
            {message.text}
          </p>
        </div>
      ) : (
        <div className="userCard">
          <p
            style={{
              paddingLeft: "16px",
              paddingRight: "10px",
              fontFamily: "Montserrat",
              fontWeight: 700
            }}
          >
            {message.text}
          </p>
        </div>
      )}
    </div>
  );
};

export default Message;
