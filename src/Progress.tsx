import { useProgressBar } from 'react-aria';
import * as React from 'react';
import styled from '@emotion/styled';

type Props = {
  label?: string;
  showValueLabel?: string;
  value: number;
  minValue?: number;
  maxValue?: number;
};

const Gutter = styled.div`
  height: 10px;
  background: lightgray;
  border-radius: 12px;
`;

const Bar = styled.div<{ width: string }>`
  width: ${({ width }) => width};
  height: 10px;
  background: black;
  border-radius: 12px;
  transition: width .5s cubic-bezier(0, 0.55, 0.45, 1);
`;

export default function Progress(props: Props) {
  let {
    label,
    showValueLabel = !!label,
    value,
    minValue = 0,
    maxValue = 100,
  } = props;
  const { progressBarProps, labelProps } = useProgressBar(props);
  const percentage = (value - minValue) / (maxValue - minValue);
  const barWidth = `${Math.round(percentage * 100)}%`;

  return (
    <div {...progressBarProps} style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {label && <span {...labelProps}>{label}</span>}
        {showValueLabel && <span>{progressBarProps['aria-valuetext']}</span>}
      </div>
      <Gutter>
        <Bar width={barWidth} />
      </Gutter>
    </div>
  );
}
