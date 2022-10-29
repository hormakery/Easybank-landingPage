import styled from "styled-components";

export const Buttons=styled.button`
color: #fff;
border: none;
cursor: pointer;
font-weight: 600;
word-wrap: nowrap;
padding: 0.7rem 1rem;
border-radius: 1rem;
background-image: linear-gradient(to right top, #30cf75, #00cc93, #00c8aa, #00c2bb, #2dbbc4);

&:hover{
    background-image: linear-gradient(to right top, #85e1a9, #77e0bb, #71ddcb, #74dad7, #7ed6df);
}
`