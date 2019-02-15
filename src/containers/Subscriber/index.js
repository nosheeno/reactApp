import React, { Component } from "react";
import SubscriberWrapper from "./styles";
import { DefaultInput } from "../../components/Input";
import DefaultButton from "../../components/Button";

class Subscriber extends Component {
  render() {
    return (
      <SubscriberWrapper>
        <p className="SubscriberWrapper">Subscribe to Newsletter</p>
        <DefaultInput placeholder="Name" />
        <DefaultInput placeholder="Email" />
        <DefaultButton>Send</DefaultButton>
      </SubscriberWrapper>
    );
  }
}

export default Subscriber;
