import { useEffect, useRef } from "react";
import orbitSketch from "../sketches/orbitSketch";

export default function P5Sketch() {
  // Reference to the DOM element where p5 will attach the canvas
  const containerRef = useRef(null);

  // Stores the p5 instance so we can clean it up later
  const instanceRef = useRef(null);

  useEffect(() => {
    // Ensure p5 is loaded from the CDN before trying to use it
    if (!window.p5) {
      console.error("p5 not loaded");
      return;
    }

    // Create a new p5 instance and attach it to the container div
    instanceRef.current = new window.p5(orbitSketch, containerRef.current);

    // Cleanup function runs when component unmounts
    // Prevents multiple canvases stacking or memory leaks
    return () => {
      instanceRef.current?.remove();
    };
  }, []);

  // Empty div acts as the mounting point for the p5 canvas
  return <div ref={containerRef} />;
}
