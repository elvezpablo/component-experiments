import * as React from 'react';
import Copyable from './Copyable';
import Progress from './Progress';
import './style.css';

export default function App() {
  const [value, setValue] = React.useState(50);

  return (
    <div>
      <h1>Styling Interface</h1>
      <p>Attempts to define a styling interface.</p>
      {/* <div style={{ marginBottom: '20px', display: 'flex', gap: '12px' }}>
        <button onClick={() => setValue(10)}>10%</button>
        <button onClick={() => setValue(50)}>50%</button>
        <button onClick={() => setValue(80)}>80%</button>
      </div>
      <Progress value={value} aria-label="My progress" /> */}
      <Copyable styles={{ borderBottom: '1px solid green' }}>copy me</Copyable>
      <br />
      <Copyable styles={{ borderBottom: '1px solid red', color: 'green' }}>
        copy me
      </Copyable>
    </div>
  );
}
