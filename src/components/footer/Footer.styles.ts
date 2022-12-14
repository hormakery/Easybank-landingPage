import styled from "styled-components";

export const FooterWrapper=styled.footer`
display: flex;
padding: 3rem 3rem;
background-color: #2d314f;
justify-content: space-between;


@media screen and (max-width: 600px){
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 912px){
    padding: 2rem 2rem;
}
`

export const Wrapper=styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 600px){
    flex-direction: column;
}
`

export const Icons=styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

.logo path{
    fill: #fff;
}
`

export const Image=styled.img`
]
`

export const Icon=styled.div`
display: flex;
cursor: pointer;
margin-top: 3rem;

.icons{
    margin-right: 1rem;
    .icons path{
        &:hover{
             background-color: #376370;
         }
     }
}



`

export const Contact=styled.div`
display: flex;
flex-direction: column;
margin-left: 4rem;
justify-content: space-between;

a{
    color: #bbbac6;
    font-weight: 500;
    text-decoration: none;

    &:hover{
        color: #376370; 
    }


    @media screen and (max-width: 600px){
        margin-bottom: 1rem;
    }

}

`

export const FooterLeft=styled.div`
display: flex;
margin-left: 1rem;
flex-direction: column;
justify-content: space-between;


.copyright{
    color: #bbbac6;
    font-size: .8rem;
   
    @media screen and (max-width: 600px){
        margin-top: 1rem;
    }
} 

@media screen and (max-width: 600px){
    flex-direction: column;
    font-size: .8rem;
    align-items: center;
    justify-content: center;
}

.button{
    @media screen and (max-width: 600px){
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    justify-content: center;
}


@media screen and (max-width: 820px)
    
 }
`