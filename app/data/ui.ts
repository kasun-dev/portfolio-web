/** Shared Tailwind class strings, so every control behaves the same way. */

const press = "transition-[background-color,border-color,color,opacity,transform] duration-150 ease-out active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50";

export const btnPrimary =
  `inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-medium text-onbrand hover:opacity-85 ${press}`;

export const btnOutline =
  `inline-flex items-center justify-center gap-2 rounded-full border border-fg/30 px-5 py-2 text-sm font-medium text-fg hover:border-fg hover:bg-surface ${press}`;

/** Round icon-only button; 44px on touch screens, 40px with a mouse. */
export const iconBtn =
  `grid h-11 w-11 shrink-0 place-items-center rounded-full text-muted hover:bg-surface hover:text-fg sm:h-10 sm:w-10 ${press}`;

export const chip =
  "inline-flex items-center rounded-full bg-surface px-3.5 py-1.5 text-sm text-fg transition-colors duration-150";

export const field =
  "mt-1.5 w-full rounded-md border border-line bg-surface px-3.5 py-2.5 text-base text-fg placeholder:text-muted transition-colors focus:border-fg";
