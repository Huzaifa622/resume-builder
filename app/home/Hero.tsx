import Link from "next/link";
import { FlexboxSpacer } from "../components/FlexboxSpacer";
import { AutoTypingResume } from "./AutoTypingResume";
import { BackgroundBeams } from "../components/BackgroundBeam";

export const Hero = () => {
  return (
    <section className="lg:flex h-screen lg:justify-center">
      <FlexboxSpacer maxWidth={75} minWidth={0} className="hidden lg:block" />
      <div className="mx-auto max-w-xl pt-8 text-center lg:mx-0 lg:grow lg:pt-32 lg:text-left">
        <h1 className=" pb-2 text-4xl font-bold lg:text-5xl">
          Create a professional
          <br />
          resume easily
        </h1>
        <p className="mt-3 mb-14 text-lg lg:mt-5 lg:text-xl">
          With this powerful resume builder
        </p>
        <Link
          href="/resume-import"
          className="bg-black px-4 py-2 rounded-full mt-8 text-white lg:mt-14"
        >
          Create Resume
        </Link>
      </div>
      <BackgroundBeams className="z-[-9999]" />
    </section>
  );
};
