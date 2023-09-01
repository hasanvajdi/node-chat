import { useState } from "react";

//  style
import chatsStyle from "./styles.module.scss";
//  hooks
import { useGetChatsQuery } from "redux/requests/chats";
//  components
import CreateChat from "./Create";

function Chats() {
  //  hooks
  const chats = useGetChatsQuery(null);

  //  states
  const [createChatIsOpen, setCreateChatIsOpen] = useState(false);

  return (
    <>
      {createChatIsOpen && <CreateChat handleClose={setCreateChatIsOpen} />}

      <div className={chatsStyle.chatsContainer}>
        <div className={chatsStyle.chatsList}>chats list</div>
        <div
          className={chatsStyle.createNewChat}
          onClick={() => setCreateChatIsOpen(true)}
        >
          create new chat
        </div>
      </div>
    </>
  );
}

export default Chats;
