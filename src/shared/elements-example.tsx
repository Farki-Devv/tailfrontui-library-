import React from 'react';
import { ElementHeader } from './element-header';
interface ElementsExample {
  children?: React.ReactNode;
}
function ElementsExample({ children }: ElementsExample) {
  return (
    <div className="flex flex-col gap-6">
      <ElementHeader size="text-2xl">Examples</ElementHeader>
      {children}
    </div>
  );
}

export default ElementsExample;
