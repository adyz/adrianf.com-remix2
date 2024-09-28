import PageHeader from "../../components/PageHeader";
import type {LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import ExperienceSection from "~/components/ExperienceSection";
import experience from '../../data/experience';
import { useLoaderData } from '@remix-run/react';
import { getSocialMetas } from '../../utils/seo/meta';


export const loader: LoaderFunction = ({ params }) => {
    const myExperience = experience.find(ex => {
        if (ex.companyLogo === params.slug) {
            return ex
        }
    });
    if (myExperience) {
        return json(myExperience)
    } else {
        return new Response('No page found', {
            status: 404
        });
    }

}

export const meta: MetaFunction<typeof loader> = ({ data, location }) => {
    return [{
        ...getSocialMetas({
            url: location.pathname,
            title: `Adrian Florescu - Experience @${data.company}`,
            description: `My perspective on working with ${data.company} as a front-end developer`,
            keywords: `${location.pathname}, adrian, adrian florescu, career, resume, florescu, experience, html, css, js, typescript, remix, react, romania, bucharest, front-end development`
        })
    }]
};


export default function ExperiencePage() {
    const data = useLoaderData<typeof loader>()
    return (
        <>
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
                <PageHeader>
                    Experience @ {data.company}
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
                    <ExperienceSection full={true} item={data} />
                </div>
            </div>
        </>
    )
}