import React from 'react';
import {Container} from "../UIElements/Container";
import {Flex} from "../UIElements/Flex";
import {Card} from "../UIElements/Card";
import {Description} from "../UIElements/Description";
import {Article} from "../UIElements/Article";
import FetchMessage from "./FetchMessage";

import './mesaje.css'

const Mesaje = () => {
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
		</Container>
	);
};

export default Mesaje;



<div className="col-lg-12">
	<div className="card card-default" id="cardStatisticiGenerale">
		<div className="card-wrapper">
			<div className="card-body">
				<p className="blockquote mb-4">Aici puteti regasi mesajele primite prin intermediul
					formularului de contact din pagina dvs. de prezentare/profil.</p>
				<h4 className="pl-2">Cum functioneaza?</h4>
				<ol className="my-4 fs-18">
					<li className="py-2">
						Clientul intra pe pagina dvs. de prezentare, completeaza formularul de contact apoi
						apasa butonul "<i>Trimite mesaj</i>".
					</li>
					<li className="py-2">
						Noi validam mesajul (sa nu fie SPAM, sa nu contina injurii etc.), apoi il trimitem
						mai departe catre dvs.
					</li>
					<li className="py-2">
						Primiti un email cu toate detaliile si veti avea posibilitatea sa raspundeti direct
						clientului, prin reply la email.
					</li>

				</ol>
			</div>
		</div>
	</div>


</div>
