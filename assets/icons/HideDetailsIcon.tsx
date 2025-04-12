import React from 'react';
import Svg, { Path, G, Defs, Line } from 'react-native-svg';

const HideDetailsIcon = () => {
    return (
        <Svg width={16} height={16} viewBox="0 0 16 16">
          <Defs>
            <Path id="a" d="M0 0h16v16H0z"/>
          </Defs>
          <G transform="translate(-16.588 -90.588)">
            <G transform="translate(16.588 90.588)">
              <Path fill="none" d="M0 0h16v16H0z"/>
              <Path 
                fill="#01d167" 
                stroke="rgba(0,0,0,0)" 
                strokeMiterlimit={10}
                d="M7.333 10A7.822 7.822 0 0 1 2.849 8.6 7.9 7.9 0 0 1 0 5 7.879 7.879 0 0 1 14.666 5a7.9 7.9 0 0 1-2.848 3.6A7.824 7.824 0 0 1 7.333 10Zm0-8.334A3.333 3.333 0 1 0 10.667 5 3.337 3.337 0 0 0 7.333 1.668Z"
                transform="translate(0.667 2.999)"
              />
              <Path 
                fill="#01d167"
                d="M2 0A2 2 0 1 0 4 2 2 2 0 0 0 2 0Z"
                transform="translate(6 6)"
              />
            </G>
            <Line 
              stroke="#01d167"
              strokeLinecap="round"
              strokeWidth={2}
              x1={10.907}
              y2={10.907}
              transform="translate(18.857 92.857)"
            />
          </G>
        </Svg>
      );
};

export default HideDetailsIcon;