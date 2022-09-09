import React, { useState, useEffect } from 'react'
import './section.css'
import axios from 'axios'
import {Card, Container, Row, Col, Button} from "react-bootstrap"
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import Rating from 'react-rating'

const Section = props => {  
  const [restaurants, setRestaurants] = useState ([]);
  const [loading, setLoading] = useState (true);

  useEffect(() => {
  axios.get(`https://foodbukka.herokuapp.com/api/v1/restaurant/`)
   .then(response => {
    setRestaurants(response.data.Result)
    setLoading(false)
  })
  }, [])

  return (
  <div>
  <Container className='section'>
  <h4>All Restaurants</h4>
  <Row>
  {
  loading ? (
  <div>Loading...</div>
  ) : (      
    restaurants.map((restaurant, index) => {
    return (
    <Col md={3} className='card_restaurant'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={restaurant.image} />
      <Card.Body>
        <Card.Title>{restaurant.businessname}</Card.Title>
        <Card.Text>
          <div>
            <Rating 
            emptySymbol= {<AiOutlineStar />}
            fullSymbol= {<AiFillStar />}
            fractions={2}
            initialRating= {Math.floor(Math.random() * 5) + 1}
            readonly
            />
          </div>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          {
            (() => {

                if (parseInt(restaurant.averagecost) < 700) {
                  return (<p>{restaurant.restauranttype} - $ </p>)
                } else if (parseInt(restaurant.averagecost) < 1500) {
                  return (<p>{restaurant.restauranttype} - $$ </p>)
                } else if (parseInt(restaurant.averagecost) >= 1500){
                  return (<p>{restaurant.restauranttype} - $$$ </p>)
                }
            }) ()
          }
          <p className='d-flex align-items-center'>
          <div className='square hijau mx-2'></div>Open Now</p>
        </div>
        <Button variant="primary" className='w-100'>LEARN MORE</Button>
      </Card.Body>
      </Card>
    </Col>
    )   
  }))
  }
  </Row>
  </Container>
  </div>
  )
}

export default Section