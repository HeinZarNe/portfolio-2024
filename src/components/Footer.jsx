import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row items-center gap-3 flex-wrap w-full  px-10 border-[#171717] border-2 bg-[#0f0f10]   relative">
      <div className="flex-1 py-3">
        <p className="font-thin text-stone-500">Last Updated 7/2024</p>
      </div>
      <div className="flex flex-row gap-5 text-gray-400 flex-wrap">
        <a
          target="blank"
          href="mailto:heinzarne226@gmail.com"
          className="hover:translate-y-[-8px] duration-[0.3s] ease-out transition-all py-3 hover:text-gold "
        >
          Mail
        </a>
        <a
          className="hover:translate-y-[-8px] duration-[0.3s] ease-out transition-all py-3 hover:text-gold"
          target="blank"
          href="https://www.linkedin.com/in/hein-zar-ne-783a01229/"
        >
          Linkedin
        </a>

        <a
          target="blank"
          href="https://t.me/zarne226"
          className="hover:translate-y-[-8px] duration-[0.3s] ease-out transition-all py-3 hover:text-gold"
        >
          Telegram
        </a>
        <a
          target="blank"
          href="https://www.facebook.com/LORD.x.25/"
          className="hover:translate-y-[-8px] duration-[0.3s] ease-out transition-all py-3 hover:text-gold"
        >
          Facebook
        </a>
      </div>
    </div>
  );
};

export default Footer;
