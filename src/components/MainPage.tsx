
import ChatBox from "./ChatBox";
import Typingbox from "./Typingbox";

export default function MainPage() {
  return (
    <div className="basis-3/4 grid justify-center gap-y-4 bg-gray-950 py-7">
      <div className="w-225 flex flex-col items-center gap-2">
        <h1 className="text-3xl font-bold tracking-tight bg-linear-to-r from-sky-300 via-indigo-400 to-violet-500 bg-clip-text text-transparent">
          Welcome to AI CHATBOX
        </h1>
        <p className="text-sm text-gray-400/60">How can I help you today?</p>
      </div>
      <ChatBox/>
      <Typingbox />
    </div>
  );
}
