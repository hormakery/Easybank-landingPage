import React, { useState } from 'react'
import Button from '../button/Button'
import { Link } from 'react-router-dom'
import {
    Image,
    Menu,
    NavMenu,
    MenuList,
    // MobileList,
    // Mobilenav,
    BurgerMenu,
    Navigation,
} from './Nav.styles'

const Nav = () => {
    const [isMobile, setIsMobile] = useState(false)
   
    
  return (
    <Navigation>
      <Link className="brand-logo" to='/' ><Image src='../images/logo.svg 'alt=''/></Link>


      <BurgerMenu className="hamburger" 
        onClick={() => {
          setIsMobile(!isMobile);
        }}
        >
            {!isMobile ?
                <img src="../images/icon-hamburger.svg" alt="" />
                :
                <img src="../images/icon-close.svg" alt="" />
            }
        </BurgerMenu>

      <NavMenu>
        <Menu  className={
          isMobile ? "nav-links-mobile" : "nav-links"
          }
          onClick={()=> setIsMobile(false)}
          >
            <MenuList>
              <Link to="/home" className='nav-links'>
                  Home
              </Link>
            </MenuList>

            <MenuList>
              <Link to="/about" className='nav-links'>
                About
              </Link>
            </MenuList>
          
            <MenuList>
              <Link to="/contact" className='nav-links'>
                Contact
              </Link>
            </MenuList>

            <MenuList>
              <Link to="/blog" className='nav-links'>
                Blog
              </Link>
            </MenuList>

            <MenuList>
              <Link to="/career" className='nav-links'>
                Career
              </Link>
            </MenuList>
        </Menu>
 
      </NavMenu>

      

        <Menu>
        <Link to='/signup' className='nav-links'>
          <Button/>
        </Link>
        </Menu> 
        
       
   </Navigation>
   
  )
}

export default Nav