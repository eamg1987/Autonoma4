import { Card } from "antd";
import React from "react";
import { Col, Row } from "reactstrap";

export const Contact = () => {
  return <div><Row>
  <Col span={12} className="d-flex justify-content-center">
    <Card
      className="text-center"
      style={{ border: "2px solid ",width:'300px' }}
    >
      <Row>
        <Col>
          <h2>Edison Macias Guevara</h2>
        </Col>
      </Row>
    </Card>
  </Col>
</Row>
<Row>
  <Col span={12} className="d-flex justify-content-center">
    <Card
      className="text-center"
      style={{ border: "2px solid ",width:'350px'}}
    >
      <Row>
        <Col>
          <h2>Juana Calva </h2>
        </Col>
      </Row>
    </Card>
  </Col>
</Row>
<Row>
  <Col span={12} className="d-flex justify-content-center">
    <Card
      className="text-center"
      style={{ border: "2px solid " , width:'400px'}}
    >
      <Row>
        <Col>
          <h2>Lady Merchán </h2>
        </Col>
      </Row>
    </Card>
  </Col>
</Row>
<Row>
  <Col span={12} className="d-flex justify-content-center">
    <Card
      className="text-center"
      style={{ border: "2px solid ",width:'450px' }}
    >
      <Row>
        <Col>
          <h2>Génesis Perez Escobar</h2>
        </Col>
      </Row>
    </Card>
  </Col>
</Row>
</div>;
};
