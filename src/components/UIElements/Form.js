import styled from 'styled-components';

export const Form = styled.form`
  padding: 1rem 2rem;
  margin:0 1rem;
  width: 100%;
  background: var(--light-color);
  border-radius: var(--radius);

  div {
    padding: 1rem;
    display: flex;
    flex-direction: column;

    label {
      font-family: "Al Tarikh";
	  font-size: var(--font-lg);
    }

    input {
      padding: .5rem;
	  &:hover{
        background: var(--silver);
        transition: var(--transition);
	  }
     
      &:focus {
        background: #ffffe0;
        transition: var(--transition);
      }
    }
	
	select {
	  padding: .5rem;
      &:hover{
        background: var(--silver);
        transition: var(--transition);
      }

      &:focus {
        background: #ffffe0;
        transition: var(--transition);
      }
	}

	button {
	  padding: 1rem;
	  font-family: "Al Tarikh";
      font-size: var(--font-sm);
	  background: var(--light-blue);
	  color: var(--light-color);
	  border-radius: var(--radius);
	  cursor: pointer;
	  box-shadow: var(--light-shadow);
	  &:hover{
		background: var(--blue);
        transition: var(--transition);
		box-shadow: var(--dark-shadow);
      }
	}
  }
  #check-bank {
	padding: 0 1rem;
	ul {
	  list-style-type: none;
	  display: flex;
	  justify-content: space-between;
	  align-content: center;
	  margin: 0;
	  li {
		a {
          text-decoration: none;
		  font-size: var(--font-sm);
		  color: var(--grey);
		  padding: 0 1rem 0 0;
		}
		
	  }
	}
  }
`;
