import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImage, fetchCaption } from "../actions/index";
import { bindActionCreators } from "redux";

//use the version of steps below for testing purposes only. then change steps back to this.props.steps
// let steps = [
//   {type: 'image', url: 'https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg'},
//   {type: 'caption', text: "a Qdog"}
// ]
//
//
// steps.push({type: 'image', url: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg'});
//
// steps.push({type: 'caption', text: `help I'm in react purgatory forever`})
//
// steps.push({type: 'image', url: 'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23244_what-is-the-appenzeller-sennenhunde-dog-300x189.jpg'});

// steps.push({type: 'caption', text: `help I'm in react purgatory forever`})

//export each step as a div
class GameBoard extends Component {
// return this.props.steps.map( (step, index, stepsArray) => {
  renderSteps() {

    return this.props.steps.map( (step, index) => {
  //steps are either images or captions. render them based on type.
      let stepNode = null;
      if (step.type === 'image'){
        stepNode = (
          <div className="col-md-3 w-50 m-4 d-flex align-items-center step-node" key={step.index}>
              <img className="img img-fluid" src={step.url} />
          </div>
        );
      } else {
        stepNode = (
          <div className="col-md-3 w-25 m-4 d-flex align-items-center justify-content-center step-node" key={step.text}>
            <p className="text-center">{step.text}</p>
          </div>

        )
      };
      return stepNode;
    });

  }

  render() {
    //check if steps array has reached its full length of 6. If not, add a "next" button.
    console.log(this.props);
    let nextButton = null;
    let threadLength = this.props.steps.length;
    let lastStep = this.props.steps[threadLength - 1];
    if (threadLength < 6) {
      nextButton = (
        <div className="col-md-3 w-25 m-4 d-flex align-items-center justify-content-center">
          <button className="btn btn-info"
            onClick={() => threadLength % 2
              ? this.props.fetchImage(lastStep)
              : this.props.fetchCaption(lastStep)}>
            Next
          </button>
        </div>
    )};

    return (
      <div>
        <div className="row d-flex h-50 justify-content-center">
          {this.renderSteps()}
          {nextButton}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators({ fetchImage, fetchCaption },  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);


  //to test code without accessing store, comment out mapStateToProps and use the export statement below instead.
// export default GameBoard
