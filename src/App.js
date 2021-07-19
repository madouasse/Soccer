import './App.css';
import soccerLogo from './img/soccerLogo2.png'
import tricotLogo from './img/tricotLogo.png'
import soccerWallfrom from './img/soccerWall.jpg'
import React, { Component } from "react";
import Soccer from "./Soccer";
import Login from "./Login";
import Avatars from "./Avatars";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      soccerPage: null,
      tricotPage: null,
      login:null,
      mdp:null,
      nextPage:null,
      id:null,
      mdp:null,
      valideIdMdp:null,
      pageSoccer:null
    };
    this.onClickSoccer = this.onClickSoccer.bind(this);
    this.onClickTricot = this.onClickTricot.bind(this);
    this.onClickNext = this.onClickNext.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeMdp = this.handleChangeMdp.bind(this);
    this.onClickNextSoccerPage = this.onClickNextSoccerPage.bind(this)
    this.tableDeJoueurs = this.tableDeJoueurs.bind(this)
  }
  componentWillMount() {
    this.state.soccerPage = false;
    this.state.tricotPage = false;
    this.state.login = false;
    this.state.mdp = false;
    this.state.nextPage = 0;
    this.state.id = null;
    this.state.mdp = null;
    this.state.valideIdMdp = null;
    this.state.pageSoccer="Acceuil"
  }

  handleChangeMdp(event) {
    this.setState({mdp: event.target.value});  
  }    
  handleChangeId(event) {
    this.setState({id: event.target.value});  
  }
  render() {
    return (
    <div className="App">
      <React.StrictMode>
        <Router>
          <Route path="/login">
              <Login />
          </Route>
        {!this.state.soccerPage && !this.state.tricotPage &&(
        <header className="App-header">
          <div className="indexChoice">        
            <div className="loggoAndTitre">
              <div className = "TitreSoccerRemplissage"></div>
                <Link class="boxhead" to="/Login"><div onClick={()=> this.onClickSoccer()} className = "TitreSoccer" >Soccer</div>           
                  <img className = "logoIndexSoccer" src={soccerLogo} />
                </Link>
                </div>
                <div className="loggoAndTitre">
                  <div className = "TitreSoccerRemplissage"></div>
                  <div onClick={()=> this.onClickTricot()} className = "TitreTricot">Tricot</div>
                  <img className = "logoIndexTricot" src={tricotLogo} />
                </div>
              </div>
            </header>)}
          </Router>
        </React.StrictMode>
      </div>
    );
  }
  onClickSoccer(){
    this.setState({soccerPage:true});
    }
  
  onClickTricot(){
    this.setState({tricotPage:true});  
  }
  onClickNext(){
    this.setState({nextPage:+1});  
  }

  onClickNextSoccerPage(page){
    this.setState({pageSoccer: page});  
  }

  tableDeJoueurs(joueursList)
  {
    for(var i=0 ;i < Object.keys(joueursList).length; i++)
    {
      var iu = Object.values(joueursList)[i];

/*
             <div className="soccerPage">
                {this.state.pageSoccer == "Acceuil" && ( <div className="vestiaire" onClick={() => this.onClickNextSoccerPage("vestiaire")}>Vestiaire</div>)}
                {this.state.pageSoccer == "Acceuil" && (<div className="terrain" onClick={() => this.onClickNextSoccerPage("terrain")}>Terrain</div>)}
                {this.state.pageSoccer == "Acceuil" && (<div className="bus" onClick={() => this.onClickNextSoccerPage("bus")}>Bus</div>)}
                {this.state.pageSoccer == "vestiaire" && (
                <div className="vestiairePage">
                  <div className="vestiaireNeon">
                      vestiaire
                  </div>
                  <div className="JouersVestiaire">Jouers </div>
                  {this.tableDeJoueurs(lesJoueurs)}
                </div>)}

              </div>
*/

    }
  }
}

export default App;
