export default function getGridWithId(idsCollection, gridsCollection) {
  if (!idsCollection || !gridsCollection) return [];
  const grids = [];
  idsCollection.forEach((id) => {
    gridsCollection.forEach((grid) => {
      if (grid.gridItemId === id) {
        grids.push(grid);
      }
    });
  });
  return grids;
}
