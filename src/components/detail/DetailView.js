import React, { useState, useEffect } from 'react'
import { Container, Col, Row, Image } from 'react-bootstrap'
import './detail.css'
import axios from 'axios'
import FOTO from '../../../src/assets/foto1.jpg'
import AVT1 from '../../../src/assets/avatar1.jpg'
import AVT2 from '../../../src/assets/avatar2.jpg'
import Rating from 'react-rating'

const DetailView = props => {
  const [restaurants, setRestaurants] = useState ([]);

  useEffect(() => {
  axios.get(`https://foodbukka.herokuapp.com/api/v1/restaurant/5f5eccf3e923d0aca3e7d41c`)
   .then(response => {
    setRestaurants(response.data.Result)
    console.log(response.data.Result)
  })
  }, [])

  return (
  <div className='detail'>
  <Container>
  <Col>
  <Row>
    {
        restaurants((restaurant, index) => {
            return (
                    <><div className='detail_view'>
                    <h1>{restaurant.businessname}</h1>
                    <h4>Anissa</h4>
                    <div className='d-flex justify-content-between'>
                        <p>Rating</p>
                        <p>Lokasi/Daerah</p>
                    </div>
                </div><div className='detail_image d-flex justify-content-between'>
                        <Image src={FOTO} alt='#' className="images w-50" />
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div><div className='detail_review'>
                        <h3>Review Restaurant</h3>
                        <div className='details d-flex'>
                            <div className="detail_avatar">
                                <Image src={AVT1} />
                            </div>
                            <div>
                                <h5>Anissa</h5>
                                <p>Rating</p>
                                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                            </div>
                        </div>
                        <div className='details d-flex'>
                            <div className="detail_avatar">
                                <Image src={AVT2} />
                            </div>
                            <div>
                                <h5>Anissa</h5>
                                <p>Rating</p>
                                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</small>
                            </div>
                        </div>
                    </div></>
                )
            })
        }
  </Row>
  </Col>
  </Container>
  </div>
  )
}

export default DetailView