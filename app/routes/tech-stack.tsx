
import TechStackSection from "../components/TechStackSection"
import PageHeader from "../components/PageHeader"
import {getSocialMetas} from '../utils/seo/meta';
import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = ({location}) => {
    return [{
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Tech Stack",
        description: "I use tools and I like to keep them up to date, here's my current stack",
        keywords: "adrian, adrian florescu, html, css, javascript, typescript, php, react, redux, wordpress, remix, tailwind, tailwindcss, webpack, jest, react-testing-library"
      })
    }]
  };

export default function Page() {
    const description = `I use tools and I like to keep them up to date, here's my current stack`;
    return (
        <div
        className="
                min-h-screen
                border-b border-solid border-colorBorder
                bg-gradient-to-b from-colorSuperLighterBrown to-colorBg bg-no-repeat
                flex
                flex-col
                justify-center
                items-center
        "
        style={{
            backgroundPosition: '0 40px',
            backgroundSize: '100% 40vh'
        }}
        >
            <PageHeader description={description}>
                Tech stack  <span role="img" aria-label="emoji">👨‍💻</span>
            </PageHeader>
            <div 
                className="
                    w-full max-w-4xl
                    min-h-[255px]
                    px-5
                    mt-20
                    mx-auto
                "
            >
                <TechStackSection />
            </div>
        </div>
    )
}
