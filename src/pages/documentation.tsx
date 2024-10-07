import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../elements/breadcrumb';
import React from 'react';
import { ScrollArea } from '../elements/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../elements/tabs';
function Documentation() {
  const tags = Array.from({ length: 40 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  );
  return (
    <div className="flex gap-10">
      <ScrollArea className="">
        <div className="pr-1.5 h-[400px] w-[246px] space-y-2">
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

      <div className="flex flex-col gap-12 border w-full">
        <Breadcrumb className="text-type-400">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            /
            <BreadcrumbEllipsis />/
            <BreadcrumbItem>
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Alert Dialog</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-3xl font-semibold text-type-950">
              Alert Dialog
            </span>
            <p className="text-base text-type-500">
              The Alert Dialog component provides a modal dialog that captures
              user attention for important information or actions. It’s ideal
              for warnings, confirmations, or critical messages that require
              user interaction before proceeding.
            </p>
          </div>
          <div>
            <Tabs defaultValue="preview" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>
              <TabsContent value="preview">
                Make changes to your account here.
              </TabsContent>
              <TabsContent value="code">Change your password here.</TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
