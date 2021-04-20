import React, { useState } from 'react';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function App() {
  const [colors, setColors] = useState(COLORS)

  const shuffleColors = () => {
    const i = Math.floor(Math.random() * COLORS.length);
    const color = colors[i];
    let newColors = [...colors];

    newColors.splice(i, 1);
    if (i === 0) {
      newColors.push(color);
    } else {
      newColors.unshift(color);
    }
    newColors.reverse();

    setColors(newColors);
  }

  return (
    <div className="container">
      {
        colors.map(
          (color, idx) => (
            <button
              style={{ background: color }}
              className="btn"
              key={idx}
            />
          )
        )
      }
      <button
        className="btn shuffle-btn"
        onClick={shuffleColors}
      >
        Shuffle
      </button>
    </div>
  );
}

export default App;
