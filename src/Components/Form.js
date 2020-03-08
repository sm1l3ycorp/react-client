import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import styles from './Form.module.css';
import axios from 'axios';

const FormComponent = () => {
    const [apiData, setApiData] = useState('')
    const [searchTerm, setSearchTerm] = useState('');

    const api = async (URL) => {
        const data = await axios.get(URL);
        setApiData(data.data);
        return data;
    }

    const setSearch = (event) => {
        setSearchTerm(event);
    }
    
    useEffect(() => {
      }, [apiData]);
    

    return (
        <>
        <br />
            <Form className={`${styles.formStyle}`}>
                <Form.Row>
                    <Col xs="6">
                    <Form.Control onChange={e => setSearch(e.target.value)} placeholder="Search Value" />
                    </Col>
                    <Col xs="3">
                    <Button
                        variant="light"
                        onClick={() => api(`http://localhost:3000/names/search/${searchTerm}`)}
                        className={`${styles.button}`}>
                            Search
                    </Button>  
                    </Col>
                </Form.Row>
            </Form>
            <br />
            <h2>Roman Names</h2>
             {apiData !== '' && 
             <ol type="I">
                {apiData.map((item,i) => <li key={i}>{item}</li>)}
             </ol>
              }
        </>
    )

}


export default FormComponent;