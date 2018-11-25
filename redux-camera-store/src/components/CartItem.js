import React from 'react';
import { Button } from 'reactstrap';
import {connect} from 'react-redux';
import {removeCamera} from '../redux/actions/camera-actions';

const CartItem = (props) => {
  return (
    <div>
      {props.item.name}
      <Button onClick={() => props.removeCamera(props.item.id)}>
          Remove from Cart
      </Button>
    </div>
  )
}

export default connect(null, {removeCamera})(CartItem)
