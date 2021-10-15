import React from 'react';
import {Container} from "../UIElements/Container";
import {Flex} from "../UIElements/Flex";
import {Card} from "../UIElements/Card";
// import Eva from '../../assets/img/Eva.jpg';
import Logo from '../../assets/svg/AMD_logo.svg';
import styled from 'styled-components';

// const lucrari = [
// 	{job: 'cadastru și intabulare apartament', id: 1},
// 	{job: 'cadastru și intabulare teren extravilan\n', id: 2},
// 	{job: 'actualizare / rectificare cadastru\n', id: 3},
// 	{job: 'dezmembrare / parcelare / lotizare teren extravilan\n', id: 4},
// 	{job: 'alipire teren extravilan\n', id: 5},
// 	{job: 'plan topografic (de situație)\n', id: 6},
// 	{job: 'scoaterea din circuitul agricol\n', id: 7},
// 	{job: 'alt tip de lucrare\n', id: 8},
// 	{job: 'cadastru și intabulare teren intravilan\n', id: 9},
// 	{job: 'cadastru și intabulare teren cu construcție\n', id: 10},
// 	{job: 'dezmembrare / parcelare / lotizare teren intravilan\n', id: 11},
// 	{job: 'alipire teren intravilan\n', id: 12},
// 	{job: 'alipire unitati individuale (apartamente)\n', id: 13},
// 	{job: 'trasare / înțărușare teren / construcție\n', id: 14},
// 	{job: 'aviz tehnic OCPI', id: 15},
//
// ];


const TipuriLucrari = () => {
	return (
		<Container id='lucrari'>
			{/*<h1>Tipuri lucrari</h1>*/}
			<Flex justify="center" id='flex-lucrari'>

				<Card>
					<img src={Logo} alt=""/>
					<Desc>
						<h2>Tipuri lucrari</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eum maxime modi omnis
							perferendis sed ullam! Iste sapiente temporibus ut?</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eius ex fugit numquam.
							Accusantium, cum harum ipsa odit quaerat quibusdam?</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eum maxime modi omnis
							perferendis sed ullam! Iste sapiente temporibus ut?</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eius ex fugit numquam.
							Accusantium, cum harum ipsa odit quaerat quibusdam?</p>

					</Desc>
				</Card>
			</Flex>
			<Flex id='flex-checked'>
				<CardDesc justify="center">
					<Flex layout="row">
						<FormWork>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

						</FormWork>
						<FormWork>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

						</FormWork>
						<FormWork>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

						</FormWork>
						<FormWork>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>
							<div>
								<label>Lorem ipsum dolor sit amet.</label>
								<input type="checkbox" readOnly checked={true} aria-checked={true}
									   data-testid="check-btn"/>
							</div>

						</FormWork>
					</Flex>
				</CardDesc>

			</Flex>
		</Container>

	);
};

export default TipuriLucrari;
const CardDesc = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({justify}) => justify || 'flex-start'};
  background-color: #fff;
  border-radius: var(--radius);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  flex-direction: ${({layout}) => layout || 'row'};
  @media (max-width: 768px) {
    flex-direction: column;
    //margin: 1px 0;
    //padding: 1px;
  }
`;
const Desc = styled.div`
	padding: 1rem 1.5rem;
`
const FormWork = styled.form`
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;

  div {
    padding: .3rem;
    text-align: start;
    display: flex;
    justify-content: space-between;
  }
`;
