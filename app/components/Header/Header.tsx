import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'

import Logo from "./Logo";
import Switch from "./Switch";
import SwitchBase from "./SwitchBase";
import soundToggle from "../../sounds/switch.wav"
import { COLOR_MODE_KEY } from '../../constants';
import type { TColorMode } from '../../constants';
import { setCookie } from '../../utils/cookie';
import { useLoaderData, useNavigation, useLocation, Link } from '@remix-run/react';
import { loader as rootLoader } from '~/root';

function replaceAll(originalString: string, find: string, replace: string) {
  return originalString.replace(new RegExp(find, 'g'), replace);
}

function useSound(sound: string, options: {
  volume: number;
}) {
  return [
    () => {    
      const audio = new Audio(sound);
      audio.volume = options.volume;
      audio.play();
    }
  ];
}


const darkVars = `
  --colorBorder: #3a3a30;
  --colorBrown: #F5EFB9;
  --colorLightBrown: #9F9C7D;
  --colorLighterBrown: #716E59;
  --colorSuperLighterBrown: #525040;
  --colorBg: #434238;
  --colorRed: #9F9C7D;
  --colorGreen: #52870f;
  --colorWhite: #28281F;
  --colorLogoBody: #6FA68C;
  --colorLogoLeg: #216155;
  --colorLogoWing: #74CCA2;
`

const lightVars = `
  --colorBorder: #eeebd8;
  --colorBrown: #543416;
  --colorLightBrown: #865E5E;
  --colorLighterBrown: #AEA092;
  --colorSuperLighterBrown: #E7D7C8;
  --colorBg: #fffdef;
  --colorRed: #e95d5d;
  --colorGreen: #4b7716;
  --colorWhite: #ffffff;
  --colorLogoBody: #6FA68C;
  --colorLogoLeg: #216155;
  --colorLogoWing: #74CCA2;
`

const Header = () => {

  const loaderData = useLoaderData<typeof rootLoader>();
  const navigation = useNavigation();

  const location = useLocation();
  const pathName = replaceAll(location.pathname, '/', '');

  const [isSticky, setSticky] = useState(typeof window !== 'undefined' ? window.scrollY > 0 ? true : false : false);
  const [colorMode, setColorMode] = useState<TColorMode>(loaderData?.colorMode ? loaderData.colorMode : 'unset');
  const [{y }, set] = useSpring(() => ({ x: 0, y: 0 }))
  const [toggled, setToggled] = useState(false);
  const [playToggleSound] = useSound(soundToggle, { volume: 0.5 });


  // Set the drag hook and define component movement based on gesture data
  const bind = useGesture({
    onDrag: function Dragging(state) {
      const { down, movement: [, my] } = state;
      set({ y: down && my < 250 ? my : 0 })
      if (down && my > 50 && !toggled) {
        setToggled(true);
        toggle();
      }
    },
    onDragEnd: function DragEnd() {
      setToggled(false);
    },
    onMouseDown: () => console.log('mouse down')
  })
  useEffect(() => {
    //Sticky header
    window.addEventListener('scroll', handleScroll);
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    prefersDarkScheme.addEventListener('change', setThemeFuncForUserPrefEvent);
    return () => {
      window.removeEventListener('scroll', () => handleScroll);
      prefersDarkScheme.removeEventListener('change', setThemeFuncForUserPrefEvent);
    };
  }, []);

  if (!colorMode) {
    return null;
  }

  function setThemeFuncForUserPrefEvent(e: MediaQueryListEvent) {
    if (e.matches) {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  const handleScroll = () => {
    setSticky(document.body.getBoundingClientRect().top < -2);
  };

  function toggle() {
    console.log('Toggle');
    playToggleSound();


    if (colorMode === 'unset') {
      console.log('color mode unset')
      const { matches: prefersDarkScheme } = window.matchMedia("(prefers-color-scheme: dark)");
      console.log('color mode unset', prefersDarkScheme)
      if (prefersDarkScheme) {
        console.log('Has dark, will switch to light')
        setColorMode('light');
        setCookie(COLOR_MODE_KEY, 'light', 360);
      } else {
        console.log('Has light, will switch to dark')
        setColorMode('dark');
        setCookie(COLOR_MODE_KEY, 'dark', 360);
      }
    }

    if (colorMode === 'dark') {
      setColorMode('light');
      setCookie(COLOR_MODE_KEY, 'light', 360);
    }

    if (colorMode === 'light') {
      setColorMode('dark');
      setCookie(COLOR_MODE_KEY, 'dark', 360);
    }
  }

  const linkStyle = { transition: 'opacity .2s ease', opacity: navigation.state === 'loading' ? '0.4' : '1' }


  const NAV_LINKS = [{
    label: 'Tech Stack',
    link: 'tech-stack'
  },
  {
    label: 'Experience',
    link: 'experience'
  },
  {
    label: 'Thoughts',
    link: 'thoughts'
  },
  {
    label: 'Contact',
    link: 'contact'
  }]


  function LinkItem({ label, link }: { label: string; link: string }) {
    return (
      <Link
        style={linkStyle}
        prefetch="intent"
        className={`
              text-xs sm:text-base lg:text-lg 2xl:text-xl
              text-colorBrown
              tracking-wider
              no-underline 
              py-2 
              px-1.5 sm:px-2 lg:px-6
              rounded-md
              border border-transparent border-solid
              text-center
              flex
              items-center
              hover:bg-colorBorder
              active:bg-colorSuperLighterBrown
              ${(pathName === link || pathName.startsWith(link)) && 'bg-colorBorder'}
            `}
        to={link}
      >
        {label}
      </Link>
    )
  }

  return (
    <>

      {colorMode === 'unset' && (
        <style>
          {`
            @media (prefers-color-scheme: dark) {
              :root {
                ${darkVars}
              }
            }
            
            @media (prefers-color-scheme: light) {
              :root {
                ${lightVars}
              }
            }
            `}
        </style>
      )}

      {colorMode === 'light' && (
        <style>
          {`
            :root {
              ${lightVars}
            }
            html {
              color-scheme: light;
            }
          `}
        </style>
      )}

      {colorMode === 'dark' && (
        <style>
          {`
          html {
            color-scheme: dark;
          }
          :root {
            ${darkVars}
          }
        `}
        </style>
      )}

      <header className={`
        fixed z-40 bg-colorBg
        flex items-center
        w-full
        h-62px
        justify-between
        py-1 md:py-2
        px-2 md:px-8  
        ${isSticky ? ' shadow-md' : 'shadow-sm'}
      `}>
        <Link
          style={linkStyle}
          prefetch="intent"
          className={`
              h-10 md:h-12
              w-12 md:w-20 
              flex rounded-lg 
              justify-center items-center 
              p-0.5 md:p-3
              overflow-hidden
              hover:bg-colorBorder
              active:bg-colorSuperLighterBrown

              ${pathName === '' && 'bg-colorBorder'}`
          }
          title={'Home Link'} to="/"
        >
          <Logo />
        </Link>
        <nav className="flex gap-1">
          {NAV_LINKS.map((currentItem) => {
            return <LinkItem {...currentItem} key={currentItem.link} />
          })}
        </nav>
      </header>

      <div className="
        absolute
        z-20
        top-[-210px] sm:top-[-200px] md:top-[-190px]
        left-8 md:left-[4.5rem]
        flex
        justify-center
        
      ">
        <animated.div
            className="
              absolute
              -top-12
              w-10
              pb-5
              flex
              items-center
              justify-center
              drop-shadow-left-shadow
              select-none
              cursor-grab
              will-change-transform
            " 
            {...bind()} 
            style={{ 
              transform: y ? y.to((y) => `translate3d(0px,${y}px,0)`) : undefined 
            }}
          >
          <Switch />
        </animated.div>

        <div className="absolute">
          <SwitchBase />
        </div>

      </div>

    </>
  )
}


export default Header
