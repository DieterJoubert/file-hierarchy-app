import React from 'react';
import TreeNode from './TreeNode';

const HierarchyTree = ({data}) => {

  let topLevelNodes = Object.keys(data).map(function(key, index) {
    return (
        <TreeNode key={key} name={key} data={data[key]}/>
    )
  });

  return (
    <div className="tree-container">
      {topLevelNodes}
    </div>
  )
}

export default HierarchyTree;