import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const FreeTrial = () => {
  const router = useRouter();
  const [hasExpired, setHasExpired] = useState(false);
  const [remainingRequests, setRemainingRequests] = useState(10);

  if (hasExpired) {
    return (
      <Box>
        <Text>Your free trial has expired</Text>
        <Button onClick={() => router.push("/paid-plan")}>Upgrade to a paid plan</Button>
      </Box>
    );
  }
  if(remainingRequests<=0){
    return (
      <Box>
        <Text>You have reached the limit of your free trial requests.</Text>
        <Button onClick={() => router.push("/paid-plan")}>Upgrade to a paid plan</Button>
      </Box>
    );
  }

  const handleRequest = () => {
    if (remainingRequests > 0) {
      setRemainingRequests(remainingRequests - 1);
    }
  };

  return (
    <Box>
      <Text>Welcome to the free trial! You have {remainingRequests} requests remaining.</Text>
      <Button onClick={handleRequest}>Make a request</Button>
    </Box>
  );
};

export default FreeTrial;
