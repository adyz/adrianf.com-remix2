
import { json } from '@remix-run/node';
import type {MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import ExternalLinkIcon from '../components/ExternalLinkIcon';
import PageHeader from "../components/PageHeader"
import articles from '../data/articles';
import {getSocialMetas} from '../utils/seo/meta';

export const loader = () => {
    return json(articles)
}

export const meta: MetaFunction = ({location}) => {
    return [{
      ...getSocialMetas({
        url: location.pathname,
        title: "Adrian Florescu - Thoughts",
        description: "I write from time to time. Read my thoughts to know me better",
        keywords: "blog, articles, adrian, florescu, thoughts, front-end development"
      })
    }]
  };



export default function Page() {
    const data = useLoaderData<typeof loader>()
    const description = `I write from time to time. Read my thoughts to know me better`;
    
    return (
        <div
        className="
                min-h-screen
                border-b border-solid border-colorBorder
                bg-gradient-to-b from-colorSuperLighterBrown to-colorBg bg-no-repeat
                flex
                flex-col
                justify-center
                flex-wrap
        "
        style={{
            backgroundPosition: '0 40px',
            backgroundSize: '100% 40vh'
        }}
        >

            <PageHeader description={description}>
                Thoughts <span role="img" aria-label="emoji">🤯</span>
            </PageHeader>
            <div 
                className="
                    w-full max-w-4xl
                    min-h-[255px]
                    px-5
                    mt-20
                    mx-auto
                    pb-20
                "
            >

                <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                    {data && data.length > 0 && data.map((article: typeof data[number], articleIndex: number) => {
                        const articleImgRes =`https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,g_center,h_420,w_1400,q_30/${article.thumb}`
                        return (
                            <a
                                key={articleIndex}
                                href={article.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className="shadow-md rounded-md bg-colorWhite hover:shadow-lg"
                            >
                                <img className="rounded-t-md bg-colorBorder aspect-[10/3]" width="100%" height="100%" src={articleImgRes} loading="lazy" alt={article.title} />
                                <span className="p-5 block">
                                    <span className="float-right text-colorBrown">
                                        <ExternalLinkIcon />
                                    </span>
                                    <span className="text-lg text-colorBrown block">{article.title}</span>
                                    <span className="text-xs text-colorLightBrown">
                                        {article.publishDate}
                                    </span>
                                </span>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}