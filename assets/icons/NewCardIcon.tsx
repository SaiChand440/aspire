import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

interface NewCardIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const NewCardIcon = ({
  width = 32,
  height = 32,
  color = '#325baf'
}: NewCardIconProps) => {
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
        <G transform="translate(-206.449 229.666)">
          <Path
            fill="#f1f3f4"
            d="M387.881,300.224h-.79v-.79a.766.766,0,1,0-1.532,0v.79h-.79a.766.766,0,0,0,0,1.532h.79v.79a.766.766,0,0,0,1.532,0v-.79h.79a.766.766,0,0,0,0-1.532Z"
            transform="translate(-370.151 -205.602)"
          />
          <Path
            fill="#9ac0fa"
            d="M15.491,87.852a2.407,2.407,0,0,0-2.281-2.517H2.281A2.407,2.407,0,0,0,0,87.852a.2.2,0,0,0,.187.207H15.3A.2.2,0,0,0,15.491,87.852Z"
            transform="translate(1.449)"
          />
          <Path
            fill="#9ac0fa"
            d="M15.491,202.208v.936a.415.415,0,0,1-.424.436,4.1,4.1,0,0,0-4.138,4.567.422.422,0,0,1-.4.468H2.281A2.407,2.407,0,0,1,0,206.1v-3.89A.2.2,0,0,1,.187,202H15.3A.2.2,0,0,1,15.491,202.208Z"
            transform="translate(1.449 -112.461)"
          />
        </G>
      </G>
    </Svg>
  );
};

export default NewCardIcon;