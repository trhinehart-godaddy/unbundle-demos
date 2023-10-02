import React, { useRef, version } from 'react';
import Confetti from 'react-confetti';

export default function App() {
  const resource = useRef(performance
    .getEntriesByType('resource')
    .find(resource => resource.name.endsWith('app.js'))
  );
  return (
    <>
      <Confetti/>
      <h3>App w/ React@{ version } took { (resource.current.duration).toFixed(0) }ms</h3>
    </>
  );
}