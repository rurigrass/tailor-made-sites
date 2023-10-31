import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen h-[200vh] flex-col items-center justify-between">
      <Header />
      <div className="z-10 p-20 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello
      </div>
    </main>
  );
}
