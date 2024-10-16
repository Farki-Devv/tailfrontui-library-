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

const alertDialogUsageTwoCode = `<AlertDialog>
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
  </AlertDialog>`;

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
const accordionUsageTwoCode = `<Accordion type="single" collapsible defaultValue="1">
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
</Accordion>`;
export {
  accordionCode,
  accordionSecondStepCode,
  accordionUsageCode,
  accordionUsageTwoCode,
};
// alert example code

const alertCode = `import { Circle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/alert';
function Test() {
  return (
    <Alert className="w-[532px]">
      <Circle className="h-4 w-4" />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription className="text-type-500">
        The leaves danced gently in the breeze, their rustling a symphony of
        nature’s.
      </AlertDescription>
    </Alert>
  );
}

export default Test;
`;
const alertSecondStepCode = `import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const alertVariants = cva(
  'relative w-full rounded-lg border border-stroke-200 px-4 py-3 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-1px] [&>svg]:absolute [&>svg]:left-3.5 [&>svg]:top-3.5 [&>svg]:text-foreground',
  {
    variants: {
      variant: {
        default: 'bg-container-50 text-type-950',
        destructive:
          'border-red-100 text-red-800 bg-red-50 [&>svg]:text-red-800',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div className="squircle">
    <div
      ref={ref}
      role="alert"
      className={twMerge(clsx(alertVariants({ variant }), className))}
      {...props}
    />
  </div>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={twMerge(
      clsx(
        'flex items-center font-medium text-sm leading-5 tracking-tight',
        className,
      ),
    )}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('text-sm [&_p]:leading-relaxed', className))}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
`;
const alertUsageCode = `import { 
Alert,
AlertDescription, 
AlertTitle 
} from '../components/alert'`;

const alertUsageTwoCode = `<Alert className="w-[532px]">
      <Circle className="h-4 w-4" />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription className="text-type-500">
        The leaves danced gently in the breeze, their rustling a symphony of
        nature’s.
      </AlertDescription>
    </Alert>`;
export { alertCode, alertSecondStepCode, alertUsageCode, alertUsageTwoCode };

// avatar code

const avatarCode = `import { Avatar, AvatarFallback, AvatarImage } from '../components/avatar';
function Test() {
  return (
    <Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
        alt="@tailfront"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default Test;
`;
const avatarSecondStepCode = `import * as AvatarPrimitive from '@radix-ui/react-avatar';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={twMerge(
      clsx(
        'w-full',
        className
      )
    )}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={twMerge(
      clsx(
        'text-sm text-type-400 font-medium',
        className,
      ),
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx(
        'flex justify-center items-center bg-container-100 aspect-square rounded-full overflow-hidden',
        'w-10', // Default size
        className,
      ),
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { AvatarFallback, AvatarImage, Avatar };
;`;
const avatarUsageCode = `import { Avatar, AvatarFallback, AvatarImage } from '../components/avatar'`;
const avatarUsageTwoCode = `<Avatar>
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
        alt="@tailfront"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>`;
export {
  avatarCode,
  avatarSecondStepCode,
  avatarUsageCode,
  avatarUsageTwoCode,
};
// Badge code

const badgeCode = `import { Badge } from '../components/badge';
function Test() {
  return (
    <Badge>Badge</Badge>
  );
}`;
const badgeSecondStepCode = `
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const badgeVariants = cva(
  'text-xs font-medium px-2 py-1 leading-3 rounded-lg max-h-5',
  {
    variants: {
      variant: {
        default:     'bg-accent-800 text-type-50',
        secondary:   'bg-container-100 text-type-950',
        outline:     'bg-container-50 border border-stroke-200 box-border text-type-950',
        destructive: 'bg-red-800 text-type-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const Badge: React.FC<BadgeProps> = ({ className, variant, ...props }) => {
  return (
    <div
      className={twMerge(clsx(badgeVariants({ variant }), className))}
      {...props}
    />
  );
};

export { type BadgeProps, badgeVariants, Badge };
`;
const badgeUsageCode = `import { Badge } from '../components/badge';`;
const badgeUsageTwoCode = `<Badge variant="default">Badge</Badge>`;
export { badgeCode, badgeSecondStepCode, badgeUsageCode, badgeUsageTwoCode };

// Breadcrumb code
const breadcrumbSecondStepCode = `const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<'ol'>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={twMerge(
      clsx(
        'flex flex-wrap font-inter items-center gap-2 break-words text-sm sm:gap-2',
        className,
      ),
    )}
    {...props}
  />
));
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<'li'>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={twMerge(clsx('inline-flex items-center ', className))}
    {...props}
  />
));
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      ref={ref}
      className={twMerge(
        clsx(
          'transition-colors tracking-normal font-normal text-type-400',
          className,
        ),
      )}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<'span'>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={twMerge('font-normal text-type-950', className)}
    {...props}
  />
));
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator: React.FC<React.ComponentProps<'li'>> = ({
  children,
  className,
  ...props
}) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={twMerge(
      clsx('[&>svg]:size-4 font-normal text-type-400', className),
    )}
    {...props}
  >
    {children ?? <IconChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis: React.FC<React.ComponentProps<'span'>> = ({
  className,
  ...props
}) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={twMerge('flex size-4 items-center justify-center', className)}
    {...props}
  >
    <IconDots className="text-type-400 size-4" />
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

const Breadcrumb = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & { separator?: React.ReactNode }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
Breadcrumb.displayName = 'Breadcrumb';

export {
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Breadcrumb,
};`;

const breadcrumbCode = `import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from '../components/breadcrumb';
 function Test() {
  return (
  <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
  )
 }`;
const breadcrumbUsageCode = `import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/breadcrumb';`;
const breadcrumbUsageTwoCode = `<Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbEllipsis />
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Page</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>`;
const breadcrumbcodeTwo = `import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from '../components/breadcrumb';

function Test() {
  return (
    <Breadcrumb className="text-stroke-400">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbEllipsis />/
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Page</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </ElementsExampleTabs>
  );
}
export { Test };`;
export {
  breadcrumbCode,
  breadcrumbSecondStepCode,
  breadcrumbUsageCode,
  breadcrumbUsageTwoCode,
  breadcrumbcodeTwo,
};

// Button code

const buttonSecondStepCode = `import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 squircle',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-800 text-lg text-type-50 hover:bg-accent-700 focus:outline-none focus:ring focus:ring-accent-100 active:bg-accent-900 disabled:bg-accent-800 focus:bg-accent-800',
        secondary:
          'bg-container-100 text-type-950 hover:bg-container-100 focus:ring focus:ring-accent-100 focus:bg-container-100 active:bg-container-100 disabled:bg-container-100',
        destructive:
          'bg-red-800 text-type-50 hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-100 focus:bg-red-800 active:bg-red-900 desabled:bg-red-800 ',
        outline:
          'bg-container-50 border border-stroke-200 hover:bg-container-50 focus:outline-none focus:ring text-type-950 focus:ring-accent-100 active:bg-stroke-200 disabled:bg-container-50',
        ghost:
          'hover:bg-container-100 text-type-950 active:bg-container-100 squircle',
      },
      size: {
        lg: 'px-4 py-2 gap-1 tracking-normal text-base tracking-normal',
        default: 'px-3 gap-1 py-2 text-sm tracking-normal',
        sm: 'px-2 py-2 gap-1 text-xs tracking-normal',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={twMerge(clsx(buttonVariants({ variant, size, className })))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
}`;
const buttonUsageCode = `import { Button } from '../components/button';`;
const buttonUsageTwoCode = `<Button variant="primary">Button</Button>
`;
export { buttonSecondStepCode, buttonUsageCode, buttonUsageTwoCode };
//card code

const cardCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/card';

<Card className="w-[20rem]">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Subtitle</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Text" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={'outline'}>cancel</Button>
          <Button>Done</Button>
        </CardFooter>
      </Card>`;

const cardSecondStepCode = `import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('flex flex-col space-y-1', className))}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={twMerge(
      clsx(
        'text-base font-medium text-type-950 flex items-center tracking-normal',
        className,
      ),
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={twMerge(
      clsx('text-sm font-normal tracking-normal text-type-500', className),
    )}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge(clsx(className))} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('flex items-center', className))}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(
      clsx(
        'rounded-lg border border-stroke-200 squircle bg-container-50 p-4 space-y-4',
        className,
      ),
    )}
    {...props}
  />
));
Card.displayName = 'Card';

export {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card,
};
`;
const cardUsageCode = `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/card';`;
const cardUsageTwoCode = `<Card className="w-[20rem]">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Subtitle</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Text" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={'outline'}>cancel</Button>
          <Button>Done</Button>
        </CardFooter>
      </Card>`;
export { cardCode, cardSecondStepCode, cardUsageCode, cardUsageTwoCode };

// Dialog code

const dialogCode = `import {
 import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/dialog';
 
 function Test() {
  return (
    <Dialog>
        <DialogTrigger>
          <Button>open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Subtitle</DialogDescription>
          </DialogHeader>
          <Input placeholder="Text" />
          <DialogFooter>
            <Button>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  );  
 } 
`;
const dialogSecondStepCode = `import * as DialogPrimitive from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons-react';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={twMerge(
      clsx('fixed inset-0 z-50 bg-container-950/20', className),
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={twMerge(
        clsx(
          'fixed left-1/2 top-1/2 z-50 grid w-full max-w-[320px] -translate-x-1/2 -translate-y-1/2 gap-4 squircle bg-container-50 p-4',
          className,
        ),
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-4 top-4">
        <IconX className="size-5 text-type-950" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(clsx('flex flex-col space-y-1 text-left', className))}
    {...props}
  />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={twMerge(clsx('flex sm:flex-row sm:justify-end', className))}
    {...props}
  />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={twMerge(
      clsx(
        'text-base text-type-950 py-1 font-medium leading-none tracking-normal',
        className,
      ),
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={twMerge(clsx('text-sm text-type-500', className))}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const Dialog = DialogPrimitive.Root;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
};`;
const dialogUsageCode = `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/dialog';`;
const dialogusageTwoCode = `
  <Dialog>
        <DialogTrigger>
          <Button>open dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Subtitle</DialogDescription>
          </DialogHeader>
          <Input placeholder="Text" />
          <DialogFooter>
            <Button>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>`;
export {
  dialogCode,
  dialogSecondStepCode,
  dialogUsageCode,
  dialogusageTwoCode,
};

// drawer code
const drawerCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/drawer';
 
<Drawer>
        <DrawerTrigger>
          <Button>Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Subtitle</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose className="float-right">
              <Button>Done</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>`;
const drawerSecondStepCode = `import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { Drawer as DrawerPrimitive } from 'vaul';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={twMerge(
      clsx('fixed inset-0 z-50 bg-container-950/20', className),
    )}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={twMerge(
        clsx(
          'fixed inset-x-2 bottom-0 z-50 mt-24 flex flex-col rounded-t-lg squircle bg-container-50',
          className,
        ),
      )}
      {...props}
    >
      <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-container-200" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div
    className={twMerge(
      clsx('grid gap-1 px-4 mt-4 h-12 text-center sm:text-left', className),
    )}
    {...props}
  />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <div
    className={twMerge(clsx('gap-2 px-4 mb-4 mt-4', className))}
    {...props}
  />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={twMerge(
      clsx(
        'text-base text-start flex items-center font-medium leading-6 text-type-950 tracking-normal',
        className,
      ),
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={twMerge(
      clsx('text-start tracking-normal text-sm text-type-500', className),
    )}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>): JSX.Element => (
  <DrawerPrimitive.Root
    shouldScaleBackground={shouldScaleBackground}
    {...props}
  />
);
Drawer.displayName = 'Drawer';

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};`;
const drawerUsageCode = `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../components/drawer';`;

const drawerUsageTwoCode = `<Drawer>
        <DrawerTrigger>
          <Button>Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Subtitle</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose className="float-right">
              <Button>Done</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
`;
export {
  drawerCode,
  drawerSecondStepCode,
  drawerUsageCode,
  drawerUsageTwoCode,
};
// dropdown-menu code

const dropdownMenuCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../components/dropdown-menu';

function Test(){
return (
<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      )
}

export {test}
`;
const dropdownMenuSecondStepCode = `import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { IconCheck, IconChevronRight } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    ref={ref}
    className={twMerge(
      clsx(
        'flex select-none items-center rounded-lg squircle px-3 py-2 text-sm outline-none text-type-950 focus:bg-container-100 data-[state=open]:bg-container-100',
        inset && 'pl-8',
        className,
      ),
    )}
    {...props}
  >
    {children}
    <IconChevronRight className="ml-auto size-4" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    ref={ref}
    className={twMerge(
      clsx(
        'min-w-[8rem] rounded-lg squircle border bg-container-50 p-1 text-type-950 shadow-lg ml-3',
        className,
      ),
    )}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={twMerge(
        clsx(
          'z-50  overflow-hidden squircle rounded-lg border border-stroke-200 bg-container-50 p-1',
          className,
        ),
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    ref={ref}
    className={twMerge(
      clsx(
        'relative text-type-950 flex cursor-pointer outline-none select-none items-center rounded-lg px-3 py-2 text-sm font-normal focus:bg-container-100',
        inset && 'pl-8',
        className,
      ),
    )}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    ref={ref}
    className={twMerge(
      clsx(
        'relative flex cursor-pointer items-center squircle rounded-lg py-2 pl-9 pr-2 text-sm text-type-950 outline-none hover:bg-container-100',
        className,
      ),
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-3 flex size-3.5 items-center justify-center ">
      <DropdownMenuPrimitive.ItemIndicator>
        <IconCheck className="size-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    ref={ref}
    className={twMerge(
      clsx(
        'flex cursor-pointer items-center squircle rounded-lg py-2 pl-9 pr-2 text-sm outline-none text-type-950 focus:bg-container-100',
        className,
      ),
    )}
    {...props}
  >
    <span className="absolute left-3 flex">
      <DropdownMenuPrimitive.ItemIndicator>
        <IconCheck className="size-4" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    ref={ref}
    className={twMerge(
      clsx(
        'text-type-950 tracking-normal font-sans px-3 py-2 text-sm font-medium',
        inset && 'pl-8',
        className,
      ),
    )}
    {...props}
  />
));
const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    ref={ref}
    className={twMerge(clsx('-mx-1 my-1 h-px bg-stroke-200', className))}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

const DropdownMenuShortcut: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={twMerge(
        clsx('ml-auto text-xs tracking-widest text-type-500', className),
      )}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

const DropdownMenu = DropdownMenuPrimitive.Root;

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
};
`;
const dropdownmenuUsageCode = `import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '../components/dropdown-menu';`;
const dropdownmenuUsageTwoCode = `<DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              <span>New Team</span>
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>GitHub</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Support</span>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            <span>API</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
`;
const dropdownmenuTwoCode = `import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/dropdown-menu";
 import * as React from "react"
 type Checked = DropdownMenuCheckboxItemProps["checked"]
 export function Test() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)
  return (
  <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
  )
 }
`;
const dropdownmenuThreeCode = `
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
 import * as React from "react"

 function Test() {
   const [position, setPosition] = React.useState("bottom")
   return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu> 
   }
`;
export {
  dropdownMenuCode,
  dropdownMenuSecondStepCode,
  dropdownmenuThreeCode,
  dropdownmenuTwoCode,
  dropdownmenuUsageCode,
  dropdownmenuUsageTwoCode,
};

// form code

const formCode = `import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/form';
 
export function Test(){
const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
return (
<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="w-[17.5rem]"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
)
}
`;
const formSecondStepCode = `import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import * as React from 'react';
import {
  Controller,
  ControllerProps,
  FieldError,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { Label } from './label';

type FormFialdContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};
type FormItemContextValue = {
  id: string;
};

const FormFieldContext = React.createContext<FormFialdContextValue>(
  {} as FormFialdContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  props: ControllerProps<TFieldValues, TName>,
): JSX.Element => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = (): {
  id: string;
  name: string;
  formItemId: string;
  formDescriptionId: string;
  formMessageId: string;
  invalid: boolean;
  isDirty: boolean;
  isTouched: boolean;
  isValidating: boolean;
  error?: FieldError;
} => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const fieldState = getFieldState(fieldContext.name, formState);
  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: \`\${id}-form-item\`,
    formDescriptionId: \`\${id}-form-item-description\`,
    formMessageId: \`\${id}-form-item-message\`,
    ...fieldState,
  };
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={twMerge('space-y-1', className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={twMerge(clsx('text-type-950 text-sm', className))}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? \`\${formDescriptionId}\`
          : \`\${formDescriptionId} \${formMessageId}\`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={twMerge(clsx('text-xs text-type-400', className))}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={twMerge(clsx('text-sm font-medium text-red-400', className))}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = 'FormMessage';

const Form = FormProvider;

export {
  useFormField,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
};
`;
const formUsageCode = `import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/form';
`;
const formUsageTwoCode = `export function Test(){
const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
return (
<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="w-[17.5rem]"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
)
}
`;

export { formCode, formSecondStepCode, formUsageCode, formUsageTwoCode };
// hover-card code

const hovercardCode = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/hover-card';
export function Test(){
  return (
   <HoverCard>
        <HoverCardTrigger>
          <Button variant={'ghost'}>NextJS</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-3 w-[18.875rem]">
            <img
              src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
              alt=""
              className="size-12 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium">@NextJS</span>
                <span className="text-sm text-type-500">
                  The React Framework – created and maintained by @vercel.
                </span>
              </div>
              <div className="text-xs text-type-400 flex gap-1">
                <IconCalendarWeek className="size-4" />
                Joined Dec 2021
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
  )
} 
`;
const hovercardSecondStepCode = `
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const HoverCard = HoverCardPrimitive.Root;

const HoverCardTrigger = HoverCardPrimitive.Trigger;

const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof HoverCardPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <HoverCardPrimitive.Content
    ref={ref}
    align={align}
    sideOffset={sideOffset}
    className={twMerge(
      clsx(
        'z-50 mt-3 rounded-lg squircle shadow-md border bg-container-50 p-4 text-type-950 ml-1',
        className,
      ),
    )}
    {...props}
  />
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;

export { HoverCard, HoverCardContent, HoverCardTrigger };
`;
const hovercardUsageCode = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/hover-card';`;
const hovercardUsageTwoCode = `<HoverCard>
        <HoverCardTrigger>
          <Button variant={'ghost'}>NextJS</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-3 w-[18.875rem]">
            <img
              src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
              alt=""
              className="size-12 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1">
                <span className="text-base font-medium">@NextJS</span>
                <span className="text-sm text-type-500">
                  The React Framework – created and maintained by @vercel.
                </span>
              </div>
              <div className="text-xs text-type-400 flex gap-1">
                <IconCalendarWeek className="size-4" />
                Joined Dec 2021
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>`;
export {
  hovercardCode,
  hovercardSecondStepCode,
  hovercardUsageCode,
  hovercardUsageTwoCode,
};

// input code

const inputCode = `import { Input } from '../components/input';
import { Label } from '../components/label';

export function Test(){
  return (
      <div>
        <Label>Label</Label>
        <Input placeholder="Text" className="w-[17.5rem]" />
      </div>
  )
} 
`;
const inputSecondStepCode = `import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          clsx(
            'flex w-full border border-stroke-200 rounded-lg bg-container-50 px-3 py-2 text-sm placeholder:text-type-400 focus-visible:outline-none focus-visible:ring focus:ring-accent-100 disabled:cursor-not-allowed disabled:opacity-50 text-type-950 file:text-type-950 tracking-normal file:border-0 file:bg-transparent file:text-sm file:font-medium',
            className,
          ),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

export { Input };
`;
const ionputUsageCode = `import { Input } from '../components/input';`;
const inputUsageTwoCode = `<div>
        <Label>Label</Label>
        <Input placeholder="Text" className="w-[17.5rem]" />
      </div>`;
export { inputCode, inputSecondStepCode, inputUsageTwoCode, ionputUsageCode };

// onput-otp code

const inputOtpCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../components/input-otp';
 
export function Test(){
  return (
       <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
  )
} 
`;
const inputOtpTwoCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../components/input-otp';
 
 function Test(){
  return (
   <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>)
 } 
`;
const inputOtpThreeCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
}

export function Test(){
  return (
         <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
  )
}`;
const inputOtpUsageCode = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '../components/input-otp'`;
const ionputOtpUsageTwoCode = `<InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>`;
const inputotpSecondStepCode = `import clsx from 'clsx';
import { OTPInput, OTPInputContext } from 'input-otp';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={twMerge(
      clsx(
        'flex items-center gap-2 has-[:disabled]:opacity-50',
        containerClassName,
      ),
    )}
    className={twMerge(clsx('disabled:cursor-not-allowed', className))}
    {...props}
  />
));
InputOTP.displayName = 'InputOTP';

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge(clsx('flex items-center border squircle', className))}
    {...props}
  />
));
InputOTPGroup.displayName = 'InputOTPGroup';

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];

  return (
    <div
      ref={ref}
      className={twMerge(
        clsx(
          'relative flex size-9 px-3 py-2 bg-container-50 border-l last:border-r text-type-950 border-y text-sm first:rounded-l-lg last:rounded-r-lg',
          isActive && 'z-10 ring ring-accent-100',
          className,
        ),
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-container-50 duration-1000" />
        </div>
      )}
    </div>
  );
});
InputOTPSlot.displayName = 'InputOTPSlot';

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props} className="text-sm text-type-950">
    -
  </div>
));
InputOTPSeparator.displayName = 'InputOTPSeparator';

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };

`;
export {
  inputOtpCode,
  inputOtpThreeCode,
  inputOtpTwoCode,
  inputOtpUsageCode,
  inputotpSecondStepCode,
  ionputOtpUsageTwoCode,
};

// label code

const labelCode = `import { Label } from '../components/label';

function Test(){
  return (
       <div>
        <Label>Label</Label>
        <Input placeholder="Label" className="w-[17.5rem]" />
      </div>
  )
}
`;
const labelUsageCode = `import { Label } from '../components/label';`;
const labelUsageTwoCode = `<div>
        <Label>Label</Label>
        <Input placeholder="Label" className="w-[17.5rem]" />
      </div>`;
const labelSecondStepCode = `
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const labelVariants = cva(
  'text-sm font-medium peer-disabled:cursor-not-allowed peer-desabled:opacity-70  text-type-950',
);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={twMerge(clsx(labelVariants(), className))}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { labelVariants, Label };`;
export { labelCode, labelSecondStepCode, labelUsageCode, labelUsageTwoCode };

// navgation-menu code

const navigationmenuSecondStepCode = `const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx('relative z-10 flex max-w-max flex-1 items-center justify-center'),
      className,
    )}
    {...props}
  >
    {children}
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    ref={ref}
    className={twMerge(
      clsx('group flex flex-1 list-none items-center justify-center space-x-1'),
      className,
    )}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  'inline-flex text-type-950 items-center justify-center rounded-md px-3 py-2 text-sm font-medium hover:bg-container-100 focus:bg-container-100 focus:outline-none',
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    ref={ref}
    className={twMerge(clsx(navigationMenuTriggerStyle(), 'group', className))}
    {...props}
  >
    {children}
    <IconChevronDown
      className="relative top-[1px] ml-1 size-4 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <div className="absolute">
    <NavigationMenuPrimitive.Content
      ref={ref}
      className={twMerge(
        clsx(
          'left-0 mt-4 border squircle bg-container-50 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-righ md:absolute md:w-auto',
          className,
        ),
      )}
      {...props}
    />
  </div>
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={twMerge(clsx('absolute left-0 top-full flex justify-center'))}
  >
    <NavigationMenuPrimitive.Viewport
      className={twMerge(
        clsx(
          'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        ),
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    ref={ref}
    className={twMerge(
      clsx(
        'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
        className,
      ),
    )}
    {...props}
  >
    <div
      className={'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md'}
    />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
};`;
const navigationmenuUsageCode = `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../components/ui/navigation-menu"
`;
const navigationmenuUsageTwoCode = `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
`;
export {
  navigationmenuSecondStepCode,
  navigationmenuUsageCode,
  navigationmenuUsageTwoCode,
};

// popover code

const popoverCode = `import { Input } from '../components/input';
import { Popover, PopoverContent, PopoverTrigger } from '../components/popover';
import { Button } from '../components/button';

export function Example() {
  return (
      <Popover>
        <PopoverTrigger>
          <Button variant={'outline'}>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium">Dimensions</span>
              <span className="text-sm text-type-500">
                Set the dimensions for the layer.
              </span>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">Width</span>
                <Input defaultValue={'100%'} className="w-[194px] h-9" />
              </div>
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">Max. width</span>
                <Input defaultValue={'300px'} className="w-[194px] h-9" />
              </div>
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">height</span>
                <Input defaultValue={'25px'} className="w-[194px] h-9" />
              </div>
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">
                  Max. <br /> Height
                </span>
                <Input defaultValue={'none'} className="w-[194px] h-9" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>)
}`;
const popoverSecondStepCode = `import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={twMerge(
        clsx(
          'border mt-3 border-stroke-200 rounded-lg squircle ml-1.5 bg-container-50 p-4 text-type-950 shadow-md',
          className,
        ),
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

const Popover = PopoverPrimitive.Root;

export { PopoverContent, PopoverTrigger, Popover };
`;
const popoverusageCode = `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  } from "@/components/popover"
`;
const popoverUsageCodeTwo = `<Popover>
    <PopoverTrigger>Open</PopoverTrigger>
    <PopoverContent>Place content for the popover here.</PopoverContent>
  </Popover>`;
export {
  popoverCode,
  popoverSecondStepCode,
  popoverUsageCodeTwo,
  popoverusageCode,
};

// progress code

const progressCode = `import { Progress } from '../components/progress';
export function Example() {
  return (
    <Progress value={30} className="w-[23.75rem]" />
  )
}`;
const progressUsageCode = `import {
  Progress
} from "@/components/progress"
`;
const progressUsageTwoCode = `<Progress value={30} className="w-[23.75rem]" />
`;
export { progressCode, progressUsageCode, progressUsageTwoCode };

// radioo group

const radiogroupCode = `import { RadioGroup, RadioGroupItem } from '../components/radio-group';

function Test() {
  return (   <RadioGroup defaultValue="option-one">
        <div className="flex flex-col p-4 rounded-lg gap-2 border w-[225px]">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-three" id="option-two" />
            <Label htmlFor="option-three">Compact</Label>
          </div>
        </div>
      </RadioGroup>
  )
}
`;
const radiogroupTwoCode = `import { RadioGroup, RadioGroupItem } from '../components/radio-group';

function Test() {
  return (
    <RadioGroup defaultValue="option-one">
        <div className="flex flex-col gap-3 border rounded-lg items-start p-4 w-[225px]">
          <span className="text-sm font-medium">Notify me about...</span>
          <div className="flex flex-col gap-2 font-normal">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-one" id="option-one" />
              <Label htmlFor="option-one">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-two" id="option-two" />
              <Label htmlFor="option-two">Comfortable</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="option-three" id="option-two" />
              <Label htmlFor="option-three">Compact</Label>
            </div>
          </div>
          <Button>Submit</Button>
        </div>
      </RadioGroup>
  )
}`;
const radiogroupSecondStepCode = `import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { IconCircle } from '@tabler/icons-react';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={twMerge(
        clsx(
          'size-4 rounded-full data-[state=unchecked]:border data-[state=checked]:bg-accent-800 disabled:opacity-50',
          className,
        ),
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex justify-center">
        <IconCircle className="size-2 fill-current text-type-50" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={twMerge(clsx('grid gap-2', className))}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export { RadioGroupItem, RadioGroup };
`;
const radiogroupUsageCode = `import { RadioGroup, RadioGroupItem } from '../components/radio-group';`;
const radiogroupUsageCodeTwo = `<RadioGroup defaultValue="option-one">
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-one" id="option-one" />
      <Label htmlFor="option-one">Option One</Label>
    </div>
    <div className="flex items-center space-x-2">
      <RadioGroupItem value="option-two" id="option-two" />
      <Label htmlFor="option-two">Option Two</Label>
    </div>
  </RadioGroup>`;
export {
  radiogroupCode,
  radiogroupSecondStepCode,
  radiogroupTwoCode,
  radiogroupUsageCode,
  radiogroupUsageCodeTwo,
};

// resizable code

const resizableSecondStepCode = `import { IconGripVertical } from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
import { twMerge } from 'tailwind-merge';

interface ResizableHandleProps
  extends React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> {
  withHandle?: boolean;
}

const ResizablePanel = ResizablePrimitive.Panel;

const ResizableHandle: React.FC<ResizableHandleProps> = ({
  withHandle,
  className,
  ...props
}) => (
  <ResizablePrimitive.PanelResizeHandle
    className={twMerge(
      clsx(
        'flex w-px items-center justify-center bg-stroke-200 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full',
        className,
      ),
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3.5 squircle items-center justify-center rounded border bg-border">
        <IconGripVertical />
      </div>
    )}
  </ResizablePrimitive.PanelResizeHandle>
);

const ResizablePanelGroup: React.FC<
  React.ComponentProps<typeof ResizablePrimitive.PanelGroup>
> = ({ className, ...props }) => (
  <ResizablePrimitive.PanelGroup
    className={twMerge(
      clsx(
        'flex h-full w-full text-type-950 data-[panel-group-direction=vertical]:flex-col',
        className,
      ),
    )}
    {...props}
  />
);

export {
  type ResizableHandleProps,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
};
`;
const resizableUsageCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
`;

const resizableUsageCodeTwo = `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
`;
export { resizableSecondStepCode, resizableUsageCode, resizableUsageCodeTwo };

// scroll-area code

const scrollareaCode = `import { ScrollArea } from '../components/scroll-area';

function ScrollAreaPage() {
  const tags = Array.from({ length: 11 }).map(
  (_, i, a) => 'v1.2.0-beta.' + (a.length - i)
);

  return (
     <ScrollArea className="border w-[14rem]">
        <div className="pr-1.5 h-[9.625rem] space-y-2">
          <h4 className="text-sm pt-3 font-medium text-type-950 pl-4 flex items-center">
            Tags
          </h4>
          <div className="pl-1">
            {tags.map((tag) => (
              <>
                <div
                  key={tag}
                  className="text-sm hover:bg-container-100 px-3 py-2 rounded-lg squircle"
                >
                  {tag}
                </div>
              </>
            ))}
          </div>
        </div>
      </ScrollArea>
  );
}
`;

const scrollareSecondStepCode = `import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={twMerge(
      clsx(
        'flex touch-none select-none transition-colors',
        orientation === 'vertical' &&
          'h-full w-1.5 border-l border-l-transparent pt-[4px]',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-r-transparent p-[1px]',
        className,
      ),
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative w-1.5 right-1 flex-1 rounded-full bg-container-200" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <ScrollAreaPrimitive.Root
    ref={ref}
    className={twMerge(
      clsx(
        'relative overflow-hidden squircle text-type-950 pl-0.5 pr-2',
        className,
      ),
    )}
    {...props}
  >
    <ScrollAreaPrimitive.Viewport className="h-full w-full">
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
  </ScrollAreaPrimitive.Root>
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;

export { ScrollArea, ScrollBar };
`;
const scrollareaUsageCode = `import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
`;
const scrollareaUsageTwoCode = `<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>
`;
export {
  scrollareSecondStepCode,
  scrollareaCode,
  scrollareaUsageCode,
  scrollareaUsageTwoCode,
};

// select code

const selectSecondStepCode = `import * as SelectPrimitive from '@radix-ui/react-select';
import {
  IconCheck,
  IconChevronDown,
  IconChevronUp,
  IconSelector,
} from '@tabler/icons-react';
import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={twMerge(
      clsx(
        'flex w-full text-sm font-normal items-center justify-between rounded-lg squircle border border-stroke-200 bg-container-50 px-3 py-2.5  text-type-950 disabled:cursor-not-allowed disabled:opacity-50 leading-3',
        className,
      ),
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <IconSelector className="size-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={twMerge(
      clsx('flex text-type-950 items-center justify-center py-1'),
      className,
    )}
    {...props}
  >
    <IconChevronUp className="size-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={twMerge(
      clsx('flex text-type-950 items-center justify-center py-1'),
      className,
    )}
    {...props}
  >
    <IconChevronDown className="size-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={twMerge(
        clsx(
          ' max-h-96 overflow-hidden rounded-lg border border-stroke-200 bg-container-50 squircle mt-1',
          position === 'popper' &&
            'ta-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        ),
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={twMerge(
          clsx(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
          ),
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={twMerge(
      clsx('py-1.5 pl-8 pr-2 text-sm font-medium text-type-950', className),
    )}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={twMerge(
      clsx(
        'relatve flex w-full cursor-pointer items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none text-type-950',
        className,
      ),
    )}
    {...props}
  >
    <span className="absolute left-2 flex size-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <IconCheck className="size-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={twMerge(clsx('-mx-1 my-1 h-px', className))}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const Select = SelectPrimitive.Root;`;
const selectUsageCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
`;
const selectusageTwoCode = `<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
`;
const selectCode = `import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/select';

export function Test(){
return(
   <Select>
        <div className="flex flex-col gap-1">
          <Label>Label</Label>
          <SelectTrigger className="w-[20rem]">
            <SelectValue placeholder="Text" />
          </SelectTrigger>
        </div>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
  </Select>
)
}
`;
export {
  selectCode,
  selectSecondStepCode,
  selectUsageCode,
  selectusageTwoCode,
};
// separator code
const separatorCode = `import {
  Separator,
} from '../components/separator';

export function Test(){
return(
    <div className="flex gap-6">
        <Separator className="w-[13.75rem]" />
        <Separator orientation="vertical" className="h-[13.75rem]" />
      </div>
)
}`;

const separatorSecodnStepCode = `import * as SeparatorPrimitive from '@radix-ui/react-separator';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = 'horizontal', decorative = true, ...props },
    ref,
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={twMerge(
        clsx(
          'shrink-0 bg-stroke-200',
          orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
          className,
        ),
      )}
      {...props}
    />
  ),
);

export { Separator }
`;

const separatoUsageCode = `import {
  Separator,
} from "../components/separator";`;

const separatorUsageTwoCode = `<Separator />`;
export {
  separatoUsageCode,
  separatorCode,
  separatorSecodnStepCode,
  separatorUsageTwoCode,
};

// slider code

const sliderCode = `import { Slider } from '../components/slider'; 
function Test(){
  return (
    <Slider defaultValue={[20]} />
  )
}
`;
const slidersecondStepCode = `
import * as SliderPrimitive from '@radix-ui/react-slider';
import clsx from 'clsx';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';

interface SliderProps
  extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  className?: string;
}
const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={twMerge(clsx('relative flex w-full items-center', className))}
    {...props}
  >
    <SliderPrimitive.Track className="relative p-1 w-full overflow-hidden rounded-full bg-container-100">
      <SliderPrimitive.Range className="absolute h-full bg-accent-800 -translate-y-1/2" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="size-6 rounded-full border border-stroke-200 bg-container-50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 flex items-center justify-center">
      <svg
        width="10"
        height="12"
        viewBox="0 0 10 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1C0 0.447715 0.447715 0 1 0C1.55228 0 2 0.447715 2 1V11C2 11.5523 1.55228 12 1 12C0.447715 12 0 11.5523 0 11V1Z"
          fill="#E5E5E5"
        />
        <path
          d="M4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V11C6 11.5523 5.55228 12 5 12C4.44772 12 4 11.5523 4 11V1Z"
          fill="#E5E5E5"
        />
        <path
          d="M8 1C8 0.447715 8.44772 0 9 0C9.55228 0 10 0.447715 10 1V11C10 11.5523 9.55228 12 9 12C8.44772 12 8 11.5523 8 11V1Z"
          fill="#E5E5E5"
        />
      </svg>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider, type SliderProps };
`;

const sliderUsageCode = `import { Slider } from '../components/slider';`;
const sliderUsageTwoCode = `<Slider defaultValue={[20]} />`;
export {
  sliderCode,
  sliderUsageCode,
  sliderUsageTwoCode,
  slidersecondStepCode,
};
