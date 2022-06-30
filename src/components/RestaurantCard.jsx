import React from "react";
import { Card, Col, Button } from "antd";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function RestaurantCard({ name, image, cuisine, address }) {
  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>cuisine: {cuisine}</p>
        <p>address: {address}</p>
      </Card>
    </Col>
  );
}

export default RestaurantCard;
