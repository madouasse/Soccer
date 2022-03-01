import React from "react";
import "./Avatars.css";
import { BigHead } from '@bigheads/core'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Soccer from "./Soccer";
import firebase from "firebase";
import CCTerrain from "./cCTerrain/CCTerrain.js";

var lashes = true
var maskFace = true

class Avatars extends React.Component {

    constructor(props) {
        super(props);
        this.onClickBigHead = this.onClickBigHead.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.state = { 
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
    nextPage(){
        let items = null
        firebase.database().ref("avatar/"+this.props.id+"/").set(
            [this.state.accessory, this.state.body, this.state.fond, this.state.clothing, this.state.clothingColor, this.state.eyebrows, this.state.eyes, 
                this.state.mask, this.state.maskColor, this.state.facialHair, this.state.graphics, this.state.hair, this.state.hairColor, this.state.hat,
                this.state.hatColor, this.state.lashes, this.state.lipColor, this.state.maskFace, this.state.bouche, this.state.skinTone])
        this.setState({closePage :true})

        items = ["<BigHead accessory='",this.state.accessory, "' body='", this.state.body, "' circleColor= '",this.state.circleColor,"' clothing= '",this.state.clothing,"' clothingColor='",
        this.state.clothingColor,"' eyebrows= '",this.state.eyebrows,"' eyes= '",this.state.eyes,"' faceMask= '",this.state.mask," ' faceMaskColor= '", this.state.maskColor,"' facialHair= '",this.state.facialHair
        ,"'fbclid='IwAR3L_E-ylO1QQaHpgAaMkwxcRbvIET3MNj3GJvJ9Wx9wV5zwfE3IkDWV2uM'","graphic='",this.state.graphics,"' hair='",this.state.hair,"' hairColor='",this.state.hairColor,"' hat= ' "
        ,this.state.hat,"' hatColor='",this.state.hatColor,"' lashes= '",this.state.lashes,"' lipColor='",this.state.lipColor,"'mask='",this.state.maskFace,"'mouth='",this.state.bouche,"'skinTone='",this.state.skinTone,"' className='headPlayer'></BigHead>"];
        firebase.database().ref("avatar/items/"+this.props.id+"/").set(items.join(''))    
    }
    onClickBigHead (setting, sens)
    {    
    if(setting == "accessory")
    {
        var accessories = ["none", "roundGlasses", "tinyGlasses", "shades"]; 
        var index = this.state.accessoryIndex
        sens == "+" ? index=index+1 : index=index-1

        if(index <= 0 && sens == "-" )
        {
            index=accessories.length-1
        }
        if(index == accessories.length && sens == "+")
        {
            index=0
        }
        this.setState({accessoryIndex : index})
        this.setState({accessory: accessories[index]})
    }
    if(setting == "body")
    {
        var bodies = ["breasts", "chest"]; 
        var index = this.state.bodyIndex
        //sens == "+" ? this.setState({bodyIndex : this.state.bodyIndex+1}) : this.setState({bodyIndex : this.state.bodyIndex-1})
        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index=bodies.length-1
        }
        if(index == bodies.length && sens == "+")
        {
            index=0
        }
        this.setState({bodyIndex: index})
        this.setState({body: bodies[index]})
    }
    if(setting == "fond")
    {
        var fonds = ["blue", "red"]; 
        var index = this.state.fondIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = fonds.length-1
        }
        if(index == fonds.length && sens == "+")
        {
            index = 0
        }
        this.setState({fond: fonds[index]})
        this.setState({fondIndex: index})
    }
    if(setting == "clothing")
    {
        var clothings = ["naked", "shirt", "dressShirt", "vneck", "tankTop", "dress"];
        var index = this.state.clothingIndex

        sens == "+" ? index=index+1 : index=index-1

        if(index <= 0 && sens == "-" )
        {
            index = clothings.length-1
        }
        if(index == clothings.length && sens == "+")
        {
            index = 0
        }
        this.setState({clothingIndex: index})
        this.setState({clothing: clothings[index]})
    }
    if(setting == "clothingColor")
    {
        var clothingColors = ["green", "red", "blue", "black"];
        var index = this.state.clothingColorIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = clothingColors.length-1
        }
        if(index == clothingColors.length && sens == "+")
        {
            index = 0
        }
        this.setState({clothingColorIndex: index})
        this.setState({clothingColor: clothingColors[index]})
    }
    if(setting == "eyebrows")
    {
        var eyebrowsTable = ["leftLowered", "raised", "serious", "angry", "concerned"]; 
        var index = this.state.eyebrowsIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = eyebrowsTable.length-1
        }
        if(index == eyebrowsTable.length && sens == "+")
        {
            index = 0
        }
        this.setState({eyebrowsIndex: index})
        this.setState({eyebrows: eyebrowsTable[index]})
    }
/*
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
*/
    if(setting == "eyes")
    {
        var eyesTable = ["normal", "leftTwitch", "happy", "content", "squint", "simple", "dizzy", "wink", "heart" ];
        var index = this.state.eyesIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = eyesTable.length-1
        }
        if(index == eyesTable.length && sens == "+")
        {
            index = 0
        }
        this.setState({eyesIndex: index})
        this.setState({eyes: eyesTable[index]})
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
        var maskColors = ["green", "red", "blue", "black"];
        var index = this.state.maskColorIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = maskColors.length-1
        }
        if(index == maskColors.length && sens == "+")
        {
            index = 0
        }
        this.setState({maskColorIndex: index})
        this.setState({maskColor: maskColors[index]})

    }
    if(setting == "facialHair")
    {
        var facialHairs = ["none", "stubble", "mediumBeard"]; 
        var index = this.state.facialHairIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = facialHairs.length-1
        }
        if(index == facialHairs.length && sens == "+")
        {
            index = 0
        }
        this.setState({facialHairIndex: index})
        this.setState({facialHair: facialHairs[index]})

    }
    
    if(setting == "graphics")
    {
        var graphicsTable = ["none", "redwood", "gatsby", "vue", "react", "graphQL"];
        var index = this.state.graphicsIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = graphicsTable.length-1
        }
        if(index == graphicsTable.length && sens == "+")
        {
            index = 0
        }
        this.setState({graphicsIndex: index})
        this.setState({graphics: graphicsTable[index]})
    }

    if(setting == "hair")
    {
        var index = this.state.hairIndex
        sens == "+" ? index=index+1 : index=index-1
        var hairs = ["buzz", "none", "long", "bun", "short", "pixie", "balding", "afro", "bob" ]; 
        if(index <= 0 && sens == "-" )
        {
            index = hairs.length-1
        }
        if(index == hairs.length-1 && sens == "+")
        {
            index = 0
        }
        this.setState({hairIndex: index})
        this.setState({hair: hairs[index]})

    }

    if(setting == "hairColor")
    {
        var hairColors = ["blonde", "orange", "black", "white", "brown", "blue", "pink"];
        var index = this.state.hairColorIndex
        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = hairColors.length-1
        }
        if(index == hairColors.length && sens == "+")
        {
            index = 0
        }
        this.setState({hairColorIndex: index})
        this.setState({hairColor: hairColors[index]})

    }
    
    if(setting == "hat")
    {
        var index = this.state.hatIndex

        var hats = ["none", "beanie", "turban"]; 
        sens == "+" ? index=index+1 : index=index-1

        if(index <= 0 && sens == "-" )
        {
            index = hats.length-1
        }
        if(index == hats.length && sens == "+")
        {
            index = 0
        }
        this.setState({hatIndex: index})
        this.setState({hat: hats[index]})  
    }

    if(setting == "lashes")
    {
        if(this.state.lashes)
        {
            this.setState({ lashes:!lashes})
        }
        else if(!this.state.lashes)
        {
            this.setState({ lashes: lashes})
        }      
    }

    if(setting == "hatColor")
    {
        var hatColors = ["green", "blue", "black", "white", "red"]; 
        var index = this.state.hatColorIndex
        sens == "+" ? index=index+1 : index=index-1

        if(index <= 0 && sens == "-" )
        {
            index = hatColors.length-1
        }
        if(index == hatColors.length && sens == "+")
        {
            index = 0
        }
        this.setState({hatColorIndex: index})    
        this.setState({hatColor: hatColors[index]})      
    }

    if(setting == "lipColor")
    {
        var lipColors = ["turqoise", "red", "purple", "pink", "green"]; 
        var index = this.state.lipColorIndex
        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = lipColors.length-1
        }
        if(index == lipColors.length && sens == "+")
        {
            index = 0
        }
        this.setState({lipColorIndex: index})
        this.setState({lipColor: lipColors[index]})
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
        var bouches = ["grin", "sad", "openSmile", "lips", "open", "serious", "tongue"];
        var index = this.state.boucheIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = bouches.length-1
        }
        if(index == bouches.length-1 && sens == "+")
        {
            index = 0
        }
        this.setState({boucheIndex: index})
        this.setState({bouche: bouches[index]})
    }

    if(setting == "skinTone")
    {
        var skinTones = ["light", "yellow", "brown", "dark", "red", "black"]; 
        var index = this.state.skinToneIndex

        sens == "+" ? index=index+1 : index=index-1
        if(index <= 0 && sens == "-" )
        {
            index = skinTones.length-1
        }
        if(index == skinTones.length-1 && sens == "+")
        {
            index = 0
        }
        this.setState({skinToneIndex: index})
        this.setState({skinTone: skinTones[index]})
    }
}

render() 
{return(
    <React.StrictMode>
    <Router>
       <Route path="/soccer">
           <CCTerrain id={this.props.id}/>
       </Route>
    {!this.state.closePage &&(
    <header className="App-header">
            <div className="BigHeadFlex">
                <div className="BigHeadPointerList">
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("accessory", "-")}>◄ </div>Lunette<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("accessory", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("body", "-")}>◄ </div>♂/♀<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("body", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("fond", "-")}>◄ </div>Couleur de fond<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("fond", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("clothing", "-")}>◄ </div>Haut<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("clothing", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("clothingColor", "-")}>◄ </div>Couleur du Haut<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("clothingColor", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("eyebrows", "-")}>◄ </div>Style des Sourcils<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("eyebrows", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("eyes", "-")}>◄ </div>Style des Yeux<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("eyes", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("mask", "-")}>◄ </div>Masque<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("mask", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("maskColor", "-")}>◄ </div>Couleur du masque<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("maskColor", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("graphics", "-")}>◄ </div>Logo<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("graphics", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("facialHair", "-")}>◄ </div>Pilosité<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("facialHair", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("hair", "-")}>◄ </div>Coiffure<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("hair", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("hairColor", "-")}>◄ </div>Couleurs des Cheveux<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("hairColor", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("hat", "-")}>◄ </div>Chapeau<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("hat", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("hatColor", "-")}>◄ </div>Couleur du Chapeau<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("hatColor", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("lashes", "-")}>◄ </div>Cils<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("lashes", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("lipColor", "-")}>◄ </div>Rouge à lévre<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("lipColor", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("maskFace", "-")}>◄ </div>Fond<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("maskFace", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("bouche", "-")}>◄ </div>Bouche<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("bouche", "+")}>►</div>
                    </div>
                    <div className="BigHeadPointerIndex">
                        <div className="BigHeadPointerLeft" onClick={() => this.onClickBigHead("skinTone", "-")}>◄ </div>Peau<div className="BigHeadPointerRight" onClick={() => this.onClickBigHead("skinTone", "+")}>►</div>
                    </div>
                </div>
                <div>
                <div className="BigHead">
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
                <button className="login-btn" onClick={()=> this.nextPage()} ><Link class="boxhead" to="/CCTerrain">Valider</Link></button>
                </div>
            </div>
        </header>
        )}
        </Router>
    </React.StrictMode>
)}
}

export default Avatars;
