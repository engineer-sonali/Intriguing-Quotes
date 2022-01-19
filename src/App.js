import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FaQuoteRight } from 'react-icons/fa';
import Navbar from './components/navbar';


class App extends Component {
    state = { quote: " " } 

    componentDidMount(){
        this.fetchQuote();
    }

    fetchQuote=()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice}= response.data.slip;
            this.setState({ quote: advice })
        })
        .catch((error) =>{
            console.log(error)
        })
    }
    
    render() { 
        const { quote } =this.state;
        return (
            <React.Fragment>
                <Navbar />
            <div className='app'>    
                <div className='card'>
                <h1 className='heading'>{quote}</h1>
                <button className='button' onClick={this.fetchQuote}>
                    <span>Give me a Quote <FaQuoteRight /></span>
                </button>
                </div>
            </div> 
            </React.Fragment>    
        );
    }
}
 
export default App;
