import socialItems from "../data/socialProfiles"
import Boop from './Boop';

const author = 'Adrian Florescu';

const SocialLinks = () => {
    return (
        <div className="flex flex-wrap gap-5">
            {socialItems.map((socialItem, socialItemIndex) => {
                return (
                    <Boop y={2} key={socialItemIndex} >
                        <a
                            rel="noopener"
                            target="_blank"
                            title={`${socialItem.alt} profile ${author}`}
                            href={socialItem.link}
                            className="flex items-center justify-center gap-2"
                        >
                            <span className="flex items-center w-5 h-5 text-colorBrown">
                                <socialItem.icon />
                            </span>
                            <span className="title">{socialItem.title}</span>
                        </a>
                    </Boop>
                )
            })}
        </div>
    )
}


export default SocialLinks