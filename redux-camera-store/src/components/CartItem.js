import React from 'react'
import { Button } from 'reactstrap';

const CartItem = (props) => {
  return (
    <div>
      {props.item.name}
      <Button onClick={() => props.removeItem(props.item.id)}>
          Remove from Cart
      </Button>
    </div>
  )
}

export default CartItem
