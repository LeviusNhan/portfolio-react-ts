import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import "./cursor.css";

function Cursor() {
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 350,
    damping: 28,
  });

  const springY = useSpring(mouseY, {
    stiffness: 350,
    damping: 28,
  });

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!visible) setVisible(true);
    };

    const enter = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".cursor-hover")
      ) {
        setHover(true);
      }
    };

    const leave = () => {
      setHover(false);
    };

    window.addEventListener("mousemove", move);

    document.addEventListener("mouseover", enter);

    document.addEventListener("mouseout", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
    };
  }, [mouseX, mouseY, visible]);

//   if (window.innerWidth < 768) return null;
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const check = () => {
    setIsMobile(window.innerWidth < 768);
  };

  check();

  window.addEventListener("resize", check);

  return () => window.removeEventListener("resize", check);
}, []);

if (isMobile) return null;

  return (
    <>
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: hover ? 1.8 : 1,
          borderColor: hover ? "#C778DD" : "#ABB2BF",
        }}
      />

      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: hover ? 1.4 : 1,
        }}
      />

      {/* Glow */}
      <motion.div
        className="cursor-glow"
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          opacity: visible ? 0.45 : 0,
          scale: hover ? 2.4 : 1.4,
        }}
      />
    </>
  );
}

export default Cursor;