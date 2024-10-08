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
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../elements/tabs';

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
          <Tabs defaultValue="preview" className="w-full">
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
              <div className="p-32 rounded-lg border squircle">
                <AlertDialog>
                  <AlertDialogTrigger>Open</AlertDialogTrigger>
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
    </div>
  );
}

export default AlertDialogPage;
