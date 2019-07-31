import React, { Component } from 'react';
import HierarchyTree from './HierarchyTree'

class App extends Component {
  dataQueryUrl = 'https://raw.githubusercontent.com/hyperscience/interview-problems/master/treePaths.json'

  state = {
    data: {}
  }

  componentDidMount() {
    fetch(this.dataQueryUrl)
    .then(res => res.json())
    .then((data) => {
      let parsedData = this.parseData(data);
      this.setState({
        data: parsedData
      })
    })
    .catch(console.log)
  }

  parseData(dataObject) {
    let dataDict = {};

    dataObject.data.forEach(function(path) {
      let pathNodes = path.split("/").filter(node => {return node !== ""});

      let curr = dataDict; //current node for traversal, start at root

      pathNodes.forEach(function(node) {
        if (!curr.hasOwnProperty(node)) {
          curr[node] = {};
          curr = curr[node];
        }
        else {
          curr = curr[node];
        }
      })
    })

    return dataDict;
  }

  render() {
    return (
      <div className="file-hierarchy-app">
        <h1 className="file-hierarchy-title">File Hierarchy</h1>
        <HierarchyTree data={this.state.data} />
      </div>
    );
  }
}

export default App;