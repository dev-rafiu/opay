import { twMerge } from "tailwind-merge";
import useLockBodyScroll from "../hooks/use-lock-body-scroll";

export default function Backdrop({ children, onClick, className }) {
  useLockBodyScroll();

  return (
    <div
      className={twMerge(
        "fixed inset-0 z-40 min-h-screen overflow-y-auto overscroll-y-contain bg-black/60",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
