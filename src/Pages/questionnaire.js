import {Row,Col, Container, Button} from 'react-bootstrap'
import React, { useState } from 'react';
import './questionnaire.scss'
import {questions} from '../Constants/questions'
import Likert from 'react-likert-scale';

export const Questionnaire = () => {
    const [index,updateIndex] = useState(10)
    const [percentage, updatePercentage] = useState(0)
    const curr = questions[index]? questions[index]: null
    
    function onClick(val){
        if (index<5 && val !== 1){
            updatePercentage(val/5*10);
        }else if(index < 10 && val !== 1){
            updatePercentage(percentage+val/5*5);
        }else if (index > 9 && val === 2) {
            updatePercentage(percentage-10);
        }
        updateIndex(index+1)
    }
    
    return(
        <Container className='fullPage'fluid>
        {
            curr ?
                <>
                    <Row>
                        <Button onClick={()=>updateIndex(index-1)}>BACK</Button>
                    </Row>
                    <Container className='questionnaire'>
                        <Row>
                            <h1>
                                {curr.question}
                            </h1>
                        </Row>
                        <Row>
                            {curr.isYesNo? <YesNo buttonClick={onClick}/>: <LikertScale buttonClick={onClick}/>}
                        </Row>
                    </Container>
                </>:
                <>
                    <h1> You are {!percentage?0:(percentage)>100?0:percentage<0?100:100-percentage}% an Ally</h1>
                </>
        }
           
        </Container>
    )
}

const YesNo = ({buttonClick}) => {
    return(
        <>
            <Col>
                <Row>
                    <Button onClick={()=>buttonClick(1)}>YES</Button>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Button onClick={()=>buttonClick(2)}>NO</Button>
                </Row>
            </Col>
        </>
    )
}

const LikertScale = ({buttonClick}) => {
    const [val, setVal] = useState(3)
    const likertOptions = {
        responses: [
          { value: 1, text: "Never" },
          { value: 2, text: "Rarely" },
          { value: 3, text: "Sometimes", checked:true},
          { value: 4, text: "Often" },
          { value: 5, text: "All the time" }
        ],
        onChange: val => {
            setVal(val)
          }
      };

    return(
        <>
            <Likert {...likertOptions} />
            <Button onClick={()=>buttonClick(val)}>NEXT</Button>
        </>
    )
}