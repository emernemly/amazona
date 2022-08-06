import axios from 'axios';
import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import Rating from './Rating';

const Proudect = ({ produc }) => {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
  const addToCartHandler = async (item) => {
    const exisItem = cartItems.find((x) => x._id === item._id);
    const quantity = exisItem ? exisItem.quantity + 1 : 1;
    console.log(item);
    const { data } = await axios.get(`/api/product/${item._id}`);

    if (data.countInStock === 0) {
      window.alert('Sorry. Product is out of Stock');
    } else {
      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...item, quantity: 1 },
      });
      alert('the Proudect add to cart');
    }
  };
  return (
    <Card>
      <Link to={`/product/${produc.slug}`}>
        <img src={produc.image} className="card-img-top" alt={produc.name} />
      </Link>
      <Card.Body>
        <Link to={`/product/${produc.slug}`}>
          <Card.Title>{produc.name}</Card.Title>
        </Link>
        <Rating rating={produc.rating} numReviews={produc.numReviwes} />

        <Card.Text>${produc.price}</Card.Text>
        {produc.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(produc)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Proudect;
