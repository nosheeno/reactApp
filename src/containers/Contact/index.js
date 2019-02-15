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
          <Col span={10} offset={7}>
            <h2 className="contactHeading">
              Contact<span className="contactSpan"> Me</span>
            </h2>
            <h3 className="talk">Let's Talk</h3>
            <p className="contactPara">
              Mauris auctor enim in justo euismod imperdiet
            </p>
            <ContactInput placeholder="Name" />

            <ContactInput placeholder="Email" />

            <ContactInput placeholder="Message" />
            <br />
            <DefaultButton>SEND</DefaultButton>
          </Col>
        </Row>
      </ContactWrapper>
    );
  }
}

export default Contact;
