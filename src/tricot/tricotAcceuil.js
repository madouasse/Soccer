import React, { useState } from "react";
import "./tricot.css";

class TricotAcceuil extends React.Component {
    constructor(props) {
        super(props);
        this.onmouseenter = this.onmouseenter.bind(this);
        this.onmouseout = this.onmouseout.bind(this);

        
        this.state = { 
            listCouturieres: ["Anne", "Johana", "Sophie"],
            enterCout : false
        };
      }
    render() {
        return (
        <div>
            <div className="TableIndex">
                    <div className='TableTricot'>
                        <div>
                        <div onMouseEnter= {(e) => this.onmouseenter(e)} onMouseOut= {(e) => this.onmouseout(e)} >
                            <th classeName='alignTab' scope="col">Couturières</th>
                        </div>
                        {this.state.enterCout && (
                            <div>
                                <div onMouseEnter= {(e) => this.onmouseenter(e)}  onMouseOut= {(e) => this.onmouseout(e)}>
                                        Anne
                                </div>
                                <div onMouseEnter= {(e) => this.onmouseenter(e)}  onMouseOut= {(e) => this.onmouseout(e)}>
                                        Johana
                                </div>
                                <div onMouseEnter= {(e) => this.onmouseenter(e)}  onMouseOut= {(e) => this.onmouseout(e)}>
                                        Sophie
                                </div>
                            </div>
                        )}
                        </div>
                        <div >Patron</div>
                        <div >Les machines</div>
                        <div >Tricot</div>
                    </div>
            </div>
        </div>
        )
    }
    onmouseenter(e)
    {
        this.setState({enterCout : true});
    }
    onmouseout()
    {
        this.setState({enterCout : false});
    }
}
export default TricotAcceuil;
