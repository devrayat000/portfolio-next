import { AccessibleIcon, Root } from "@radix-ui/react-accessible-icon";
import Link from "next/link";

import LogoIcon from "~/assets/logo/logo.svg";

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <AccessibleIcon label="Logo">
          <LogoIcon style={{ height: 48, width: "auto" }} />
        </AccessibleIcon>
      </a>
    </Link>
  );
};

export default Logo;
