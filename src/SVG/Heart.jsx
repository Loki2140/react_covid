import React from "react";

export function SvgHeart(props) {
  return (
    <svg
      width={30}
      height={28}
      viewBox="0 0 30 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.762 13.285L15.85 19.11c-.352.71-1.371.686-1.694-.035l-3.334-7.4-1.758 4.201H3.551l10.693 10.928c.416.427 1.09.427 1.506 0l10.7-10.928h-6.393l-1.295-2.59zm8.994-9.955l-.14-.146a7.676 7.676 0 00-10.981 0L15 4.859l-1.635-1.67a7.666 7.666 0 00-10.98 0l-.14.141C-.61 6.248-.733 10.895 1.815 14h6L9.92 8.95c.316-.757 1.383-.774 1.723-.024l3.41 7.576 2.87-5.736a.936.936 0 011.677 0L21.216 14h6.966c2.55-3.105 2.426-7.752-.427-10.67z"
        fill="#666"
      />
    </svg>
  );
}