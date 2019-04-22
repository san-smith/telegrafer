export const makeInlineQuery = (query: string, offset?: string) => (
{ update_id: 0,
  callback_query: {
    id: '0',
    from: {
      id: 0,
      is_bot: false,
      first_name: 'Test',
      username: 'Test',
    },
    query,
    offset,
  },
});
