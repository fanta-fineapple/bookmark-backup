import axios from "axios";
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';

const api = axios.create({
  baseURL: `${PROXY}/ttb/api/`
});

export const bookApi = {
  info: (isbn) => 
    api.get("ItemLookUp.aspx", { 
      params: {
        ttbkey: 'ttbdas19051700001',
        itemIdType: 'ISBN13',
        ItemId: isbn,
        output: 'js',
        Version: 20131101
      }
    }),
  search: (term, page) =>
    api.get("ItemSearch.aspx", {
      params: {
        ttbkey: 'ttbdas19051700001',
        Query: term,
        QueryType: 'Title',
        MaxResults: 10,
        start: page,
        SearchTarget : 'Book',
        output: 'js',
        Version: 20131101
      }
    })
};

