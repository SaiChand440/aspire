import * as React from 'react';
import Svg, { G, Path, Rect } from 'react-native-svg';

interface PaymentsProps {
  color?: string;
}

const PaymentsIcon = ({ color = '#ddd' }: PaymentsProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24">
    <G transform="translate(-2 4)">
      <Rect width={24} height={24} transform="translate(2 -4)" fill="rgba(255,255,255,0)" />
      <G transform="translate(-21.169 -14)">
        <Path
          fill={color}
          d="M35.169,10A11.837,11.837,0,0,0,23.5,22,11.838,11.838,0,0,0,35.167,34a11.33,11.33,0,0,0,6.651-2.2c.5-.473.811-.529.811-1.041l.007-.1a1.075,1.075,0,0,0-1.06-1.09,1.026,1.026,0,0,0-.764.343,9.322,9.322,0,0,1-5.633,1.9,9.7,9.7,0,0,1-9.563-9.833,9.567,9.567,0,1,1,19.127,0,10.009,10.009,0,0,1-.921,4.19,9.724,9.724,0,0,0-.49,1.185l-.007.1a1.078,1.078,0,0,0,1.063,1.092,1.054,1.054,0,0,0,1-.776l0,0A12.189,12.189,0,0,0,46.836,22,11.835,11.835,0,0,0,35.169,10ZM28.653,20.7a1.045,1.045,0,0,0,.3.676,1.026,1.026,0,0,0,.676.3h0a.791.791,0,0,0,.108,0l10.8,0a1.033,1.033,0,1,0,0-2.067l-8.437.012,1.222-1.234a1,1,0,0,0-1.413-1.413l-2.956,2.983a.988.988,0,0,0-.289.632l-.007,0a.654.654,0,0,0,0,.11ZM36.9,27.591a1,1,0,0,0,1.416,0l2.958-2.978a1,1,0,0,0,.289-.629l.007,0s0-.073,0-.108h0a1.039,1.039,0,0,0-.3-.673,1.05,1.05,0,0,0-.676-.3h0a.791.791,0,0,0-.108,0l-10.8,0a1.031,1.031,0,1,0,0,2.062l8.439-.012-1.222,1.237A.987.987,0,0,0,36.9,27.591Z"
          transform="translate(0 0)"
        />
      </G>
    </G>
  </Svg>
);

export default PaymentsIcon;