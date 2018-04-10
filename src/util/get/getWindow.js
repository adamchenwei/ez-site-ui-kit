
function getWindow() {
  const window = window || null;//eslint-disable-line
  const cachedWindow = window || null;

  return cachedWindow;
}

export default getWindow;
