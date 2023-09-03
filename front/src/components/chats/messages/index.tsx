import messagesStyle from "./styles.module.scss";

import { AvatarGenerator } from "random-avatar-generator";

import { useDispatch, useSelector } from "redux/hooks";

import { Button, Input } from "antd";
import { useState, useEffect } from "react";
import { socket as socketFunc } from "config/socket";

function Messages() {
	//	variables
	const chat: any = useSelector((state) => state.app.selectedChat);
	const generator = new AvatarGenerator();
	const socket = socketFunc(chat?.chatId);

	//	states
	const [messages, setMessages] = useState<any>([]);

	//	handlers
	const handleGetChatData = () => {
		socket.emit("getAllMessages", { messages: "aaa" }, (response: any) => {
			console.log("eeeye vary");
			setMessages((prev: any) => {
				return [...prev, ...response];
			});
		});
	};

	useEffect(() => {
		if (chat) {
			socket.connect();
			socket.on("connect", handleGetChatData);
		}
	}, [chat]);

	useEffect(() => {
		console.log("messages : ", messages);
	}, [messages]);

	if (chat)
		return (
			<div className={messagesStyle.messagesContainer}>
				<div className={messagesStyle.header}>
					<div className="w-10 h-10">
						<img
							src={generator.generateRandomAvatar()}
							alt="avatar"
							className="h-full w-full"
						/>
					</div>
					<span className="mt-1 ml-2">{chat.user2}</span>
				</div>
				<div className={messagesStyle.body}>
					{messages.length ? (
						messages.map((item: any) => (
							<div className={messagesStyle.message}>
								<div
									className={`${messagesStyle.messageSelf} ${
										item.sender === chat.user2
											? "mr-auto bg-yellow-100"
											: "ml-auto bg-red-100"
									}`}>
									<span>{item.text}</span>
								</div>
							</div>
						))
					) : (
						<div className="w-full h-full flex justify-center items-center">
							<h3>no message here yet</h3>
						</div>
					)}
				</div>
				<div className={messagesStyle.footer}>
					<div className="w-[85%]">
						<Input
							size="large"
							placeholder="type message"
						/>
					</div>
					<div className="w-[10%]">
						<Button
							size="large"
							type="primary">
							send
						</Button>
					</div>
				</div>
			</div>
		);
	else return null;
}

export default Messages;
