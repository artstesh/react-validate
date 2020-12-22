import * as React from 'react';
import { connect } from 'react-redux';
import {CustomFieldForm} from "./NameForm";
import {Button, Form, FormGroup} from "rsuite";
import {useState} from "react";
import 'rsuite/dist/styles/rsuite-default.css'

const Home = () => {
    const [error, setError] = useState();
    
    const handleChangeErrorState = () => {
        if(error)
            setError(null);
        else
            setError({count:"Out error!!!!"});
    }
    
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <CustomFieldForm errors={error}/>


            <FormGroup>
                <Button appearance={`${error != null ? "primary" : "secondary"}` as any} onClick={() => handleChangeErrorState()}>
                    Error
                </Button>
            </FormGroup>
        </div>
    );
}

export default connect()(Home);
