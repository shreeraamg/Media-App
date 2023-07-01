import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center justify-between gap-24 px-12">
      <div className="flex flex-1 flex-col gap-12">
        <h1 className="text-6xl font-bold ">
          Better design
          <br />
          for your digital
          <br /> products.
        </h1>
        <p className="text-base font-light">
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <button className="w-max cursor-pointer rounded-sm border-0 bg-emerald-600 p-3 text-white">
          See our Works
        </button>
      </div>
      <div className="flex-1">
        <Image
          className="float-right h-96 w-auto object-cover"
          src={Hero}
          alt="Hero image"
        />
      </div>
    </div>
  );
}
