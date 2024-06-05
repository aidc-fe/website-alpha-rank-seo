"use client";
import React, { useState, useEffect, useRef } from "react";

const HoverGlowCard = (props: { children: JSX.Element }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const { children } = props;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (container) {
        const { left, top, width, height } = container.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        setPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div className="absolute inset-0 bg-gray-100 rounded-lg overflow-hidden">
        {children}
      </div>
      <div
        className="absolute rounded-full bg-[#6F50E8] opacity-50 blur-25 pointer-events-none"
        style={{
          width: "512px",
          height: "512px",
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default HoverGlowCard;
