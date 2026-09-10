"use client";

import { Icon as IconifyIcon } from "@iconify/react";

export default function Icon({ icon, className = "", width = 24, height = 24, ...props }) {
  if (!icon) return null;
  return (
    <IconifyIcon
      icon={icon}
      width={width}
      height={height}
      className={className}
      aria-hidden="true"
      {...props}
    />
  );
}
