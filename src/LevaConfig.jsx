import { useState, useEffect } from "react";
import { Leva } from "leva";

function LevaConfig() {
  const [isBottomOfPage, setIsBottomOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const BottomOfPage =
        window.innerHeight + window.scrollY < document.body.offsetHeight || window.innerWidth < 450;
        setIsBottomOfPage(BottomOfPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return <Leva flat collapsed={false} hidden={isBottomOfPage ? true : false} />;
}

export default LevaConfig;
