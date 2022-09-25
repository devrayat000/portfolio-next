import {
  createStyles,
  Group,
  keyframes,
  Menu,
  UnstyledButton,
} from "@mantine/core";
import { IconCaretRight } from "@tabler/icons";

const wiggleX = keyframes({
  from: {
    translate: -5,
  },
  to: {
    translate: 5,
  },
});

const useStyles = createStyles((theme, _, ref) => {
  const caretRef = ref("caret");

  return {
    action: {
      borderRadius: 999,
      textTransform: "uppercase",
      fontSize: theme.fontSizes.md,
      fontWeight: 500,
      fontFamily: "'Montserrat', sans-serif",
      letterSpacing: "2.5%",
      padding: "16px 52px",
      color: theme.white,
      backgroundColor: theme.colors[theme.primaryColor][6],
      transition: "background-color 150ms linear",

      "&:hover": {
        backgroundColor: theme.fn.rgba(
          theme.colors[theme.primaryColor][6],
          0.85
        ),
      },

      [`&:hover + .${caretRef}`]: {
        animation: `${wiggleX} 250ms ease-in-out infinite alternate`,
        color: theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.85),
      },
    },
    caret: {
      ref: caretRef,
      color: theme.colors[theme.primaryColor][6],
      fill: "currentcolor",
      stroke: "none",
      transition: "all 150ms linear",
    },
    menu: {
      gap: theme.spacing.md,
      textTransform: "uppercase",
    },
  };
});

const HireMe = () => {
  const { classes, theme } = useStyles();

  return (
    <Menu
      closeOnClickOutside
      position="right"
      offset={theme.spacing.md + 32}
      shadow="xs"
      transition="pop-top-left"
      withinPortal
    >
      <Group>
        <Menu.Target>
          <UnstyledButton className={classes.action}>Hire Me</UnstyledButton>
        </Menu.Target>
        <IconCaretRight size={32} className={classes.caret} />
      </Group>
      <Menu.Dropdown className={classes.menu}>
        <Menu.Item component="a" target="_blank" rel="noreferer">
          Fiverr
        </Menu.Item>
        <Menu.Item component="a" target="_blank" rel="noreferer">
          Upwork
        </Menu.Item>
        <Menu.Item component="a" target="_blank" rel="noreferer">
          Freelancer
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default HireMe;
