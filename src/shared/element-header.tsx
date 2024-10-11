import React from 'react';
interface ElementHeaderProps {
  size?: string;
  children: React.ReactNode;
}
function ElementHeader({ size, children }: ElementHeaderProps) {
  return (
    <span
      className={`${size && size} ${!size && 'text-3xl'} font-semibold text-type-950`}
    >
      {children}
    </span>
  );
}

export { ElementHeader };
