import { useEffect, useState } from "react";

//  style
import chatsStyle from "./styles.module.scss";
//  hooks
import { useGetChatsQuery } from "redux/requests/chats";
//  components
import CreateChat from "./Create";
import Item from "./Item";

//  tyeps and interfaces
import { chatItemType } from "./types";

function Chats() {
  //  hooks
  const chats = useGetChatsQuery(null);

  //  states
  const [createChatIsOpen, setCreateChatIsOpen] = useState(false);

  //  handlers
  const handleShowChats = () => {
    if (chats.isFetching) {
      return <span>loading...</span>;
    } else if (!chats.isFetching && chats.isSuccess) {
      const data: chatItemType[] = chats.data as chatItemType[];

      if (data.length) {
        return data.map((item: chatItemType) => <Item data={item} />);
      } else {
        return <span>no chat yet</span>;
      }
    }
  };

  //  side effects
  useEffect(() => {
    console.log("chats : ", chats.data);
  }, [chats]);

  return (
    <>
      {createChatIsOpen && <CreateChat handleClose={setCreateChatIsOpen} />}

      <div className={chatsStyle.chatsContainer}>
        <div className={chatsStyle.chatsList}>{handleShowChats()}</div>
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
