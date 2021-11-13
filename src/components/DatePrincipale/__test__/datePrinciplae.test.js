import {cleanup, fireEvent, getAllByRole, getByRole, render, screen} from '@testing-library/react';
import DatePrincipale from "../DatePrincipale";

test('get title', ()=>{
	render(DatePrincipale);
	const getTitle = screen.queryByTestId('test');
	expect(getTitle).toBeNull();
})
