import { ReactNode } from "react";
import { createPortal } from "react-dom";

export enum PortalTarget {
  ROOT = "root",
  MODAL = "modal",
}

interface PortalProps {
  target: PortalTarget;
  children: ReactNode;
}

export const Portal = ({ target, children }: PortalProps) => {
  const root = document.getElementById(target) as HTMLElement;
  return root ? createPortal(children, root) : null;
};
