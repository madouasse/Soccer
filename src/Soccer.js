import React from "react";
import "./Soccer.scss";
import lesJoueurs from "./configJoueur";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./Login.scss";
import firebase from "firebase";
import { makeStyles } from '@material-ui/core/styles';
import { BigHead } from '@bigheads/core'
import Vestiaire from "./Vestiaire";
import Terrain from "./terrain/Terrain";

var validation = false;
var page = "Acceuil"
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


class Soccer extends React.Component {
    constructor(props) {
        super(props);
        this.onClickNext = this.onClickNext.bind(this);
        this.tableDesJoueurs = this.tableDesJoueurs.bind(this);
        this.valideOuNon = this.valideOuNon.bind(this);
        this.setAvatar = this.setAvatar.bind(this)
        this.state = { 
            page: "Acceuil", 
            statJouerTotal: null,
            closePage: false,
            imageStatus:false,
            imageStatus2:false,
            imageStatus3:false,
            loading:true,
            avatars:[],
            noms:[]
        };
    }
    componentWillMount() {
        var nom = null  
        var nomsPromise = firebase.database().ref("terrains/"+this.props.terrain + "/valide/nom")
        firebase.database().ref("terrains/"+this.props.terrain + "/valide/nom").once('value').then(()=> {
            nomsPromise.on('value', snapshot => {
            nom = snapshot.toJSON();
          })
        })
        var avatar = null  
        var avatarsPromise = firebase.database().ref("terrain/"+this.props.terrain )
        firebase.database().ref("terrains/"+this.props.terrain).once('value').then(()=> {
            avatarsPromise.on('value', snapshot => {
            avatar = snapshot.toJSON();
            this.setState({avatars:avatar})
          })
        })
        setTimeout(()=> {
            this.setState({loading:false})
            this.setState({noms:nom})
            {this.setAvatar()}
        },3000);        

    }

      onClickNext ()
      {
          setTimeout(()=> {
            this.tableDesJoueurs(lesJoueurs)  
            this.setState({closePage : true})
          },4000);
      }
      
      setAvatar()
      {
        if(this.state.avatars!=null && this.state.noms!=null &&this.state.noms[2]!=null)
        {
            for(var i=0; i<Object.keys(this.state.noms).length; i++)
            {
               lesAvatar.push(
                    <BigHead 
                    id={((this.state.noms[i]))}
                    accessory={this.state.avatars[(this.state.noms[i])]["avatar"][0]}
                    body={this.state.avatars[(this.state.noms[i])]["avatar"][1]}
                    circleColor={this.state.avatars[(this.state.noms[i])]["avatar"][2]}
                    clothing={this.state.avatars[(this.state.noms[i])]["avatar"][3]}
                    clothingColor={this.state.avatars[(this.state.noms[i])]["avatar"][4]}
                    eyebrows={this.state.avatars[(this.state.noms[i])]["avatar"][5]}
                    eyes={this.state.avatars[(this.state.noms[i])]["avatar"][6]}
                    faceMask={this.state.avatars[(this.state.noms[i])]["avatar"][7]}
                    faceMaskColor={this.state.avatars[(this.state.noms[i])]["avatar"][8]}
                    facialHair={this.state.avatars[(this.state.noms[i])]["avatar"][9]}
                    fbclid="IwAR3L_E-ylO1QQaHpgAaMkwxcRbvIET3MNj3GJvJ9Wx9wV5zwfE3IkDWV2uM"
                    graphic={this.state.avatars[(this.state.noms[i])]["avatar"][10]}
                    hair={this.state.avatars[(this.state.noms[i])]["avatar"][11]}
                    hairColor={this.state.avatars[(this.state.noms[i])]["avatar"][12]}
                    hat={this.state.avatars[(this.state.noms[i])]["avatar"][13]}
                    hatColor={this.state.avatars[(this.state.noms[i])]["avatar"][14]}
                    lashes = {this.state.avatars[(this.state.noms[i])]["avatar"][15]}
                    lipColor={this.state.avatars[(this.state.noms[i])]["avatar"][16]}
                    mask={this.state.avatars[(this.state.noms[i])]["avatar"][17]}
                    mouth={this.state.avatars[(this.state.noms[i])]["avatar"][18]}
                    skinTone={this.state.avatars[(this.state.noms[i])]["avatar"][19]}
                    className= "headPlayer">          
                    </BigHead>
                )            
            }
        }
      }

      tableDesJoueurs(joueursList)
      {
        for(var i=0 ;i < Object.keys(joueursList).length; i++)
        {
          var iu = Object.values(joueursList)[i];
          iu = Object.values(iu);
          Listjoueur[i] = Object.keys(joueursList)[i];
          statJouer = [];
          for (var u = 0; u<iu.length; u++)
              {
                  statJouer[u]=iu[u];
              }
              statJouerTotal[i] = [statJouer]
              TotalInfoJoueurs[i] = [Listjoueur[i], ... statJouer]   
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

      render() {
        return(
    <React.StrictMode>
        <Router basename="/Soccer">
            <Route path="/Vestiaire">
                <Vestiaire id={this.props.id} terrain={this.props.terrain} nom={this.state.noms}/>
            </Route>
            <Route path="/Terrain">
                <Terrain  id={this.props.id} terrain={this.props.terrain} avatar={lesAvatar} nom={this.state.noms} />
            </Route>
        {!this.state.closePage &&(    
        <header className="App-header">
            {this.state.loading &&(
                <div className="fullScreen">
                    <div className="loader">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                        <div className="bar4"></div>
                        <div className="bar5"></div>
                        <div className="bar6"></div>
                    </div>
                </div>
            )}
            <div className="soccerPage">
                {this.state.page=="Acceuil" && (<div className='vestiaire' onClick={() => this.onClickNext() }><Link class="boxhead" to="/vestiaire">Vestiaire</Link></div>)}
                {this.state.page=="Acceuil" && (<div className="terrain" onClick={() => this.onClickNext()}><Link class="boxhead" to="/terrain">Terrain</Link></div>)}
                {this.state.page=="Acceuil" && (<div className="bus" onClick={() => this.onClickNext()}>Bus</div>)}
            </div>
        </header>    
        )}
        </Router>
    </React.StrictMode>    
    )}}


export default Soccer;
/*
tableDesJoueurs(joueursList)
{
  var div= "";
  for(var i=0 ;i < Object.keys(joueursList).length; i++)
  {
    var iu = Object.values(joueursList)[i];
    iu = Object.values(iu);
    var statJouer = Object.keys(joueursList)[i];
    if(i & 1)
    {
        var div = div + "<tr class='joueur'><td>"+statJouer+"</td>";
    }
    else
    {
        var div = div + "<tr class='joueurElse' #ref><td>"+statJouer+"</td>";
    }    
        var div2= div;
    
    for (var u = 0; u<iu.length; u++)
    {
        div2 = div2 + "<td>"+iu[u]+"</td>";
    }
    div=div2+"</tr>"
}
return div2
}
*/

/*
{this.state.page == "vestiaire" && (
            <div className="vestiairePage">
                <div className="vestiaireNeon">
                    Vestiaire
                </div>
                <div id= "slip" className="JouersVestiaire">Joueurs </div>
                <table className="Table">
                    <thead >
                        <tr className='TableJours'>
                            <th className= "headPlayerCell"></th>
                            <th onClick={()=>this.onClickNext("bite")}>Joueurs</th>
                            <th>But</th>
                            <th>Match Gagné</th>
                            <th>Match Perdu</th>
                            <th>Match Joué</th>
                        </tr>
                    </thead>
                    <tbody>
                    {[... statJouerTotal.keys()].map((level) => (
                    <tr className="joueur" id={level+"slip"} onClick={()=>this.alideOuNon(level)}>
                    {validation == true &&
                        (<BigHead id={level+"slip8"} className= "headPlayer"></BigHead>)}  
                    {[... TotalInfoJoueurs[level].keys()].map((row) => (
                        <td  >{TotalInfoJoueurs[(level)][row]}</td>
                    ))}
                    </tr>
                     ))}
                    </tbody>                
                </table>
              </div>)}*/