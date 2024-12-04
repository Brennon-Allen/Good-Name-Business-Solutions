import closeIcon from './assets/close-icon.png'
import hamburgerIcon from './assets/hamburger-icon.png'
export default function Menu() {
  return (
    <>

      <ul className="menu">
      {/* <div className='hamburger-icon-box flex-center-column'>
        <img src={hamburgerIcon} alt="menu" className='menu-toggle'/>
    </div> */}
      <div className='flex-row-left'>
        
        {/* <img src={closeIcon} alt="close-button" width="40px" className='margin-right-5'/>
        <p>CLOSE</p> */}
        
        
      </div>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
      </ul>
    </>
  );
}
