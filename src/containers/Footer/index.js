import React, { Component } from "react";
import FooterWrapper from "./style";

class DefaultFooter extends Component {
  render() {
    return (
      <FooterWrapper>
        <h2 className="footerHeading">
          Follow<span className="footerSpan"> Me</span>
        </h2>
      </FooterWrapper>
    );
  }
}

export default DefaultFooter;
