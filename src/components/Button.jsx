import Link from "next/link";

const Button = ({ text, url }) => {
  return (
    <Link
      className="w-max cursor-pointer rounded-sm border-0 bg-emerald-600 p-3 text-white"
      href={url}
    >
      {text}
    </Link>
  );
};

export default Button;
