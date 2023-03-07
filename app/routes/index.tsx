import Header from "~/components/header";

export default function Index() {
  return (
    <>
      <Header />
      <main className="m-auto h-[200%] max-w-lg px-4">
        <div className="relative">
          <div className="mt-12 max-w-sm overflow-hidden rounded-tl-[40%] rounded-br-[40%] rounded-tr-[20%] rounded-bl-[20%]">
            <img
              className="origin-[63%_8%] scale-[3.6]"
              src="/profile.jpg"
              alt=""
            />
          </div>
          <h1 className="absolute bottom-2 right-0 text-5xl font-bold text-white">
            I'm Kendall.
          </h1>
        </div>
        <p className="mt-4 text-xl font-semibold text-[#1a1c17]">
          Nice to meet you.
        </p>

        <div className="mx-auto my-12 h-[2px] w-16 bg-[#79584d]"></div>

        <h2 className="-ml-4 text-5xl font-medium text-white">This is me</h2>
        <p className="mt-4 text-xl font-medium text-[#1a1c17]">
          I'm a christian, dad, web developer, and ocassional pickleball player.
        </p>
      </main>
    </>
  );
}
