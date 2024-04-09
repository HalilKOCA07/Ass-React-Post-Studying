import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';


export const Header = ({setInputValue}) => {




  return (

    <Navbar className="bg-body-tertiary justify-content-between">
      <Form inline>
        <InputGroup>
          <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          <Form.Control
            placeholder="Search User"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(e) => setInputValue(e.target.value)}
          />
        </InputGroup>
      </Form>
    </Navbar>
  );
};
