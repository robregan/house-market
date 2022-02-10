import {useNavigate, useLocation} from 'react-router-dom'
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as PersonOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const pathMatchRoute = (route) => {
        if(route == location.pathname) {
            return true
        }
    }


  return (
  <footer className="navbar">
    <nav className="navbarNav">
        <ul className="navbarListItems">
            <li className="navbarListItem" onClick={() => navigate('/')}>
                <ExploreIcon fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width={36} height={36} />
                <span className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Explore</span>
            </li>
            <li className="navbarListItem" onClick={() => navigate('/offers')}>
                <OfferIcon fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} width={36} height={36} />
                <span  className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Offers</span>
            </li>
            <li className="navbarListItem" onClick={() => navigate('/profile')}>
                <PersonOutlineIcon fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} width={36} height={36}  />
                <span  className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</span>
            </li>
        </ul>
    </nav>
  </footer>
  )
}

export default Navbar;
