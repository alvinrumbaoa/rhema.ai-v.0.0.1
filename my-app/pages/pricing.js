import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const Pricing = () => {
  const [isFreeTrial, setIsFreeTrial] = useState(true);
  const router = useRouter();

  const handleSignUpClick = (plan) => {
    if (isFreeTrial) {
      router.push("/free-trial");
    } else {
      router.push(`/paid-plan/${plan}`);
    }
  };

  return (
    <Box>
      <Text fontSize="xl" fontWeight="bold">
        Pricing Plans
      </Text>
      <Box>
        <Text>Free Trial</Text>
        <Button onClick={() => handleSignUpClick("free-trial")}>Sign Up</Button>
      </Box>
      <Box>
        <Text>Basic Plan</Text>
        <Button onClick={() => handleSignUpClick("basic")}>Sign Up</Button>
      </Box>
      <Box>
        <Text>Pro Plan</Text>
        <Button onClick={() => handleSignUpClick("pro")}>Sign Up</Button>
      </Box>
    </Box>
  );
};

export default Pricing;

