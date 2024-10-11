import React from 'react';
import { ElementHeader } from '../shared/element-header'
interface divProps {
  children: React.ReactNode;
}
function Div({ children }: divProps) {
  return (
    <div className="flex flex-col gap-4">
      <ElementHeader size="text-2xl">Installation</ElementHeader>
      {children}
    </div>
  );
}

export default Div;
