import { styled } from "@stitches/local";
import { mauve, blackA } from "@radix-ui/colors";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import React from "react";

const SCROLLBAR_SIZE = 10;

const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: "auto",
  height: "100vh",
  borderRadius: 4,
  overflow: "hidden",
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
});

const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
});

const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  userSelect: "none",
  touchAction: "none",
  padding: 2,
  background: blackA.blackA6,
  transition: "background 160ms ease-out",
  "&:hover": { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
  '&[data-orientation="horizontal"]': {
    flexDirection: "column",
    height: SCROLLBAR_SIZE,
  },
});

const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: SCROLLBAR_SIZE,
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
});

const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8,
});

export const ScrollAreaRoot = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

const Box = styled("div", {});

const ScrollArea: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ScrollAreaRoot>
    <ScrollAreaViewport css={{ backgroundColor: "white" }}>
      <Box style={{ padding: "15px 20px" }}>{children}</Box>
    </ScrollAreaViewport>
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
);

export default ScrollArea;
