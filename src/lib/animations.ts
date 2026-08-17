export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
} as const;

export const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.5 },
} as const;

export const imageReveal = {
  initial: { clipPath: "inset(0 0 100% 0)" },
  whileInView: { clipPath: "inset(0 0 0% 0)" },
  viewport: { once: true, amount: 0.01 },
  transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] },
} as const;
