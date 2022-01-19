import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FaQuoteLeft} from 'react-icons/fa';
import './navbar.css';

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-dark bg-dark">
                <div className='app-title'> <FaQuoteLeft />  INTRIGUING QUOTES: LEAVE A LONG LASTING IMAPACT</div>  
            </nav>
        );
    }
}
 
export default Navbar;