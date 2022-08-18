import React from "react";
import Header2 from "./header/header2";
import Footer2 from "./footer/footer2";

class Layout2 extends React.Component {
  render() {
    return (
      <>
        <Header2 />
        <main>{this.props.children}</main>
        <Footer2 />
      </>
    );
  }
}
export default Layout2;
