import './Layout.scss';
import React from 'react';

import Lead from '../Lead/Lead';
import Navigation from '../Navigation/Navigation';
import MobileNavigation from '../MobileNavigation/MobileNavigation';


const Layout = ({onCursorButtonEnter, onCursorDefault}) => {
  const [isLeadHide, setIsLeadHide] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLeadHide(!isLeadHide)
  }

  return (
    <div className='layout'>
       <div className='layout__bg'>
        <div className='layout__big'></div>
        <div className='layout__middle r1'></div>
        <div className='layout__middle r2'></div>
        <div className='layout__middle r3'></div>
        <div className='layout__middle r4'></div>
        <div className='layout__small'></div>
      </div>
      <Navigation onCursorButtonEnter = {onCursorButtonEnter} 
                  onCursorDefault     = {onCursorDefault}/> 

      <MobileNavigation isMobileMenuOpen = {isMobileMenuOpen}
                        handleButtonClick = {handleBurgerClick}/>
                        
      <Lead onCursorButtonEnter = {onCursorButtonEnter} 
            onCursorDefault     = {onCursorDefault}
            isLeadHide          = {isLeadHide}/> 
      
      
    </div>
  )
}

export default Layout;