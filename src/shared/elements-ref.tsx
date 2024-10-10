import React from 'react';
import { ElementHeader } from './element-header';
interface Element {
  children?: React.ReactNode;
}
function ElementsRef({ children }: Element) {
  return (
    <div className="flex flex-col gap-4">
      <ElementHeader size="text-2xl">API Reference</ElementHeader>
      {children}
    </div>
  );
}

export default ElementsRef;
