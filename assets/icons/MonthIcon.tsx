import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type CheckIconProps = {
  width?: number;
  height?: number;
  color?: string;
};

const MonthIcon = ({
  width = 64,
  height = 64,
  color = '#1C1B1F',
}: CheckIconProps) => (
  <Svg width={width} height={height} viewBox='0 0 64 64'>
    <Path
      fill={color}
      d='M11.982 56c-1.075 0-2.008-.397-2.798-1.19C8.394 54.017 8 53.08 8 52V16c0-1.08.395-2.017 1.184-2.81.79-.793 1.723-1.19 2.798-1.19h3.384V8h4.18v4h19.908V8h4.18v4h3.384c1.075 0 2.008.397 2.798 1.19.79.793 1.184 1.73 1.184 2.81v36c0 1.08-.395 2.017-1.184 2.81-.79.793-1.723 1.19-2.798 1.19H11.982Zm0-4h35.036V26.8H11.982V52Zm0-29.2h35.036V16H11.982v6.8Z'
    />
  </Svg>
);

export default MonthIcon;
