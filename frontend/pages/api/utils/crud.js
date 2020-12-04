export const create = (url, obj) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: obj,
  });

export const read = (url) => fetch(url).then((r) => r.json());

export const update = (url, obj) =>
  fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: obj,
  });

export const deleter = (url) =>
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
