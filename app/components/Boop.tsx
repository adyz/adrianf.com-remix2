import React from "react"
import useBoop from '../hooks/useBoop';
import {animated} from '@react-spring/web';

const Boop = ({ children, ...boopConfig }: any) => {
    const [style, trigger] = useBoop(boopConfig);
    return (
      // @ts-ignore
      <animated.div onMouseEnter={trigger} style={style}>
        {children}
      </animated.div>
    );
  };

  export default Boop;