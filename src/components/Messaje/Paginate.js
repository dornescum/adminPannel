import React from 'react';

const Paginate = ({messagesPerPage, totalMessages}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalMessages / messagesPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<div>
			<ul>
				{pageNumbers.map((item) => {
					return <li key={item.id}>
						<a href="!#">{item}</a>
					</li>;
				})}
			</ul>
		</div>
	);
};

export default Paginate;
