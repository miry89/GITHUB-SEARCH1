import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { ChangeEvent, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { searchStr } from '~/stores/search.store';
import { RowPerPageType } from '~/types/rowPerPage.type';

interface Column {
  id: 'owner' | 'repo' | 'description' | 'avatar' | 'createAt' | 'updateAt' | 'language';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: readonly Column[] = [
  { id: 'owner', label: 'Owner Name', minWidth: 170 },
  { id: 'repo', label: 'Repo Name', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 170 },
  { id: 'avatar', label: 'Avatar', minWidth: 170 },
  { id: 'createAt', label: 'Create At', minWidth: 170 },
  { id: 'updateAt', label: 'Update At', minWidth: 170 },
  { id: 'language', label: 'Language', minWidth: 170 }
];

/*const rows = [
  {
    owner: '1',
    repo: '2',
    description: '3',
    avatar: '4',
    createAt: '5',
    updateAt: '6',
    language: '7'
  }
];*/
const ROWS_PER_PAGE_OPTIONS: RowPerPageType[] = [10, 25, 50, 100];

const Pagination = observer(function () {
  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    searchStr.setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    searchStr.setRowsPerPage(+event.target.value as RowPerPageType);
    searchStr.setPage(0);
  }, []);

  return (
    <TablePagination
      rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
      component="div"
      count={searchStr.total} // TODO Observable
      rowsPerPage={searchStr.rowsPerPage} // TODO Computed
      page={searchStr.page} // TODO Observable
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
});

const TableDataBody = observer(function () {
  return (
    <TableBody>
      {searchStr.rows.map((row) => {
        return (
          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
            {columns.map((column) => {
              const value = row[column.id];
              return (
                <TableCell key={column.id} align={column.align}>
                  {value}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
});

export function RepositoriesTable() {
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableDataBody />
        </Table>
      </TableContainer>
      <Pagination />
    </Paper>
  );
}
