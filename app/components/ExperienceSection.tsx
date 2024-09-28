import { useState } from "react";
import { Link } from "react-router-dom";

export default function ExperienceSection({ first = false, last = false, home = false, isVisible = false, item, full = false }: any) {

  const [expanded, setExpanded] = useState<boolean>(false);
  const baseLogo = `/images/logos/${item.companyLogo}.jpg`;
  const fullLogo = `https://adrianf.com${baseLogo}`;
  const cloudinaryLogo = `https://res.cloudinary.com/adrianf/image/fetch/f_auto,h_400,w_400,q_60/${fullLogo}`
  return (
    <section
      className={`
        flex flex-col relative mb-20
          ${home ? 'home ' : ''} 
          ${isVisible ? 'isVisible' : ''}
          ${first ? 'isFirst' : ''}
          ${last ? 'isLast' : ''}
          `}
    >
      <div>
        <img className="rounded-lg w-16 h-16 bg-colorWhite shadow-md float-right relative z-30" width="100%" loading="lazy" height="100%" alt={`Logo of ${item.company}`} src={cloudinaryLogo} />
        <div>
          {full ? (
            <p className="text-colorBrown text-sm md:text-lg xl:text-xl uppercase font-bold tracking-widest">{item.title}</p>
          ) : (
            <Link className="text-colorBrown text-sm md:text-lg xl:text-xl uppercase font-bold tracking-widest block pt-5" to={`./${item.companyLogo}`}>{item.title}</Link>
          )}
          <div className="w-12 h-[2px] bg-colorBrown mt-1"></div>
        </div>

        <p className="text-colorLighterBrown text-base mt-5">{item.company}</p>
        <p className="text-colorLighterBrown text-base">
          {item.period.start} -{" "}
          {item.period.end}
        </p>
        <p className="text-colorLighterBrown text-base">{item.location}</p>
      </div>
      <div className="text-colorLightBrown text-base sm:text-xl md:text-2xl mt-8 w-10/12">
        <p>
          {item.intro}
        </p>
      </div>

      {!full && (
        <>

          {/* Vertical line */}
          {isVisible &&
            <div className="h-10 w-0.5 absolute z-10 top-0 right-8 bg-gradient-to-b from-colorSuperLighterBrown to-colorRed animate-dropFade" />
          }
          <div className="h-[calc(100%+3rem)] w-0.5 bg-colorSuperLighterBrown absolute top-10 right-8" />

          {/* Dot */}
          <div className="h-2.5 w-2.5  z-20 rounded-full absolute -bottom-10 right-7 bg-colorSuperLighterBrown" />
          {isVisible &&
            <div className="h-2.5 w-2.5  z-20 rounded-full absolute -bottom-10 right-7 bg-colorRed opacity-0 animate-fadeInOut" />
          }
          
        </>
      )}

      {(full || expanded) && <div className="mt-10 mb-5">
        {item.milestones && (
          <div className="mb-10">
            <p className="text-colorBrown text-sm xl:text-lg uppercase font-bold tracking-widest">Milestones: </p>
            <ul className="text-colorLightBrown text-base md:text-lg mt-1 w-5/6">
              {item.milestones.map((mile: any, mileI: any) => {
                return (
                  <li key={`mile-${mileI}`}>
                    {item.milestones.length > 1 && (<p>{mile.title}</p>)}
                    <ul>
                      {mile.items.map((subMile: any, submileI: any) => {
                        return (
                          <li key={`submile-${submileI}`}>{subMile}</li>
                        )
                      })}
                    </ul>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        {item.technologies.length > 0 && (
          <div>
            <p className="text-colorBrown text-sm md:text-lg uppercase font-bold tracking-widest">Used: </p>
            <ul className="text-colorLightBrown text-base md:text-lg mt-1 w-5/6">
              {item.technologies.map((tech: any, techI: any) => {
                return <li className="inline" key={`tech-${techI}`}>{tech}{techI === item.technologies.length - 1 ? '' : ','} </li>
              })}
            </ul>
          </div>
        )}
      </div>
      }
      {!full && 
        <button
          className="text-left text-colorBrown text-xs md:text-base uppercase font-bold tracking-widest mt-2" 
          title={`Read more about my experience with ${item.company}`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      }
    </section>
  )
}