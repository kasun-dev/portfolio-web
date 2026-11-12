/**
 * A loading skeleton shown for a moment on the first visit, like the glowing
 * placeholders on Medium. It is plain HTML and CSS: it fades itself out after
 * about a second, so it works without JavaScript and never traps the page.
 */
const bar = (w: string, h = "h-3") => <div className={`sk ${h} ${w} rounded-full`} />;

export default function Splash() {
  return (
    <div aria-hidden className="splash fixed inset-0 z-[90] bg-bg">
      {/* Sidebar */}
      <div className="absolute inset-y-0 left-0 hidden w-60 border-r border-line lg:block">
        <div className="px-6 pt-[18px]">{bar("w-36", "h-5")}</div>
        <div className="mt-8 space-y-5 px-6">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="sk h-5 w-5 rounded-md" />
              {bar(i % 2 ? "w-20" : "w-14")}
            </div>
          ))}
        </div>
        <div className="mt-10 space-y-4 px-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="sk h-4 w-4 rounded-full" />
              {bar(i % 2 ? "w-24" : "w-16", "h-2.5")}
            </div>
          ))}
        </div>
      </div>

      <div className="lg:pl-60">
        {/* Top bar */}
        <div className="flex h-14 items-center gap-3 border-b border-line px-4 sm:px-6">
          <div className="sk h-10 w-full max-w-[300px] rounded-full" />
          <div className="ml-auto flex items-center gap-3">
            <div className="sk hidden h-4 w-16 rounded-full sm:block" />
            <div className="sk h-8 w-8 rounded-full" />
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[1000px] justify-center px-4 sm:px-6 xl:justify-between xl:px-0 xl:pl-6">
          {/* Profile header */}
          <div className="w-full max-w-[680px] pt-16">
            <div className="sk h-24 w-24 rounded-full" />
            <div className="mt-8">{bar("w-72 max-w-full", "h-10")}</div>
            <div className="mt-4">{bar("w-52")}</div>
            <div className="mt-10 space-y-3.5">
              {bar("w-full", "h-4")}
              {bar("w-11/12", "h-4")}
              {bar("w-2/3", "h-4")}
            </div>
            <div className="mt-10 flex gap-3">
              <div className="sk h-10 w-28 rounded-full" />
              <div className="sk h-10 w-32 rounded-full" />
            </div>
            <div className="mt-16 space-y-3.5">
              {bar("w-48", "h-8")}
              {bar("w-full", "h-4")}
              {bar("w-5/6", "h-4")}
            </div>
          </div>

          {/* Right column */}
          <div className="hidden w-[256px] shrink-0 border-l border-line pl-6 pt-9 xl:block">
            {bar("w-28", "h-4")}
            <div className="mt-6 space-y-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="space-y-2.5">
                  {bar("w-16", "h-2.5")}
                  {bar(i % 2 ? "w-40" : "w-48", "h-4")}
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="sk h-8 w-20 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
