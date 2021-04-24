import {Row,Col, Container} from react-bootstrap
import styles from './questionnaire.scss'

export const Questionnaire = () => {
    return(
        <Container>
            <Row>
                {question}
            </Row>
            <Row>
               <Answer/>
            </Row>
        </Container>
    )
}
