"use client";

import { useEffect, useRef, useState } from "react";

interface ImageOverlayProps {
  open: boolean;
  onClose?: () => void;
}

export default function ImageOverlay({ open, onClose }: ImageOverlayProps) {
  const [active, setActive] = useState(false);
  const showTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (open) {
      showTimer.current = setTimeout(() => setActive(true), 50);
    } else {
      setActive(false);
    }
    return () => {
      if (showTimer.current) clearTimeout(showTimer.current);
    };
  }, [open]);

  function handleOverlayClick() {
    setActive(false);
    hideTimer.current = setTimeout(() => {
      onClose?.();
    }, 500);
  }

  useEffect(() => {
    return () => {
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  return (
    <div
      className="overlay"
      style={{ display: open ? "block" : "none" }}
      onClick={handleOverlayClick}
      aria-hidden={!open}
    >
      <img
        className={`enlarged-img ${active ? "active" : ""}`}
        src="/images/vincent.png"
        alt="Vincent Profile Picture"
      />
    </div>
  );
}
