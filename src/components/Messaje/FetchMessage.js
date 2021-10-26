import React, {useState, useEffect} from 'react';
import SingleMessage from "./SingleMessage";
import Paginate from "./Paginate";

const FetchMessage = () => {
	const [message, setMessage] = useState([]);
	const [loading, setLoading]=useState(false);
	const [currentPage, setCurrentPage]=useState(1);
	const [messagesPerPage, setMessagesPerPage]= useState(10);

	useEffect(() => {
		const fetchMess = async () => {
			setLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
			const data = await res.json();
			setMessage(data);
			setLoading(false)
		};
		fetchMess();
	}, []);

	const indexOfLastMessage = currentPage * messagesPerPage;
	const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
	const currentMessages = message.slice(indexOfFirstMessage, indexOfLastMessage);
	// ===========
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(currentMessages / messagesPerPage); i++) {
		pageNumbers.push(i);
	}
	console.log(message);
	console.log(pageNumbers);
	return (
		<div>
			{currentMessages.map((item) => {
				return <div key={item.id}>
					<SingleMessage  {...item}/>
					<Paginate messagesPerPage={pageNumbers} totalMessages={message}/>
					{/*<ul>*/}
					{/*	{pageNumbers.map((item)=>{*/}
					{/*		return	<li key={item.id}>*/}
					{/*			<a href="!#">{item}</a>*/}
					{/*		</li>*/}
					{/*	})}*/}
					{/*</ul>*/}
				</div>;
			})}
		</div>
	);
};

export default FetchMessage;
