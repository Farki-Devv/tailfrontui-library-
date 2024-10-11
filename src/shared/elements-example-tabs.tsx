import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import Code from '../utils/code';
import CopyButton from '../utils/copyButton';
import { ExampleProps } from '../utils/type';
import { ElementHeader } from './element-header';

interface ElementsExampleTabsProps extends ExampleProps {
  children: React.ReactNode;
  elementCode: string;
}

function ElementsExampleTabs({
  header,
  description,
  padding,
  size,
  children,
  elementCode,
}: ElementsExampleTabsProps) {
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
          <CopyButton elementCode={elementCode} />
        </div>
        {/* Element preview */}
        <TabsContent value="preview">
          <div
            className={`${padding && padding} ${!padding && 'md:px-32'} ${size === 'sm' ? 'h-[20.25rem]' : 'h-[27.25rem]'} w-full flex justify-center items-center rounded-lg border squircle`}
          >
            {children}
          </div>
        </TabsContent>
        {/* Element code */}
        <TabsContent value="code">
          <Code>{elementCode}</Code>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ElementsExampleTabs;
