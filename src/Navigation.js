import React from 'react'
import Logo from './logo.svg'

let LogoStyle = {
  width: '80px',
  height: '80px'
}

const Navigation = () => {
  return (
    <nav className='navbar navbar-dark navbar-expand-md bg-dark p-4 m-0'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/wix-temp'>
          <img src={Logo} alt='logo' style={LogoStyle}/>
        </a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarResponsive'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarResponsive'>
          <ul className='navbar-nav ms-auto'>
            {/* <li className='nav-item'>
              <a className='nav-link' href='/wix-temp'>Home</a>
            </li> */}
            <li className='nav-item'>
              <a className='nav-link' href='/wix-temp/about'>Products</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/wix-temp/services'>On Sale</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/wix-temp/services'>Contact Us</a>
            </li>
          </ul>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='/wix-temp/login'>Login</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/wix-temp/register'>
                <img src='' alt='icon'/>
              </a>
            </li>
          </ul>
      </div>
      </div>
    </nav>
  )
}

export default Navigation