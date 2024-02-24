import _ from 'lodash';

const getDiffTree = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const diffTree = sortedKeys.map((key) => {
    if (!_.has(data2, key)) {
      return { key, status: 'removed', value: data1[key] };
    }
    if (!_.has(data1, key)) {
      return { key, status: 'added', value: data2[key] };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { key, status: 'unchanged', value: data1[key] };
    }
    return {
      key,
      status: 'changed',
      oldValue: data1[key],
      newValue: data2[key],
    };
  });

  return diffTree;
};

export default getDiffTree;
