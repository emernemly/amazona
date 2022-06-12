import React from 'react';
import { Alert } from 'react-bootstrap';

const Messagebox = ({ err }) => {
  return <Alert variant="danger">{err}</Alert>;
};

export default Messagebox;
