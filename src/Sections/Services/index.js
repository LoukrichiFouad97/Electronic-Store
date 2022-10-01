import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiShipFill } from "react-icons/ri";
import { MdOutlineSupportAgent} from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { TbShoppingCartDiscount} from "react-icons/tb";
import "./style.scss";

function Services() {
  const services = [
    {
      title: "Free Delivery",
      description: "Free shipping on all order",
      image: <RiShipFill className="service-icon" />,
    },
    {
      title: "Online Support 24/7",
      description: "Online support 24 hours a day",
      image: <MdOutlineSupportAgent className="service-icon" />,
    },
    {
      title: "Money Return",
      description: "Money back guarantee under 7 days",
      image: <FaRegMoneyBillAlt className="service-icon" />,
    },
    {
      title: "Member Discount",
      description: "On every order over $120.00",
      image: <TbShoppingCartDiscount className="service-icon" />,
    },
  ];

  const renderServices = services.map((service, index) => (
    <Col className="service" key={index} md="8" lg="6" xl="3">
      {service.image}
      <div className="service-text">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    </Col>
  ));
  return (
    <Container>
      <Row className="services">{renderServices}</Row>
    </Container>
  );
}

export default Services;
