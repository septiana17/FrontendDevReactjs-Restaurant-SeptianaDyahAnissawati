import React, { useState, useEffect } from 'react'
import './detail.css'
import { useLocation, useParams } from 'react-router'
import axios from 'axios'
import { Container, Col, Row, Image } from 'react-bootstrap'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import Rating from 'react-rating'
import AVT1 from '../../../src/assets/avatar1.jpg'
import AVT2 from '../../../src/assets/avatar2.jpg'

const DetailView = props => {
  const [restaurant, setRestaurant] = useState ([]);

  let param = useParams()
  let location = useLocation()
  useEffect(() => {
  axios.get('https://foodbukka.herokuapp.com/api/v1/restaurant/'+param.id)
   .then(response => {
        setRestaurant(response.data.data)
        console.log(restaurant)
    })
  }, [])

  return (
    <div className='detail'>
    <Container>
    <Col>
    <Row>
      <div className='detail_view'>
      <h1>{restaurant.businessname}</h1>
      <h4>{restaurant.address}</h4>
      <p>Email: {restaurant.email}</p>
      <div className='d-flex justify-content-between'>
      <p>Review : {restaurant.reviews}</p>
      <p>{restaurant.location}</p>
      </div>
    </div>
    <div className='detail_image d-flex justify-content-between'>
      <Image src={restaurant.image} alt='#' className="images" />
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
      <div className='detail_review'>
      <h3>Review Restaurant</h3>
      <div className='details d-flex'>
        <div className="detail_avatar">
        <Image src={AVT1} />
        </div>
        <div>
        <h5>Anissa</h5>
        <p><Rating 
            emptySymbol= {<AiOutlineStar />}
            fullSymbol= {<AiFillStar />}
            fractions={2}
            initialRating= {Math.floor(Math.random() * 5) + 1}
            readonly
            />
          </p>
        <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
        </div>
      </div>
      <div className='details d-flex'>
        <div className="detail_avatar">
        <Image src={AVT2} />
        </div>
        <div>
        <h5>Anissa</h5>
        <p><Rating 
            emptySymbol= {<AiOutlineStar />}
            fullSymbol= {<AiFillStar />}
            fractions={2}
            initialRating= {Math.floor(Math.random() * 5) + 1}
            readonly
            />
        </p>
        <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
        </div>
      </div>
      </div>
    </Row>
    </Col>
    </Container>
    </div>
    // })
  )
}

export default DetailView