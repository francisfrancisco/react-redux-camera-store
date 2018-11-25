import React from 'react'
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {addCamera} from '../redux/actions/camera-actions';

const Camera = (props) => {
  return (
    <div>
      <p>
        Camera Name: {props.camera.name}
      </p>
      <p>
        <img src={props.camera.picture} width="300" height="300"/> <span>{props.camera.onSale}</span>
      </p>
      <p>
        price: ${(props.camera.price).toFixed(2)}
      </p>
      <p>
        rating: {props.camera.rating}
      </p>
      <p>
        {props.camera.onSale ? 'SALESALESALE' : ''}
      </p>
      <Button color="primary"
        onClick={
        () => props.addItem(props.camera.id)
      }>Add to Cart</Button>
    </div>
  )
}

export default connect(null, {addCamera})(Camera)
