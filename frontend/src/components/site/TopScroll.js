import React, { useEffect, useState } from "react";
import { UpOutlined } from '@ant-design/icons';

const TopScroll = () => {
    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isBrowser = () => typeof window !== "undefined";
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div>
      {isVisible && (
        <button className="fixed bottom-0 right-0 p-10" onClick={scrollToTop}>
          <UpOutlined />
        </button>
      )}
    </div>
  )
}
export default TopScroll