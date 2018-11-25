import React, {Component} from 'react'
import Camera from './Camera'
import {connect} from 'react-redux';

class CameraList extends Component {
  state = {
    filterPhrase: ''
  }

  handleChange = e => {
    this.setState({
      filterPhrase: e.target.value
    })
  }

  render(){
    let listOfCameras  = this.props.cameras
    .filter(camera => camera.name.toLowerCase().includes(this.state.filterPhrase.toLowerCase()))
    .map(camera => <Camera key={camera.id} camera={camera} addItem={this.props.addCamera} />)
  return (
    <div className="text-left">
      <input type="text" name="filterPhrase" onChange={this.handleChange} value={this.state.filterPhrase} />
            {listOfCameras}
    </div>
  )
  }
}

const mapStateToProps = state => {
  return {
    cameras: state.cameras
  }
}

export default connect(mapStateToProps)(CameraList)
