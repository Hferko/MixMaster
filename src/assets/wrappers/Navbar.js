import styled from 'styled-components';

const Wrapper = styled.nav  /*html*/`
 background: white;
 .nav-center{
   width: 90vw;
   max-width: 1120px;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   padding: 1rem 1.5rem;
 }
 .logo{
  font-size: clamp(1.5rem, 3vw, 3rem);
  color: teal;
  letter-spacing: 3px;
  font-weight: 700;
  text-shadow: 4px 4px 10px rgba(0,0,0, 0.5); 
  margin-bottom: 10px;
 }
 .nav-links{
  display: flex;
  flex-direction: column;
  gap: 0.5rem
  margin-top: 1rem;
 }
 .nav-link{
    color: #0f172a;
    text-transform: uppercase;
    padding: 0.5rem 1rem 0.5rem 0;
    transition: 0.3s ease-in-out all;
    letter-spacing: 2px;    
 }
 .nav-link:hover{
  color: #10b981;
 }
 .active{
  color: peru;
 }

 @media (min-width: 768px){
  .nav-center{    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;    
  }
  .nav-links{
    flex-direction: row;   
    margin-top: 0;  
   }
   .logo{
    margin-bottom: 0;
   }
 }
`;

export default Wrapper;
