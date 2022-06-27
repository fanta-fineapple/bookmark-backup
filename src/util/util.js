export const authorSlice = (author) => {
  const findIdx = author.indexOf('(');
  return author.slice(0, findIdx);
}

export const titleTagDel = (title) => {
  const newText = title.replace(/<[^>]*>?/g, '');
  return newText;
}

export const isbnSlice = (isbn) => {
  const newIsbn = isbn.split(' ')[1];
  return newIsbn;
}
