{this.state.valideIdMdp && this.state.valideIdMdp != null && this.state.nextPage >= 1 &&(
    <div className ="soccerPage " onClick = {()=> this.onClickSoccer()} ><Avatars/>
        <button className="validate-btn">Valider</button>
  </div>
  )}
  {this.state.valideIdMdp && this.state.valideIdMdp != null && this.state.nextPage >= 2 &&(
    <div className ="soccerPage" onClick = {()=> this.onClickSoccer()} ><Soccer/></div>
  )}
  {this.state.tricotPage && (
    <div>
      <img src={soccerWallfrom} />
      <button className = "button2"> Creer </button>
      <div id="button">
        <span class="noselect">Hello</span>
        <div id="circle"></div>
      </div>
    </div>
  )}