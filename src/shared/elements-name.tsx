import React from 'react';
import { ElementHeader } from './element-header';
interface ElementName {
  name: string;
  description: string;
  children: React.ReactNode;
}
function ElementsName({ name, description, children }: ElementName) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2">
        <ElementHeader>{name}</ElementHeader>
        {/* Element description */}
        <p className="text-base text-type-500 font-normal">{description}</p>
      </div>

      {/* Element content */}
      {children}
    </div>
  );
}

export { ElementsName };
