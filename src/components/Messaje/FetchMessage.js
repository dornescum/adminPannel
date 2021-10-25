import React, {useState, useEffect} from 'react';
import SingleMessage from "./SingleMessage";
// const data = ['test1', 'test2', 'data3']

const FetchMessage = ({messages}) => {
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


	return (
		<div>
			{currentMessages.map((item) => {
				return <div key={item.id}>
					<SingleMessage  {...item}/>
				</div>;
			})}

		</div>
	);
};

export default FetchMessage;
