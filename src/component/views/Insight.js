import { Card, Container, Row, Col, Button, } from 'react-bootstrap'
import { v4 as uuid } from 'uuid';
import sliderdata from '../data/sliderdata'
import './styles/insight.css'

const Insight = () => {
    return (
        <div className="insight">
            <hr className="hr-text" data-content="Our Latest Insights" />
            <div className="insightcontent">
                <Container>
                    <Row>
                   {sliderdata.insights.map((insight) => (
                        <Col xs={12} md={6} sm={6} key={uuid()}>
                            <Card style={{ width: '100%',height:'100%' }} className='insight-card'>
                                <Card.Img variant="top" style={{height:'300px'}} src={insight.image} />
                                <Card.Body>
                                    <Card.Title>{insight.title}</Card.Title>
                                    <div className="card-text">
                                    <h2>{insight.caption}</h2>
                                    <span>{insight.content}</span>
                                    </div>
                                    <Button variant="primary">{insight.subtitle}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
                
            </div>
            <center><Button className="btnr ">SEE ALL INSIGHTS</Button></center>
        </div>
    );
}

export default Insight;