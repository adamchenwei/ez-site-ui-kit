export default function getGridWithId(idsCollection, gridsCollection) {
  if (!idsCollection || !gridsCollection) return [];
  const grids = [];
  idsCollection.forEach((id, index) => {
    gridsCollection.forEach((grid, index) => {
      if (grid.gridItemId === id) {
        grids.push(grid);
      }
    });
  });
  return grids;
}
