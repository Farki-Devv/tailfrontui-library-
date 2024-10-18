import { ReactNode } from 'react';
import { Separator } from '../components/separator';
interface ElementStepsProps {
  step: number;
  description: string;
  secondDescription?: string;
  children?: ReactNode;
  className?: string;
}
function ElementSteps({
  step,
  description,
  children,
  secondDescription,
  className,
}: ElementStepsProps) {
  return (
    <div className={`flex gap-1 md:gap-3 ${className}`}>
      <div className="flex flex-col items-center gap-1">
        <span className="px-4 flex items-center justify-center max-md:size-8 md:size-9 text-base bg-container-100 rounded-full aspect-square">
          {step}
        </span>
        <Separator orientation="vertical" />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col text-base">
          <span className=" text-type-950 font-medium">{description}</span>
          <span className="font-normal text-type-500">{secondDescription}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

export { ElementSteps };
