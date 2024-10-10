import React from 'react';
interface ElementsContainerProps {
  children: React.ReactNode;
	className?: string;
}
function ElementsContainer({ children , className}: ElementsContainerProps) {
  return <div className={`${className} flex flex-col gap-12`}>{children}</div>;
}

export default ElementsContainer;
