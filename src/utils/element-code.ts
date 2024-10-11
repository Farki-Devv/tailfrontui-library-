
// Update tailwind.config.js code
export const elementsManualTailwind = `/** @type {import('tailwindcss').Config} */
export default {
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
theme: {
extend: {
fontFamily: {
	inter: ['Inter', 'sans-serif'],
	code: ['Source Code Pro', 'monospace'],
},
keyframes: {
 'accordion-down': {
	from: { height: '0' },
	to: { height: 'var(--radix-accordion-content-height)' },
},
'accordion-up': {
	from: { height: 'var(--radix-accordion-content-height)' },
	to: { height: '0' },
},
},
animation: {
	'accordion-down': 'accordion-down 0.2s ease-out',
	'accordion-up': 'accordion-up 0.2s ease-out',
},
},
},
plugins: [],
};`;

// Alert-dialog example codes
const alertDialogCode = `import React from 'react'
import { AlertDialog,AlertDialogAction,
AlertDialogCancel,
AlertDialogContentAlertDialogDescription,
AlertDialogFooter,AlertDialogHeader,AlertDialogTitle,AlertDialogTrigger, } from "../components/alert-dialog"
function Test() {
	return (
		<div>
			<AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
		</div>
	)
}
export default Test`;

const alertDialogSecondStepCode = `import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from './button';

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={twMerge(
      clsx('fixed inset-0 z-50 bg-container-950/20', className),
    )}
    {...props}
    ref={ref}
  />
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={twMerge(
        clsx(
          'fixed left-1/2 max-w-md top-1/2 z-50 grid -translate-x-1/2 -translate-y-1/2 gap-6 squircle bg-container-50 p-6 rounded-lg',
          className,
        ),
      )}
      {...props}
    />
  </AlertDialogPortal>
));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;

const AlertDialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(
      clsx('flex flex-col space-y-1 text-center sm:text-left', className),
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(
      clsx('flex space-x-1 sm:justify-end sm:space-x-2', className),
    )}
    {...props}
  />
);
AlertDialogFooter;

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={twMerge(clsx('text-xl text-type-950 font-medium', className))}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={twMerge(clsx('text-sm text-type-500', className))}
    {...props}
  />
));
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName;

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={twMerge(clsx(buttonVariants(), className))}
    {...props}
  />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={twMerge(clsx(buttonVariants({ variant: 'outline' }), className))}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;

const AlertDialog = AlertDialogPrimitive.Root;

export {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialog,
};`;

const alertDialogUsageCode = `import {
 AlertDialog, 
 AlertDialogAction,
 AlertDialogCancel,
 AlertDialogContent,
 AlertDialogDescription,
 AlertDialogFooter, 
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogFooter, 
 AlertDialogHeader,
 AlertDialogTitle, 
 AlertDialogTrigger,
} from "@/components/alert-dialog`;

const alertDialogUsageTwoCode = `function Test() {
  return (
    <AlertDialog>
    <AlertDialogTrigger>Open</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction>Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  );
}

export default Test;`;

export {
  alertDialogCode,
  alertDialogSecondStepCode,
  alertDialogUsageCode,
  alertDialogUsageTwoCode,
};

// Accordion example code
const accordionCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/accordion';

function Test() {
  return <Accordion type="single" collapsible defaultValue="1">
  <AccordionItem value="1">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>
      The leaves danced gently in the breeze, their rustling a symphony of
      nature’s.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>
      The leaves danced gently in the breeze, their rustling a symphony of
      nature’s.
    </AccordionContent>
  </AccordionItem>
</Accordion>
}

export default Test;
`;
const accordionSecondStepCode = `import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { IconChevronDown } from '@tabler/icons-react';
import { clsx } from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Root
    ref={ref}
    className={twMerge(clsx('[&>*:not(:last-child)]:mb-2', className))}
    {...props}
  />
));
Accordion.displayName = 'Accordion';

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={twMerge(
      clsx('squircle border rounded-lg bg-container-50', className),
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={twMerge(
        clsx(
          'flex flex-1 py-3 px-4 items-center justify-between text-sm font-medium text-type-950 transition-all [&[data-state=open]>svg]:rotate-180',
          className,
        ),
      )}
      {...props}
    >
      {children}
      <IconChevronDown
        size={20}
        className="text-type-950 transition-transform duration-200"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm text-type-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={twMerge(clsx('px-4 py-3 pt-1', className))}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };

`;
const accordionUsageCode = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/accordion';`;
const accordionUsageTwoCode = `function Test() {
  return <Accordion type="single" collapsible defaultValue="1">
  <AccordionItem value="1">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>
      The leaves danced gently in the breeze, their rustling a symphony of
      nature’s.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="2">
    <AccordionTrigger>Title</AccordionTrigger>
    <AccordionContent>
      The leaves danced gently in the breeze, their rustling a symphony of
      nature’s.
    </AccordionContent>
  </AccordionItem>
</Accordion>
}

export default Test;`;
export {
  accordionCode,
  accordionSecondStepCode,
  accordionUsageCode,
  accordionUsageTwoCode,
};
