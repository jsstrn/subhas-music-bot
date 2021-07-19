interface Actions {
  view: string;
  preview: string;
  purchase: string;
}

export const actions = (id: string): Actions => ({
  view: `view:${id}`,
  preview: `preview:${id}`,
  purchase: `purchase:${id}`,
});
