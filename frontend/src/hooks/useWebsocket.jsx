import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const backend_host = new URL(import.meta.env.VITE_BACKEND_URL).host;
const WebsocketContext = createContext(null);

export default function useWebsocket() {
  return useContext(WebsocketContext);
}

export function WebsocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = new WebSocket(`ws://${backend_host}/ws/road/chat/`);

    newSocket.addEventListener("open", () => {
      console.log("connected to the socket");
    });

    setSocket(newSocket);

    return () => newSocket.close();
  }, []);

  return <WebsocketContext.Provider value={socket}>{children}</WebsocketContext.Provider>;
}

WebsocketProvider.propTypes = {
  children: PropTypes.node
};
