export const useScrollTo = () => {
  const scrollTo = (
    target: string | HTMLElement,
    options?: {
      duration?: number;
      offset?: number;
      behavior?: ScrollBehavior;
    },
  ) => {
    const element =
      typeof target === "string" ? document.querySelector(target) : target;

    if (!element) {
      console.warn(`Element ${target} not found`);
      return;
    }

    const offset = options?.offset || 0;
    const behavior = options?.behavior || "smooth";

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: behavior,
    });
  };

  return { scrollTo };
};
