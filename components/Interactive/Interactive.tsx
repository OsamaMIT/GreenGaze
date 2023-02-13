import React, { useState } from 'react';
import { Button, Input, Box, Stack } from '@mantine/core';

const Interactive = () => {
  const [isToggled, setToggled] = useState(false);
  return (
    <Box
      position="fixed"
      left={0}
      top={0}
      height="100vh"
      width="200px"
      backgroundColor="gray.800"
      padding="20px"
    >
      <Stack spacing={4}>
        <Input placeholder="Search" />
        <Button onClick={() => setToggled(!isToggled)}>Toggle Button</Button>
        {isToggled && <Button>Toggled Button</Button>}
      </Stack>
    </Box>
  );
};

export default Interactive;
