import {cleanup, fireEvent, getAllByRole, getByRole, render, screen} from '@testing-library/react';
import Auth from "../Auth";
import { BrowserRouter } from 'react-router-dom';


test('the title should be Log In ', ()=>{
	render(
		<BrowserRouter>
			<Auth />
		</BrowserRouter>
		);
	const loginTitle = screen.getByTestId('title-login');
	expect(loginTitle.textContent).toBe('Log in')
})
