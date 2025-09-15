import { useRef, useEffect } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {/* Render messages when not loading */}
      {!loading && messages.length > 0 && 
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))
      }

      {/* Show skeletons when loading */}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {/* Display message when no messages */}
      {!loading && messages.length === 0 && (
        <p className="text-center">Sohbet Başlatmak için bir Mesaj Gönderin</p>
      )}
    </div>
  );
};

export default Messages;
