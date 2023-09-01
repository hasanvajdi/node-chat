

//  style
import chatsStyle from "./styles.module.scss"
//  hooks
import { useGetChatsQuery } from "redux/requests/chats";
//  components
import CreateChat from "./Create";


function Chats(){

  const chats = useGetChatsQuery(null);

  return(
    <>
      <CreateChat />

      <div className={chatsStyle.chatsContainer}>
        <div className={chatsStyle.chatsList}>chats list</div>
        <div className={chatsStyle.createNewChat}> create new chat</div>
      </div>
      
    </>
  )
}


export default Chats