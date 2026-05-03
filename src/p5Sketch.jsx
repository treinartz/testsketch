import { useEffect, useRef } from "react";
import orbitSketch from "./sketches/orbitSketch";

export default function P5Sketch() {
  const containerRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!window.p5) {
      console.error("p5 not loaded");
      return;
    }

    instanceRef.current = new window.p5(orbitSketch, containerRef.current);

    return () => {
      instanceRef.current?.remove();
    };
  }, []);

  return <div ref={containerRef} />;
}
