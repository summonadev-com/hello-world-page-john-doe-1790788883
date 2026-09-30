import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
        Ready to build
      </span>
      <h1 className="bg-gradient-to-br from-white via-slate-200 to-slate-400 bg-clip-text text-5xl font-semibold tracking-tight text-transparent sm:text-7xl">
        Hello, world!
      </h1>
      <p className="max-w-md text-base leading-relaxed text-slate-400 sm:text-lg">
        Your new app is up and running. This is the starting point — tell me what
        you'd like it to become next.
      </p>
    </div>
  );
}
