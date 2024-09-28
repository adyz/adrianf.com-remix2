const sections = [
    {
        title: "Coding",
        description: 'React with Typescript, CSS (SASS, BEM, Tailwind), and HTML'
    },
    {
        title: "Build / DevOps",
        description: 'Webpack, NPM, Travis, Git, Docker'
    },
    {
        title: "Server side",
        description: 'Node.js (Express.js, Remix)'
    },
    {
        title: "Design",
        description: `Familiar with Photoshop, Sketch, Figma, etc and I also like to design web apps or features in existing apps that I work on from time to time`
    },
    {
        title: "Used in the past",
        description: `Backbone.js, Angular.js, Vue.js, jQuery, PHP, MySQL, Grunt, Gulp, Cordova`
    },
]

export default function TechStackSection() {
    return (
        <>
        {sections.map((section) => {
            return (
                <section className="mb-8">
                    <h3
                        className="
                            text-lg xl:text-xl
                            uppercase font-bold tracking-widest
                        "
                    >
                        {section.title}
                    </h3>
                    <p 
                        className="
                            text-base xl:text-lg
                            text-colorLightBrown
                        "
                    >
                        {section.description}
                    </p>
                </section>
            )
        })}
        </>
    )
}