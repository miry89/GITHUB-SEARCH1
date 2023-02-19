import { PropsWithChildren } from 'react';
import { ThemeWrapper } from '@/ThemeWrapper';

export default function Container({ children }: PropsWithChildren) {
  return <ThemeWrapper>{children}</ThemeWrapper>;
}
