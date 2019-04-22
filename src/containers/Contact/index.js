import React, { Component } from "react";
import { Row, Col } from "antd";
import ContactWrapper from "./styles";
import { ContactInput } from "../../components/Input";
import DefaultButton from "../../components/Button";
import {Heading2, Para} from "../../components/heading/index";

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24}>
            <Heading2 title='contact' span='me'/>
            
            <h3 className="talk">Let's Talk</h3>
            <Para para='Mauris auctor enim in justo euismod imperdiet'/>           
          </Col>
        </Row>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24}>
            <ContactInput placeholder="Name" />
          </Col>
        </Row>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24}>
            <ContactInput placeholder="Email" />
          </Col>
        </Row>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24}>
            <ContactInput placeholder="Message" />
          </Col>
        </Row>
        <br />
        <DefaultButton btnprim>Send</DefaultButton>
      </ContactWrapper>
    );
  }
}

export default Contact;
