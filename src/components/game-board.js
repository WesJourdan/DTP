import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchImage, fetchCaption } from "../actions/index";
import { bindActionCreators } from "redux";

//export each step as a div
class GameBoard extends Component {

  renderSteps() {
    return this.props.steps.map( (step, index) => {

  //steps are either images or captions. render them based on type.
      let stepNode = null;
      if (step.type === 'image'){
        stepNode = (
          <div className="col-md-3 w-50 m-4 d-flex align-items-center step-node border border-primary rounded" key={index}>
              <img className="img img-fluid" src={step.url} alt={step.type} />
          </div>
        );
      } else {
        stepNode = (
          <div className="col-md-3 w-25 m-4 d-flex align-items-center justify-content-center step-node border border-primary rounded" key={step.text}>
            <h3 className="text-center">{step.text}</h3>
          </div>

        )
      };
      return stepNode;
    });

  }

  render() {
    //check if steps array has reached its full length of If not, add a "next" button.

    let nextButton = null;
    let threadLength = this.props.steps.length;
    let lastStep = this.props.steps[threadLength - 1];
    if (threadLength > 0 && threadLength < this.props.numberOfSteps) {
      nextButton = (
        <div className="col-md-3 w-25 m-4 d-flex align-items-center justify-content-center">
          <button className="btn btn-info"
            onClick={() => {
              threadLength % 2
              ? this.props.fetchImage(lastStep.text)
              : this.props.fetchCaption(lastStep.url)}
            }>
            Next turn
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
  return {
    steps: state.steps,
    numberOfSteps: state.numberOfSteps
  };
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchImage, fetchCaption },  dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);
