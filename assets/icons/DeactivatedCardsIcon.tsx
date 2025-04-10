import * as React from 'react';
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';

interface DeactivatedCardsIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const DeactivatedCardsIcon = ({
  width = 32,
  height = 32,
  color = '#325baf'
}: DeactivatedCardsIconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 32 32">
          <G transform="translate(213 -305)">
            <Circle 
              cx={16}
              cy={16}
              r={16}
              transform="translate(-213 305)"
              fill={color}
            />
            <Path
              fill="#9ac0fa"
              d="M8,0a8,8,0,1,0,8,8A8.009,8.009,0,0,0,8,0ZM2,8A5.961,5.961,0,0,1,3.115,4.529l8.356,8.356A5.99,5.99,0,0,1,2,8Zm10.885,3.471L4.529,3.115a5.991,5.991,0,0,1,8.356,8.356Z"
              transform="translate(-205 313)"
            />
            <Rect
              fill="#f1f3f4"
              width={11.8}
              height={2}
              transform="translate(-200.486 316.1) rotate(45)"
            />
          </G>
        </Svg>
      );
};

export default DeactivatedCardsIcon;