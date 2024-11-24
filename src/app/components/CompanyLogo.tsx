"use client";

import Image from "next/image";
import Link from "next/link";

const CompanyLogo = ({
  href = "/",
  src = "/next.svg",
  alt = "Brand Logo",
  className = "",
  width = 120,
  height = 30,
  priority = false
}) => {
  return (
    <Link href={href} aria-label="Your Company" className={`-m-1.5 p-1.5 ${className}`}>
      <Image
        className={`dark:invert ${className}`}
        src={src}
        alt={alt}
        title={alt}
        width={width}
        height={height}
        priority={priority}
      />
    </Link>
  );
};

export default CompanyLogo;