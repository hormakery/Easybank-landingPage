import styled from "styled-components";
import Button from "../button/Button";

export const Main=styled.main`
display: flex;
color: #b9babe;
flex-direction: column;


.hide-background{

    @media screen and (max-width: 768px){
            background-image: linear-gradient(to right top, #91a4b8, #afb9ca, #cbcfdb, #e6e7ed, #ffffff);caccd2, #e3e3e6, #fafafa);
        }
}
`

export const Top =styled.div`
flex: 1;
width: 100%;
display: flex;
background-color: #fafafa;
transition: .35ms all ease-in-out;


@media screen and (max-width: 600px){
    flex-direction: column-reverse;
    
}



`

export const Context=styled.div`
flex: 0.7;
display: flex;
margin-top: 4rem;
padding: 3rem  4rem;
flex-direction: column;

@media screen and (max-width: 600px){
    padding: 2rem 1rem;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 820px){
    padding: 2rem 3rem;
    
}
`

export const Title=styled.h1`
color: #59586a;
font-size: 2.3rem;
font-weight: 500;
margin-bottom: 1rem;

@media screen and (max-width: 600px){
   text-align: center;
   font-size: 2.2rem;
}

@media screen and (max-width: 820px){
    font.size: 2.3rem;
}
`

export const Excerpt =styled.p`
// max-width: 600px;
margin-bottom:1.5rem;
line-height: 1.8rem;


@media screen and (max-width: 600px){
    text-align: center;
    line.height: 1.4rem;
    max-width: 500px;
 }

 @media screen and (max-width: 820px){
    line-height: 1.5rem;
 }
`



export const ImageContainer =styled.div`
flex: 0.9;
// top: -3rem
height: 450px;
width: 100%;
cursor: pointer;
// position: relative;
transform: scale(1);
 background-size: inherit ;
 background-position:  left;
 background-repeat: no-repeat;
 transition: .25s all ease-in-out;
background-image: url(../images/bg-intro-desktop.svg); 


@media screen and (max-width: 600px){
    background-size: cover ;
    background-position:  center;
    background-repeat: no-repeat;
    background-image: url(../images/bg-intro-mobile.svg);
}

.image-container{
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: end;

    @media screen and (max-width: 600px){
        align-items: center;
        width: fit-content;
    }
}
`

export const Image =styled.img`
height: 500px;
top: -2rem;
bottom: 0;
// position: absolute; 
background-size: cover;
background-repeat: no-repeat;
background-position:  center center;



`

export const Center= styled.div`
display: flex;
padding: 3rem 5rem;
flex-direction: column;
background-color: #f3f5f7;

@media screen and (max-width: 600px){
    padding: 2rem 1rem;
    align-items: center;
    justify-contents: center;
}

@media screen and (max-width: 820px){
    padding: 2rem 3rem;

}
`

export const Description=styled.p`
margin-bottom:1.9rem;
line-height: 1.8rem;

@media screen and (max-width: 600px){
    text-align: center;
    line-height: 1.5rem;
}


`

export const ArticleDetails = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 600px){
    flex-direction: column;
}


`

export const DetailsWrapper=styled.div`
display: flex;
max-width: 270px;
flex-direction: column;

@media screen and (max-width: 600px){
    align-items: center;
}

@media screen and (max-width: 912px){
   margin-right: 1rem;
}

@media screen and (max-width: 1024px){
    margin-right: 1rem;
 }

.img-wrapper{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`

export const Images=styled.img`
width: 50px;
height: 50px;

// @media screen and (max-width: 786px){
//     background-position: center;
// }
`
export const DetailsTitle=styled.h3`
color: #59586a;
margin-top: 1.9rem;

@media screen and (max-width: 600px){
    text-align: center;
}
`

export const Paragraph=styled.p`
cursor: pointer;
line-height: 1.5rem;
margin-top: 1.4rem;

@media screen and (max-width: 600px){
    text-align: center;
}
`

export const Bottom=styled.div`
display: flex;
padding: 3rem 5rem;
flex-direction: column;
background-color: #fafafa;


@media screen and (max-width: 600px){
    flex-direction: column;
    padding: 2rem 1rem;
}

@media screen and (max-width: 820px){
    padding: 2rem 3rem;

}

.section-wrapper{
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 600px){
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

   
}
`

export const Heading=styled.h2`
color: #59586a;
font-weight: 500;
font-size: 2.3rem;
cursor: pointer;
margin-bottom: 1.7rem;

@media screen and (max-width: 600px){
    text-align: center;
    font-size: 2.3rem;
    margin-bottom: 1.5rem;
}
`

export const Section=styled.div`
display: flex;
max-width: 270px;
align-items: center;
border-radius: .3rem;
flex-direction: column;

@media screen and (max-width: 600px){
    margin-bottom: 1rem;
}

@media screen and (max-width: 912px){
    margin-right: 1rem;
 }

 @media screen and (max-width: 1024px){
    margin-right: 1rem;
 }

`

export const SectionImage=styled.img`
width: 100%;
height: 100%;
cursor: pointer;
border-top-right-radius: .3rem;
border-top-left-radius: .3rem;
transition: .15s all ease-in-out;
`

export const Details=styled.div`
padding:  1.5rem;
background-color: #fff;
transition: .15 all ease-in-out;

@media screen and (max-width: 1024px){
    padding: 1rem;
 }

`

export const Author=styled.span`
font-weight: 400;
cursor: pointer;
`


export const Titles=styled.h3`
color: #59586a;
font-weight: 600;
cursor: pointer;
margin-top: 1.2rem;

:hover{
    color: #a9c8be;
}

@media screen and (max-width: 1024px){
    font-size: 1rem;
 }

 @media screen and (max-width: 820px){
    font-size: .8rem;
 }

`