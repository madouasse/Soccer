import React from "react";
import "../Soccer.css";
import firebase from "firebase";


class PopupVestiaire extends React.Component {
    constructor(props) {
        super(props);
        this.ajoutDesStats = this.ajoutDesStats.bind(this);
        this.state = { 
          but: parseInt(Object.values(this.props.statsDuJoueur)[0]), 
          mg: parseInt(Object.values(this.props.statsDuJoueur)[1]),
          mp: parseInt(Object.values(this.props.statsDuJoueur)[2]),
          mj: parseInt(Object.values(this.props.statsDuJoueur)[3])
        };
      }
    ajoutDesStats()
    {
        firebase.database().ref("terrain/"+this.props.terrain + "/"+this.props.nomDuJoueur+"/stats/But").set(this.state.but)
        firebase.database().ref("terrain/"+this.props.terrain + "/"+this.props.nomDuJoueur+"/stats/MC").set(this.state.mj)
        firebase.database().ref("terrain/"+this.props.terrain + "/"+this.props.nomDuJoueur+"/stats/MD").set(this.state.mp)
        firebase.database().ref("terrain/"+this.props.terrain + "/"+this.props.nomDuJoueur+"/stats/MG").set(this.state.mg)
        this.props.closePopup()
    }
    render() {

      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>Les stats de {this.props.nomDuJoueur}</h1>
            <div className="lesStats">
                <div className="addRemove" onClick={()=>{this.setState({but:this.state.but-1})}}>-</div>
                    <div>Les Buts : {this.state.but}</div>
                <div className="addRemove" onClick={()=>{this.setState({but:this.state.but+1})}}>+</div>
                <div className="addRemove" onClick={()=>{this.setState({mg:this.state.mg-1})}}>-</div>
                    <div>Match Gagner : {this.state.mg}</div>
                <div className="addRemove" onClick={()=>{this.setState({mg:this.state.mg+1})}}>+</div>
                <div className="addRemove" onClick={()=>{this.setState({mp:this.state.mp-1})}}>-</div>
                    <div>Match Perdue : {this.state.mp}</div>
                <div className="addRemove" onClick={()=>{this.setState({mp:this.state.mp+1})}}>+</div>
                <div className="addRemove" onClick={()=>{this.setState({mj:this.state.mj-1})}}>-</div>
                    <div>Match Joué : {this.state.mj}</div>
                <div className="addRemove" onClick={()=>{this.setState({mj:this.state.mj+1})}}>+</div>
            </div>
            {this.props.avatarStats}
          <button onClick={this.ajoutDesStats}>Valider</button>
          <button onClick={this.props.closePopup}>Annuler</button>
          </div>
        </div>
      );
    }
  } 

  export default PopupVestiaire;