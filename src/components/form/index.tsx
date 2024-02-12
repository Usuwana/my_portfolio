import useWindowSize from '../../hooks/useWindowSize';
import { Size } from '../../types';
import '../../../node_modules/semantic-ui-css/semantic.min.css';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import React from 'react';
import emailjs from 'emailjs-com';
import "./styles.css";
import Spacer from 'react-spacer';


const Forms = () => {

const size: Size = useWindowSize();
const SERVICE_ID = "service_lws2w3p";
const TEMPLATE_ID = "template_aqwaca3";
const PUBLIC_KEY = "S0virmLuIo_XsLF4q";

const handleOnSubmit = (e: any) => {
  e.preventDefault();
  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
      Swal.fire({
        icon: 'success',
        title: 'Message Sent Successfully'
      })
    }, (error) => {
      console.log(error.text);
      Swal.fire({
        icon: 'error',
        title: 'Ooops, something went wrong',
        text: error.text,
      })
    });
  e.target.reset()
};

return (
  <div className="Contactform">
    <div id="intouch">
      <h3 >SEND US A MESSAGE</h3>
    </div>
    <Form onSubmit={handleOnSubmit} action='mailto:info@ruesevents.co.zw'>
      <Form.Field
        id='form-input-control-email'
        control={Input}
        label='EMAIL'
        name='user_email'
        placeholder='Email…'
        required
        icon='mail'
        iconPosition='left'
        
      />
      <Form.Field
        id='form-input-control-last-name'
        control={Input}
        label='NAME'
        name='user_name'
        placeholder='Name…'
        required
        icon='user circle'
        iconPosition='left'
      />
      <Form.Field
        id='form-textarea-control-opinion'
        control={TextArea}
        label='MESSAGE'
        name='user_message'
        placeholder='Message…'
        required
      />
      <Button id="button"type='submit' color='green'>Submit</Button>
    </Form>
    <Spacer height='12vh'/>
  </div>
);
}

export default Forms;