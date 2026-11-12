"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence } from "framer-motion";
import { PROJECTS, type Project } from "../data/content";
import Footer from "./Footer";
import ProjectArticle from "./ProjectArticle";
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

  // A story gets its own address (#project-id) so Back closes it and links can be shared.
  const pushed = useRef(false);
  const openProject = useCallback((p: Project) => {
    if (!opener.current) opener.current = document.activeElement as HTMLElement | null;
    setSelected(p);
    const url = `#project-${p.id}`;
    if (pushed.current) history.replaceState(null, "", url);
    else {
      history.pushState(null, "", url);
      pushed.current = true;
    }
  }, []);
  const closeProject = useCallback(() => {
    setSelected(null);
    opener.current?.focus({ preventScroll: true });
    opener.current = null;
    if (pushed.current) {
      pushed.current = false;
      history.back();
    } else if (location.hash.startsWith("#project-")) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  }, []);

  useEffect(() => {
    const fromHash = () => {
      const id = location.hash.match(/^#project-(.+)$/)?.[1];
      const p = id ? PROJECTS.find((x) => x.id === id) : undefined;
      setSelected(p ?? null);
      if (!p) pushed.current = false;
    };
    fromHash(); // opened from a shared link
    window.addEventListener("popstate", fromHash);
    return () => window.removeEventListener("popstate", fromHash);
  }, []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  const value = useMemo(() => ({ query, setQuery, openProject }), [query, openProject]);

  return (
    <ShellContext.Provider value={value}>
      <Sidebar open={menuOpen} onClose={closeMenu} />
      <div className="lg:pl-60">
        <TopBar onMenu={() => setMenuOpen(true)} />
        <div className="mx-auto flex w-full max-w-[1000px] justify-center px-4 sm:px-6 xl:justify-between xl:px-0 xl:pl-6">
          <main id="main" className="w-full min-w-0 max-w-[680px]">
            {children}
            <Footer />
          </main>
          <RightRail />
        </div>
      </div>
      <AnimatePresence>
        {selected && <ProjectArticle project={selected} onClose={closeProject} onOpen={openProject} />}
      </AnimatePresence>
    </ShellContext.Provider>
  );
}
