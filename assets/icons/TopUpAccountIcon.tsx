import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

interface TopUpAccountIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const TopUpAccountIcon = ({
  width = 32,
  height = 32,
  color = '#325baf'
}: TopUpAccountIconProps) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32">
      <G transform="translate(-0.094)">
        <Circle 
          cx={16}
          cy={16}
          r={16}
          transform="translate(0.094)"
          fill={color}
        />
        <G transform="translate(9.596 7.899)">
          <Path
            fill="#9ac0fa"
            stroke={color}
            strokeWidth={0.1}
            d="M8.589,5.246l1.431-1.4v6.394a1.149,1.149,0,0,0,2.3,0V3.844l1.43,1.4a1.166,1.166,0,0,0,1.625,0,1.11,1.11,0,0,0,0-1.592L11.981.33a1.166,1.166,0,0,0-1.625,0L6.964,3.653a1.11,1.11,0,0,0,0,1.592A1.167,1.167,0,0,0,8.589,5.246Z"
            transform="translate(-4.635 0)"
          />
          <Path
            fill="#f1f3f4"
            stroke={color}
            strokeWidth={0.1}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.954,11.754a2.757,2.757,0,0,1-2.773,2.734H7.66a2.757,2.757,0,0,1-2.773-2.734,1.142,1.142,0,0,1,2.284,0,.487.487,0,0,0,.489.482h7.521a.487.487,0,0,0,.489-.482,1.142,1.142,0,0,1,2.284,0Z"
            transform="translate(-4.887 1.768)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default TopUpAccountIcon;