import React from 'react'
import CartItem from './CartItem'
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';

const Cart = (props) => {
  let listOfCartItems = props.camerasInCart.map(item => <CartItem key={item.id} item={item} removeItem={props.removeItem} />);
  let subTotal = (props.camerasInCart.reduce((acc, item) => acc + item.price, 0)).toFixed(2);
  let tax = (Number(subTotal) * .086).toFixed(2);
  console.log('cart props', props);
  return (
    <div>
      <Card body inverse style={{ backgroundColor: 'orange', borderColor: 'orange', height: 500, marginTop: 40, marginRight: 40, overflow: 'scroll' }} >
        <CardTitle>Your Cart</CardTitle>
        <ListGroup>
          <ListGroupItem><CardText style={{color: 'black'}}>{listOfCartItems}</CardText></ListGroupItem>
        </ListGroup>
        <CardText>Subtotal: ${subTotal}</CardText>
        <CardText>Tax: ${tax}</CardText>
        <CardText>Total: ${Number(subTotal) + Number(tax)} </CardText>
        <Button>Checkout</Button>
      </Card>
    </div>
  )
}

export default Cart
