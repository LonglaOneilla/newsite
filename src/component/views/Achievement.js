
import React, { useState } from 'react'
import './styles/achievement.css'

import { Carousel, Card, Row, Col, Fade } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
import sliderdata from '../data/sliderdata'
import { FaAngleRight } from "react-icons/fa";


const Achievement = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='achievement'>
            <Carousel fade controls={false} indicators={true}>

                {sliderdata.stories.map((story) => (
                    <Carousel.Item interval={4000} key={uuid()}>
                        <Row>
                            <Col xs={0} md={4} sm={4} className='story-image'>
                                <div className="image-desc">
                                    <img
                                        className="d-block w-100 cassimg"
                                        src={story.image}
                                        alt="First slide"
                                    />
                                </div>
                            </Col>
                            <Col xs={12} md={8} sm={8} className='help-content'>
                                <Row className="steps-forward">
                                    <h2>Bold steps forward</h2>
                                    <span>See how we've helped ambitious clients achieve extraordinary outcomes</span>
                                </Row>
                                <Row className="story-details">
                                    <Col xs={12} md={6} sm={6} className='success-story'>
                                        <span className='card-title'>Featured client success story</span>

                                        <Card className='success-card'>
                                            <Card.Body>
                                                <Card.Title>
                                                    {story.title}
                                                </Card.Title>
                                                <span className="Link">
                                                    see all <FaAngleRight />
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xs={12} md={6} sm={6} className='success-story'>
                                        <span className='card-title'>
                                            How we helped
                                        </span>

                                        <Card className='help-card'>
                                            <Card.Body>
                                                <Card.Title
                                                    onMouseOver={() => setOpen(!open)}
                                                    aria-controls="example-collapse-text"
                                                    aria-expanded={open}
                                                >
                                                    {story.caption}
                                                </Card.Title>
                                                <Fade in={open}>
                                                    <div id="example-collapse-text">
                                                        {story.content}
                                                    </div>
                                                </Fade>
                                                <span className="Link">
                                                    see all <FaAngleRight />
                                                </span>
                                            </Card.Body>
                                        </Card>
                                    </Col>

                                </Row>
                            </Col>

                        </Row>
                    </Carousel.Item>

                ))}

            </Carousel>
        </div>
    );
}

export default Achievement; 