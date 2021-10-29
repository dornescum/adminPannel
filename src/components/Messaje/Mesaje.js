import React, {useState} from 'react';
import {Container} from "../UIElements/Container";
import {Flex} from "../UIElements/Flex";
import {Card} from "../UIElements/Card";
import {Description} from "../UIElements/Description";
import {Article} from "../UIElements/Article";
import FetchMessage from "./FetchMessage";
import Paginate from "./Paginate";

import './mesaje.css'

const Mesaje = () => {
	// console.log(messages);
	// const [users, setUsers] = useState(messages.slice(0, 200));
	// const [pageNumber, setPageNumber] = useState(0);
	//
	// const userPerPage = 10;
	// const pagesVisited = pageNumber * userPerPage;
	// const displayUsers = users.slice(pagesVisited, pagesVisited + userPerPage).map((user)=>{
	// 	return <FetchMessage
	// 		first_name={user.first_name} last_name={user.last_name}
	// 		date={user.date} message={user.text} key={user.id} id={user.id}/>
	// })
	// const pageCount =Math.ceil(users.length /userPerPage );
	// const changePage =({selected})=>{
	// 	setPageNumber(selected)
	// }

	return (
		<Container>
			<Article id='mesaje' data-testid='mesaje-fetch' layout='column' >
				<p>Aici puteti regasi mesajele primite prin intermediul formularului de contact din pagina dvs. de prezentare/profil.</p>
				<h4>Cum functioneaza?</h4>
				<ol>
					<li>
						Clientul intra pe pagina dvs. de prezentare, completeaza formularul de contact apoi
						apasa butonul "<i>Trimite mesaj</i>".
					</li>
					<li>
						Noi validam mesajul (sa nu fie SPAM, sa nu contina injurii etc.), apoi il trimitem mai
						departe catre dvs.
					</li>
					<li>
						Primiti un email cu toate detaliile si veti avea posibilitatea sa raspundeti direct
						clientului, prin reply la email.
					</li>
				</ol>
			</Article>
			<FetchMessage />
			{/*<Paginate messagesPerPage={messagesPerPage} totalMessages={message}/>*/}


		</Container>
	);
};

export default Mesaje;

