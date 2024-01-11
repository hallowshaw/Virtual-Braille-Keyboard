// src/BrailleQwertyKeyboard.jsx
import React from 'react';

const BrailleQwertyKeyboard = ({ handleKeyPress }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
  ];

  // Specific Braille representations for each QWERTY key
  const brailleMapping = {
    Q: '⠟', W: '⠺', E: '⠑', R: '⠗', T: '⠞', Y: '⠽', U: '⠥', I: '⠊', O: '⠕', P: '⠏',
    A: '⠁', S: '⠎', D: '⠙', F: '⠋', G: '⠛', H: '⠓', J: '⠚', K: '⠅', L: '⠇',
    Z: '⠵', X: '⠭', C: '⠉', V: '⠧', B: '⠃', N: '⠝', M: '⠍',
  };

  return (
    <div className="braille-qwerty-keyboard">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((key) => (
            <button key={key} onClick={() => handleKeyPress(brailleMapping[key] || key)}>
              <span className="letter">{key}</span>
              <span className="braille">{brailleMapping[key] || ''}</span>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BrailleQwertyKeyboard;
