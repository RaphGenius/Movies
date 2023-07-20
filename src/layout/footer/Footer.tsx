import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="w-full h-20 mt-8 bg-slate-950 p-4 flex items-center justify-center  ">
      <p className="text-white gap-2 flex text-xl ">
        <a
          target="_blank"
          className="flex items-center  gap-2"
          href="https://github.com/RaphGenius"
        >
          <span className="gradientText ">RaphGenius </span> <AiFillGithub />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
