import React, {useState, useEffect} from 'react';
import SingleMessage from "./SingleMessage";
import Paginate from "./Paginate";



const FetchMessage = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading]=useState(false);
	const [currentPage, setCurrentPage]=useState(1);
	const [postsPerPage, setPostsPerPage]= useState(10);

	useEffect(() => {
		const fetchMess = async () => {
			setLoading(true);
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');
			const data = await res.json();
			setPosts(data);
			setLoading(false)
		};
		fetchMess();
	}, []);

	const indexOfLastPosts = currentPage * postsPerPage;
	const indexOfFirstPosts = indexOfLastPosts - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPosts, indexOfLastPosts);
	// ===========
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(currentPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}
	const paginate =(pageNumber)=>{
		setCurrentPage(pageNumber)
	}

	// console.log(indexOfLastPosts); //5
	// console.log(indexOfFirstPosts); //0
	// console.log(currentPosts); //5
	// console.log(pageNumbers.length);
	return (
		<div id="fetch-messages">
			{currentPosts.map((item) => {
				return <div key={item.id}>
					<SingleMessage  {...item}/>
				</div>;
			})}
			<Paginate postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
		</div>
	);
};

export default FetchMessage;
