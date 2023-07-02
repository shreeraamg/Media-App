import Button from "@/components/Button";
import Image from "next/image";

const page = ({ params }) => {
  return (
    <div className="space-y-10">
      <h1 className="text-xl font-semibold">
        {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
      </h1>
      <div className="flex gap-12">
        <div className="flex flex-1 flex-col justify-center gap-4 px-8">
          <h1 className="text-3xl font-semibold">Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            reiciendis sint quis, qui iste perspiciatis mollitia? Eum, iusto.
            Excepturi hic sit ipsa sapiente nam, quam alias voluptatem quae
            placeat officia?
          </p>
          <Button url="#" text="See more" />
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dummy data"
            width={550}
            height={220}
            className="rounded-sm"
          />
        </div>
      </div>
      <div className="flex flex-row-reverse gap-12">
        <div className="flex flex-1 flex-col items-end justify-center gap-4 px-8">
          <h1 className="text-3xl font-semibold">Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            reiciendis sint quis, qui iste perspiciatis mollitia? Eum, iusto.
            Excepturi hic sit ipsa sapiente nam, quam alias voluptatem quae
            placeat officia?
          </p>
          <Button url="#" text="See more" />
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dummy data"
            width={550}
            height={220}
            className="rounded-sm"
          />
        </div>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-1 flex-col justify-center gap-4 px-8">
          <h1 className="text-3xl font-semibold">Title</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            reiciendis sint quis, qui iste perspiciatis mollitia? Eum, iusto.
            Excepturi hic sit ipsa sapiente nam, quam alias voluptatem quae
            placeat officia?
          </p>
          <Button url="#" text="See more" />
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="https://images.pexels.com/photos/3522880/pexels-photo-3522880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="dummy data"
            width={550}
            height={220}
            className="rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
