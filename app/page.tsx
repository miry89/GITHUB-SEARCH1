'use client';
import { RepositoriesTable } from '@/RepositoriesTable';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { SearchInput } from '@/SearchInput';
import { SearchAction } from '@/SearchAction';

export default function MainPage() {
  return (
    <Container>
      <Box my="20px">
        <SearchInput />
        <SearchAction />
      </Box>

      <RepositoriesTable />
    </Container>
  );
}
