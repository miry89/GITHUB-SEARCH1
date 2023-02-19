/* eslint-disable max-len */
'use client';
import { keyframes, SxProps } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { ThemeWrapper } from '@/ThemeWrapper';

const ANIMATION = keyframes`0%, 100% {
                              opacity: 1;
                            }
                              50% {
                                opacity: 0.4;
                              }`;
const STYLE: SxProps = {
  position: 'fixed',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  '& > svg': {
    animation: `2.8s ease-in-out 0.5s infinite normal none running ${ANIMATION}`
  }
};

export default function Loading() {
  return (
    <ThemeWrapper>
      <Stack sx={STYLE} position="fixed">
        <CircularProgress variant="indeterminate" size={40} thickness={6} value={100} />
      </Stack>
    </ThemeWrapper>
  );
}
