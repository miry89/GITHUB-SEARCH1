import { observer } from 'mobx-react-lite';
import { ChangeEvent, useCallback } from 'react';
import { searchStr } from '~/stores/search.store';
import TextField from '@mui/material/TextField';

export const SearchInput = observer(function () {
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    searchStr.setSearch(e.target.value);
  }, []);
  return <TextField value={searchStr.search} label="Search" onChange={onChange} />;
});
