import './App.css';
import soccerLogo from './img/soccerLogo2.png'
import tricotLogo from './img/tricotLogo.png'
import soccerWallfrom from './img/soccerWall.jpg'
import React, { Component } from "react";
import Soccer from "./Soccer";
import lesJoueurs from "./configJoueur";
import { render } from '@testing-library/react';

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
    this.onClickNextAndValide = this.onClickNextAndValide.bind(this);
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
        <header className="App-header">
        {!this.state.soccerPage && !this.state.tricotPage &&( 
          <div className="indexChoice">        
            <div className="loggoAndTitre">
              <div className = "TitreSoccerRemplissage"></div>
              <div onClick={()=> this.onClickSoccer()} className = "TitreSoccer">Soccer</div>
              <img className = "logoIndexSoccer" src={soccerLogo} />
            </div>
            <div className="loggoAndTitre">
              <div className = "TitreSoccerRemplissage"></div>
              <div onClick={()=> this.onClickTricot()} className = "TitreTricot">Tricot</div>
              <img className = "logoIndexTricot" src={tricotLogo} />
            </div>
          </div>
        )}
          {this.state.soccerPage && this.state.nextPage == 0 && (
            <div className="soccerPageOne">
              <div className= "login">
                <div className = "UserMdp titreId">
                  <div className ="IdMdp" >
                    <div className="id">Login : </div><input id="username" type="text" name="username" placeholder="Entrez votre Id" required value={this.state.id} onChange={this.handleChangeId}></input>
                    </div>
                    <div className ="IdMdp" >
                    <div className="Mdp">Mot de passe : </div><input id="username" type="password" placeholder="Entrez votre PassWord" value={this.state.mdp} onChange={this.handleChangeMdp}></input>
                    {console.log(this.state.mdp)}
                  </div>
                </div>
                <div className = "Boutton">
                  <button className="login-btn" onClick={()=> this.onClickNextAndValide(this.state.id, this.state.mdp)} >Login</button>
                  <button className="creer-btn" onClick={()=> this.onClickNextAndValide(this.state.id, this.state.mdp)}>Creer</button>
                </div>
                {!this.state.valideIdMdp && this.state.valideIdMdp != null &&(
                <div>
                  {console.log("ERROR ",this.state.mdp)}
                  <div>{this.state.onClickNextAndValide} Mot de passe ou Id incorrect </div>
                </div>
                )}
              </div>
            </div>           
          )}
          {this.state.valideIdMdp && this.state.valideIdMdp != null && this.state.nextPage >= 1 &&(
            <div className ="soccerPage" onClick = {()=> this.onClickSoccer()} ><Soccer/></div>
          )}
          
          {console.log(this.state.valideIdMdp, "canard")}
          {console.log(this.state.nextPage, "page +")}
          {this.state.tricotPage && (
            <div>
              <img src={soccerWallfrom} />
              <button className = "button2"> Creer </button>
              <div id="button"><span class="noselect">Hello</span><div id="circle"></div></div>
            </div>
          )}
        </header>
      </div>
    );
  }
  onClickSoccer(){
    this.setState({soccerPage:true});  
    console.log("lalalal");
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
  onClickNextAndValide(id, mdp){
    if((this.state.id!=""&& this.state.id!=null)&& (this.state.mdp!= "" && this.state.mdp!=null)){
      {console.log("oK§ ",this.state.mdp)}
      this.setState({nextPage:+1});  
      this.setState({valideIdMdp:true})
    }
    else{this.setState({valideIdMdp:false})
    {console.log("pAS OK  ",this.state.mdp)}
  }
  }
  tableDeJoueurs(joueursList)
  {
    console.log("joueursList", joueursList);
    console.log("joueursList.size", Object.keys(joueursList).length);

    for(var i=0 ;i < Object.keys(joueursList).length; i++)
    {
      console.log("joueursList in for", Object.values(joueursList)[i]);
      console.log("joueursList[i]  in for", Object.keys(joueursList));
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
