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
            accessory: null, 
            accessoryIndex: 0,
            id: null,
            exitOlive:700,
            closePage :false,
            accessory :"none",
            body : "breasts",
            bodyIndex:0,
            fond : "blue",
            fondIndex : 0,
            clothing : "shirt",
            clothingIndex : 0,
            clothingColor : "green",
            clothingColorIndex : 0,
            eyebrows : "leftLowered",
            eyebrowsIndex : 0,
            eyes : "normal",
            eyesIndex : 0,
            mask : false,
            maskColor : "green",
            maskColorIndex : 0,
            facialHair :"none",
            facialHairIndex : 0,
            graphics :"none",
            graphicsIndex :0,
            hair : "buzz",
            hairIndex : 0,
            hairColor : "blonde",
            hairColorIndex : 0,
            hat:"none",
            hatIndex: 0,
            lashes : true,
            lashesIndex: 0,
            hatColor : "green",
            hatColorIndex: 0,
            lipColor : "turqoise",
            lipColorIndex : 0,
            maskFace : true,
            maskFaceIndex : 0,
            bouche : "grin",
            boucheIndex : 0,
            skinTone : "light",
            skinToneIndex : 0
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
                            <BigHead 
                            accessory="roundGlasses"
                            body={this.state.body}
                            circleColor={this.state.fond}
                            clothing={this.state.clothing}
                            clothingColor={this.state.clothingColor}
                            eyebrows={this.state.eyebrows}
                            eyes={this.state.eyes}
                            faceMask={this.state.mask}
                            faceMaskColor={this.state.maskColor}
                            facialHair={this.state.facialHair}
                            fbclid="IwAR3L_E-ylO1QQaHpgAaMkwxcRbvIET3MNj3GJvJ9Wx9wV5zwfE3IkDWV2uM"
                            graphic={this.state.graphics}
                            hair={this.state.hair}
                            hairColor={this.state.hairColor}
                            hat={this.state.hat}
                            hatColor={this.state.hatColor}
                            lashes = {this.state.lashes}
                            lipColor={this.state.lipColor}
                            mask={this.state.maskFace}
                            mouth={this.state.bouche}
                            skinTone={this.state.skinTone}
                            className= "headPlayer"></BigHead>
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