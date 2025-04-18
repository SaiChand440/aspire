import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

interface DebitCardProps {
  color?: string;
}

const DebitCardIcon = ({ color = '#000' }: DebitCardProps) => (
  <Svg width={24} height={18.075} viewBox="0 0 24 18.075">
    <G transform="translate(0 -90.333)">
      <G transform="translate(0 98.333)">
        <Path
          fill={color}
          d="M23.5,213.333H.5a.474.474,0,0,0-.5.5v7.053a2.485,2.485,0,0,0,2.5,2.519h19a2.485,2.485,0,0,0,2.5-2.519v-7.053A.474.474,0,0,0,23.5,213.333Zm-20,4.03h4a.5.5,0,0,1,0,1.008h-4a.5.5,0,0,1,0-1.008Zm7,3.023h-7a.5.5,0,0,1,0-1.008h7a.5.5,0,0,1,0,1.008Zm8.5,0a1.68,1.68,0,0,1-1-.3,1.68,1.68,0,0,1-1,.3,2.015,2.015,0,0,1,0-4.03,1.68,1.68,0,0,1,1,.3,1.68,1.68,0,0,1,1-.3,2.015,2.015,0,0,1,0,4.03Z"
          transform="translate(0 -213.333)"
        />
      </G>
      <G transform="translate(0 90.333)">
        <Path
          fill={color}
          d="M21.5,85.333H2.5c-1.4,0-2.5,1.378-2.5,3.132v1.253c0,.376.2.626.5.626h23c.3,0,.5-.251.5-.626V88.465C24,86.711,22.9,85.333,21.5,85.333Z"
          transform="translate(0 -85.333)"
        />
      </G>
    </G>
  </Svg>
);

export default DebitCardIcon;