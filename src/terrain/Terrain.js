import React from "react";
import '../App.css';
import './Terrain.scss'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Vestiaire from "../Vestiaire";
import Parking from "../parking/Parking";

import citroen from "../img/citro.png"
import vSport from "../img/vroum.png"
import vTresSport from "../img/vroumvroum.png"
import f1 from "../img/vroumvroumvroum.png"

class Terrain extends React.Component {

    constructor(props) {
        super(props);
        this.onClickNext = this.onClickNext.bind(this);
        this.state = {
            closePage:false
        };
      }

    componentWillMount() {
        setTimeout(()=> {
            this.setState({loading:false})
        },2000);        
    }
    onClickNext()
    {
        this.setState({closePage:true})
    }

    render()
    {
        return(
            <React.StrictMode>
                <Router basename="/Soccer">
                    <Route path="/Vestiaire">
                        <Vestiaire id={this.props.id} terrain={this.props.terrain} nom={this.props.nom} />
                    </Route>
                    <Route path="/Soccer">
                        <Terrain  id={this.props.id} terrain={this.props.terrain} nom={this.state.noms} />
                    </Route>
                    <Route path="/Parking">
                        <Parking  id={this.props.id} terrain={this.props.terrain} nom={this.state.noms} />
                    </Route>
                    {!this.state.closePage && (
                    <div className="terraineBis"> Le terrain 
                        <div className="avatarTerrain">
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[0]}</div>
                                <div>{this.props.nom[0]}</div>
                            </div>
                            <div className="absolute">   
                                <div className="avatarTaille">{this.props.avatar[1]}</div>
                                <div>{this.props.nom[1]}</div>
                            </div> 
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[2]}</div>
                                <div>{this.props.nom[2]}</div>
                            </div>
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[3]}</div>
                                <div>{this.props.nom[3]}</div>
                            </div>    
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[4]}</div>
                                <div>{this.props.nom[4]}</div>
                            </div>    
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[5]}</div>
                                <div>{this.props.nom[5]}</div>
                            </div>    
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[6]}</div>
                                <div>{this.props.nom[6]}</div>
                            </div>    
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[7]}</div>
                                <div>{this.props.nom[7]}</div>
                            </div>      
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[8]}</div>
                                <div>{this.props.nom[8]}</div>
                            </div>    
                            <div className="absolute">
                                <div className="avatarTaille">{this.props.avatar[9]}</div>
                                <div>{this.props.nom[9]}</div>
                            </div>      
                        </div>
                        <div class="nextPrevious">
                            <Link class="terrainBis" to="/Vestiaire" onClick={() => {this.onClickNext()}}>
                                <div className="arrowTerrain"></div>
                            </Link >
                            <Link class="ParkingBis" to="/Parking" onClick={() => {this.onClickNext()}}>
                                <div className="arrowParking">
                                    <div className="carTerrain">
                                        <img className="car citroen" src={citroen}/>
                                        <img className="car vSport" src={vSport}/>
                                        <img className="car vTresSport" src={vTresSport}/>
                                        <img className="car f1" src={f1}/>
                                    </div>
                                </div>
                            </Link >
                            
                        </div>
                    </div>)}
                </Router>
            </React.StrictMode>
        );
    }
}

export default Terrain;

