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
import { transform } from "framer-motion";
import transitions from "@material-ui/core/styles/transitions";

var validation = false;
var Listjoueur = [];
var statJouer = [];
var statJouerTotal = [];
var TotalInfoJoueurs = [];
var lesAvatar =[];
const useStyles = makeStyles({
	table: {
	  minWidth: 650,
	},
  });



  class Vestiaire extends React.Component {
    constructor(props) {
        super(props);
        this.tableDesJoueurs = this.tableDesJoueurs.bind(this);
        this.valideOuNon = this.valideOuNon.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
        this.checboxJoueur = this.checboxJoueur.bind(this);

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
          listeAvatar:[]
        };
      }
      
      componentWillMount() {
        var terrain = null  
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
      }

      togglePopup(lesAvatar, lesStatsDesJoueur, e) {
        if(this.state.showPopup)
        {
          this.setState({showPopup: false});
        }
        else
        {
          this.setState({showPopup: true});
        }
        if(e != null && e.target != null) 
        {
          console.log("{statsJoueur:lesStatsDesJoueur[e.target.viewportElement.id][stats]}", Object.values(lesStatsDesJoueur[e.target.viewportElement.id]["stats"]))
          this.setState({avatarStats:lesAvatar[e.target.viewportElement.id]})
          this.setState({statsJoueur:lesStatsDesJoueur[e.target.viewportElement.id]["stats"]})
          this.setState({nomDuJoueur:Listjoueur[e.target.viewportElement.id]})
        }
      }

      checboxJoueur(event)
      {
        var updatedList = [...this.state.checked];
        if (event.target.checked) {
          updatedList = [...this.state.checked, event.target.id];
        } else {
          updatedList.splice(this.state.checked.indexOf(event.target.id), 1);
        }
        this.setState({checked : updatedList});
      };

      tableDesJoueurs()
      {
        var checkBox = [];
        lesAvatar =[];
        if(this.state.avatar != null)
        {
          for(var i=0 ;i < Object.keys(this.state.avatar).length; i++)
          {
            var iu = Object.values(this.state.avatar)[i]["stats"];
            iu = Object.values(iu);
            statJouer = [];
                      lesAvatar.push(
                        <BigHead 
                          id={i}
                          onClick={(e)=> {this.togglePopup(lesAvatar, Object.values(this.state.avatar), e)}}
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
                      checkBox.push(<input type="checkbox" id={Object.keys(this.state.avatar)[i]} onChange={(e) => {this.checboxJoueur(e)}}></input>)
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
        this.setState({transitions : true})
        this.setState({listeAvatar : statJouer})
        setTimeout(()=> {
          this.setState({closePage:true})
        },5000);    
      }

      render() {
        this.tableDesJoueurs(lesJoueurs)
        return(
          <React.StrictMode>
          <Router>
              <Route path="/Terrain">
                  <Terrain id={this.props.id} terrain={this.props.terrain} avatar={lesAvatar} nom={this.state.checked}/>
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
              <span  class="boxheads" to="/Terrain">
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