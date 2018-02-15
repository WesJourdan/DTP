import React, { Component } from "react";
import { connect } from "react-redux";

//use the version of steps below for testing purposes only
// const steps = [
//   {type: 'image', content: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg'},
//   {type: 'caption', content: "a Qdog"}
// ]

//export each step as a div
class GameBoard extends Component {

  renderSteps() {
    return this.props.steps.map( (step, index) => {
  //steps are either images or captions. render them based on type.
      let stepNode = null;
      if (step.type === 'image'){
        stepNode = (
          <div className="col-md-4 step-image" key={step.index}>
              <img className="img w-100" src={step.content} />
          </div>
        );
      } else {
        stepNode = (
          <div className="col-md-4 step-caption" key={step.index}>
              {step.content}
          </div>
        )
      }
      return stepNode;
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderSteps()}
        </div>
      </div>
    );
  }
}
function mapStateToProps({ steps }) {
  return { steps };
}


export default connect(mapStateToProps)(GameBoard);


  //to test code without accessing store, comment out mapStateToProps and use the export statement below instead.
// export default GameBoard
