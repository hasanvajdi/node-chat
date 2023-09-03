import messagesStyle from "./styles.module.scss";
import { useSelector } from "redux/hooks";

//	components
import MessagesHeader from "./Header";
import MessagesList from "./List";
import MessagesFooter from "./Footer";

function Messages() {
	//	variables
	const chat: any = useSelector((state) => state.app.selectedChat);

	if (chat)
		return (
			<div className={messagesStyle.messagesContainer}>
				<MessagesHeader />
				<MessagesList />
				<MessagesFooter />
			</div>
		);
	else return null;
}

export default Messages;
