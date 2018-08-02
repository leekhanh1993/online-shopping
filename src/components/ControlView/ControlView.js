import React, { Component } from 'react';

class ControlView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gridView: true,
      listView: false
    }
  }

  showGrid(){
    this.props.gridView(true)
    this.setState({
      gridView: true,
      listView: false
    })
  }
  showList(){
    this.props.gridView(false)
    this.setState({
      gridView: false,
      listView: true
    })
  }

  render() {
    return ( 
      <div className="container-fluid text-right">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ paddingTop: 10, paddingBottom: 10 }}>
          <button 
          type="button" 
          className={this.state.gridView ? 'btn btn-success' : 'btn btn-default'} 
          style={{marginLeft: 10}}
          onClick={()=> this.showGrid()}
          >Grid View</button>
          <button 
          type="button" 
          className={this.state.listView ? 'btn btn-success' : 'btn btn-default'} 
          style={{ marginLeft: 10}}
          onClick={() => this.showList()}
          >List View</button>
        </div>
      </div>
    );
  }
}

export default ControlView;