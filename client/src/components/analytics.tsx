
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GA_ID = "G-3TXHSBDCDJ"; 

ReactGA.initialize(GA_ID);

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}
