import React from "react";
import "./Soccer.css";
import lesJoueurs from "./configJoueur";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Soccer from "./Soccer";

import { makeStyles } from '@material-ui/core/styles';
import { BigHead } from '@bigheads/core'

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


  class Vestiaire extends React.Component {
    constructor(props) {
        super(props);
        this.tableDesJoueurs = this.tableDesJoueurs.bind(this);
        this.valideOuNon = this.valideOuNon.bind(this);
        this.state = { 
          page: "Acceuil", 
          statJouerTotal: null,
        };
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
        this.tableDesJoueurs(lesJoueurs)
        return(
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
                    {console.log("statJouerTotal :", statJouerTotal)}
                    {[... statJouerTotal.keys()].map((level) => (
                    <tr className="joueur" id={level+"slip"} onClick={()=>this.alideOuNon(level)}>
                    {validation == true &&
                        (<BigHead id={level+"slip8"} className= "headPlayer"></BigHead>)}  
                    {[... TotalInfoJoueurs[level].keys()].map((row) => (
                        <td>{TotalInfoJoueurs[(level)][row]}</td>
                    ))}
                    </tr>
                     ))}
                    </tbody>                
                </table>
              </div>
    )}}

export default Vestiaire;