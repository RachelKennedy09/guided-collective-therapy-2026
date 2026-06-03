import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;

    const saved = sessionStorage.getItem(`scroll:${pathname}`);
    const heroOffset = pathname === "/" ? 0 : 72;

    if (saved !== null) {
      window.scrollTo({ top: Number(saved), left: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: heroOffset, left: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}
