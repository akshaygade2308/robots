import React, {Component} from 'react';
import Cardlist from '../Components/Cardlist';
import Searchbox from '../Components/Searchbox';
import './App.css';
import Scroll from '../Components/Scroll';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import A from '../Components/A';
import B from '../Components/B';
import C from '../Components/C';
import D from '../Components/D';

class App extends Component{
    constructor(){
        super();
        this.state = {
            robots : [],
            searchfield : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})})
        
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        
}

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

    if(robots.length === 0){
        return <h1>Loading</h1>
    }else{
        return(
        <Router>
        <div className = "tc">
                    <h1 className = "f2">Robofriends</h1>

                    
                        <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                            <a className="navbar-brand" href="#">Robofriends</a>
                            </div>
                            <div className = "bar">
                                <ul className="nav navbar-nav">
                                    <div className = "bar"></div>
                                    <li><Link to = "/">Home</Link></li>
                                    <li><Link to = "/A">Page 1</Link></li>
                                    <li><Link to = "/B">Page 2</Link></li>
                                    <li><Link to = "/C">Page 3</Link></li>
                                </ul>
                            </div>
                        </div>
                        </nav> 
                        <Route path = "/" exact Component = {D}></Route>
                        <Route path = "/A" Component = {A}></Route>
                        <Route path = "/B" Component = {B}></Route>
                        <Route path = "/C" Component = {C}></Route>


                    
                    
                    <Searchbox searchChange = {this.onSearchChange} />
                    <Scroll>
                            <Cardlist robots = {filteredRobots} />
                    </Scroll>
                </div>
                </Router>
        )
    }
        
    }
}


export default App;