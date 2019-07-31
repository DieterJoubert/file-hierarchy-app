import React, { Component } from 'react'

class TreeNode extends Component {  
  state = {
    childrenVisible: true
  }

  onClick(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      childrenVisible: !this.state.childrenVisible
    })
  }

  render() {

    let childNodes = Object.keys(this.props.data).map(function(key, index) {
        return (
            <TreeNode key={key} name={key} data={this.props.data[key]}/>
        )
    }, this);

    return (
      <div>
        <div className={"node " + (childNodes.length ? "has-children" : "")} onClick={(e) => {this.onClick(e)}}>
          <span className="node-icon ">
            {childNodes.length ? (this.state.childrenVisible ? "- " : "+ ") : ""}
          </span>
          {this.props.name}
        </div>
        {this.state.childrenVisible && childNodes.length > 0 && 
          <div className="node-children-container">
            {childNodes}
          </div>
        }
      </div>
    )
  }
}

export default TreeNode