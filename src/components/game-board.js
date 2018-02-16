import React, { Component } from "react";
import { connect } from "react-redux";

//use the version of steps below for testing purposes only
let steps = [
  {type: 'image', url: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg'},
  {type: 'caption', text: "a Qdog"}
]


steps.push({type: 'image', url: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg'});

steps.push({type: 'caption', text: `help I'm in react purgatory forever`})

//export each step as a div
class GameBoard extends Component {
// return this.props.steps.map( (step, index, stepsArray) => {
  renderSteps() {

    return steps.map( (step, index) => {
  //steps are either images or captions. render them based on type.

      let stepNode = null;
      if (step.type === 'image'){
        stepNode = (
          <div className="col-md-3 w-25 m-3 step-image" key={step.index}>
              <img className="img img-fluid d-inline-block align-middle" src={step.url} />
          </div>
        );
      } else {
        stepNode = (
          <div className="col-md-3 w-25 text-center step-caption" key={step.text}>
            {step.text}
          </div>
        )
      };
      return stepNode;
    });
  }

  render() {
    //check if steps array has reached its full length of 6. If not, add a "next" button.
    let nextButton = null;
    // if (this.props.steps.length < 6) {
    if (steps.length < 6)
      nextButton = (
        <div className="col-md-3 m-3 text-center">
          <button className="btn btn-info"> >>> </button>
        </div>
      )
    return (
      <div>
        <div className="row">
          {this.renderSteps()}
          {nextButton}
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
