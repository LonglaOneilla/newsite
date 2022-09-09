import React from 'react'
import { Container, Row, Col, } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import sliderdata from '../data/sliderdata'
import './styles/challenges.css'
import { FaAngleRight } from "react-icons/fa";

const Challenges = () => {
    return (
        <div className="challenges" >
            <Container>
                <Row>

                    <Col xs={12} md={7} sm={7} className='help-content'>
                        <h2>We champion the bold to achieve the extraordinary.</h2>
                        <span>Answer two questions and put our thinking to work on your challenges.</span>
                        <h5>
                            <ol>
                                <li>What is your industry?</li>
                            </ol>
                        </h5>

                        {
                            sliderdata.industries.map((industry) => (
                                <button className="industry" key={uuid()}>
                                    {industry.title}
                                </button>
                            ))
                        }
                        <span className="Link">
                                                    see all <FaAngleRight />
                                                </span>

                    </Col>
                    <Col xs={12} md={5} sm={5} className='help-image'>
                        <img src="/images/sl1.jpg" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Challenges;