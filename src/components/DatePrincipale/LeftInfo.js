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
			<h4 data-cy='sub-title'>Reviews about my work</h4>
			<ul>
				{!posts && <p>Loading ...</p>}
				{/*{posts.map((message) => <li key={message.id}>{message.title}</li>)}*/}
				{posts.map((message) => <SingleInfo id={message.id} title={message.title} key={message.id}/>)}
			</ul>
		</LeftContainer>
	);
};

export default LeftInfo;

const LeftContainer = styled.div`
  background: #ffffff;
  width: 100%;
  height: 40rem;
  overflow: scroll;

  h4 {
		padding: 0 0 .5rem 1.5rem;
  }

  ul {
    list-style-type: none;
	padding: .2rem;
  }
`;

