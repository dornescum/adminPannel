import styled from 'styled-components'

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  @media(max-width: 1124px){
    width: 960px;
  }
  @media(max-width: 960px){
	width: 790px;
  }
  @media(max-width: 768px){
    width: 640px;
  }
  @media(max-width: 380px){
    width: 320px;
  }
  @media(max-width: 320px){
    width: 280px;
  }
`
