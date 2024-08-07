import { BlogPosts } from "src/components/posts";
import { Navbar } from "@/components/nav";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <div className="mt-5 flex items-center">
        <Image
          src="/profile.png"
          height={120}
          width={120}
          alt="Dummy Image"
          className="rounded-full aspect-square object-cover
          mr-5 mb-5 drop-shadow-[0_0_14px_rgba(255,255,255,0.25)]"
        />
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          Eliúde Paulo Quintas Francisco
        </h1>
      </div>
      <div className="section-1 mt-5">
        <p className="mb-4">
          {`Oi, eu sou Eliude Francisco, sou desenvolvedor de software, Angolano e entusiasta na área da Programação.`}
        </p>
      </div>

      <div className="my-8"></div>
    </section>
  );
}
