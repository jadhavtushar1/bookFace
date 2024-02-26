import './Header.css'
import hamburgerMenu from '../../Assets/HamburgerLinesGroup.svg'
import searchIcon from '../../Assets/SearchIcon.svg'
import helpIcon from '../../Assets/ic_baseline-help.svg'
import cartIcon from '../../Assets/Cart.svg'
import profileIcon from '../../Assets/Profile.svg'
import orderIcon from '../../Assets/Order.svg'
const Header=()=>{
    return(
        <div className='header-parent center-content'>
            <div className='hamburger-menu d-flex'>
                <img className='header-icon' src={hamburgerMenu} alt="" />
                <div className='center-content gap-2'>
                <input className='search-text-field' type='text'/>
                <img className='header-icon' src={searchIcon} alt="" />
                </div>
            </div>
           <div className='center-content gap-5'>
            <img className='header-icon' src={helpIcon} alt="" />
            <img className='header-icon' src={cartIcon} alt="" />
            <img className='header-icon' src={orderIcon} alt="" />
            <img className='header-icon profile-icon' src={profileIcon} alt="" />
           </div>
            
        </div>
    )
}

export default Header