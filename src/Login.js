import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import OliveTom from './img/runsoccer.gif';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Avatars from "./Avatars";
import firebase from "firebase";


//import { ReactComponent } from "*.svg";
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
      allIdDB: null
    };
  }
  componentWillMount() {
    this.state.allIdDB = firebase.database().ref("users/")
  }
  handleChangeMdp(event) {
    this.setState({mdp : event.target.value});
    this.onClickNextLoginAndValide(this.state.id, this.state.mdp, true)
  }    
  handleChangeMdpCreate(event) {
    this.setState({mdpCreate : event.target.value});
    this.setState({create: true})
  } 
  handleChangeId(event) {
    this.setState({id : event.target.value});
    this.onClickNextLoginAndValide(this.state.id, this.state.mdp, true)
  }
  onClickNextAndValide(ids, mdps, mdpCreate, nextPage){
    var idsPres
    this.state.allIdDB.on('value', snapshot => {idsPres = snapshot.toJSON()
      console.log("idPresents : ", idsPres)
    })
    //var AllLogin = Object.keys(idsPres)
    //var liginIsPres = AllLogin.includes(ids)
    //console.log("liginIsPres ", liginIsPres)

    if((ids!=null) && (ids?.value!="") && (mdps!=null) && (mdps?.value!="") &&  (mdpCreate!=null) && (mdpCreate?.value!="")){

      if(nextPage == false)
      { 
        this.setState({valideIdMdp : "Mon Canard, Mot de passe et Id Correct"})
        this.setState({exitOlive : 1400})
      }
      else
      {
        this.setState({valideIdMdpBoolean : true})
      }
    }
    else{
      if(nextPage == false)
      {
        this.setState({valideIdMdp : "Mot de passe ou Id incorrect"});
      }
    }
    if(this.state.valideIdMdpBoolean && !nextPage)
    {
      this.setState({closePage : true});
    }
  }


  onClickNextLoginAndValide(ids, mdps, nextPage){
    if((ids!=null) && (ids?.value!="") && (mdps!=null) && (mdps?.value!="")){
      if(nextPage == false)
      { 
        this.setState({valideIdMdp : "Mon Canard, Mot de passe et Id Correct"})
        this.setState({exitOlive : 1400})
      }
      else
      {
        this.setState({valideIdMdpBoolean : true})
      }
    }
    else{
      if(nextPage == false)
      {
        this.setState({valideIdMdp : "Mot de passe ou Id incorrect"});
      }
    }
    if(this.state.valideIdMdpBoolean && !nextPage)
    {
      this.setState({closePage : true});
    }
  }

  onClickNextCreateAndValide(ids, mdps, mdpCreate, nextPage){
    if((ids!=null) && (ids?.value!="") && (mdps!=null) && (mdps?.value!="")){
      this.setState({valideIdMdpBoolean : true})
      }
      this.setState({create : true})
  }
  
  render() {

    return(
    <React.StrictMode>
     <Router>
        <Route path="/avatar">
            <Avatars />
        </Route>
      {!this.state.closePage &&(
      <header className="App-header">
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
                {this.state.valideIdMdpBoolean == true &&(<Link class="boxhead" to="/Avatar"><div>Login</div></Link>)}
                {this.state.valideIdMdpBoolean == false &&(<div>Login</div >)}
                </button>
                <button className="creer-btn" onClick={()=> this.onClickNextCreateAndValide(this.state.id, this.state.mdp, false)}>Creer</button>
              </div>)}
              {this.state.create &&(
              <div>
                <button className="login-btn" onClick={()=> this.onClickNextAndValide(this.state.id, this.state.mdp, this.state.mdpCreate, false)}>
                {this.state.valideIdMdpBoolean == true &&(<Link class="boxhead" to="/Avatar"><div>Valider</div></Link>)}
                {this.state.valideIdMdpBoolean == false &&(<div>Valider</div >)}
                </button>
              </div>
              )}
            {this.state.valideIdMdp}
          </div>
          <AnimatePresence>
            <motion.div
              key={"icon"}
              initial={{ x:-800, y:0, opacity: 0 }}
              animate={{ x:0,  y:0 , opacity: 0.9 }}
              exit={{x:900, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            ></motion.div>
        </AnimatePresence>
          <AnimatePresence>
            <motion.img
              key={"icon"}
              initial={{ x:-800, y:0, opacity: 0 }}
              animate={{ x:this.state.exitOlive,  y:0 , opacity: 0.9 }}
              exit={{x:900, opacity: 1 }}
              transition={{ duration: 9, ease: "easeInOut" }}
              src={OliveTom}
              className="imageEntreEcran2">
            </motion.img>
        </AnimatePresence>
        </div>   
        </div>   
      </header>)}
      </Router>
      </React.StrictMode>
    )
  }
}

export default Login;