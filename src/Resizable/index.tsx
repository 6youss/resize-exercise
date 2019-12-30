import React from "react";
import "./styles.css";
const Resizable: React.FC = ({ children }) => {
  const resizerRef = React.useRef<HTMLDivElement>(null);

  function resize(e: any) {
    if (resizerRef.current) {
      resizerRef.current.style.width = e.pageX - resizerRef.current.getBoundingClientRect().left + "px";
    }
  }

  function stopResize() {
    window.removeEventListener("mousemove", resize);
  }

  return (
    <div ref={resizerRef} className="resizable-container">
      <div>{children}</div>
      <span
        className="resizer"
        onMouseDown={e => {
          window.addEventListener("mousemove", resize);
          window.addEventListener("mouseup", stopResize);
        }}
      />
    </div>
  );
};

export default Resizable;
