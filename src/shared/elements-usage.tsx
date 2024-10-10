import React from 'react';
import { ElementHeader } from './element-header';
interface ElementsUsageProps {
  children?: React.ReactNode;
}
function ElementsUsage({ children }: ElementsUsageProps) {
  return (
    <div className="flex flex-col gap-4">
      <ElementHeader size="text-2xl">Usage Guidelines</ElementHeader>
      {children}
    </div>
  );
}

export { ElementsUsage };
