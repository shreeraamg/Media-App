import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1 className="my-4 text-xl">Choose a gallery</h1>
      <div className="relative flex gap-12">
        <Link
          className="relative h-[350px] w-[225px] rounded-sm border-4 border-neutral-400 bg-illustration bg-cover bg-center transition-all hover:scale-95 hover:text-emerald-600"
          href="/portfolio/illustrations"
        >
          <span className="absolute bottom-2 left-2 text-2xl font-bold">
            Illustrations
          </span>
        </Link>
        <Link
          className="relative h-[350px] w-[225px] rounded-sm border-4 border-neutral-400 bg-websites bg-cover bg-center transition-all hover:scale-95 hover:text-emerald-600"
          href="/portfolio/websites"
        >
          <span className="absolute bottom-2 left-2 text-2xl font-bold">
            Websites
          </span>
        </Link>
        <Link
          className="relative h-[350px] w-[225px] rounded-sm border-4 border-neutral-400 bg-apps bg-cover bg-center transition-all hover:scale-95 hover:text-emerald-600"
          href="/portfolio/applications"
        >
          <span className="absolute bottom-2 left-2 text-2xl font-bold">
            Applications
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
