import React, {useState, useEffect} from 'react';
import SingleInfo from "./SingleInfo";


import styled from "styled-components";


const LeftInfo = () => {

	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchMess = async () => {
			setLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await res.json();
			// setTimeout(setPosts(data),15000);
			setPosts(data);
			console.log(data);
			setLoading(false);
		};
		fetchMess();
	}, []);
	return (
		<LeftContainer id="left-container">
			<ol>
				{!posts && <p>Loading ...</p>}
				{/*{posts.map((message) => <li key={message.id}>{message.title}</li>)}*/}
				{posts.map((message) => <SingleInfo id={message.id} title={message.title} key={message.id}/>)}
			</ol>
		</LeftContainer>
	);
};

export default LeftInfo;

const LeftContainer = styled.div`
  background: lightyellow;
  width: 100%;
  height: 40rem;
  overflow: scroll;

  ol {
    //list-style-type: none;
  }
`;
