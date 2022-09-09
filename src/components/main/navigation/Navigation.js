import React from 'react'
import './navigation.css'
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap'

const Navigation = () => {
  return (
  <div>
    <Navbar variant='light'>
    <Container className='navigation d-flex'>
      <Navbar.Brand href="#">Restaurant</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto"
        navbarScroll
        >
      <div className='select d-flex mx-2'>
      <Nav.Link className='mx-2'>Filter By:</Nav.Link>
      {/* <Form.Check type="radio" aria-label="radio 1" /> Open Now */}
      <Form.Select aria-label="Default select">
        <option value='open'>Open Now</option>
        <option value='closed'>Closed</option>
      </Form.Select>
      <Form.Select aria-label="Default select ">
        <option>Price</option>
        <option value="1">$</option>
        <option value="2">$$</option>
        <option value="3">$$$</option>
      </Form.Select>
      <Form.Select aria-label="Default select ">
        <option>Category</option>
        <option value="canteen">canteen</option>
        <option value="bukka">bukka</option>
        <option value="eatry">eatry</option>
      </Form.Select>
      </div>
      </Nav>
      <Form className="d-flex">
      <Button variant="outline-light" className='text-dark'>Clear All</Button>
      </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  </div>
  )
}

export default Navigation