import { useEffect } from "react";
import { useLocation } from "react-router";

/* The is a wrapper 
   Whenever there is a page route,
   it automatically scrolls to (0, 0) of the window
*/


const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;