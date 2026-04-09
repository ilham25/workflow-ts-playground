export const createQueryKeyFactory = <TEntity extends string>(
  entity: TEntity,
) => ({
  all: [entity],
  lists: () => [entity, "list"],
  list: (filters?: Record<string, unknown>) =>
    [entity, "list", filters].filter(Boolean),
  details: () => [entity, "detail"],
  detail: (id: string | number) => [entity, "detail", id],
  infinite: (filters?: Record<string, unknown>) =>
    [entity, "infinite", filters].filter(Boolean),
});
