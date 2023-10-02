import React, { useRef, version } from 'react';
import Marquee from 'react-fast-marquee';

export default function Header() {
  const resource = useRef(performance
    .getEntriesByType('resource')
    .find(resource => resource.name.endsWith('header.js'))
  );
  return (
    <Marquee>
      <h3>Header w/ React@{ version } took { (resource.current.duration).toFixed(0) }ms</h3>
    </Marquee>
  );
}