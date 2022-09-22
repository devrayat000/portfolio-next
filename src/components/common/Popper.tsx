import { styled } from "@stitches/local";
import { violet, mauve, blackA } from "@radix-ui/colors";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const StyledContent = styled(PopoverPrimitive.Content, {
  position: "relative",
  borderRadius: 4,
  padding: 20,
  width: "calc(100vw - 40px)",
  mx: 20,
  backgroundColor: "white",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: "white",
});

const Content = forwardRef<HTMLDivElement, PopoverPrimitive.PopperContentProps>(
  ({ children, ...props }, ref) => {
    return (
      <PopoverPrimitive.Portal forceMount>
        <StyledContent {...props} ref={ref}>
          {children}
          <StyledArrow />
        </StyledContent>
      </PopoverPrimitive.Portal>
    );
  }
);
Content.displayName = "Content";

const MotionContent = motion(Content);

const StyledClose = styled(PopoverPrimitive.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 5,
  right: 5,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

// Exports
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = MotionContent;
export const PopoverClose = StyledClose;

// Your app...
const Flex = styled("div", { display: "flex" });

const IconButton = styled("button", {
  all: "unset",
  position: "fixed",
  right: 40,
  bottom: 40,
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 52,
  width: 52,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  backgroundColor: "white",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  "&:hover": { backgroundColor: violet.violet3 },
  "&:focus": { boxShadow: `0 0 0 2px black` },
});
const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 13,
  color: violet.violet11,
  width: 75,
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 25,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled("div", {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: "19px",
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const PopoverDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <IconButton aria-label="Update dimensions">
          <MixerHorizontalIcon height={20} width="auto" />
        </IconButton>
      </PopoverTrigger>
      <AnimatePresence mode="popLayout">
        {open && (
          <PopoverContent
            initial={{
              scale: 0,
              opacity: 0.3,
              //   x: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              //   x: 100,
            }}
            exit={{
              scale: 0,
              opacity: 0.3,
              //   x: 0,
            }}
            style={{
              transformOrigin: "var(--radix-popover-content-transform-origin)",
            }}
            sideOffset={5}
            side="bottom"
            align="end"
          >
            <Flex css={{ flexDirection: "column", gap: 10 }}>
              <Text bold css={{ marginBottom: 10 }}>
                Dimensions
              </Text>
              <Fieldset>
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="width">Width</Label>
                <Input id="width" defaultValue="100%" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="maxWidth">Max. width</Label>
                <Input id="maxWidth" defaultValue="300px" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="height">Height</Label>
                <Input id="height" defaultValue="25px" />
              </Fieldset>
              <Fieldset>
                <Label htmlFor="maxHeight">Max. height</Label>
                <Input id="maxHeight" defaultValue="none" />
              </Fieldset>
            </Flex>
            <PopoverClose aria-label="Close">
              <Cross2Icon />
            </PopoverClose>
          </PopoverContent>
        )}
      </AnimatePresence>
    </Popover>
  );
};

export default PopoverDemo;
