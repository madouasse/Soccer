import React from "react";
import '../App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Avatars from "../Avatars";
import firebase from "firebase";
import Soccer from "../Soccer";
import "./CCTerrain.css"

class CCTerrain extends React.Component {

  constructor(props) {
    super(props);
    this.onClickNextAndValide = this.onClickNextAndValide.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.loadInfoDuTerrain = this.loadInfoDuTerrain.bind(this);
    this.createSelectItems = this.createSelectItems.bind(this);
    this.onClickAddPlayer = this.onClickAddPlayer.bind(this)
    this.state = { 
      name: null,
      create: false,
      nextPage :false,
      closePage :false,
      allIdDBTerrain: null,
      loading:true,
      valideIdMdp: String,
      option:null,
      options:null,
      valideIdMdpBoolean:false,
      infosDesTerrains:null,
      infosDuTerrain:null,
      selected:false,
      avatar:null, 
      joueur:null
    };
  }

  componentWillMount() {
    var terrain = null  
    var terrainsPromise = firebase.database().ref("terrain/")
    firebase.database().ref("terrain/").once('value').then(()=> {
        terrainsPromise.on('value', snapshot => {
        terrain = snapshot.toJSON()
        this.setState({options:Object.keys(terrain)})
        this.setState({infosDesTerrains:terrain})
        this.setState({loading:false})
      })
    })

    var avatar = null  
    var avatarPromise = firebase.database().ref("avatar/"+this.props.id +"/")
    firebase.database().ref("avatar/"+this.props.id+"/").once('value').then(()=> {
      avatarPromise.on('value', snapshot => {
      avatar = snapshot.toJSON()
      this.setState({avatar:(avatar)})
      })
    })
  }

  onClickAddPlayer(){
    if(!this.state.infosDuTerrain.includes(this.props.id))
    {
      firebase.database().ref("terrain/" + this.state.option + "/" + this.props.id + "/avatar").set(this.state.avatar)
      firebase.database().ref("terrain/" + this.state.option + "/" + this.props.id + "/stats/But").set("0")
      firebase.database().ref("terrain/" + this.state.option + "/" + this.props.id + "/stats/MG").set("0")
      firebase.database().ref("terrain/" + this.state.option + "/" + this.props.id + "/stats/MD").set("0")
      firebase.database().ref("terrain/" + this.state.option + "/" + this.props.id + "/stats/MC").set("0")
    }
  }
  handleChangeId(event) {
    this.setState({id : event.target.value});
  }

  onClickNextAndValide(){
        this.setState({closePage : true});
        this.setState({valideIdMdpBoolean : true})
        this.onClickAddPlayer()
      }

  handleChangeOption(event) {
      this.setState({valideIdMdpBoolean : true})
      this.setState({option : event.target.selectedOptions[0].text})
      this.setState({infosDuTerrain : event.target.value, selected:true})
      this.loadInfoDuTerrain()
  }

  loadInfoDuTerrain()
  {
    if(this.state.infosDuTerrain != null)
    {
      var tabJoueur = this.state.infosDuTerrain.toString().split(',')
      var nombreDeJoueurs = tabJoueur.length
      let itemsJoueurs = [];         
      for (let i = 0; i < nombreDeJoueurs ; i++) {             
        itemsJoueurs.push(<div>{(tabJoueur[i])}<br/></div>);  
      }
      return itemsJoueurs;
    }
  }

  createSelectItems() {
    let items = [];         
    for (let i = 0; i < this.state.options.length ; i++) {       
      items.push(<option key={Object.keys(this.state.infosDesTerrains)[i]} value={Object.keys(Object.values(this.state.infosDesTerrains)[i])}>{Object.keys(this.state.infosDesTerrains)[i]}</option>);  
    }
    return items;
  }  

render() {

    return(
    <React.StrictMode>
        <Router>
           <Route path="/soccer">
             <Soccer id={this.props.id} terrain={this.state.option}/>
           </Route>
           {!this.state.closePage &&(
           <header >
            {!this.state.loading &&( 
            <div className="CCTerrain">   
            {/* 
                <div className="creation">
                    <div className="id">Creer ton terrain : </div><input id="username" type="text" name="username" placeholder="nom de votre terrain" required value={this.state.name} onChange={this.handleChangeId}></input>
                    <button className="login-btn" onClick={()=> this.onClickNextAndValide(this.state.id, this.state.mdp, this.state.mdpCreate, false)}>
                        {this.state.valideIdMdpBoolean == true  &&(<Link class="rejoindreImage" to="/Avatar"><div>Créer</div></Link>)}
                        {this.state.valideIdMdpBoolean == false &&(<div>Créer</div >)}
                    </button>
                </div>
            */}
                <div className="rejoindre">
                    Choisi ton terrain : 
                    <select onChange={this.handleChangeOption} placeholder="Entrez votre Id" >
                      {!this.state.selected &&(<option></option>)}   
                      {this.createSelectItems()}         
                    </select>
                    <div className="rejoindreImage" onClick={()=> this.onClickNextAndValide()}>
                        {this.state.valideIdMdpBoolean == true  &&(<Link class="rejoindreImage" to="/soccer"><div>Entrez</div>
                      <div class="containerOne">    
                        <div className="centerDoor">
                          <div class="door">
                            <div class="door-front">
                              <div class="knob"></div>
                            </div>
                            <div class="door-back">
                            </div>
                          </div>
                        </div> 
                        <div class="overlayOne">
                          <div class="text">
                            {this.loadInfoDuTerrain()}
                          </div>
                        </div>
                      </div> 
                      </Link>)}
                    </div>
                </div>
            </div>
            )}
           </header>)}
      </Router>
    </React.StrictMode>);
    };
}

export default CCTerrain;

/*                    <select
                        multiple={true}
                        value={this.state.options}
                        onChange={this.handleChangeOption}
                    /> 
                    */