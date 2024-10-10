import { Copy } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/alert-dialog';
import { Button } from '../elements/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../elements/tabs';
import { ElementHeader } from '../shared/element-header';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsExample from '../shared/elements-example';
import ElementsManualTailwind from '../shared/elements-manual-tailwind';
import { ElementsName } from '../shared/elements-name';
import ElementsRef from '../shared/elements-ref';
import { ElementsReference } from '../shared/elements-reference';
import { ElementsUsage } from '../shared/elements-usage';
import Code from '../utils/code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function AlertDialogPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Alert Dialog" />
      {/* Element name */}
      <ElementsName
        name="Alert Dialog"
        description="The Alert Dialog component provides a modal dialog that captures
            user attention for important information or actions. It’s ideal for
            warnings, confirmations, or critical messages that require user
            interaction before proceeding."
      >
        <Example />
      </ElementsName>
      {/* Installation */}
      <div className="flex flex-col gap-4">
        <ElementHeader size="text-2xl">Installation</ElementHeader>
        <Tabs defaultValue="cli" className="w-full flex flex-col gap-6">
          <div className="flex gap-3">
            <TabsList>
              <TabsTrigger value="cli">CLI</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
          </div>
          {/* Installation CLI */}
          <TabsContent value="cli">
            <Code>npm install tailfront@latest elements alert-dialog</Code>
          </TabsContent>
          {/* Installation Manual */}
          <TabsContent value="manual" className="w-full">
            <div className="flex flex-col gap-1">
              {/* First step */}
              <ElementSteps
                step={1}
                description="Please add these required dependencies:"
                className="pb-8"
              >
                <Code>npm install tailfront@latest elements alert-dialog</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>
                  {`import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
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
};
`}
                </Code>
              </ElementSteps>
              {/* Third step */}
              <ElementSteps
                step={3}
                description="Update tailwind.config.js"
                secondDescription="Add the following animations to your tailwind.config.js file:"
                className="pb-4"
              >
                <ElementsManualTailwind />
              </ElementSteps>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      {/* Usage */}
      <ElementsUsage>
        <Code className="text-base">
          {`import {AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,AlertDialogTitle, AlertDialogTrigger,
  } from "@/components/alert-dialog"`}
        </Code>
        <Code>
          {`<AlertDialog>
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
          `}
        </Code>
      </ElementsUsage>
      {/* API Reference */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'dashed',
              Description: 'Whether line is dashed, dotted or solid',
              Type: 'string',
              Default: 'true',
              Version: '2.12.12',
            },
            {
              Property: 'orientation',
              Description:
                'The margin-left/right between the title and its closest border',
              Type: 'boolean',
              Default: 'true',
              Version: '1.0.0',
            },
            {
              Property: 'orientationMargin',
              Description: 'The direction type of divider',
              Type: 'CSSProperties',
              Default: 'false',
              Version: '1.0.0.122',
            },
          ]}
        />
      </ElementsRef>
      {/* Examples */}
      <ElementsExample>
        <Example
          header="Default"
          description="Use the size prop to control size of the dialog. It will affect the padding and border-radius of the Content."
          size="sm"
        />
        <Example
          header="Dashed"
          description="Use the size prop to control size of the dialog. It will affect the padding and border-radius of the Content. Use it in conjunction with the width, minWidth and maxWidth props to control the width of the dialog."
          size="sm"
        />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}
export default AlertDialogPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <ElementHeader size="text-lg">{header}</ElementHeader>
        <span className="text-base text-type-500">{description}</span>
      </div>
      <Tabs defaultValue="preview" className="w-full flex flex-col gap-2">
        <div className="flex gap-3">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <Button variant="secondary" className="flex gap-2">
            <Copy className="size-4 text-type-500" />
            copy
          </Button>
        </div>

        {/* Element preview */}
        <TabsContent value="preview">
          <div
            className={`${padding && padding} ${!padding && 'px-32'} ${size === 'sm' ? 'h-[20.25rem]' : 'h-[27.25rem]'} flex justify-center items-center rounded-lg border squircle`}
          >
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Show Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </TabsContent>

        {/* Element code */}
        <TabsContent value="code">
          <Code>
            {`import React from 'react'
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
export default Test
`}
          </Code>
        </TabsContent>
      </Tabs>
    </div>
  );
};
