import {ControlLabel, ErrorMessage, FormControl, FormGroup, HelpBlock} from "rsuite";
import * as React from "react";

interface CustomFieldProps{
    name: string;
    error?: string | undefined;
    label: string;
    accepter: React.ElementType;
}

export class CustomField extends React.Component<CustomFieldProps, {}> {
    render() {
        return (
            <FormGroup>
                <ControlLabel>{this.props.label} </ControlLabel>
                <FormControl
        name={this.props.name}
        accepter={this.props.accepter}
        errorMessage={this.props.error}        
        errorPlacement="bottomStart"
        />
        </FormGroup>
    );
    }
}