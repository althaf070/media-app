import {Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
  <>
        <Navbar className="bg-dark-subtle text-black shadow-lg">
        <Container>
          <Navbar.Brand className="fw-bold p-2 fs-2">
         <Link to='/' style={{textDecoration:"none"}} className='text-dark'>
         <i className="fa-solid fa-music"></i>
         Media Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

  </>
  )
}

export default Header