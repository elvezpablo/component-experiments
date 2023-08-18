import * as React from 'react';
import styled from '@emotion/styled';
import { SerializedStyles } from '@emotion/serialize';
import { useTooltip } from './useTooltip';

type Props = {
  children: React.ReactNode;
  styles?: SerializedStyles;
};

const LinkContainer = styled.div`
  width: 16px;
  height: 16px;
`;

const Link = () => (
  <LinkContainer>
    <svg viewBox="0 0 24 24" role="presentation" fill="none">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M10 14a3.499 3.499 0 0 0 5 0l4-4a3.536 3.536 0 0 0-5-5l-.5.5M14 10a3.501 3.501 0 0 0-5 0l-4 4a3.535 3.535 0 1 0 5 5l.5-.5"
      />
    </svg>
  </LinkContainer>
);

export default function Copyable({ children, styles }: Props) {
  const Container = React.useMemo(() => {
    return styled.div`
    font-family: DM Mono;
    display: inline-flex;
    color: red;
    :hover {
      text-decoration: underline;
      cursor: pointer;
    }
  ${styles} 
`;
  }, [styles]);
  const tooltip = useTooltip();
  return (
    <>
    {tooltip.open && <div ref={tooltip.refs}>tip</div>}
    <Container>
      {children}
      <Link />
    </Container>
    </>
  );
}
