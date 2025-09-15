import useGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation"

const Conversations = () => {
   const {loading,conversations} = useGetConversation();
   console.log("CONVERSATİON:",conversations);
  return (
    <div className='py-2 flex flex-col overflow-auto'>
       {conversations.map ((conversation,idx) =>(
        <Conversation
         key={conversation._id}
         conversation={conversation}
         emoji={getRandomEmoji()}
         lastIdx={idx === conversation.length-1}
        />
       ))}


      {loading ? <span className='loading loading-spinner mx-auto' ></span> : null}
    </div>
  )
}

export default Conversations;

/*
import Conversation from "./Conversation"

const Conversations = () => {
  return (
    <div className='py-2 flex flex-col overflow-auto'>
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
      <Conversation />
    </div>
  )
}

export default Conversations;
*/