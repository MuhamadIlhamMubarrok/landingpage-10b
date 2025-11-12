import { useRef, useEffect } from "react";

export default function TextLoop({
  marqueeText = "XB CLASS",
  speed = 1.5,
  direction = "left",
  interactive = false,
  className = "",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const text = container.querySelector(".marquee-text");
    const clone = text.cloneNode(true);
    container.appendChild(clone);

    let offset = 0;
    let frameId;

    const animate = () => {
      offset += direction === "left" ? -speed : speed;
      if (Math.abs(offset) >= text.offsetWidth) offset = 0;
      container.style.transform = `translateX(${offset}px)`;
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [speed, direction]);

  return (
    <div className={`relative overflow-hidden w-full ${className}`}>
      <div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform"
      >
        <span className="text-primary marquee-text inline-block md:text-[150px] lg:text-[200px] font-hanson tracking-widest px-8 select-none">
          {marqueeText} ✦ {marqueeText} ✦ {marqueeText} ✦ {marqueeText}
        </span>
      </div>
    </div>
  );
}
