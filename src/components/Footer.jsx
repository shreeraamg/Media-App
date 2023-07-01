import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex h-12 items-center justify-between text-sm">
      <p> &#169; 2023 Media App. All rights reserved</p>
      <div className="flex items-center gap-2">
        <Image
          src="/1.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-70"
          alt="social media icons"
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-70"
          alt="social media icons"
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-70"
          alt="social media icons"
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          className="cursor-pointer opacity-70"
          alt="social media icons"
        />
      </div>
    </div>
  );
};

export default Footer;
