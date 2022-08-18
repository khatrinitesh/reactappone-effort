import React from "react";

const Container = ({ children }) => <div className="container">{children}</div>;

const Row = ({ children }) => <div className="row d-flex">{children}</div>;

const Column = ({ children }) => <div className="col">{children}</div>;

const Box = ({ color }) => (
  <div className="box" style={{ backgroundColor: color }}></div>
);

export default function CustomApp() {
  return (
    <div>
      <Container>
        <Row>
          <Column>
            <Box color="#007bff" />
          </Column>
          <Column>
            <Box color="#fc3" />
          </Column>
          <Column>
            <Box color="#ff3333" />
          </Column>
        </Row>
      </Container>
    </div>
  );
}
