import { observer } from 'mobx-react-lite';
import { searchStr } from '~/stores/search.store';
import Button from '@mui/material/Button';

export const SearchAction = observer(function () {
  return (
    <Button sx={{ ml: '10px' }} disabled={searchStr.isEmpty} onClick={searchStr.onClickSearchAction}>
      Search
    </Button>
  );
});
