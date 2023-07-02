import BlogPost from "@/components/BlogPost";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!response.ok) throw "Error in fetching data";

  return response.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className="flex flex-col gap-12">
      {data.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <BlogPost
            title={post.title}
            description={post.body}
            imgUrl="https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Link>
      ))}

      {/* <Link href="/blog/testid">
        <BlogPost imgUrl="https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Link>
      <Link href="/blog/testid">
        <BlogPost imgUrl="https://images.pexels.com/photos/1721747/pexels-photo-1721747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      </Link> */}
    </div>
  );
};

export default Blog;
