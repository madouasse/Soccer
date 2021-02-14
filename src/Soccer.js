import React from "react";
import "./Soccer.css";
import lesJoueurs from "./configJoueur";

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


const Soccer = () => (
        <div className="soccerPage">
            {page=="Acceuil" && ( <div className='vestiaire' onClick={() => onClickNext("vestiaire") }>Vestiaire</div>)}
            {page=="Acceuil" && (<div className="terrain" onClick={() => onClickNext("terrain")}>Terrain</div>)}
            {page=="Acceuil" && (<div className="bus" onClick={() => onClickNext("bus")}>Bus</div>)}
            {page == "vestiaire" && (
            <div className="vestiairePage">
                <div className="vestiaireNeon">
                    vestiaire
                </div>
                <div id= "slip" className="JouersVestiaire">Joueurs </div>
                <table className="Table">
                    <thead >
                        <tr className='TableJours'>
                            <th className= "headPlayerCell"></th>
                            <th onClick={()=>onClickNext("bite")}>Joueurs</th>
                            <th>But</th>
                            <th>Match Gagné</th>
                            <th>Match Perdu</th>
                            <th>Match Joué</th>
                        </tr>
                    </thead>
                    <tbody>
                    {[... statJouerTotal.keys()].map((level) => (
                    <tr className="joueur" id={level+"slip"} onClick={()=>valideOuNon(level)}>
                    {validation == true &&
                        (<BigHead id={level+"slip8"} className= "headPlayer"></BigHead>)}  
                    {[... TotalInfoJoueurs[level].keys()].map((row) => (
                        <td  >{TotalInfoJoueurs[(level)][row]}</td>
                    ))}
                    </tr>
                     ))}
                    </tbody>                
                </table>
              </div>)}
        </div>    
        );
function onClickNext (newPage)
{
    if(newPage == "vestiaire")
    {
        tableDesJoueurs(lesJoueurs)
    }
    page=newPage
}

function tableDesJoueurs(joueursList)
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

function valideOuNon(level)
{
    if(!validation)
    {
        console.log(document.getElementById(level+"slip"),"valideOuNon !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        document.getElementById(level+"slip").setAttribute("class" ,"joueurElseValid");
        validation = true;
    }
    else
    {
        document.getElementById(level+"slip").setAttribute("class" ,"joueur");
        validation = false;
    }
    
}

export default Soccer;
/*

function tableDesJoueurs(joueursList)
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