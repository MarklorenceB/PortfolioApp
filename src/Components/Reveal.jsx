import React, { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper. Adds `.is-visible` when the element enters the
 * viewport (once). Respects prefers-reduced-motion via CSS.
 *
 * variant: "up" | "left" | "right" | "zoom"
 * delay:   transition delay in ms (use for stagger)
 */
const Reveal = ({
  as = "div",
  variant = "up",
  delay = 0,
  className = "",
  children,
  ...rest
}) => {
  const Tag = as;
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
