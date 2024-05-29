import Link from "next/link";
import React from "react";
import Image from "next/image";

const PersonalBranding: React.FC = () => {
  return (
    <div className="transform cursor-pointer">
      <Link href="/" legacyBehavior>
        <a className="font-bold text-xl flex items-center">
          <span className="navbar-logo-name">Amars Tech Blog</span>
        </a>
      </Link>
    </div>
  );
};

export default PersonalBranding;
