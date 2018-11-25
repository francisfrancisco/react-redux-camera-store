import React from 'react';
import CartItem from './CartItem';
import { Card, Button, CardTitle, CardText, ListGroup, ListGroupItem } from 'reactstrap';
import {connect} from 'react-redux';

const Cart = (props) => {
  let itemsInCart = props.cameras.filter(camera => camera.inCart)
  let listOfCartItems = itemsInCart.map(item => <CartItem key={item.id} item={item} removeItem={props.removeItem} />);
  let subTotal = (itemsInCart.reduce((acc, item) => acc + item.price, 0)).toFixed(2);
  let tax = (Number(subTotal) * .086).toFixed(2);
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

const mapStateToProps = state => {
  return {
    cameras: state.cameras
  }
}

export default connect(mapStateToProps)(Cart);
