import Button from "@/components/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (category) => {
  const data = items[category];
  if (data) return data;
  return notFound();
};

const page = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className="space-y-10">
      <h1 className="text-xl font-semibold">
        {params.category.charAt(0).toUpperCase() + params.category.slice(1)}
      </h1>
      {data.map((item) => (
        <div key={item.id} className="alternate flex gap-12">
          <div className="flex flex-1 flex-col justify-center gap-4 px-8">
            <h1 className="text-3xl font-semibold">{item.title}</h1>
            <p className="text-justify">{item.desc}</p>
            <Button url="#" text="See more" />
          </div>
          <div className="flex flex-1 justify-center">
            <Image
              src={item.image}
              alt="dummy data"
              width={550}
              height={220}
              className="rounded-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
