import { useState, useEffect, useRef } from "react";

//  packages
import Cookies from "universal-cookie";
import { useSelector } from "react-redux";

//  styles
import messagesStyle from "./styles.module.scss";

//	redyx
import { useDispatch } from "redux/hooks";
import { changeSeenMessage } from "redux/slices/app";
import { seenMessage } from "redux/actions";

function MessageItem(props: any) {
	//  variables
	const { message } = props;
	const cookie = new Cookies();
	const messageRef: any = useRef(null);
	const dispatch = useDispatch();
	var observerRefValue: any = null;
	var observer: any;
	const username = cookie.get("username");

	const refOptions = {
		root: null,
		rootMargin: "0px",
		threshold: 0,
	};

	//	states
	const [isSeen, setIsSeen] = useState(message.seen);

	//	handlers
	const handleUnObserve = (observer: any) => {
		observer.unobserve(observerRefValue);
	};

	var handleCallback = (entries: any) => {
		const [entry] = entries;
		if (entry.isIntersecting) {
			console.log("in if");
			setIsSeen(true);
			dispatch(
				changeSeenMessage({
					messageId: message.messageId,
					receiverUsername: message.receiver,
					chatId: message.chatId,
				})
			);
			dispatch(seenMessage());
			handleUnObserve(observer);
		}
	};

	const handleRef = () => {
		if (!isSeen && message.receiver === username) {
			return messageRef;
		} else {
			return null;
		}
	};

	//	side effects
	useEffect(() => {
		observer = new IntersectionObserver(handleCallback, refOptions);

		if (messageRef.current) {
			observer.observe(messageRef.current);
			observerRefValue = messageRef.current;
		}

		return () => {
			if (observerRefValue) handleUnObserve(observer);
		};
	}, [message]);

	useEffect(() => {
		console.log("isSeen : ", isSeen);
	}, [isSeen]);

	return (
		<div
			className={messagesStyle.message}
			ref={handleRef()}>
			<div
				className={`${messagesStyle.messageSelf} ${
					message.sender === username
						? "ml-auto bg-red-100"
						: "mr-auto bg-yellow-100"
				}`}>
				<span>{message.text}</span>
			</div>
			<div>{isSeen}</div>
		</div>
	);
}

export default MessageItem;
