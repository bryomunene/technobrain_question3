import React, {Component} from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import CheckboxTree from 'react-checkbox-tree';
import ReactDOM from "react-dom";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdChevronRight,
  MdKeyboardArrowDown,
  MdAddBox,
  MdIndeterminateCheckBox,
  MdFolder,
  MdFolderOpen,
  MdInsertDriveFile
} from "react-icons/md";



const nodes = [{
    value: 'salad',
    label: 'Salad',
    children: [
        { value: 'Santa Fe', label: 'Santa Fe' },
        { value: 'Greek', label: 'Greek' },
        { value: 'Asian', label: 'Asian' },
    ],
},
  {
    value: 'Entree',
    label: 'Entree',
    children: [
        { value: 'Steak', label: 'Steak' },
        { value: 'Salmon', label: 'Salmon' },
        { value: 'Rice', label: 'Rice' },
    ],
  },
  {
    value: 'Soup',
    label: 'Soup',
    children: [
        { value: 'Minestrone', label: 'Minestrone' },
        { value: 'Hot and Sour', label: 'Hot and Sour' },
        { value: 'Miso', label: 'Miso' },
    ],
  }
];

class App extends React.Component {

  constructor() {
        super();

        this.state = {
            checked: [],
            expanded: [],
        };
    }



  render() {

    const icons = {
      check: <MdCheckBox className="rct-icon rct-icon-check" />,
      uncheck: <MdCheckBoxOutlineBlank className="rct-icon rct-icon-uncheck" />,
      halfCheck: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-half-check" />
      ),
      expandClose: (
        <MdChevronRight className="rct-icon rct-icon-expand-close" />
      ),
      expandOpen: (
        <MdKeyboardArrowDown className="rct-icon rct-icon-expand-open" />
      ),
      expandAll: <MdAddBox className="rct-icon rct-icon-expand-all" />,
      collapseAll: (
        <MdIndeterminateCheckBox className="rct-icon rct-icon-collapse-all" />
      ),
      parentClose: <MdFolder className="rct-icon rct-icon-parent-close" />,
      parentOpen: <MdFolderOpen className="rct-icon rct-icon-parent-open" />,
      leaf: <MdInsertDriveFile className="rct-icon rct-icon-leaf-close" />
    };
    
 

  return (
    <div className="App">
      <div>
        <h1> Restaurant Menu </h1>
         <CheckboxTree
                nodes={nodes}
                checked={this.state.checked}
                expanded={this.state.expanded}
                onCheck={checked => this.setState({ checked })}
                onExpand={expanded => this.setState({ expanded })}
                icons={icons}
            />
      </div>
    </div>
  );
  }
}

export default App;
