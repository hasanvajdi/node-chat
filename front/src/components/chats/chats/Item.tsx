import { useState } from "react";

//  packages
import { AvatarGenerator } from "random-avatar-generator";
import { Skeleton } from "antd";
import { useDispatch } from "redux/hooks";

//  styles
import chatItemStyles from "./styles.module.scss";
//  redux actions
import { changeSelectedChat } from "redux/slices/app";
import { socket as socketFunc } from "config/socket";

function Item(props: any) {
	//  variables
	const dispatch = useDispatch();
	const { data } = props;
	const generator = new AvatarGenerator();
	const socket = socketFunc(data.chatId);

	//  states
	const [imageIsLoaded, setImageIsLoaded] = useState(false);

	//  handlers
	//function handleOnConnect() {
	//	socket.emit("getAllMessages", { messages: "all" }, (a: any) => {
	//		console.log("hiiii", a);
	//	});
	//}

	function handleOnDisconnect(b: any) {
		console.log("dsiconnection : ", b);
	}

	const handleGetChatData = () => {
		dispatch(changeSelectedChat(data));
		socket.connect();
		//socket.on("connect", handleOnConnect);
		socket.on("disconnect", handleOnDisconnect);
	};

	return (
		<div
			className={chatItemStyles.chatItemContainer}
			onClick={handleGetChatData}>
			<div className={chatItemStyles.chatItemAvatar}>
				<img
					src={generator.generateRandomAvatar()}
					alt="avatar"
					onLoad={() => setImageIsLoaded(true)}
				/>
				{!imageIsLoaded && (
					<Skeleton.Avatar
						active
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							height: "100%",
							width: "100%",
						}}
					/>
				)}
			</div>
			<span className={chatItemStyles.chatTitle}>{data.user2}</span>
		</div>
	);
}

export default Item;
