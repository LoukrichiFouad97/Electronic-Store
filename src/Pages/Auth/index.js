import { useRef } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

import Footer from "../../Sections/Footer";
import Header from "../../Sections/Header";
import Login from "./Login";
import Register from "./Register";
import "./style.scss";

function Auth() {
  let container = useRef();

  function handleSingUpClick(e) {
    console.log(e.target);
    container.current.classList.add("right-panel-active");
  }

  function handleSignInClick(e) {
    container.current.classList.remove("right-panel-active");
  }

  return (
    <>
      <Header />
      <div className="auth-page">
        <div className="py-5 auth-container" id="container" ref={container}>
          <div className="form-container sign-up-container">
            <Form>
              <h2>Create Account</h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="john@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="******" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="******" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remeber me" />
              </Form.Group>
              <button className="form-button" id="signUp">
                Sign Up
              </button>
            </Form>
          </div>
          <div className="form-container sign-in-container">
            <Form>
              <h2>Sign in</h2>
              <p>With</p>
              <div className="sso-sign-in-icons">
                <FaFacebookF className="sso-icon sso-icon-fb" />
                <FaGoogle className="sso-icon sso-icon-gl" />
                <FaTwitter className="sso-icon sso-icon-tw" />
              </div>
              <p>Or</p>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="john@example.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="*******" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Me" />
              </Form.Group>
              <button className="form-button" id="signIn">
                Sign in
              </button>
            </Form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your info</p>
                <button
                  className="form-button ghost"
                  id="signIn"
                  onClick={handleSignInClick}
                >
                  Sign in
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friends!</h1>
                <p>
                  Enter your personal details and start your journey with us
                </p>
                <button
                  className="form-button ghost"
                  id="signUp"
                  onClick={handleSingUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Auth;
