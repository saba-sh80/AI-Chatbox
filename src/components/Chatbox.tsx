export default function ChatBox() {
  return (
    <div className="relative h-100 overflow-hidden flex flex-col gap-2 bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-2xl shadow-[0_0_0px_rgba(99,102,241,0.22),inset_0_1px_0_0_rgba(199,210,254,0.28)]">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-indigo-400/20 via-transparent to-indigo-600/10" />
      <div className="absolute z-10 bottom-5 left-5 p-3 bg-gray-600 rounded-xl">
        <p className="text-lg text-gray-50">Hello, How can I help you?</p>
      </div>
      <div className="absolute z-10 bottom-20 right-5 overflow-hidden p-3 rounded-xl bg-linear-to-br from-indigo-500/55 via-violet-600/45 to-sky-500/40 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(199,210,254,0.35)]">
        <p className="text-lg text-gray-50">Hello</p>
      </div>
    </div>
  );
}
