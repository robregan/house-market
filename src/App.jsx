
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import Navbar from './components/Navbar'
import Explore from './pages/Explore'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import Profile from './pages/Profile'
import Category from './pages/Category'
import Contact from './pages/Contact'
import CreateListing from './pages/CreateListing'
import 'react-toastify/dist/ReactToastify.css';
import Listing from './pages/Listing'



function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/category/:categoryName' element={<Category />} />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          </Route>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/contact/:landlor  dId' element={<Contact />} />
        <Route path='/category/:categoryName/:listingId' element={<Listing />} />
      </Routes>
  
    <Navbar />
    </Router>

    <ToastContainer />
    </>
  )
}

export default App
