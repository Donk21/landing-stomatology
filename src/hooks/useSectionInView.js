import { useState, useEffect } from "react";

/**
 * Returns true when the element with the given id is intersecting the viewport.
 * @param {string} id - Element id (e.g. "contacts")
 * @returns {boolean}
 */
export function useSectionInView(id) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = document.getElementById(id);
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "0px", threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [id]);

  return inView;
}
