import React, { useState } from "react";
import { FaHandPointer } from "react-icons/fa";
import "../styles/HintMessage.css";

function HintMessage() {
  const [visible, setVisible] = useState(true);

  // Função para ocultar a mensagem quando clicada
  const handleClick = () => setVisible(false);

  if (!visible) return null;

  return (
    <div className="navigation-hint" onClick={handleClick}>
      <div className="hint-content">
        <FaHandPointer className="hint-icon" />
        <p>Explore usando teclado ⬅ ➡ ou interagindo com o objeto. Para fecha clique aqui.</p>
      </div>
    </div>
  );
}

export default HintMessage;
