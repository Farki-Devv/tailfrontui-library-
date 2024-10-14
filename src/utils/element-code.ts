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

const alertUsageTwoCode = `function Test() {
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

export default Test;`;
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
const avatarUsageTwoCode = `function Test() {
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

export default Test;`;
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
const badgeUsageTwoCode = `function Test() {
  return (
    <Badge variant="default">Badge</Badge>
  );
}`;
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
const breadcrumbUsageTwoCode = `
function Test() {
  return (
   <Breadcrumb>
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
      </Breadcrumb>
  )
}`;
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
const buttonUsageTwoCode = `function Test() {
  return (
    <Button variant="primary">Button</Button>
  );
}`;
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
const cardUsageTwoCode = `function Test() {
  return (
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
      </Card>
  );
}`;
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

const drawerUsageTwoCode = `export function Test() {
  return (
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
      </Drawer>
  );
}
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
const dropdownmenuUsageTwoCode = `function Test(){
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
  export {Test}
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
