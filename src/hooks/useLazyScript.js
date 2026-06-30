import { useEffect } from "react";

/**
 * Injects a third-party script only when `ref` scrolls near the viewport.
 * Skips loading if the script is already on the page.
 */
export function useLazyScript(ref, { src, type, id } = {}) {
  useEffect(() => {
    const el = ref.current;
    if (!el || !src) return;

    let cancelled = false;

    function inject() {
      if (cancelled) return;
      if (document.querySelector(`script[src="${src}"]`)) return;

      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (type) script.type = type;
      if (id) script.id = id;
      document.head.appendChild(script);
    }

    if (!("IntersectionObserver" in window)) {
      inject();
      return () => {
        cancelled = true;
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        inject();
        observer.disconnect();
      },
      { rootMargin: "320px 0px", threshold: 0 }
    );

    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [ref, src, type, id]);
}
