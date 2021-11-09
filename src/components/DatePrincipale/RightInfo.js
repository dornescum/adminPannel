import React from 'react';
// import {Card} from '../UIElements/Card'

import styled from "styled-components";
const someInfo =[
	{
		info: 'some Info',
		img:'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ipsum voluptatum! Culpa esse\n' +
			'\t\t\t\t\tillo ipsa obcaecati praesentium. Animi deleniti est explicabo iure nemo nulla perferendis, porro\n' +
			'\t\t\t\t\tquis repudiandae, veritatis voluptatem!',
		id:Math.random()
	},
{
		info: 'some Info',
		img:'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ipsum voluptatum! Culpa esse\n' +
			'\t\t\t\t\tillo ipsa obcaecati praesentium. Animi deleniti est explicabo iure nemo nulla perferendis, porro\n' +
			'\t\t\t\t\tquis repudiandae, veritatis voluptatem!',
		id:Math.random()
	},
{
		info: 'some Info',
		img:'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ipsum voluptatum! Culpa esse\n' +
			'\t\t\t\t\tillo ipsa obcaecati praesentium. Animi deleniti est explicabo iure nemo nulla perferendis, porro\n' +
			'\t\t\t\t\tquis repudiandae, veritatis voluptatem!',
		id:Math.random()
	},
{
		info: 'some Info',
		img:'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ipsum voluptatum! Culpa esse\n' +
			'\t\t\t\t\tillo ipsa obcaecati praesentium. Animi deleniti est explicabo iure nemo nulla perferendis, porro\n' +
			'\t\t\t\t\tquis repudiandae, veritatis voluptatem!',
		id:Math.random()
	},
{
		info: 'some Info',
		img:'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ipsum voluptatum! Culpa esse\n' +
			'\t\t\t\t\tillo ipsa obcaecati praesentium. Animi deleniti est explicabo iure nemo nulla perferendis, porro\n' +
			'\t\t\t\t\tquis repudiandae, veritatis voluptatem!',
		id:Math.random()
	},
{
		info: 'some Info',
		img:'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, ipsum voluptatum! Culpa esse\n' +
			'\t\t\t\t\tillo ipsa obcaecati praesentium. Animi deleniti est explicabo iure nemo nulla perferendis, porro\n' +
			'\t\t\t\t\tquis repudiandae, veritatis voluptatem!',
		id:Math.random()
	},

]


const RightInfo = () => {
	return (
		<RightContainer id='right-container'>
			<h1>some more info</h1>
				{someInfo.map((el)=>{
					return <CardHolder layout="column" key={el.id} id={el.id}>
						<h3>{el.info}</h3>
						<img src={el.img} alt={el.info}/>
						<p>{el.text}</p>
					</CardHolder>
				})}
		</RightContainer>
	);
};

export default RightInfo;
const RightContainer = styled.div`
  background: pink;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  overflow: scroll;
  height: 40rem;
  //padding-top: 50rem;
  h1 {
	text-align: center;
  }
`;

const CardHolder = styled.article`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: var(--radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 10px;
  padding: 10px;
  width: 95%;
  justify-content: ${({justify}) => justify || 'flex-start'};
  flex-direction: ${({layout}) => layout || 'row'};
  height: 20rem;
  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }
  @media (max-width: 1024px) {
    margin: 15px;
    padding:5px;
    width: 93%;
  }
  @media (max-width: 768px) {
    margin: 15px;
    padding:5px;
	width: 95%;
  }
@media (max-width: 480px) {
    margin: 15px;
    padding:5px;
	width: 90%;
  }

`;
