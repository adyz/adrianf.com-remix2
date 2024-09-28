import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader"
import SayHi from "../components/SayHi"
import SocialLinks from "../components/SocialLinks"
import {getSocialMetas} from '../utils/seo/meta';

export const meta: MetaFunction = ({location}) => {
    return [{
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Contact",
        description: "It's always nice to say hi! Email me or get in touch with me via social platforms",
        keywords: "contact me, say hi, greeting, html, css, js, typescript, remix, react, romania, bucharest front-end development"
      })
    }]
  };

export default function Page() {
    const description = `It's always nice to say hi! Email me or get in touch with me via social platforms`;
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
                <SayHi />
            </PageHeader>
            <div 
                className="
                    w-full max-w-4xl
                    min-h-[255px]
                    px-5
                    mt-10
                    mx-auto
                    pb-20
                "
            >

                <p className="text-xl md:text-2xl">
                    Email: <a href="mailto:hi@adrianf.com">hi@adrianf.com</a>
                </p>

                <h3 className="text-xl md:text-2xl mt-20 mb-5">I&apos;d be happy to connect with you via social platforms</h3>

                <SocialLinks />
            </div>
        </div>
    )
}


