export default function Sidebar() {
  return (
    <div className="basis-1/4 flex flex-col gap-y-3 bg-gray-950 border-r border-r-gray-800">
      <div className="flex justify-between items-center px-5 py-4">
        <div>
          <img
            className="w-8 h-8 cursor-pointer"
            src="./Icons/hamburger-menu.png"
            alt="hamburger menu Icon"
          />
        </div>
        <div className="w-1/2 relative border border-indigo-800/70 bg-slate-800 rounded-xl">
          <div className="absolute inset-y-0 inset-e-2 flex items-center">
            <img
              className="w-5 h-5 cursor-pointer"
              src="./Icons/search-icon.png"
              alt="Search Icon"
            />
          </div>
          <input
            className="w-40 p-1 rounded-md placeholder:px-2 text-gray-50"
            type="text"
            placeholder="search..."
          />
        </div>
      </div>
      <div className="w-11/12 relative overflow-hidden ml-2 flex justify-start items-center gap-2 cursor-pointer px-5 py-3 bg-gray-900/40 backdrop-blur-xl border border-indigo-800/70 rounded-md shadow-[0_0_1px_rgba(99,102,241,0.22),inset_0_1px_0_0_rgba(199,210,254,0.28)]">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-indigo-400/20 via-transparent to-indigo-600/10" />
        <p className="text-3xl text-white mb-1">+</p>
        <a className="relative z-10 font-semibold text-white" href="#">
          New Chat
        </a>
      </div>
      <div className="mt-5">
        <ul className="flex flex-col gap-y-3 justify-center items-center border-b border-t border-gray-800 py-2">
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/images.png" alt="images" />
            <a className="cursor-pointer font-semibold text-gray-300" href="#">
              Images
            </a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/library.png" alt="library" />
            <a className="cursor-pointer font-semibold text-gray-300" href="#">
              Library
            </a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img
              className="w-6 h-6"
              src="./Icons/projects.png"
              alt="projects"
            />
            <a className="cursor-pointer font-semibold text-gray-300" href="#">
              Projects
            </a>
          </div>
          <div className="w-full flex justify-start items-center gap-x-2 py-3 px-5">
            <img className="w-6 h-6" src="./Icons/remote.png" alt="remote" />
            <a className="cursor-pointer font-semibold text-gray-300" href="#">
              Remote
            </a>
          </div>
        </ul>
      </div>
      <div className="px-5 py-2">
        <p className="font-semibold text-gray-300 text-lg">History</p>
      </div>
    </div>
  );
}
