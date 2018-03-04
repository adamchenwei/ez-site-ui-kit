
function getWindow() {
  const window = window || null;
  const cachedWindow = window || null;
  console.log('cachedWindow');
  console.log(cachedWindow);
  return cachedWindow;
}

export default getWindow;
