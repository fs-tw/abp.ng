const userKeys = {
  all: ['user'] as const,
  list: (props: {
    filter?: string;
    skipCount?: number;
    sorting?: string;
    maxResultCount: number;
  }) => [...userKeys.all, 'list', props] as const,
};

export { userKeys };
