import cx from "clsx";
import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  Image,
  Center,
} from "@mantine/core";
import classes from "./Hero.module.css";
import { Link, useNavigate } from "react-router-dom";
import logoIntro from "../../assets/logo_intro.png";

export default function HeroImageBackground() {
  const navigate = useNavigate();
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <Center style={{ height: "100%" }}>
        <div className={classes.inner}>
          <Center style={{ flexDirection: "column", height: "100%" }}>
            <Image radius="md" src={logoIntro} w="auto" alt="Logo" />
            <Title className={classes.title}>
              We promise you will not miss your{" "}
              <Text component="span" inherit className={classes.highlight}>
                Mom's Home Cooked Food
              </Text>
            </Title>

            {/* <Container size={640}>
          <Text size="lg" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container> */}

            <div className={classes.controls}>
              <Button
                className={classes.control}
                variant="white"
                size="lg"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </Button>
              <Button
                className={cx(classes.control, classes.secondaryControl)}
                size="lg"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register
              </Button>
            </div>
          </Center>
        </div>
      </Center>
    </div>
  );
}
