import React from 'react';
import styled from "styled-components";


const Paginate = ({postsPerPage, totalPosts, paginate}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	console.log(pageNumbers);
	return (
		<Pagination>
			<ul>
				{pageNumbers.map((number) => {
					return <li key={number}>
						<a onClick={()=> paginate(number)} href="javascript:;">{number}</a>
					</li>;
				})}
			</ul>
		</Pagination>
	);
};

export default Paginate;

const Pagination = styled.div`
//border: 1px solid var(--dark-color);
  padding: 0 0 2rem 0;
  ul {
	display: flex;
	list-style-type: none;
	li {
	  padding: .5rem 1rem;
	  border: 1px solid var(--dark-color);
	  a {
        text-decoration: none;
		color: var(--dark-color);
		&:hover {
		  color: var(--danger);
		  font-weight: bolder;
		}
		&:active {
          color: var(--danger);

        }
	  }
	  
	}
  }
`
