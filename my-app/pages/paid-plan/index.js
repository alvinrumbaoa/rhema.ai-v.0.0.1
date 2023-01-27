import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";

const PaidPlan = () => {
  const router = useRouter();
  const { plan } = router.query;
  const [isPaid, setIsPaid] = useState(false);

  if (!isPaid) {
    return (
      <Box>
        <Text>You are currently on the {plan} plan.</Text>
        <Button>Upgrade Plan</Button>
        <Button>Downgrade Plan</Button>
        <Button>Cancel Plan</Button>
      </Box>
    );
  }

  return (
    <Box>
      <Text>Thank you for purchasing the {plan} plan.</Text>
    </Box>
  );
};

export default PaidPlan;
