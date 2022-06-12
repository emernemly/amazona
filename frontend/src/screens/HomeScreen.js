import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { Col, Row } from 'react-bootstrap';
import Proudect from '../components/Proudect';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../components/LoadingBox';
import Messagebox from '../components/Messagebox';
const HomeScreen = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, loading: false, products: action.payload };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: '',
  });
  //const [products, setproducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/product');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }

      // setproducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Amazona</title>
      </Helmet>
      <h1>Featured Product</h1>
      <div className="products">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <Messagebox err={error}></Messagebox>
        ) : (
          <Row>
            {products.map((produc) => {
              return (
                <Col key={produc.slug} sm={6} md={4} lg={3} className="mb-3">
                  <Proudect produc={produc} />
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
