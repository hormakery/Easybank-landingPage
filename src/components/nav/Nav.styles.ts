import styled from "styled-components";

export const Navigation=styled.nav`
    height: 60px;
  width: 100%;
  display: flex;
  color: #dadada;
  align-items: center;
  position: relative;
  padding: 0.5rem 4rem;
  background-color: #fff;
  justify-content: space-around;
  transition: .3s ease-in-out ;


@media screen and (max-width: 600px){
    padding: 0 2rem;
}

@media screen and (max-width: 768px){
    padding: 0 2rem;
}

.brand-logo{
  @media screen and (max-width: 768px){
    left: 2rem;
    display: flex;
    position: absolute;
  }
  
}
`

export const Image=styled.img`

`

export const  BurgerMenu=styled.button`
border: 0;
top: 50%;
right: 25px;
height: 40px;
width: 40px;

  display: none;
  padding: 0.5rem;
  cursor: pointer;
  position: absolute;
  transform: rotate(45deg);
  background-color: inherit;
  transform: translateY(-50%);
  transition:  0.2s ease-in-out;

  @media screen and (max-width: 768px){
    display: block;
  }
`

export const NavMenu=styled.div`
display: flex;
margin: auto;
align-items: center;

.nav-links-mobile{
  right: 0;
  top: 75px;
  width: 90%;
  left: 20px;
  display: block;
  z-index: 999999;
  border-radius: .4rem;
  align-items: center;
  position: absolute;
  list-styling: none;
  background-color: #fff;
  transition: all 0.5s ease-out;
}

`

export const Menu =styled.ul`
padding: 0;
display: flex;
transition: .15s ease-in-out ;

@media screen and (max-width: 768px){
    display: none;
   
  }
}
`

export const MenuList=styled.li`
margin: 0 1rem;
color: #dadada;
text-decoration: none;
list-style-type: none;

&:hover{
    font-weight: 600;
    color: #000;
    border-bottom: 3px solid #8bd9be;
  }

.nav-links{
    width: 100%;
    display: block;
    color: #b9babe;
    text-decoration: none;

    @media screen and (max-width: 768px){
        width: 80%;
        padding: 1rem 0;
    }

}

    @media screen and (max-width: 768px){
    width: 100%;
    color: #b9babe;
    text-align: center;
    transition: all 0.5s ease-out;
  }
`
