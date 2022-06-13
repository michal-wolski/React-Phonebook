export function FilterContactsByName(contacts, filterContatsByQuery) {
  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterContatsByQuery.toLowerCase())
  );
}
