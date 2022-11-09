import Link from "next/link";

import LogoIcon from "~/components/icon/Logo";

const Logo = () => {
  return (
    <Link href="/">
      <LogoIcon
        style={{ height: 48, width: "auto" }}
        aria-hidden
        focusable={false}
        variants={undefined}
      />
    </Link>
  );
};

export default Logo;
