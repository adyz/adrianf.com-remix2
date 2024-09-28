import { getRandomInt } from '../../components/PageHeader';

function generateImageMeta(text: string) {
    return `https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,h_630,w_1200/l_text:Arial_38_bold:${text},co_white/https://adrianf.com/images/responsive-headers/${getRandomInt(1, 8)}-m.jpg`
}

export function resizeImage(imagePath: string) {
    return `https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,h_630,w_1200/${imagePath}`
}

export function getSocialMetas({
    url,
    title = 'Front-end development was hard before remix',
    description = 'Better late than too early',
    image = 'false',
    keywords = 'front-end developer',
}: {
    image?: string
    url: string
    title?: string
    description?: string
    keywords?: string
}) {
    const finalImage = image === 'false' ? generateImageMeta(title) : resizeImage(image);
    return {
        title,
        description,
        keywords,
        image: finalImage,
        'og:url': url,
        'og:title': title,
        'og:description': description,
        'og:image': finalImage,
        'twitter:card': finalImage ? 'summary_large_image' : 'summary',
        'twitter:creator': '@aflorescu',
        'twitter:site': '@aflorescu',
        'twitter:title': title,
        'twitter:description': description,
        'twitter:image': finalImage,
        'twitter:alt': title,
    }
}