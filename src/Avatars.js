import React from "react";
import "./Avatars.css";
import { BigHead } from '@bigheads/core'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Soccer from "./Soccer";


var mask = false
var maskColor = "green"
var facialHair ="none"
var graphics ="none"
var hair = "buzz"
var hairColor = "blonde"
var hat="none"
var lashes = true
var hatColor = "green"
var lipColor = "turqoise"
var maskFace = true
var bouche = "grin"
var skinTone = "light"

class Avatars extends React.Component {

    constructor(props) {
        super(props);
        this.onClickBigHead = this.onClickBigHead.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.state = { 
          accessory: null, 
          id: null,
          valideIdMdp: String,
          exitOlive:700,
          valideIdMdpBoolean:false,
          closePage :false,
          accessory :"none",
          body : "breasts",
          fond : "blue",
          clothing : "shirt",
          clothingColor : "green",
          eyebrows : "leftLowered",
          eyes : "normal",
          mask : false,
          maskColor : "green",
          facialHair :"none",
          graphics :"none",
          hair : "buzz",
          hairColor : "blonde",
          hat:"none",
          lashes : true,
          hatColor : "green",
          lipColor : "turqoise",
          maskFace : true,
          bouche : "grin",
          skinTone : "light"
        };
      }
    nextPage(){
        this.setState({closePage :true})
    }
    onClickBigHead (setting)
    {
    if(setting == "accessory")
    {
        if(this.state.accessory == "none")
        {
            this.setState({accessory : "roundGlasses"}); 
        }
        else if(this.state.accessory == "roundGlasses")
        {
            this.setState({accessory : "tinyGlasses"});
        }
        else if(this.state.accessory == "tinyGlasses")
        {
            this.setState({accessory : "shades"});
        }
        else if(this.state.accessory == "shades")
        {
            this.setState({accessory : "none"})
        }
    }
    if(setting == "body")
    {
        if(this.state.body == "breasts")
        {
            this.setState({body : "chest"})
        }
        else if(this.state.body == "chest")
        {
            this.setState({body : "breasts"})
        }
    }
    if(setting == "fond")
    {
        if(this.state.fond == "blue")
        {
            this.setState({fond : "red"})
        }
        else if(this.state.fond == "red")
        {
            this.setState({fond : "blue"})
        }
    }
    if(setting == "clothing")
    {
        if(this.state.clothing == "naked")
        {
            this.setState({clothing : "shirt"})
        }
        else if(this.state.clothing == "shirt")
        {
            this.setState({clothing : "dressShirt"})
        }
        else if(this.state.clothing == "dressShirt")
        {
            this.setState({clothing : "vneck"})
        }
        else if(this.state.clothing == "vneck")
        {
            this.setState({clothing : "tankTop"})
        }
        else if(this.state.clothing == "tankTop")
        {
            this.setState({clothing : "dress"})
        }
        else if(this.state.clothing == "dress")
        {
            this.setState({clothing : "naked"})
        }
    }
    if(setting == "clothingColor")
    {
        if(this.state.clothingColor == "green")
        {
            this.setState({clothingColor : "red"})
        }
        else if(this.state.clothingColor == "red")
        {
            this.setState({clothingColor : "blue"})
        }
        else if(this.state.clothingColor == "blue")
        {
            this.setState({clothingColor : "black"})
        }
        else if(this.state.clothingColor == "black")
        {
            this.setState({clothingColor : "green"})
        }
    }
    if(setting == "eyebrows")
    {
        if(this.state.eyebrows == "leftLowered")
        {
            this.setState({eyebrows : "raised"})
        }
        else if(this.state.eyebrows == "raised")
        {
            this.setState({eyebrows : "serious"})
        }
        else if(this.state.eyebrows == "serious")
        {
            this.setState({eyebrows : "angry"})
        }
        else if(this.state.eyebrows == "angry")
        {
            this.setState({eyebrows : "concerned"})
        }
        else if(this.state.eyebrows == "concerned")
        {
            this.setState({eyebrows : "leftLowered"})
        }
    }

    if(setting == "eyebrows")
    {
        if(this.state.eyebrows == "leftLowered")
        {
            this.setState({eyebrows : "raised"})
        }
        else if(this.state.eyebrows == "raised")
        {
            this.setState({eyebrows : "serious"})
        }
        else if(this.state.eyebrows == "serious")
        {
            this.setState({eyebrows : "angry"})
        }
        else if(this.state.eyebrows == "angry")
        {
            this.setState({eyebrows : "concerned"})
        }
        else if(this.state.eyebrows == "concerned")
        {
            this.setState({eyebrows : "leftLowered"})
        }
    }

    if(setting == "eyes")
    {
        if(this.state.eyes == "normal")
        {
            this.setState({eyes : "leftTwitch"})
        }
        else if(this.state.eyes == "leftTwitch")
        {
            this.setState({eyes : "happy"})
        }
        else if(this.state.eyes == "happy")
        {
            this.setState({eyes : "content"})
        }
        else if(this.state.eyes == "content")
        {
            this.setState({eyes : "squint"})
        }
        else if(this.state.eyes == "squint")
        {
            this.setState({eyes : "simple"})
        }
        else if(this.state.eyes == "simple")
        {
            this.setState({eyes : "dizzy"})
        }        
        else if(this.state.eyes == "dizzy")
        {
            this.setState({eyes : "wink"})
        }
        else if(this.state.eyes == "wink")
        {
            this.setState({eyes : "heart"})
        }
        else if(this.state.eyes == "heart")
        {
            this.setState({eyes : "normal"})
        }
    }
    if(setting == "mask")
    {
        if(this.state.mask)
        {
            this.setState({mask : false})
        }
        else if(!this.state.mask)
        {
            this.setState({mask : true})
        }
    }
    if(setting == "maskColor")
    {
        if(this.state.maskColor == "green")
        {
            this.setState({maskColor : "red"})
        }
        else if(this.state.maskColor == "red")
        {
            this.setState({maskColor : "blue"})
        }
        else if(this.state.maskColor == "blue")
        {
            this.setState({maskColor : "black"})
        }
        else if(this.state.maskColor == "black")
        {
            this.setState({maskColor : "green"})
        }
    }
    if(setting == "facialHair")
    {

        if(this.state.facialHair == "none")
        {
            this.setState({facialHair : "stubble"})
        }
        else if(this.state.facialHair == "stubble")
        {
            this.setState({facialHair : "mediumBeard"})
        }
        else if(this.state.facialHair == "mediumBeard")
        {
            this.setState({facialHair : "none"})
        }
    }
    
    if(setting == "graphics")
    {
        if(this.state.graphics == "none")
        {
            this.setState({graphics : "redwood"})
        }
        else if(this.state.graphics == "redwood")
        {
            this.setState({graphics : "gatsby"})
        }
        else if(this.state.graphics == "gatsby")
        {
            this.setState({graphics : "vue"})
        }
        else if(this.state.graphics == "vue")
        {
            this.setState({graphics : "react"})
        }
        else if(this.state.graphics == "react")
        {
            this.setState({graphics : "graphQL"})
        }
        else if(this.state.graphics == "graphQL")
        {
            this.setState({graphics : "none"})
        }
    }

    if(setting == "hair")
    {
        if(this.state.hair == "buzz")
        {
            this.setState({hair : "none"})
        }
        else if(this.state.hair == "none")
        {
            this.setState({hair : "long"})
        }
        else if(this.state.hair == "long")
        {
            this.setState({hair : "bun"})
        }
        else if(this.state.hair == "bun")
        {
            this.setState({hair : "short"})
        }
        else if(this.state.hair == "short")
        {
            this.setState({hair : "pixie"})
        }
        else if(this.state.hair == "pixie")
        {
            this.setState({hair : "balding"})
        }
        else if(this.state.hair == "balding")
        {
            this.setState({hair : "afro"})
        }        
        else if(this.state.hair == "afro")
        {
            this.setState({hair : "bob"})
        }        
        else if(this.state.hair == "bob")
        {
            this.setState({hair : "buzz"})
        }
    }

    if(setting == "hairColor")
    {
        if(this.state.hairColor == "blonde")
        {
            this.setState({hairColor : "orange"})
        }
        else if(this.state.hairColor == "orange")
        {
            this.setState({hairColor : "black"})
        }
        else if(this.state.hairColor == "black")
        {
            this.setState({hairColor : "white"})
        }
        else if(this.state.hairColor == "white")
        {
            this.setState({hairColor : "brown"})
        }
        else if(this.state.hairColor == "brown")
        {
            this.setState({hairColor : "blue"})
        }
        else if(this.state.hairColor == "blue")
        {
            this.setState({hairColor : "pink"})
        }
        else if(this.state.hairColor == "pink")
        {
            this.setState({hairColor : "blonde"})
        }        
    }
    
    if(setting == "hat")
    {
        if(this.state.hat == "none")
        {
            this.setState({ hat:"beanie"})
        }
        else if(this.state.hat == "beanie")
        {
            this.setState({ hat:"turban"})
        }
        else if(this.state.hat == "turban")
        {
            this.setState({ hat:"none"})
        }        
    }

    if(setting == "lashes")
    {
        if(this.state.lashes)
        {
            this.setState({ lashes:!lashes})
        }
        else if(!this.state.lashes)
        {
            this.setState({ lashes:!lashes})
        }      
    }

    if(setting == "hatColor")
    {
        if(this.state.hatColor == "green")
        {
            this.setState({ hatColor : "blue"})
        }
        else if(this.state.hatColor == "blue")
        {
            this.setState({ hatColor : "black"})
        }
        else if(this.state.hatColor == "black")
        {
            this.setState({ hatColor : "white"})
        }
        else if(this.state.hatColor == "white")
        {
            this.setState({hatColor : "red"})
        }
        else if(this.state.hatColor == "red")
        {
            this.setState({hatColor : "green"})
        }       
    }
    if(setting == "lipColor")
    {
        if(this.state.lipColor == "turqoise")
        {
            this.setState({lipColor : "red"})
        }
        else if(this.state.lipColor == "red")
        {
            this.setState({lipColor : "purple"})
        }
        else if(this.state.lipColor == "purple")
        {
            this.setState({lipColor : "pink"})
        }
        else if(this.state.lipColor == "pink")
        {
            this.setState({lipColor : "green"})
        }
        else if(this.state.lipColor == "green")
        {
            this.setState({lipColor : "turqoise"})
        }       
    }
    if(setting == "maskFace")
    {
        if(this.state.maskFace)
        {
            this.setState({maskFace : !maskFace})
        }
        else if(!this.state.maskFace)
        {
            this.setState({maskFace : !maskFace})
        }      
    }

    if(setting == "bouche")
    {
        if(this.state.bouche == "grin")
        {
            this.setState({bouche : "sad"})
        }
        else if(this.state.bouche == "sad")
        {
            this.setState({bouche : "openSmile"})
        }      
        else if(this.state.bouche == "openSmile")
        {
            this.setState({bouche : "lips"})
        } 
        else if(this.state.bouche == "lips")
        {
            this.setState({bouche : "open"})
        } 
        else if(this.state.bouche == "open")
        {
            this.setState({bouche : "serious"})
        } 
        else if(this.state.bouche == "serious")
        {
            this.setState({bouche : "tongue"})
        } 
        else if(this.state.bouche == "tongue")
        {
            this.setState({bouche : "grin"})
        }
    }

    if(setting == "skinTone")
    {
        if(this.state.skinTone == "light")
        {
            this.setState({skinTone : "yellow"})
        }
        else if(this.state.skinTone == "yellow")
        {
            this.setState({skinTone : "brown"})
        }      
        else if(this.state.skinTone == "brown")
        {
            this.setState({skinTone : "dark"})
        } 
        else if(this.state.skinTone == "dark")
        {
            this.setState({skinTone : "red"})
        } 
        else if(this.state.skinTone == "red")
        {
            this.setState({skinTone : "black"})
        } 
        else if(this.state.skinTone == "black")
        {
            this.setState({skinTone : "light"})
        } 
    }
}


render() 
{return(
<div>
    <header className="App-header">
    <React.StrictMode>
     <Router>
        <Route path="/soccer">
            <Soccer />
        </Route>
        {!this.state.closePage &&(
            <div className="BigHeadFlex">
                <div className="BigHeadPointerList">
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("accessory")}>Lunette</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("body")}>♂/♀</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("fond")}>Couleur de fond</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("clothing")}>Haut</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("clothingColor")}>Couleur du Haut</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("eyebrows")}>Style des Sourcils</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("eyes")}>Style des Yeux</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("mask")}>Masque</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("maskColor")}>Couleur du masque</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("graphics")}>Logo</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("facialHair")}>Pilosité</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("hair")}>Coiffure</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("hairColor")}>Couleurs des Cheveux</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("hat")}>Chapeau</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("hatColor")}>Couleur du Chapeau</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("lashes")}>Cils</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("lipColor")}>Rouge à lévre</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("maskFace")}>Fond</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("bouche")}>Bouche</div>
                    <div className="BigHeadPointer" onClick={() => this.onClickBigHead("skinTone")}>Peau</div>

                </div>
                <div>
                    <BigHead 
                    accessory={this.state.accessory}
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
                </div>
                <button className="login-btn" onClick={()=> this.nextPage()} ><Link class="boxhead" to="/soccer">Valider</Link></button>
            </div>)}
        </Router>
    </React.StrictMode>
</header>
</div>
)}
}

export default Avatars;
