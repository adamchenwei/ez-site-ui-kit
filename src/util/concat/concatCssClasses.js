export default function concatCssClasses(classesAsArray) {
  if (!classesAsArray || !classesAsArray.length ) return '';

  let finalClasses = ' ';
  classesAsArray.forEach((item, index) => {
    finalClasses = `${finalClasses} ${item}`;
  });
  finalClasses = `${finalClasses} `;
  return finalClasses;
}
