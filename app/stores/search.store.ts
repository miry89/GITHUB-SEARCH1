import { Octokit } from '@octokit/core';
import { action, makeObservable, observable } from 'mobx';
import { RowType } from '~/types/row.type';
import { RowPerPageType } from '~/types/rowPerPage.type';

const octokit = new Octokit({
  auth: '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'
});

class SearchStore {
  search = '';
  page = 0;
  rows: RowType[] = [];
  total = 0;
  rowsPerPage: RowPerPageType = 10;

  constructor() {
    makeObservable(this, {
      search: observable,
      rows: observable,
      page: observable,
      total: observable,
      rowsPerPage: observable,
      setSearch: action,
      setRows: action,
      setTotal: action,
      setPage: action,
      setRowsPerPage: action
    });
  }

  get isEmpty(): boolean {
    return !this.search;
  }

  setSearch = (value = '') => {
    this.search = value;
  };
  setTotal = (value = 0) => {
    this.total = value;
  };
  setPage = (value = 1) => {
    this.page = value;
    void this.loadData();
  };
  setRows = (value: RowType[] = []) => {
    this.rows = value;
  };
  setRowsPerPage = (value: RowPerPageType = 10) => {
    this.rowsPerPage = value;
  };
  loadData = async () => {
    const { data } = await octokit.request('GET /search/code', {
      q: `q=${this.search}`,
      sort: 'indexed',
      order: 'desc',
      per_page: this.rowsPerPage,
      page: this.page
    });
    const { items, total_count } = data;
    const rows: RowType[] = items.map<RowType>(({ repository }) => {
      const { id, owner, description = '', name: repo, languages_url } = repository;
      return {
        id,
        owner: owner.login,
        avatar: owner.avatar_url,
        createAt: '?',
        description,
        updateAt: '?',
        repo,
        language: languages_url
      };
    });
    this.setRows(rows);
    this.setTotal(total_count);
  };
  onClickSearchAction = () => {
    void this.loadData();
  };
}

export const searchStr = new SearchStore();
