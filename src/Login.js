import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import OliveTom from './img/runsoccer.gif';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Avatars from "./Avatars";
import firebase from "firebase";
import Soccer from "./Soccer";
import CCTerrain from "./cCTerrain/CCTerrain";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.onClickNextLoginAndValide = this.onClickNextLoginAndValide.bind(this);
    this.onClickNextCreateAndValide = this.onClickNextCreateAndValide.bind(this);
    this.onClickNextAndValide = this.onClickNextAndValide.bind(this);
    this.handleChangeMdp = this.handleChangeMdp.bind(this);
    this.handleChangeMdpCreate = this.handleChangeMdpCreate.bind(this);
    this.handleChangeId = this.handleChangeId.bind(this);

    this.state = { 
      mdp: null,
      mdpCreate: null,
      id: null,
      valideIdMdp: String,
      exitOlive:700,
      valideIdMdpBoolean:false,
      create: false,
      nextPage :false,
      closePage :false,
      allIdDB: null,
      loading:true,
      avatarInfo:null,
      avatarExist:false
    };
  }
  componentWillMount() {
    var users = null 
    var avatar = null;
    var usersPromise = firebase.database().ref("users/")
    firebase.database().ref("users/").once('value').then(()=> {
      usersPromise.on('value', snapshot => {
        users = snapshot.toJSON()
        this.setState({allIdDB:users})
        this.setState({loading:false})
      })
    })
    var avatarPromise = firebase.database().ref("avatar/")
    firebase.database().ref("avatar/").once('value').then(()=> {
      avatarPromise.on('value', snapshot => {
        avatar = snapshot.toJSON()
        if(avatar != null)
        {
          this.setState({avatarInfo:avatar})
        }
      })
    })
  }
  handleChangeMdp(event) {
    this.setState({mdp : event.target.value});
    this.onClickNextLoginAndValide(this.state.id, event.target.value, true)
  }    
  handleChangeMdpCreate(event) {
    this.setState({mdpCreate : event.target.value});
    this.setState({create: true})
    this.onClickNextAndValide(this.state.id, this.state.mdp, event.target.value, true)
  } 
  handleChangeId(event) {
    this.setState({id : event.target.value});
    this.onClickNextLoginAndValide(event.target.value, this.state.mdp, true)
  }

  onClickNextAndValide(ids, mdps, mdpCreate, nextPage){
    var valideId = Object.keys(this.state.allIdDB)==(ids);

    if(!valideId)
    {
      if((ids!=null) && (ids?.value!="") && (mdps!=null) && (mdps?.value!="") &&  (mdpCreate!=null) && (mdpCreate?.value!=""))
      {
          this.setState({valideIdMdpBoolean : true})
      }
      else{
        if(nextPage == false)
        {
          this.setState({valideIdMdp : "Mot de passe ou Id incorrect"});
        }
      }

      if(this.state.valideIdMdpBoolean && !nextPage && (mdpCreate == mdps))
      {
        firebase.database().ref("users/"+ids+"/").set(mdps)
        this.setState({closePage : true});
      }
      else if(!nextPage){
        this.setState({valideIdMdp : "Mon Canard, tes mots ne concordent pas ! :3 "})
      }
    }
    else{
      this.setState({valideIdMdp : "Mon Canard, cet Id existe déjà ! :3 "})
    }
  }


  onClickNextLoginAndValide(ids, mdps, nextPage){
    var avatar = null;
    var valideMdp = null;
    if((ids!=null) && (ids?.value!="") && (mdps!=null) && (mdps?.value!="")){
      if(this.state.avatarInfo != null)
      {
        avatar = Object.keys(this.state.avatarInfo)[0]
        avatar != null ? this.setState({avatarExist : true}) : this.setState({avatarExist : false})
      }
      var valideId = Object.keys(this.state.allIdDB).includes(ids);
      if(valideId)
      {
        var motdepass = this.state.allIdDB[ids]
        mdps == motdepass ? valideMdp = true : valideMdp = false
      }
      if (valideId && valideMdp)
      {
        this.setState({valideIdMdp : ""})
        this.setState({valideIdMdpBoolean : true})
      }
      else if(nextPage == false)
      {
        this.setState({valideIdMdp : "Mon Canard, tu t'es trompé ! :3 "});
      }
    }
    
    if(valideMdp && !nextPage)
    {
      this.setState({closePage : true});
      this.setState({valideIdMdpBoolean : true})
    }
    else if(!nextPage) this.setState({valideIdMdp : "Mon Canard, tu t'es trompé ! :3 "})
  }

  onClickNextCreateAndValide(ids){  
    var valideId = Object.keys(this.state.allIdDB)==(ids);
    if(!valideId){
      this.setState({create : true})
      this.setState({valideIdMdp : ""})
    }
    else{
      this.setState({valideIdMdp : "Mon Canard, cet Id existe déjà ! :3"});
    }
  }
  
  render() {

    return(
    <React.StrictMode>
     <Router>
        <Route path="/avatar">
          <Avatars id={this.state.id}/>
        </Route>
        <Route path="/soccer">
          <Soccer id={this.state.id}/>
        </Route>
        <Route path="/cCTerrain">
          <CCTerrain id={this.state.id}/>
        </Route>
        
      {!this.state.closePage &&(
      <header className="App-header">
      {this.state.loading &&(
        <div class="loader">
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
          <div class="bar4"></div>
          <div class="bar5"></div>
          <div class="bar6"></div>
        </div>
        )}
        {!this.state.loading &&(
        <div className="soccerPageOne">
          <div className= "login">
            <div className = "UserMdp titreId">
                <div className ="IdMdp" >
                  <div className="id">Login : </div><input id="username" type="text" name="username" placeholder="Entrez votre Id" required value={this.state.id} onChange={this.handleChangeId}></input>
                </div>
                <div className ="IdMdp" >
                  <div className="Mdp">Mot de passe : </div><input id="username" type="password" placeholder="Entrez votre PassWord" value={this.state.mdp} onChange={this.handleChangeMdp}></input>
                </div>
                {this.state.create &&(
                <div className ="IdMdp" >
                  <div className="Mdp">Mot de passe : </div><input id="username" type="password" placeholder="Entrez votre PassWord" value={this.state.mdpCreate} onChange={this.handleChangeMdpCreate}></input>
                </div>)}
            </div>
            <div className = "Boutton">
            {!this.state.create &&(
              <div>
                <button className="login-btn" onClick={()=> this.onClickNextLoginAndValide(this.state.id, this.state.mdp, false)}>
                {(this.state.valideIdMdpBoolean == true && !this.state.avatarExist) && (<Link class="boxhead" to="/Avatar"><div>Login</div></Link>)}
                {(this.state.valideIdMdpBoolean == true && this.state.avatarExist) && (<Link class="boxhead" to="/cCTerrain"><div>Login</div></Link>)}
                {this.state.valideIdMdpBoolean == false &&(<div>Login</div >)}
                </button>
                <button className="creer-btn" onClick={()=> this.onClickNextCreateAndValide(this.state.id, this.state.mdp, false)}>Creer</button>
              </div>)}
              {this.state.create &&(
              <div>
                <button  onClick={()=> this.onClickNextAndValide(this.state.id, this.state.mdp, this.state.mdpCreate, false)}>
                {this.state.valideIdMdpBoolean == true  &&(<Link class="boxhead" to="/Avatar"><div>Valider</div></Link>)}
                {this.state.valideIdMdpBoolean == false &&(<div>Valider</div >)}
                </button>
              </div>
              )}
          </div>
          {this.state.valideIdMdp}

          <AnimatePresence>
            <motion.img
              key={"icon"}
              initial={{ x:-700, y:0, opacity: 0 }}
              animate={{ x:this.state.exitOlive,  y:0, opacity: 0.9 }}
              exit={{x:650, opacity: 1 }}
              transition={{ duration: 9, ease: "easeInOut" }}
              src={OliveTom}
              className="imageEntreEcran2">
            </motion.img>
        </AnimatePresence>
        </div>   
        </div>
        )}   
      </header>)}
      </Router>
      </React.StrictMode>
    )
  }
}

export default Login;