import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Button, Badge, Fade, Container, Row, Col} from 'reactstrap';
import Image from 'react-bootstrap/Image'






function Card() {
    const [data, setData] = useState({});
    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=miI40eqMuxQHfzdZnREccFeTZflbRiOwARDCDhwI&date=2020-02-10')
        .then(response => setData(response.data))
    }, [])


    
    console.log(data);
    
        const [fadeIn, setFadeIn] = useState(true);

        const toggle = () => setFadeIn(!fadeIn);

        const [show, setShow] = useState(false);
        const toggle2 = () => setShow(!show);
    
    return (
        <div className = 'wrapper' style={{ background: 'orange' }}>
            <h1><Badge color="secondary" size='lg'>{data.title}</Badge></h1>
            <div>
                <Button color = 'primary' outline onClick={toggle}>{data.date}</Button>
                
            </div>
            <div>
                <Fade in={fadeIn} tag='h5' className='mt-3'><Image fluid thumbnail src = {data.url}/></Fade>
            </div>
            <h5 className="text-info">By: {data.copyright}</h5>
            <div>
                <div>
                    <Button color='primary' outline onClick={toggle2}>Context</Button>
                    <br />
                    <br />
                </div>
                <Container isOpen={show}>
                <Row toggle={toggle2}>
                    <Col className="themed-container" fluid="sm">
                        {data.explanation}
                    </Col>
                        
                    
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default Card
