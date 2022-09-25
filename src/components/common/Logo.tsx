import Link from "next/link";

import LogoIcon from "~/components/icon/Logo";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <LogoIcon
          style={{ height: 48, width: "auto" }}
          aria-hidden
          focusable={false}
          variants={undefined}
        />
      </a>
    </Link>
  );
};

export default Logo;
