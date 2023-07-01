import Button from "@/components/Button";
import Image from "next/image";

const About = () => {
  return (
    <div className="px-12">
      <div className="relative h-52 w-full">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="about Image"
          fill={true}
          className="h-44 w-full object-cover grayscale-[1]"
        />
        <div className="absolute bottom-3 left-3 rounded-sm bg-emerald-600 p-3 opacity-90">
          <h1 className="text-2xl font-bold">Digital Storytellers</h1>
          <h2 className="font-medium">
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className="mt-3 flex gap-12">
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-2xl font-bold">Who are we?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-2xl font-bold">What we do?</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />- Creative Illustrations
            <br /> - Dynamic Websites
            <br /> - Fast and Handy
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
