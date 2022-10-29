import React,{useState} from 'react'
import Button from '../button/Button'
import { Data } from '../data/Data'
import { DataType } from '../data/Data.interface'
import { latest } from '../latest/Latest'

import {
    Top,
    Main,
    Image,
    Title,
    Titles,
    Images,
    Center,
    Bottom,
    Author,
    Details,
    Excerpt,
    Context,
    Heading,
    Section,
    Paragraph,
    Description,
    DetailsTitle,
    SectionImage,
    DetailsWrapper,
    ArticleDetails,
    ImageContainer,
} from './Article.styles'

import Nav from '../nav/Nav'
import { Link } from 'react-router-dom'

const Article: React.FC<DataType> = () => {
const [isMobile, setIsMobile]=useState(false)

  return (
    <Main>
        <Top className={isMobile? 'nav-links-mobile': ''}>
            <Context>
                <Title>
                    Next generation <br/>digital marketing
                </Title>

                <Excerpt>
                Take your financial life online. Your Easybank account 
                will be a one-stop-shop for spending, saving,budgeting, investing and much more.
                </Excerpt>

              <div>
                <Link to='/signup' className='nav-links'> 
                <Button/>
                </Link>
              </div>
            </Context>

            <ImageContainer>
                <div className='image-container'>
                <Image  src='../images/image-mockups.png' alt=''/>
                </div>
            </ImageContainer>
        </Top>

        <Center>
            <Heading>Why choose Easybank?</Heading>
            <Description>
                We leverage Open Banking to turn your bank account into your financial hub.<br/>
                Control your finance like never before.
            </Description>

            <ArticleDetails>
                {Data.map((data)=>(
                <DetailsWrapper key={data.id}>
                   <div className='img-wrapper'>
                    <Images src={data.img} alt="" />
                    </div>
                    <DetailsTitle>{data.title}</DetailsTitle>
                    <Paragraph>{data.text}</Paragraph>
                </DetailsWrapper>
                   ))} 
                
            </ArticleDetails>
        </Center>

        <Bottom>
            <Heading>Latest Article</Heading>
            <div className='section-wrapper'>

        {latest.map((latest)=>(
            <Section key={latest.id}>
                <SectionImage src={latest.image} alt="" />
                <Details>
                <Author>{latest.author}</Author>
                <Titles>{latest.title}</Titles>
                <Paragraph>{latest.text}</Paragraph>
                </Details>
            </Section>
            ))}
            </div>
        </Bottom>

        {/* <picture>
<source srcSet="..images/bg-intro-mobile.svg" media="(max-width: 600px)"/>
<img src="../images/bg-intro-desktop.svg"  alt="" className='background-image'/>
</picture> */}

    </Main>
  )
}

export default Article