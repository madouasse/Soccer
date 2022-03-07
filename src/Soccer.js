import React from "react";
import "./Soccer.scss";
import lesJoueurs from "./configJoueur";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./Login.scss";

import { makeStyles } from '@material-ui/core/styles';
import { BigHead } from '@bigheads/core'
import Vestiaire from "./Vestiaire";

var validation = false;
var page = "Acceuil"
var Listjoueur = [];
var statJouer = [];
var statJouerTotal = [];
var TotalInfoJoueurs = [];

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
        this.state = { 
            page: "Acceuil", 
            statJouerTotal: null,
            closePage: false,
            imageStatus:false,
            imageStatus2:false,
            imageStatus3:false,
            loading:true
        };
    }
    componentWillMount() {
        setTimeout(()=> {
            this.setState({loading:false})
        },3000);        
    }

      onClickNext ()
      {
          setTimeout(()=> {
            this.tableDesJoueurs(lesJoueurs)  
            this.setState({closePage : true})
          },2000);
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
        <Router>
            <Route path="/Vestiaire">
                <Vestiaire id={this.props.id} terrain={this.props.terrain}/>
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
                {this.state.page=="Acceuil" && (<div className="terrain" onClick={() => this.onClickNext()}>Terrain</div>)}
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