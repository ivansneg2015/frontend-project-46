import parse from './parsers.js';
import getDiffTree from './getDiffTree.js';
import getFormat from './formatters/index.js';

const genDiff = async (file1Content, file2Content) => {
  try {
    const data1 = parse(file1Content);
    const data2 = parse(file2Content);
    const diffTree = getDiffTree(data1, data2);
    return getFormat(diffTree);
  } catch (error) {
    console.error('Error generating diff:', error);
  }
};

export default genDiff;
