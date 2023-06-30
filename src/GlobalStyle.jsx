import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Work Sans', sans-serif;
}
html{
  font-size:62.5%;
  overflow-x:hidden;
}
 
 body{
  overflow-x:hidden;
 }

h1{
  color:${({ theme }) => theme.colors.heading};
  font-size:6rem;
  font-weight:900; 
} 

h2{
  color:${({ theme }) => theme.colors.heading};
  font-weight:300;
  font-size:4.4rem;
  white-space:normal;
  text-align:center;
}
h3{
  font-size:1.3rem;
  font-weight:400;
}

p{
  color:${({ theme }) => theme.colors.text};
  opacity:0.7;
  font-size:1.4rem;
  line-height:1.5;
  margin-top:1rem;
  font-weight:400;
}

a{
  text-decoration:none;
}

li{
  list-style:none;
}

.container{
  max-width:80rem;
  margin:0 auto;
}

.grid{
display:grid;
gap:9rem;
}

.grid-two-column{
  grid-template-columns:repeat(2,1fr);
}
.grid-three-column{
  grid-template-columns:repeat(3,1fr);
}
.grid-four-column{
  grid-template-columns: 1fr 1.2fr .5fr .8fr;
}

.common-heading{
  font-size:3.8rem;
  text-transform:capitalize;
  font-weight:300;
  margin-bottom:6rem;
}

input,textarea{
  max-width:50rem;
  color:${({ theme }) => theme.colors.black};
  padding:1.6rem 2.4rem;
  border:1px solid ${({ theme }) => theme.colors.border};
  box-shadow:${({ theme }) => theme.colors.shadowSupport};
}

input[type="submit"]{
  margin:0 auto;
  max-width:16rem;
  margin-top:2rem;
  background-color:${({ theme }) => theme.colors.btn};
  color:${({ theme }) => theme.colors.white};
  padding:1.4rem 2.2rem;
  border-style:solid;
  border-width:.1rem;
  text-transform:uppercase;
  font-size:1.8rem;
  cursor:pointer;

}
::-webkit-scrollbar{
  width:1.5rem;
}

::-webkit-scrollbar-track{
  background-color:rgb(24 24 29 );
}

::-webkit-scrollbar-thumb{
    background:#fff;
    border:5px solid transparent;
    border-radius:5px;
    background-clip:content-box;
}


@media (max-width:${({ theme }) => theme.media.tab}){
  .container{
    padding:0 3.2rem;
  }

  .grid-three-column{
    grid-template-columns:1fr 1fr;
  }
}
@media (max-width:${({ theme }) => theme.media.mobile}){
  .grid{
    gap:3.2rem;
  }
  .grid-four-column,.grid-two-column,.grid-three-column{
    grid-template-columns:1fr !important;
  }
}
`;
