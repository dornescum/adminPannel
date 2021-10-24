import React, {useState, useEffect} from 'react';
import SingleMessage from "./SingleMessage";
// const data = ['test1', 'test2', 'data3']

const FetchMessage = () => {
	const [message, setMessage] = useState([]);
	const fetchMess = async () => {
		const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
		const data = await res.json();
		setMessage(data)
	};
	useEffect(() => {
		fetchMess();
	}, []);
	// let i =0;

	return (
		<div>
			{message.map((item) => {
				// i++;
				// if(i >= 11){
				// 	return ;
				// }
				return <div key={item.id}>
					<SingleMessage  {...item}/>
				</div>;
			})}

		</div>
	);
};

export default FetchMessage;
