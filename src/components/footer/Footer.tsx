import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import {
    Icon,
    Image,
    Icons,
    Contact,
    Wrapper,
    FooterLeft,
    FooterWrapper,
} from './Footer.styles'

const Footer = () => {
  return (
    <FooterWrapper>
        <Wrapper>
            <Icons>
                <Link to="/" >
                    <div className='logo'>
                          <Image src='../images/logo.svg' alt='logo'/>
                          </div>
                          </Link>
                <Icon>
                    <span className='icons'><img src='../images/icon-facebook.svg' alt='facebook' /></span>
                    <span><img src='../images/icon-youtube.svg' alt='youtube'/></span>
                    <span><img src='../images/icon-twitter.svg' alt='twitter'/></span>
                    <span><img src='../images/icon-pinterest.svg' alt='pinterest'/></span>
                    <span><img src='../images/icon-instagram.svg' alt='instagram'/></span>
                </Icon>
            </Icons>
            <Contact>
                <span className='contact'><Link to="/about" className='contacts'>About Us</Link></span>
                <span className='contact'><Link to="/contact" className='contacts'>Contact</Link></span>
                <span className='contact'><Link to="/blog" className='contacts'>Blog</Link></span>
            </Contact>
            <Contact>
            <span className='contact'><Link to="/career" >Career</Link></span>
                <span className='contact'><Link to="/support" >Support</Link></span>
                <span className='contact'><Link to="/privacy-policy" >Privacy Policy </Link></span>
            </Contact>
        </Wrapper>

        <FooterLeft>
            <div className='button'>  
            
                <Button/>
            </div>

            <span className='copyright'>@ Easybank. All Right Reserved</span>
        </FooterLeft>
    </FooterWrapper>
  )
}

export default Footer