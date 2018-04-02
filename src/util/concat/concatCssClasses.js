export default function concatCssClasses(classesAsArray) {
  if (!classesAsArray || !classesAsArray.length) return '';

  let finalClasses = ' ';
  classesAsArray.forEach((item) => {
    finalClasses = `${finalClasses} ${item}`;
  });
  finalClasses = `${finalClasses} `;
  return finalClasses;
}
