import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";

import "./tailwind.css";
import Header from "./components/Header/Header";
import { getCookie } from "./utils/cookie";
import { COLOR_MODE_KEY } from "./constants";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    type: "image/png",
    href: "favicon.png",
  }
];

export const loader: LoaderFunction = (props) => {
  const realCookieString = props.request.headers.get('cookie');
  const cookieString = realCookieString ? realCookieString : '';
  const colorMode = getCookie(COLOR_MODE_KEY, cookieString);


  return json({ colorMode: colorMode ? colorMode : 'unset' });
};

export function Layout({ children }: { children: React.ReactNode }) {
    const profileImage = `http://adrianf.com/images/profile.jpeg`;
  const resizedProfileImage = `https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,h_800,w_800,q_60/${profileImage}`
  const resizedProfileImageMobile = `https://res.cloudinary.com/adrianf/image/fetch/f_auto,c_fill,h_200,w_200,q_60/${profileImage}`
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer className="text-center pb-4">
          <div className="flex items-center justify-center relative pt-10 pb-5">
            <picture
              className="
              rounded-full 
              overflow-hidden
              w-16
              h-16
              hover:scale-150
            "
            >
              <source width="100%" height="100%" media="(max-width: 799px)" srcSet={resizedProfileImageMobile} />
              <source width="100%" height="100%" media="(min-width: 800px)" srcSet={resizedProfileImage} />
              <img
                width="100%"
                height="100%"
                src={resizedProfileImage}
                alt="Adrian Florescu"
              />
            </picture>
          </div>
          <div className="text-colorLightBrown">
            <p className="text-sm m-0"> © {new Date().getFullYear()} Designed &amp; Coded by <strong className="font-semibold">Adrian Florescu</strong></p>
            <p className="text-sm m-0">
              Developed on <a target="_blank" title="Remix" rel="noreferrer" href="https://remix.run">
                <svg width="1200" height="627" viewBox="0 0 1200 627" className="h-10 w-auto inline -mx-3 -mt-0.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="1200" height="627" />
                  <g className="fill-colorBrown">
                    <path fillRule="evenodd" clipRule="evenodd" d="M378.744 361.947C380.387 383.214 380.387 393.183 380.387 404.065H331.558C331.558 401.694 331.6 399.526 331.642 397.327C331.774 390.492 331.912 383.365 330.813 368.971C329.361 347.899 320.356 343.216 303.798 343.216H289.128H227V304.876H306.122C327.037 304.876 337.494 298.464 337.494 281.489C337.494 266.563 327.037 257.517 306.122 257.517H227V220H314.836C362.186 220 385.716 242.536 385.716 278.535C385.716 305.461 369.158 323.021 346.79 325.948C365.672 329.753 376.71 340.582 378.744 361.947Z" />
                    <path d="M227 404.065V375.483H278.63C287.254 375.483 289.126 381.929 289.126 385.772V404.065H227Z" />
                    <path d="M967.943 275.524H919.548L897.523 306.474L876.079 275.524H824.206L870.862 339.467L820.148 405.745H868.544L894.336 370.416L920.127 405.745H972L920.996 337.423L967.943 275.524Z" />
                    <path d="M663.111 297.105C657.604 281.922 645.723 271.411 622.829 271.411C603.413 271.411 589.503 280.171 582.548 294.477V274.915H535.602V405.135H582.548V341.193C582.548 321.631 588.054 308.784 603.413 308.784C617.613 308.784 621.091 318.127 621.091 335.938V405.135H668.037V341.193C668.037 321.631 673.253 308.784 688.902 308.784C703.102 308.784 706.29 318.127 706.29 335.938V405.135H753.236V323.383C753.236 296.229 742.804 271.411 707.159 271.411C685.425 271.411 670.066 282.506 663.111 297.105Z" />
                    <path d="M486.716 354.599C482.369 364.818 474.255 369.197 461.504 369.197C447.304 369.197 435.712 361.606 434.553 345.547H525.258V332.409C525.258 297.08 502.365 267.298 459.185 267.298C418.904 267.298 388.766 296.788 388.766 337.956C388.766 379.416 418.325 404.526 459.765 404.526C493.961 404.526 517.724 387.884 524.389 358.102L486.716 354.599ZM435.133 322.773C436.871 310.51 443.537 301.167 458.606 301.167C472.516 301.167 480.05 311.094 480.63 322.773H435.133Z" />
                    <path d="M768.592 275.78V406H815.538V275.78H768.592ZM768.302 263.517H815.828V222.056H768.302V263.517Z" />
                  </g>
                </svg>


              </a> and styled with <a target="_blank" title="Tailwind CSS" rel="noreferrer" href="https://tailwindcss.com/">
                <svg viewBox="0 0 248 31" className="w-auto h-3.5 inline">
                  <path fillRule="evenodd" clipRule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path>
                  <path className="fill-colorBrown" fillRule="evenodd" clipRule="evenodd" d="M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z"></path>
                </svg>

              </a>
            </p>
            <p className="text-[10px] m-0" ><small>Latest update: 29 September 2024</small></p>
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
