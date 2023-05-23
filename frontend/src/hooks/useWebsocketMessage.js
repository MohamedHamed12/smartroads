import { useEffect } from "react";
import useWebsocket from "./useWebsocket";

/**
 * listen to new messages from the websocket
 * @param {Function} callback - make sure to useCallback because it is a dependency in a useEffect
 */
export default function useWebsocketMessage(callback) {
  const socket = useWebsocket();

  useEffect(() => {
    if (!(socket instanceof WebSocket)) return;
    const listener = socket.addEventListener("message", callback);
    return () => socket.removeEventListener("message", listener);
  }, [callback, socket]);
}
