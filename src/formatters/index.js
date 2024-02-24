const getFormat = (diffTree) => {
  const formattedDiff = diffTree.map((node) => {
    switch (node.status) {
      case 'added':
        return `+ ${node.key}: ${node.value}`;
      case 'removed':
        return `- ${node.key}: ${node.value}`;
      case 'changed':
        return `- ${node.key}: ${node.oldValue}\n+ ${node.key}: ${node.newValue}`;
      default:
        return `  ${node.key}: ${node.value}`;
    }
  });

  return `{\n${formattedDiff.join('\n')}\n}`;
};

export default getFormat;
