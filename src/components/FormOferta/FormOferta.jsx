import React, { useState } from "react";

import axios from "axios";
import "./FormOferta.css";

const FormOferta = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    setIsLoading(true);

    try {
      await axios.post(`${apiUrl}/api/send-email`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccessMessage(
        "✅ Cererea ta a fost trimisă cu succes! Vei primi un email de confirmare."
      );
      setErrorMessage("");
      e.target.reset();
    } catch (err) {
      setErrorMessage(
        "❌ Eroare la trimitere. Verifică datele sau încearcă din nou."
      );
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000); // Dispare după 5 secunde
    }
  };

  return (
    <>
      {successMessage && <div className="form-success">{successMessage}</div>}
      {errorMessage && <div className="form-error">{errorMessage}</div>}
      <form className="form-oferta" onSubmit={sendEmail}>
        <div className="form-label">
          <label htmlFor="">Numele tău</label>
          <input type="text" id="numele" name="nume" required />
        </div>

        <div className="form-label">
          <label htmlFor="">Adresa ta de email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form-label">
          <label htmlFor="">Serie Șasiu</label>
          <input type="text" id="serie" name="serie" required />
        </div>

        <div className="form-label">
          <label htmlFor="">Marcă, Model Auto și Anul de fabricare</label>
          <input type="text" id="marca" name="marca" required />
        </div>

        <div className="form-label">
          <label htmlFor="">Ce piese ai nevoie?</label>
          <textarea id="content" name="piese" required rows={5}></textarea>
        </div>

        <div className="form-label-fisier">
          <label htmlFor="">Poză Talon : </label>
          <input
            type="file"
            id="image"
            required
            accept="image/*"
            name="image"
          />
        </div>

        <button type="submit" className="form-oferta-btn">
          {" "}
          {isLoading ? "Se trimite..." : "Trimite"}
        </button>
      </form>

      {isLoading && <div className="spinner"></div>}
    </>
  );
};

export default FormOferta;
