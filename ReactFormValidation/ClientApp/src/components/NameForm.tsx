import {Button, Form, FormGroup, InputNumber, Schema} from "rsuite";
import React, {createRef} from "react";
import {CustomField} from "./CustomField";

const { NumberType } = Schema.Types;

const model = Schema.Model({
    count: NumberType()
        .min(1, 'Below min!!!!')
        .isRequired('This field is required.')
});

interface CustomFieldFormProps{
    errors: {[field: string]: string};
}

interface CustomFieldFormState{
    errors: {[field: string]: string};
    model: CustomFieldFormModel;
}

class CustomFieldFormModel{
    count: number
}

export class CustomFieldForm extends React.Component<CustomFieldFormProps, CustomFieldFormState> {
    state = {errors: this.props.errors || {}, model: {count: 1}};
    private form;
    
    handleSubmit() {
        if (!this.form.check()){
            return;
        }
    }
    render() {
        return (
            <div>
                <Form
                    ref={r => this.form = r}
                    onChange={formValue => {
                        this.setState({ model: formValue as CustomFieldFormModel});
                    }}
                    onCheck={formError => {
                        this.setState({ errors: formError });
                    }}
                    formValue={this.state.model}
                    model={model}
                >
                    <CustomField
                        name="count"
                        label="Count"
                        accepter={InputNumber}
                        error={this.state.errors["count"] || (this.props.errors && this.props.errors["count"])}
                    />

                    <FormGroup>
                        <Button appearance="primary" onClick={() => this.setState({model: {count: this.state.model.count+1}})}>
                            Up
                        </Button>
                        <Button appearance="primary" onClick={() => this.setState({model: {count: this.state.model.count-1}})}>
                            Down
                        </Button>
                    </FormGroup>

                    <FormGroup>
                        <Button appearance="primary" onClick={() => this.handleSubmit()}>
                            Submit
                        </Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}