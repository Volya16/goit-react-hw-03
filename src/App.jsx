import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";

export default function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
    </>
  );
}
