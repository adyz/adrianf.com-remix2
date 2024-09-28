import { animated } from '@react-spring/web';
import useBoop from '../hooks/useBoop';

const SayHi = () => {
    const [style, trigger] = useBoop({
        rotation: 50,
        timing: 50
    });
    return (
        // @ts-ignore
        <div role="none" onMouseEnter={trigger}>
                Say hi!{" "}
                <animated.span className="inline-flex" style={style}>
                    <span role="img" aria-label="wave emoji">👋</span>
                </animated.span>
        </div>
    )
}

export default SayHi