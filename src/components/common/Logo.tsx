import Link from "next/link";

import LogoIcon from "~/assets/logo/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoIcon
          style={{ height: 48, width: "auto" }}
          aria-hidden
          focusable={false}
        />
      </a>
    </Link>
  );
};

export default Logo;
