import * as React from 'react';
import './style.css';
import withLabel from './hoc/withLabel';

function App() {
  return <p>React HOC</p>;
}

export default withLabel(App);
