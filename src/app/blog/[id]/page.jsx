import Image from "next/image";
import { MdAccountCircle } from "react-icons/md";
import { notFound } from "next/navigation";

async function getData(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) return notFound();

  return response.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className="space-y-10 px-20">
      <div className="flex gap-12">
        <section className="flex flex-1 flex-col justify-between py-8">
          <h1 className="text-3xl font-bold">{data.title}</h1>
          <p>{data.body}</p>
          <span className="flex items-center gap-3 font-semibold">
            <MdAccountCircle size={30} />
            <p>Account Holder</p>
          </span>
        </section>
        <section className="flex flex-1 justify-center">
          <Image
            className="rounded-sm"
            src="https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Post"
            width={400}
            height={250}
          />
        </section>
      </div>
      <div>
        <p className="text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nisi
          laudantium fugit officiis ipsa, voluptas illum eveniet dolorum minima,
          distinctio adipisci. Consequatur quasi nisi reprehenderit ad
          distinctio ea. Obcaecati, minima. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Odio veritatis nulla expedita molestias
          quos, alias, ullam quas delectus repellendus eius rem. Possimus
          praesentium, culpa similique impedit assumenda alias architecto
          ratione!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
          incidunt dolores quia animi reiciendis sapiente nisi et natus corporis
          similique dolorem explicabo ab odio sequi, amet non asperiores,
          reprehenderit velit. Lorem ipsum dolor sit amet thevudiya consectetur
          adipisicing elit. Suscipit distinctio labore unde aliquam sapiente
          sint recusandae quod exercitationem, ipsa dolorem. reiciendis sapiente
          nisi et natus corpori um dolor sit amet capmarri
          <br />
          <br />
          incidunt dolores quia animi reiciendis sapiente nisi et natus corporis
          similique dolorem explicabo ab odio sequi, amet non asperiores,
          reprehenderit velit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Suscipit distinctio labore unde aliquam sapiente
          sint recusandae quod exercitationem, ipsa dolorem.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
