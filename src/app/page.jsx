import Button from "@/components/Button";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center justify-between gap-24 px-12">
      <div className="flex flex-1 flex-col gap-10">
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
        <Button url="/portfolio" text="See our Works" />
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
