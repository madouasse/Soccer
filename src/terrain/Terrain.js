import React from "react";
import '../App.css';
import './Terrain.scss'
class Terrain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

    componentWillMount() {
        setTimeout(()=> {
            this.setState({loading:false})
        },2000);        
    }

    render()
    {
        
        return(
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
            </div>
        );
    }
}

export default Terrain;

