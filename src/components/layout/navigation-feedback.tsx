"use client";

import { useLinkStatus } from "next/link";
import { createPortal } from "react-dom";
import { IntroLoader } from "./intro-loader";

export function NavigationFeedback() {
  const { pending } = useLinkStatus();
  return pending ? createPortal(<IntroLoader pending />, document.body) : null;
}
