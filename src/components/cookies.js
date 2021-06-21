import React from "react"
import CookieConsent from "react-cookie-consent"
import { Link } from 'gatsby'

export default function index() {
  return (
    <CookieConsent
      buttonStyle={{ background: "rgb(134, 165, 49)", color: "#FFF" }}
    >
      This website uses cookies to enhance the user experience.{" "}
      <Link to="/privacy-policy">Learn More</Link>
    </CookieConsent>
  )
}
