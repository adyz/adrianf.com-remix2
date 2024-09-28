
function formatDate(date: any) {
    return date.toLocaleString("en-us", { year: "numeric", month: "long" })
}

const articles = [
    {
        title: "Empowering leader habits",
        thumb:
            "https://miro.medium.com/fit/c/1400/420/1*pI-kySRX2Pe3WaB5tyYEJA.jpeg",
        link: "https://medium.com/adrianf-com/4a56cea993be",
        publishDate: formatDate(new Date("Oct 01, 2019")),
    },
    {
        title: "Make use of your own data",
        thumb:
            "https://miro.medium.com/fit/c/1400/420/1*TDBhxR3pG08oMmbtVUzjlA.jpeg",
        link: "https://medium.com/adrianf-com/77f237fb1d9b",
        publishDate: formatDate(new Date("Apr 26, 2018")),
    },
    {
        title: "Boo! Peek-a-boo!",
        thumb:
            "https://miro.medium.com/fit/c/1400/420/1*IzlPHubwKti_ZQXYKWCE0Q.jpeg",
        link: "https://medium.com/vivre-tech/17af2ce75357",
        publishDate: formatDate(new Date("Jun 1, 2016")),
    },
    {
        title: "Youtube desktop app with multimedia keyboard shortcuts",
        thumb:
            "https://miro.medium.com/fit/c/1400/420/1*MJIotlPVMJn9Rwmg1EzRBQ.jpeg",
        link: "https://medium.com/front-end-wtf/f69aad3c5de2",
        publishDate: formatDate(new Date("Feb 26, 2016")),
    },
    {
        title: "6 JavaScript/jQuery plugins I use in almost every project",
        thumb:
            "https://miro.medium.com/fit/c/1400/420/1*I_LnA5coq2ShZrUdpxnsPQ.jpeg",
        link: "https://medium.com/front-end-wtf/70d8c505175d",
        publishDate: formatDate(new Date("Dec 8, 2015")),
    },
    {
        title: "Simple CSS retina sprite with Sass and Compass ",
        thumb:
            "https://miro.medium.com/fit/c/1400/420/1*LUzk4Y1eJ3vEnKTdOfSdAQ.jpeg",
        link: "https://medium.com/front-end-wtf/5e667cdeec3f",
        publishDate: formatDate(new Date("Jun 20, 2014")),
    },
]

export default articles;
