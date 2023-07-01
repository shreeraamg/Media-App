import Button from "@/components/Button";
import Image from "next/image";

const Contact = () => {
  return (
    <div>
      <h1 className="mb-20 text-center text-5xl font-bold">
        Let&apos;s keep in touch
      </h1>
      <div className="flex gap-24 px-12">
        <div className="flex flex-1 justify-center object-cover">
          <Image
            className=""
            width={350}
            height={350}
            src="/contact.png"
            alt="contact page"
          />
        </div>
        <form className="flex flex-1 flex-col gap-3" action="">
          <input
            className="h-12 w-3/4 rounded-sm border-2 border-neutral-400 bg-transparent p-3 focus:outline-none"
            type="text"
            placeholder="name"
            name=""
            id=""
          />
          <input
            className="h-12 w-3/4 rounded-sm border-2 border-neutral-400 bg-transparent p-3 focus:outline-none"
            type="email"
            placeholder="email"
          />
          <textarea
            className="h-44 w-3/4 resize-none rounded-sm border-2 border-neutral-400 bg-transparent p-3 focus:outline-none"
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button text="Send" url="/" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
