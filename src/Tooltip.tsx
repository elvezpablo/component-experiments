import * as React from 'react';
import styled from '@emotion/styled';
import { useMergeRefs } from '@floating-ui/react';
import { TooltipOptions, useTooltip } from './useTooltip';
import { ReactElement, ReactNode, RefAttributes, cloneElement } from 'react';

type Props = {
  label?: ReactNode;
  children: ReactElement;
} & TooltipOptions;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fontFamily};
  color: ${({ theme: { colorScheme, white, black } }) =>
    colorScheme === 'light' ? white : black};
  background-color: ${({ theme: { colorScheme, white, black } }) =>
    colorScheme === 'light' ? black : white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 9px;
`;

export default function Tooltip({ label, children, ...options }: Props) {
  const tooltip = useTooltip(options);
  const childrenRef = (children as RefAttributes<HTMLElement>).ref;
  const ref = useMergeRefs([tooltip.refs.setReference, childrenRef]);

  return (
    <>
      {tooltip.open && (
        <Container
          ref={tooltip.refs.setFloating}
          style={{
            ...tooltip.floatingStyles,
          }}
          {...tooltip.getFloatingProps()}
        >
          {label}
        </Container>
      )}
      {cloneElement(
        children,
        tooltip.getReferenceProps({
          ref,
          ...children.props,
          'data-state': tooltip.open ? 'open' : 'closed',
        })
      )}
    </>
  );
}
