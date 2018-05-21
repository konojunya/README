#!/usr/bin/env node

const { h, render, Component, Color } = require("ink");
const QuickSearch = require('ink-quicksearch');
const opn = require('opn');

const selectHandler = item => {
  if(item.url) {
    opn(item.url, { wait: false })
  }

  if(item.action) {
    return item.action();
  }
}

const indicatorComponent = ({isSelected}) => {
  return isSelected ? "🍣 " : "   ";
}

const itemComponent = ({isSelected, children}) => {
  const color = isSelected ? "#8bb6d3" : "#ddd";
  return <Color hex={color}>{children}</Color>;
}

const selectItems = [
  {
    label: "Twitter",
    url: "https://twitter.com/konojunya"
  },
  {
    label: "GitHub",
    url: "https://github.com/konojunya"
  },
  {
    label: "Web",
    url: "https://konojunya.com"
  },
  {
    label: "note",
    url: "https://note.mu/konojunya"
  },
  {
    label: "Exit",
    action: process.exit
  }
];

const App = () => {
  return (
    <div>
      <div>
        I'm a student at HALOsaka and a software enginner.<br/>
        like a <Color hex='#d18a8a'>strawberries</Color>, <Color hex='#8dd68e'>JavaScript</Color> and <Color hex='#8dd68e'>Golang</Color>.
        <br/>
      </div>
      <QuickSearch
        items={selectItems}
        onSelect={selectHandler}
        itemComponent={itemComponent}
        indicatorComponent={indicatorComponent}
      />
    </div>
  )
}
render(<App/>)