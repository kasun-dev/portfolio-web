"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import type { Project } from "../data/content";
import Footer from "./Footer";
import ProjectDrawer from "./ProjectDrawer";
import RightRail from "./RightRail";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

type ShellState = {
  query: string;
  setQuery: (q: string) => void;
  openProject: (p: Project) => void;
};

const ShellContext = createContext<ShellState>({
  query: "",
  setQuery: () => {},
  openProject: () => {},
});

/** Search text and the project drawer are shared between the top bar, the right
 *  column and the projects feed. */
export const useShell = () => useContext(ShellContext);

export default function Shell({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const opener = useRef<HTMLElement | null>(null);

  const openProject = useCallback((p: Project) => {
    opener.current = document.activeElement as HTMLElement | null;
    setSelected(p);
  }, []);
  const closeProject = useCallback(() => {
    setSelected(null);
    opener.current?.focus();
  }, []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const value = useMemo(() => ({ query, setQuery, openProject }), [query, openProject]);

  return (
    <ShellContext.Provider value={value}>
      <Sidebar open={menuOpen} onClose={closeMenu} />
      <div className="lg:pl-64">
        <TopBar onMenu={() => setMenuOpen(true)} />
        <div className="mx-auto flex w-full max-w-[1100px] justify-center px-4 sm:px-6 xl:justify-between xl:px-0 xl:pl-10">
          <main id="main" className="w-full min-w-0 max-w-[680px]">
            {children}
            <Footer />
          </main>
          <RightRail />
        </div>
      </div>
      <AnimatePresence>
        {selected && <ProjectDrawer key={selected.id} project={selected} onClose={closeProject} />}
      </AnimatePresence>
    </ShellContext.Provider>
  );
}
