import Image from "next/image";

const BlogPost = ({ imgUrl, title, description }) => {
  return (
    <div className="flex gap-12 px-20">
      <Image
        className="rounded-sm"
        width={280}
        height={160}
        src={imgUrl}
        alt="Post Image"
      />
      <section className="space-y-5">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-justify">{description}</p>
      </section>
    </div>
  );
};

export default BlogPost;
