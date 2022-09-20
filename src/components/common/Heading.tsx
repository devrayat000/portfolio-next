import { styled } from "@stitches/local";
import type { ComponentProps } from "@stitches/react";

const HeadingRoot = styled("h1", {
  fontFamily: "$poppins",
  color: "$textPrimary",
  variants: {
    variant: {
      h1: {
        fontSize: "$h1",
        fontWeight: "bold",
        letterSpacing: "$widest",
      },
      h2: {
        fontSize: "$h2",
        fontWeight: "bold",
        letterSpacing: "$wider",
      },
      h3: {
        fontSize: "$h3",
        fontWeight: "bold",
      },
      h4: {
        fontSize: "$h4",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "$h5",
        fontWeight: 600,
      },
      h6: {
        fontSize: "$h6",
        fontWeight: 500,
      },
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

type HeadingProps = ComponentProps<typeof HeadingRoot> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HeadingProps> = ({ as, ...props }) => {
  return <HeadingRoot as={as} variant={as} {...props} />;
};

export default Heading;
