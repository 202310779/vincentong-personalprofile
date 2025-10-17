"use client";

import { useState, useCallback } from "react";
import ProfileCard from "./ProfileCard";
import ContactCard from "./ContactCard";
import ImageOverlay from "./ImageOverlay";

export default function InteractiveClient() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = useCallback(() => setOverlayOpen(true), []);
  const closeOverlay = useCallback(() => setOverlayOpen(false), []);

  return (
    <>
      <ProfileCard onOpenOverlay={openOverlay} />
      <ContactCard />
      <ImageOverlay open={overlayOpen} onClose={closeOverlay} />
    </>
  );
}
