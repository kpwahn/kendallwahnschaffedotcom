import Header from "~/components/header";

export default function Index() {
  return (
    <main className="h-[200%] bg-[#b9bca9] px-4">
      <Header />
      <div className="relative">
        <div className="mt-12 overflow-hidden rounded-tl-[40%] rounded-br-[40%] rounded-tr-[20%] rounded-bl-[20%]">
          <img
            className="origin-[63%_8%] scale-[3.6]"
            src="/profile.jpg"
            alt=""
          />
        </div>
        <h1 className="absolute bottom-2 right-0 text-5xl text-white">
          I'm Kendall.
        </h1>
      </div>
      <p className="mt-4 text-xl text-[#1a1c17]">Nice to meet you.</p>
    </main>
  );
}
