import React, { useContext } from "react";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);
  return (
    <div className="chat">
      <div className="chatInfo">
        <img className="profile" src={data.user?.photoURL} alt="user-profile" />
        <span>{data.user?.displayName}Hello</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;