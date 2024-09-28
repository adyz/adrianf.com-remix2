import { useRef, ReactNode } from "react";

export function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    const val = Math.floor(Math.random() * (max - min + 1)) + min;
    let currentRandom = null
    if(val === currentRandom) {
      return getRandomInt(min, max)
    } else {
      currentRandom = val
      return val
    }    
}

export default function PageHeader({ description, children }: {
  description?: string;
  children: ReactNode;
}) {
  const {current: image} = useRef(`https://adrianf.com/images/responsive-headers/${getRandomInt(1, 8)}-m.jpg`);
  const {current: resizedImage} 
    = useRef(`https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,g_center,h_640,w_824,q_45/${image}`);
  const {current: resizedImageMobile} 
    = useRef(`https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,g_center,h_640,w_412,q_30/${image}`);
    return (
        <div 
          className="
            w-full
            pt-10 sm:pt-20
          "
        >
          <div 
            className="
              w-full max-w-4xl
              min-h-[255px]
              px-5
              mt-20
              mx-auto
              flex
              items-center
            "
          >
              <div 
                className="
                    w-4/6
                    pr-10
                "
              >
                <h1
                  className="
                    text-3xl md:text-4xl lg:text-5xl
                    font-serif
                    flex
                  "
                >
                  {children}
                </h1>
                <div className="w-14 h-[3px] bg-colorBrown mt-2"></div>
                <p
                  className="
                    text-lg md:text-2xl lg:text-3xl
                    leading-snug
                    mt-5
                  "
                >
                  {description}
                </p>
              </div>

              <div 
                className="
                    w-2/6
                    bg-transparent
                "
              >
                <picture>
                  <source width="100%" height="100%" media="(max-width: 799px)" srcSet={resizedImageMobile} />
                  <source width="100%" height="100%" media="(min-width: 800px)" srcSet={resizedImage} />
                  <img
                    className="
                      h-full object-cover rounded-md shadow-md
                      bg-colorBorder
                      aspect-[4/6]
                      md:aspect-[5/6]
                    "
                    loading="lazy"
                    width="100%" 
                    height="100%" 
                    src={resizedImage} 
                    alt="This is Random" 
                  />
                </picture>
              </div>
          </div>
        </div>
    )
}