import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: none;
  transition: border-color 250ms ease-in-out;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: auto;
  padding: 6px 12px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ddd;
  border-radius: 3px;
  box-shadow: none;
  transition: border-color 250ms ease-in-out;
`;

const SubmitButton = styled.button`
  display: inline-block;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-color: #337ab7;
  background-image: none;
  border: 1px solid #2e6da4;
  border-radius: 3px;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const Form = styled.form`
  flex-basis: 66.6666%;
  flex-grow: 1;
  min-width: 280px;
  padding-right: 15px;
  padding-left: 15px;
`;

const ContactDetails = styled.div`
  flex-basis: 33.3333%;
  flex-grow: 1;
  min-width: 280px;
  padding-right: 15px;
  padding-left: 15px;

  .address-line {
    display: block;
    margin-bottom: 5px;
  }
`;


const Contact = () => (
  <main>
    <h1>Get in touch</h1>
    <FormRow>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input type="text" className="form-control" id="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="subject">Subject</Label>
          <Input type="text" id="subject" placeholder="Subject" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea id="message" rows="6" />
        </FormGroup>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
      <ContactDetails>
        <h2>UpHere</h2>
        <address>
          <span className="address-line">8534 Yellow Lane</span>
          <span className="address-line">Kansas City, MO</span>
          <span className="address-line"><a href="#0">111-222-5555</a></span>
        </address>
      </ContactDetails>
    </FormRow>
  </main>
);

export default Contact;
