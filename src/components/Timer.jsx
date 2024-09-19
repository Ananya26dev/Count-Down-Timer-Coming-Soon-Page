import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Timer.css";
const Timer = () => {
  const calculateTimeLeft = () => {
    const today = new Date();
    const targetDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const timeDifference = +targetDate - +today;
    let timeLeft = {};
    if (timeDifference > 0) {
      timeLeft = {
        days: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDifference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDifference / (1000 / 60)) % 60),
        seconds: Math.floor((timeDifference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <div>
      <Container fluid className="countdown-container">
        <Row>
          <Col xs="auto">
            <h1 className="coming-soon">WE ARE COMING SOON</h1>
            <Row className="justify-content-center">
              <Col xs="auto">
                <Card className="countdown-card">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {timeLeft.days}
                    </Card.Title>
                    <Card.Text className="card-text">Days</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto">
                <Card className="countdown-card">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {timeLeft.hours}
                    </Card.Title>
                    <Card.Text className="card-text">Hours</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto">
                <Card className="countdown-card">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {timeLeft.minutes}
                    </Card.Title>
                    <Card.Text className="card-text">Minutes</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs="auto">
                <Card className="countdown-card">
                  <Card.Body>
                    <Card.Title className="card-title">
                      {timeLeft.seconds}
                    </Card.Title>
                    <Card.Text className="card-text">Seconds</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Timer;
