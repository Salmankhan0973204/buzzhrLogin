import React from "react";
import { Col, Divider, Row } from "antd";

const AntDesign = () => {
  return (
    <div>
      <Row >
        <Col xs={24} sm={12} md={6} style={{background:"red"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi iusto consequuntur mollitia vel aspernatur, voluptatem fugit hic dolorum, non ea iure? Aperiam voluptatem ea voluptatum natus repellendus tempore quo.</Col>
        <Col xs={24} sm={12} md={6}style={{background:"green"}}>ddd.</Col>
        <Col xs={24} sm={12} md={6}style={{background:"yellow"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi iusto consequuntur mollitia vel aspernatur, voluptatem fugit hic dolorum, non ea iure? Aperiam voluptatem ea voluptatum natus repellendus tempore quo.</Col>
        <Col xs={24} sm={12} md={6}style={{background:"gray"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis animi iusto consequuntur mollitia vel aspernatur, voluptatem fugit hic dolorum, non ea iure? Aperiam voluptatem ea voluptatum natus repellendus tempore quo.</Col>
      </Row>
    </div>
  );
};

export default AntDesign;
