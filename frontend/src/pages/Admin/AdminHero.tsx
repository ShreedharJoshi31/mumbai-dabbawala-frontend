import cx from "clsx";
import { Title, Text, Container, Button, Overlay } from "@mantine/core";
import classes from "./AdminHero.module.css";

export default function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>“Maa – K- Hath Jaisa Khana.“ </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            Restoring authenticity to food from the ground up is the missioin
            that drives us.
          </Text>
        </Container>
      </div>
    </div>
  );
}
