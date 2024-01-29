import React from "react";
import GitHubSVG from "/public/images/github.png";
import LinkedInSVG from "/public/images/linkedIn.png";
import Link from "next/link";
import Image from "next/image";

type Props = {};

export default function EmailSection({}: Props) {
  return (
    <section className="grid grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <Image
        src={"/images/mesh.png"}
        width={250}
        height={250}
        alt=""
        className="absolute opacity-10 bottom-10 left-0"
      ></Image>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eaque
          magnam ad quisquam velit tempore. Facere sunt eos consequuntur earum!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/takundaj?tab=repositories"}>
            <Image
              src={GitHubSVG}
              alt="git hub icon"
              width={50}
              height={50}
            ></Image>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/takunda-nyamatore-435a4a151/"}
          >
            <Image
              src={LinkedInSVG}
              alt="linked in icon"
              width={50}
              height={50}
            ></Image>
          </Link>
        </div>
      </div>
      <div>
        <form action="" className="flex flex-col ">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium mb-2"
            >
              Email
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="email"
              id="email"
              required
              placeholder="example@gmial.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="text"
              id="subject"
              required
              placeholder="Just sayin hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm font-medium mb-2"
            >
              Subject
            </label>
            <textarea
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              name="message"
              is="message"
              required
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
