import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Green
        <Text inherit variant="gradient" component="span">
          Gaze
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        I dont like map GLs{' '}
        <Anchor href="https://mantine.dev/guides/next/" size="lg">
          better than geodjango ahem ahem
        </Anchor>
        time to mantine
      </Text>
    </>
  );
}
