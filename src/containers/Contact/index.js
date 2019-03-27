import React, { Component } from "react";
import { Row, Col } from "antd";
import ContactWrapper from "./styles";
import { ContactInput } from "../../components/Input";
import DefaultButton from "../../components/Button";

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <Row>
          <Col xm={24} sm={24} md={24} lg={24}>
            <h2 className="contactHeading">
              Contact<span className="contactSpan"> Me</span>
            </h2>
            <h3 className="talk">Let's Talk</h3>
            <p className="contactPara">
              Mauris auctor enim in justo euismod imperdiet
            </p>
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
        <DefaultButton btnprim>SEND</DefaultButton>
      </ContactWrapper>
    );
  }
}

export default Contact;
