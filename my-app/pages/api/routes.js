
export default async (req, res) => {
  if (req.url.startsWith("/free-trial")) {
    if (req.method === "GET") {
      // handle GET request to /free-trial
    } else if (req.method === "POST") {
      // handle POST request to /free-trial
    }
  } else if (req.url.startsWith("/paid-plan")) {
    if (req.method === "GET") {
      // handle GET request to /paid-plan
    } else if (req.method === "POST") {
      // handle POST request to /paid-plan
    }
  }
};