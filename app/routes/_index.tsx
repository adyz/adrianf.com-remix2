import { useNavigate } from "react-router-dom";
import VectorCharacter from "../components/VectorCharacter"
import Boop from '../components/Boop';
import { MetaFunction } from "@remix-run/react";
import { getSocialMetas } from "~/utils/seo/meta";


const description = "I am a Front-end Developer living in Bucharest, Romania. I've been designing and coding user interfaces for the web in the last decade using HTML, CSS, and JS."

export const meta: MetaFunction = ({location}) => {
  return [{
    ...getSocialMetas({
      image: 'https://adrianf.com/images/profile.jpeg',
      url: location.pathname,
      title: "Adrian Florescu - Front-end Developer - Bucharest - Romania",
      description,
      keywords: "adrian, adrian florescu, florescu, homepage, html, css, js, typescript, remix, react, romania, bucharest, front-end development"
    })
  }];
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <div 
      id="Home" 
      className="
        h-[100vh] min-h-[640px] w-full overflow-hidden border-b border-solid flex border-colorBorder relative
      "
    >
      <VectorCharacter className="absolute right-[-30%] top-[10%] w-[80%] h-[80%] z-[1]" />
      <div className="
        text-colorBrown
        flex w-full h-full
        items-center
        justify-center
        max-w-[1000px]
        px-4 md:px-8
        py-0
      ">
        <div className="z-10">
          <div className="mt-28 md:mt-0">
            <h1 
              className="
                text-4xl sm:text-5xl lg:text-7xl 2xl:text-8xl
                m-0 mb-2 font-serif font-normal
                relative
              "
            >
              Hey there!
            </h1>
            <h2 
              className="
                text-xl sm:text-2xl lg:text-4xl 2xl:text-5xl
                m-0 font-serif font-normal
              "
            >
              I’m Adrian, nice to meet you!
            </h2>
          </div>
          <div className="py-8">
            <p 
              className="
                text-base sm:text-lg md:text-xl lg:text-2xl 
                text-colorLightBrown
                leading-normal
                max-w-[95%]
              "
            >
              {description}
            </p>
          </div>
          <div className="flex flex-1 gap-3">
            <Boop y={2}>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => {
                    window.location.href = "./Resume-Adrian-Florescu.pdf";
                  }}
                  className="
                    py-2 md:py-3 
                    px-5 md:px-8 
                    text-xs lg:text-base
                    uppercase rounded-md font-bold border-0 tracking-widest shadow-lg cursor-pointer
                    bg-colorGreen text-[#fff]
                  "
                >
                  Download Resume
                </button>
                <p className="w-40 text-center text-[11px] md:text-sm mt-2">Or click on the links in the top right corner 🚀</p>
              </div>
            </Boop>
            <Boop y={2}>
              <button
                onClick={() => {
                  navigate("/contact/")
                }}
                className="
                  py-2 md:py-3 
                  px-3 md:px-8 
                  text-xs lg:text-base
                  uppercase rounded-md font-bold border-0 tracking-widest shadow-lg cursor-pointer
                  bg-colorWhite text-colorRed
                "
              >
                Contact me
              </button>
            </Boop>
          </div>
        </div>
      </div>
    </div>
  );
}
