import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import b from "../../assets/Icons/blockchain.svg";
import d from "../../assets/Icons/data-transfer.svg";
import c from "../../assets/Icons/customer-care.svg";
import w from "../../assets/Icons/wallet.svg";
import u from "../../assets/Icons/universal-access.svg";
import t from "../../assets/Icons/team.svg";

const techItems = [
  {
    icon: d,
    title: "Robust APIs",
    description: "APIs enable seamless integration with multiple platforms.",
    color: "from-[#1a4d4d] to-[#0f3443]",
  },
  {
    icon: c,
    title: "Scalable Services",
    description: "Services designed to handle growing user demands efficiently.",
    color: "from-[#0f3443] to-[#0a192f]",
  },
  {
    icon: b,
    title: "Secure Blockchain",
    description: "Blockchain ensures data integrity and user trust.",
    color: "from-[#1a4d4d] to-[#134e5e]",
  },
  {
    icon: w,
    title: "Smart Wallets",
    description: "Wallets designed for easy management of digital assets.",
    color: "from-[#0a192f] to-[#0f3443]",
  },
  {
    icon: u,
    title: "Cross-Chain Compatibility",
    description: "Supports multiple blockchain networks for flexibility.",
    color: "from-[#134e5e] to-[#1a4d4d]",
  },
  {
    icon: t,
    title: "Interoperable Systems",
    description: "Enables collaboration across various platforms and technologies.",
    color: "from-[#0f3443] to-[#0a3d3d]",
  },

];

// Duplicate items for seamless infinite loop
const loopedItems = [...techItems, ...techItems, ...techItems];

const Card = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      animate={{
        // boxShadow: hovered
        //   ? "0 0 30px rgba(26, 213, 255, 0.5), 0 0 60px rgba(74, 222, 128, 0.2), 0 12px 40px rgba(0,0,0,0.5)"
        //   : "0 4px 12px rgba(0,0,0,0.3)",
        // y: hovered ? -12 : 0,
        // scale: hovered ? 1.05 : 1,
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        minWidth: "280px",
        height: "220px",
        borderRadius: "16px",
        border: hovered
          ? "1px solid rgba(26, 213, 255, 0.6)"
          : "1px solid rgba(26, 213, 255, 0.15)",
        background:
          "linear-gradient(135deg, rgba(15, 52, 67, 0.6), rgba(10, 25, 47, 0.8))",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "32px",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        transition: "border 0.3s ease",
      }}
    >
      {/* Glow effect on hover */}
      <motion.div
        animate={{ opacity: hovered ? 0.15 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          top: "-50%",
          left: "-50%",
          width: "200%",
          height: "200%",
          background:
            "radial-gradient(circle, rgba(26, 213, 255, 0.4), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Icon */}
      <motion.div
        animate={{ scale: hovered ? 1.2 : 1 }}
        transition={{ duration: 0.3 }}
        style={{
          fontSize: "36px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "60px",
            borderRadius: "12px",
            padding:"10px",
            // background: hovered
            //   ? "linear-gradient(135deg, rgba(26, 213, 255, 0.25), rgba(74, 222, 128, 0.2))"
            //   : "linear-gradient(135deg, rgba(26, 213, 255, 0.1), rgba(74, 222, 128, 0.1))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background 0.3s ease",
          }}
        >
         <img src={item.icon} className="bg-lime-400 w-20 rounded-[2px] " alt="" />  
        </div>
      </motion.div>

      {/* Title */}
      <h3
        style={{
          color: hovered ? "#1ad5ff" : "#e2e8f0",
          fontSize: "18px",
          fontWeight: "700",
          marginBottom: "8px",
          fontFamily: "'Rajdhani', sans-serif",
          letterSpacing: "0.5px",
          transition: "color 0.3s ease",
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "rgba(148, 163, 184, 0.9)",
          fontSize: "13px",
          lineHeight: "1.5",
          fontFamily: "'Segoe UI', sans-serif",
        }}
      >
        {item.description}
      </p>

      {/* Bottom accent line */}
      <motion.div
        animate={{ width: hovered ? "100%" : "30%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          height: "2px",
          background: "linear-gradient(90deg, #1ad5ff, #4ade80, transparent)",
          borderRadius: "0 0 0 16px",
        }}
      />
    </motion.div>
  );
};

export default function TechCarousel() {
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);
  const positionRef = useRef(0);
  const [position, setPosition] = useState(0);

  const cardWidth = 300; // minWidth + margin
  const singleLoopWidth = techItems.length * cardWidth;

  useEffect(() => {
    let startTime = null;
    const duration = 40000; // 40 seconds for one full loop
    const speed = singleLoopWidth / duration;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      if (!isHovering) {
        positionRef.current += speed * (timestamp - (startTime || timestamp));
        startTime = timestamp;

        // Reset when one full loop is completed
        if (positionRef.current >= singleLoopWidth) {
          positionRef.current -= singleLoopWidth;
        }

        setPosition(positionRef.current);
      } else {
        startTime = timestamp;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isHovering, singleLoopWidth]);

  return (
    <div
      style={{
        minHeight: "100vh",
        // background:
        //   "linear-gradient(135deg, #000000 0%, #0a192f 25%, #0f3443 50%, #1a4d4d 75%, #0a3d3d 100%)",
        backgroundSize: "400% 400%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glitter */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        //   backgroundImage: `
        //     radial-gradient(2px 2px at 15% 25%, rgba(255,255,255,0.9), transparent),
        //     radial-gradient(1px 1px at 35% 45%, rgba(26,213,255,0.7), transparent),
        //     radial-gradient(2px 2px at 55% 65%, rgba(255,255,255,0.8), transparent),
        //     radial-gradient(1px 1px at 75% 35%, rgba(74,222,128,0.6), transparent),
        //     radial-gradient(2px 2px at 85% 75%, rgba(20,184,166,0.7), transparent),
        //     radial-gradient(1px 1px at 25% 85%, rgba(255,255,255,0.6), transparent)
        //   `,
          pointerEvents: "none",
          zIndex: 0,
          opacity: 0.4,
        }}
      />

      {/* Section Title */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: "50px", textAlign: "center" }}>
        {/* <p
          style={{
            color: "#1ad5ff",
            fontSize: "13px",
            fontWeight: "600",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "12px",
            fontFamily: "'Rajdhani', sans-serif",
          }}
        >
          ─── Technology ───
        </p> */}
        <h2
          style={{
            color: "#ffffff",
            fontSize: "2rem",
            fontWeight: "600",
            fontFamily: " sans-serif",
            letterSpacing: "1px",
            marginBottom: "10px",
            padding:"10px"
          }}
        >
          Powered by Cutting-Edge Technology
        </h2>
        <p
          style={{
            color: "white",
            fontSize: "1rem",
            maxWidth: "550px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontFamily: " sans-serif",
            textAlign:"center",
             padding:"10px"
          }}
        >
          Built on the most advanced blockchain infrastructure to ensure
          transparency, speed, and security for every tip.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          overflow: "hidden",
          padding: "20px 0",
        }}
      >
        {/* Left fade edge */}
        <div
        //   style={{
        //     position: "absolute",
        //     top: 0,
        //     left: 0,
        //     width: "80px",
        //     height: "100%",
        //     // background:
        //     //   "linear-gradient(to right, #000000, transparent)",
        //     zIndex: 2,
        //     pointerEvents: "none",
        //   }}
        />

        {/* Right fade edge */}
        {/* <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "80px",
            height: "100%",
            background:
              "linear-gradient(to left, #000000, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        /> */}

        {/* Scrolling Track */}
        <div
          style={{
            display: "flex",
            transform: `translateX(-${position}px)`,
            willChange: "transform",
            padding: "15px 20px",
          }}
        >
          {loopedItems.map((item, index) => (
            <div key={index} style={{ marginRight: "20px", flexShrink: 0 }}>
              <Card item={item} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom indicator dots */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          gap: "8px",
          marginTop: "40px",
        }}
      >
        {techItems.map((_, i) => (
          <div
            key={i}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background:
                Math.floor((position / (cardWidth)) % techItems.length) === i
                  ? "#1ad5ff"
                  : "rgba(148, 163, 184, 0.3)",
              transition: "background 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}