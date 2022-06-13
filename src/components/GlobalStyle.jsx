import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing:border-box;
}

html{
    @media (max-width: 1700px){
        font-size:75%
   }
   @media (max-width : 1300px){
    background: white;
   }
}
 body{
     font-family:'Poppins', sans-serif;
     background: #181818;
     overflow-x:hidden;
 }

 h1{
        font-weight: 700;
        font-size:4rem;
    }

h2{
        font-weight: 400;
        font-size:3.5rem;
    }
h3{
        color:white;
    }
h4{
    font-size:2rem;
    font-weight: bold;
    }
span{
    font-weight:bold;
    color:#00C14A;
}
p{
        padding-top: 1.5rem;
        padding-bottom:3rem;
        color:#ccc;
        font-size:1.4rem;
        line-height:150%;
    }

button{
    font-family:'Inter', sans-serif;
    font-weight:bold;
    font-size:1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #00C14A;
    background: transparent;
    color:white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #00C14A;
        color:white;
    }

}
`;

export default Globalstyle;