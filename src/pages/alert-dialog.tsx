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
} from '../elements/alert-dialog';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from '../elements/breadcrumb';
import { Button } from '../elements/button';
import { Separator } from '../elements/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../elements/tabs';
import Code from '../utils/code';
import React from 'react';

function AlertDialogPage() {
  return (
    <div className="flex flex-col gap-12">
      {/* Breadcrumb element */}
      <Breadcrumb className="text-type-400">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbEllipsis />/
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbItem>
            <BreadcrumbPage>Alert Dialog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Element name */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-semibold text-type-950">
            Alert Dialog
          </span>
          {/* Element description */}
          <p className="text-base text-type-500 font-normal">
            The Alert Dialog component provides a modal dialog that captures
            user attention for important information or actions. It’s ideal for
            warnings, confirmations, or critical messages that require user
            interaction before proceeding.
          </p>
        </div>

        {/* Element content */}
        <div className="flex items-start">
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
              <div className="p-32 h-[27.25rem] flex justify-center items-center rounded-lg border squircle">
                <AlertDialog>
                  <AlertDialogTrigger>
                    <Button>Show Dialog</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
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
            <TabsContent value="code">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Installation */}

      <div className="flex flex-col gap-4">
        <span className="text-2xl font-semibold text-type-950">
          Installation
        </span>
        <Tabs defaultValue="cli" className="w-full flex flex-col gap-6">
          <div className="flex gap-3">
            <TabsList>
              <TabsTrigger value="cli">CLI</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
          </div>

          {/* Installation CLI */}
          <TabsContent value="cli"></TabsContent>

          {/* Installation Manual */}
          <TabsContent value="manual" className="w-full">
            <div className="flex flex-col gap-1">
              {/* First step */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1">
                  <span className="px-4 flex items-center justify-center size-9 text-base bg-container-100 rounded-full aspect-square">
                    1
                  </span>
                  <Separator orientation="vertical" />
                </div>
                <div className="flex flex-col gap-4 w-full pb-8">
                  <span className="text-base text-type-950 font-medium">
                    Please add these required dependencies:
                  </span>
                  <Code>npm install @tailfront-ui/typescript-alert-dialog</Code>
                </div>
              </div>

              {/* Second step */}
              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1">
                  <span className="px-4 flex items-center justify-center size-9 text-base bg-container-100 rounded-full aspect-square">
                    2
                  </span>
                  <Separator orientation="vertical" />
                </div>
                <div className="flex flex-col gap-4 w-full pb-4">
                  <span className="text-base text-type-950 font-medium">
                    Copy and paste this code into your project.
                  </span>
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
	AlertDialogFooter.displayName = 'AlertDialogFooter';
	
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
            `}
                  </Code>
                </div>
              </div>

              {/* Third step */}

              <div className="flex gap-3">
                <div className="flex flex-col items-center gap-1">
                  <span className="px-4 flex items-center justify-center size-9 text-base bg-container-100 rounded-full aspect-square">
                    3
                  </span>
                  <Separator orientation="vertical" />
                </div>
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col text-base">
                    <span className=" text-type-950 font-medium">
                      Update tailwind.config.js
                    </span>
                    <span className="font-normal text-type-500">
                      Add the following animations to your tailwind.config.js
                      ile:
                    </span>
                  </div>
                  <Code>
                    {`
        /** @type {import('tailwindcss').Config} */
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
};
`}
                  </Code>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Usage */}
      <div className="flex flex-col gap-4">
        <span className="text-2xl text-type-950 font-semibold">
          Usage Guidelines
        </span>
        <Code className="text-base">
          {`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert`}
        </Code>

        <Code>
          {`<Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                   You can add components and dependencies to your app using the cli.
                </AlertDescription>
          </Alert>
          `}
        </Code>
      </div>
    </div>
  );
}

export default AlertDialogPage;
