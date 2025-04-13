// src/components/KeyboardHint.js
import React, { useState, useEffect } from "react";
import "../styles/KeyboardHint.css";

function KeyboardHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenHint = localStorage.getItem("keyboardHintSeen");
    if (!hasSeenHint) setVisible(true);
  }, []);

  const handleClose = () => {
    setVisible(false);
    localStorage.setItem("keyboardHintSeen", "true");
  };

  if (!visible) return null;

  return (
    <div className="keyboard-hint-popup">
      <span className="hint-icon">💡</span>
      <span className="hint-text">
        Use as <strong>setas</strong> do teclado para navegar
      </span>
      <span className="hint-text">
        Ou
      </span>
      <span className="hint-text">
        os <strong>botões</strong> na parte inferior para navegar
      </span>
      <button className="hint-close" onClick={handleClose}>✕</button>
    </div>
  );
}

export default KeyboardHint;
