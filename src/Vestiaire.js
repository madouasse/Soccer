import React from "react";
import "./Soccer.scss";
import lesJoueurs from "./configJoueur";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Terrain from "./terrain/Terrain";
import firebase from "firebase";
import PopupVestiaire from "./popupVestiaire/PopupVestiaire";
import { makeStyles } from '@material-ui/core/styles';
import { BigHead } from '@bigheads/core'
import "./Vestiaire.scss"
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

var validation = false;
var Listjoueur = [];
var statJouer = [];
var statJouerTotal = [];
var TotalInfoJoueurs = [];
var namesChecked = [];
var lesAvatar = [];
var lesAvatarSet = [];

  class Vestiaire extends React.Component {
    constructor(props) {
        super(props);
        this.tableDesJoueurs = this.tableDesJoueurs.bind(this);
        this.valideOuNon = this.valideOuNon.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
        this.checboxJoueur = this.checboxJoueur.bind(this);
        this.setAvatar = this.setAvatar.bind(this);
        this.onDateChange = this.onDateChange.bind(this);

        this.state = { 
          page: "Acceuil", 
          statJouerTotal: null,
          accessory: null, 
          accessoryIndex: 0,
          id: null,
          exitOlive:700,
          closePage :false,
          avatar: null,
          showPopup: false,
          avatarStats:[],
          statsJoueur:null,
          nomDuJoueur:null,
          loading:true,
          listeDesJoueursValide:[],
          checked:[],
          transitions:false,
          listeAvatar:[],
          date: new Date(1900, 0, 1)
        };
      }
      
      componentWillMount() {
        var terrain = null  
        namesChecked = []
        var terrainsPromise = firebase.database().ref("terrain/"+this.props.terrain + "/")
        firebase.database().ref("terrain/"+this.props.terrain + "/" + this.props.id).once('value').then(()=> {
            terrainsPromise.on('value', snapshot => {
            terrain = snapshot.toJSON();
            this.setState({avatar:terrain})
          })
        })
          setTimeout(()=> {
            this.setState({loading:false})
          },5000);    
        if(this.props.nom != null)
        {
          namesChecked.push(Object.values(this.props.nom))
        }
      }

      togglePopup(e, lesAvatar) {

        if(this.state.showPopup)
        {
          this.setState({showPopup: false});
        }
        else
        {
          this.setState({showPopup: true});
        }
        if(e != null && e.target != null && e.target.viewportElement != null) 
        {
          this.setState({avatarStats:lesAvatar[Object.keys(this.state.avatar).indexOf(e.target.viewportElement.id)]})
          this.setState({statsJoueur:this.state.avatar[e.target.viewportElement.id]["stats"]})
          this.setState({nomDuJoueur:e.target.viewportElement.id})
        }
      }

      checboxJoueur(event, lesAvatar)
      {
        var updatedList = [...this.state.checked];
        var updatedListAvatar = [...this.state.listeAvatar];
        if (event.target.checked) {
          updatedList = [...this.state.checked, event.target.id];
          namesChecked[0] = [...namesChecked[0], event.target.id]
          
        } else {
          updatedList.splice(this.state.checked.indexOf(event.target.id), 1);
          namesChecked[0].splice(namesChecked[0].indexOf(event.target.id), 1)
        }
        // listeAvatar
        if (event.target.checked) {
          updatedListAvatar = [...this.state.listeAvatar, lesAvatar[event.target.accessKey]];

        } else {
          updatedListAvatar.splice(this.state.checked.indexOf(event.target.id), 1);
        }
        this.setState({checked : updatedList});
        this.setState({listeAvatar : updatedListAvatar});
      };

      onDateChange(e)
      {
        console.log("e", e)
      }

      setAvatar()
      {
        lesAvatarSet = [];
        if(this.state.avatar!=null && namesChecked[0]!=null && namesChecked[0]!=null )
        {
            for(var i=0; i<Object.keys(this.state.avatar).length; i++)
            {
              if(namesChecked[0].includes(Object.keys(this.state.avatar)[i])) 
              {
                lesAvatarSet.push(
                      <BigHead
                      id={Object.keys(this.state.avatar)[i]}
                      accessory={this.state.avatar[Object.keys(this.state.avatar)[i]]["avatar"][0]}
                      body={this.state.avatar[Object.keys(this.state.avatar)[i]]["avatar"][1]}
                      circleColor={this.state.avatar[Object.keys(this.state.avatar)[i]]["avatar"][2]}
                      clothing={this.state.avatar[Object.keys(this.state.avatar)[i]]["avatar"][3]}
                      clothingColor={this.state.avatar[Object.keys(this.state.avatar)[i]]["avatar"][4]}
                      eyebrows={this.state.avatar[Object.keys(this.state.avatar)[i]]["avatar"][5]}
                      eyes={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][6]}
                      faceMask={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][7]}
                      faceMaskColor={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][8]}
                      facialHair={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][9]}
                      fbclid="IwAR3L_E-ylO1QQaHpgAaMkwxcRbvIET3MNj3GJvJ9Wx9wV5zwfE3IkDWV2uM"
                      graphic={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][10]}
                      hair={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][11]}
                      hairColor={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][12]}
                      hat={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][13]}
                      hatColor={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][14]}
                      lashes = {this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][15]}
                      lipColor={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][16]}
                      mask={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][17]}
                      mouth={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][18]}
                      skinTone={this.state.avatar[(Object.keys(this.state.avatar)[i])]["avatar"][19]}
                      className= "headPlayer">          
                      </BigHead>
                )   
              }         
            }
            this.setState({listeAvatar:lesAvatarSet})
        }
      }

      tableDesJoueurs()
      {
        var checkBox = [];
        lesAvatar = [];
        if(this.state.avatar != null)
        {
          for(var i=0 ;i < Object.keys(this.state.avatar).length; i++)
          {
            var iu = Object.values(this.state.avatar)[i]["stats"];
            iu = Object.values(iu);
            statJouer = [];
                      lesAvatar.push(
                        <BigHead 
                          id={Object.keys(this.state.avatar)[i]}
                          key={i}
                          onClick={(e)=> {this.togglePopup(e, lesAvatar)}}
                          accessory={Object.values(this.state.avatar)[i]["avatar"][0]}
                          body={Object.values(this.state.avatar)[i]["avatar"][1]}
                          circleColor={Object.values(this.state.avatar)[i]["avatar"][2]}
                          clothing={Object.values(this.state.avatar)[i]["avatar"][3]}
                          clothingColor={Object.values(this.state.avatar)[i]["avatar"][4]}
                          eyebrows={Object.values(this.state.avatar)[i]["avatar"][5]}
                          eyes={Object.values(this.state.avatar)[i]["avatar"][6]}
                          faceMask={Object.values(this.state.avatar)[i]["avatar"][7]}
                          faceMaskColor={Object.values(this.state.avatar)[i]["avatar"][8]}
                          facialHair={Object.values(this.state.avatar)[i]["avatar"][9]}
                          fbclid="IwAR3L_E-ylO1QQaHpgAaMkwxcRbvIET3MNj3GJvJ9Wx9wV5zwfE3IkDWV2uM"
                          graphic={Object.values(this.state.avatar)[i]["avatar"][10]}
                          hair={Object.values(this.state.avatar)[i]["avatar"][11]}
                          hairColor={Object.values(this.state.avatar)[i]["avatar"][12]}
                          hat={Object.values(this.state.avatar)[i]["avatar"][13]}
                          hatColor={Object.values(this.state.avatar)[i]["avatar"][14]}
                          lashes = {Object.values(this.state.avatar)[i]["avatar"][15]}
                          lipColor={Object.values(this.state.avatar)[i]["avatar"][16]}
                          mask={Object.values(this.state.avatar)[i]["avatar"][17]}
                          mouth={Object.values(this.state.avatar)[i]["avatar"][18]}
                          skinTone={Object.values(this.state.avatar)[i]["avatar"][19]}
                          className= "headPlayer">          
                        </BigHead>
                      )
                      if(namesChecked != null && namesChecked[0] != null && namesChecked[0].includes(Listjoueur[i]))
                        {
                          checkBox.push(<input type="checkbox" checked={namesChecked[0].includes(Listjoueur[i])} id={Object.keys(this.state.avatar)[i]} accessKey={i} onChange={(e) => {this.checboxJoueur(e, lesAvatar )}} ></input>)
                        }
                      else 
                      {
                        checkBox.push(<input type="checkbox" id={Object.keys(this.state.avatar)[i]} accessKey={i} onChange={(e) => {this.checboxJoueur(e, lesAvatar)}}></input>)
                      }
                      Listjoueur[i] = Object.keys(this.state.avatar)[i];
            for (var u = 0; u<iu.length; u++)
                {
                    statJouer[u]=iu[u];
                }
                statJouerTotal[i] = [statJouer]
                TotalInfoJoueurs[i] = [lesAvatar[i], Listjoueur[i], ... statJouer, checkBox[i]]   
            }
          }
      }
      
      valideOuNon(level)
      {
          if(!validation)
          {
              document.getElementById(level+"slip").setAttribute("class" ,"joueurElseValid");
              validation = true;
          }
          else
          {
              document.getElementById(level+"slip").setAttribute("class" ,"joueur");
              validation = false;
          }          
      }

      onClickNext ()
      {
        console.log("namesChecked[0] : ", namesChecked[0], namesChecked[0][0])
        firebase.database().ref("terrains/"+this.props.terrain + "/valide/nom").set(namesChecked[0]);
        firebase.database().ref("terrains/"+this.props.terrain + "/date/").set(this.state.date.toLocaleDateString("en-US"));
        this.setAvatar()
        this.setState({loading:false})
        this.setState({transitions : true})
          this.setState({closePage:true})
      }

      render() {
        this.tableDesJoueurs(lesJoueurs)
        return(
          <React.StrictMode>
          <Router basename="/Soccer">
              <Route path="/Terrain">
                  <Terrain id={this.props.id} terrain={this.props.terrain} avatar={lesAvatarSet} nom={namesChecked[0]}/>
              </Route>
          <div>
              {this.state.loading && !this.state.closePage &&(
                <div className="loader">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    <div className="bar4"></div>
                    <div className="bar5"></div>
                    <div className="bar6"></div>
                </div>
              )}
              {!this.state.loading && !this.state.closePage &&(
              <div className="vestiairePage">
                <div className="vestiaireNeon">
                    Vestiaire
                    <div className="datePicker">
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Basic example"
                          value={this.state.date}
                          onChange={(date) => {
                            this.setState({date:date});
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider> 
                    </div>             
                </div>
                <div className="centrage">
                  <table className="Table">
                      <thead >
                          <tr className='TableJours'>
                              <th className= "headPlayerCell"></th>
                              <th>Joueurs</th>
                              <th>Buts</th>
                              <th>Matchs Perdus</th>
                              <th>Matchs Gagnés</th>
                              <th>Matchs Joués</th>
                              <th>Pret à Jouer</th>
                          </tr>
                      </thead>
                      <tbody >
                      {[... statJouerTotal.keys()].map((level) => (
                      <tr className="joueur" id={level+"slip"}
                      >                            
                      {[... TotalInfoJoueurs[level].keys()].map((row) => (
                          <td>{TotalInfoJoueurs[(level)][row]}</td>
                      ))}
                      </tr>
                      ))}
                      </tbody>                
                  </table>
                </div>
                {this.state.showPopup ? 
                  <PopupVestiaire
                    statsDuJoueur={this.state.statsJoueur}
                    closePopup={this.togglePopup.bind(this)}
                    avatarStats={this.state.avatarStats}
                    nomDuJoueur={this.state.nomDuJoueur}
                    terrain={this.props.terrain}
                  />
                  : null
                }                   
              </div>             
              )}
              {!this.state.loading && !this.state.closePage &&(
              <span  class="boxheads">
                <Link class="vestiaireBis" to="/Terrain" onClick={() => {this.onClickNext()}}>
                  <div className="arrow"></div>
                </Link >
              </span>   
              )}
          </div>
          </Router>
    </React.StrictMode>  
  )}}
export default Vestiaire;