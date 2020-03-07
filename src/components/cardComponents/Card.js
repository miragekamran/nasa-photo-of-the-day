import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { Button, Badge, Fade, Toast, ToastBody, ToastHeader } from 'reactstrap';
import Image from 'react-bootstrap/Image'

const dateButton = styled.h2`
    background-color: red;
    border-radius: 3px;
    border: 2px solid palevioletred;
    
`;

const SubHeadline = styled.h1`
  color: black;
  border: 1px solid black;
  background-color: green;

  &:hover {
    background-color: red;
  }

  @media (max-width: 600px) {
    background-color: purple;
  }
  `;

  const centeralText = styled.p`
  align-items: center;
  justify-content: center;
  `;



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
        <div className = 'wrapper'>
            <h1><Badge color="secondary" size='lg'>{data.title}</Badge></h1>
            <div>
                <Button color = 'primary' outline onClick={toggle}>{data.date}</Button>
                
            </div>
            <div>
                <Fade in={fadeIn} tag='h5' className='mt-3'><Image src='holder.js/100px250' fluid thumbnail src = {data.url}/></Fade>
            </div>
            <h3>{data.copyright}</h3>
            <div>
                <div>
                    <Button color = 'primary' outline onClick={toggle2}>Context</Button>
                    <br />
                    <br />
                </div>
                <Toast top width="100%" alignItems = 'center' justifyContent = 'center'  isOpen={show}>
                <ToastHeader top width="100%" src="/assets/318x180.svg" alt="Card image cap" toggle={toggle2}>
                    <ToastBody >
                        {data.explanation}
                    </ToastBody>
                        
                    
                </ToastHeader>
                </Toast>
            </div>
        </div>
    )
}

export default Card
