import { Copy } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/accordion';
import { Button } from '../components/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { ElementHeader } from '../shared/element-header';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsManualTailwind from '../shared/elements-manual-tailwind';
import { ElementsName } from '../shared/elements-name';
import { AccordionCode } from '../utils';
import Code from '../utils/code';
import { ExampleProps } from '../utils/type';
function AccordionPage() {
  return (
    <ElementsContainer className="w-full">
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Accordion" />
      {/* Element name */}
      <ElementsName
        name="Accordion"
        description="A collection of vertically arranged interactive headers, each of which reveals a piece of content. Click to view the information"
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
                <Code>{``}</Code>
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
    </ElementsContainer>
  );
}

export default AccordionPage;

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
            <Accordion
              type="single"
              collapsible
              defaultValue="1"
              className="w-[324px]"
            >
              <AccordionItem value="1">
                <AccordionTrigger>Title</AccordionTrigger>
                <AccordionContent>
                  The leaves danced gently in the breeze, their rustling a
                  symphony of nature’s.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="2">
                <AccordionTrigger>Title</AccordionTrigger>
                <AccordionContent>
                  The leaves danced gently in the breeze, their rustling a
                  symphony of nature’s.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>

        {/* Element code */}
        <TabsContent value="code">
          <Code>
            {AccordionCode}
          </Code>
        </TabsContent>
      </Tabs>
    </div>
  );
};
