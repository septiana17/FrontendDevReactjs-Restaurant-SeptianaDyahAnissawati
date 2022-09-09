import React from 'react'
import './header.css'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
  return (
  <header>
    <Container className='container'>
      <Row>
        <Col>
          <div className='container_header'>
            <h1>The Restaurants</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
  )
}

export default Header