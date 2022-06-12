import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';

const SignIn = () => {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <div>
      <Container className="small-container">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1 className="my-3">sign In</h1>
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" required></Form.Control>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required></Form.Control>
          </Form.Group>
          <div className="mb-3">
            <Button type="submit">Sign In</Button>
          </div>
          <div className="mb-3">
            New customer?{' '}
            <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>{' '}
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default SignIn;
