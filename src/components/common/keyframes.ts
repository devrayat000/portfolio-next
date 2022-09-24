import { keyframes } from "@mantine/core";

export const enterFromRight = keyframes`
  from {
    translate: 200px;
    opacity: 0;
  }
  to {
    translate: 0px;
    opacity: 1;
  }
`;

export const enterFromLeft = keyframes`
  from {
    translate: -200px;
    opacity: 0;
  }
  to {
    translate: 0px;
    opacity: 1;
  }
`;

export const exitToRight = keyframes`
  from {
    translate: 0px;
    opacity: 1;
  }
  to {
    translate: 200px;
    opacity: 0;
  }
`;

export const exitToLeft = keyframes`
  from {
    translate: 0px;
    opacity: 1;
  }
  to {
    translate: -200px;
    opacity: 0;
  }
`;

export const scaleIn = keyframes({
  from: { transform: "rotateX(-30deg) scale(0.9)", opacity: 0 },
  to: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
});

export const scaleOut = keyframes({
  from: { transform: "rotateX(0deg) scale(1)", opacity: 1 },
  to: { transform: "rotateX(-10deg) scale(0.95)", opacity: 0 },
});

export const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

export const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});
