import Div from '../components/div';
import { ScrollArea } from '../components/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsExampleTabs from '../shared/elements-example-tabs';
import { ElementsName } from '../shared/elements-name';
import ElementsRef from '../shared/elements-ref'
import { ElementsReference } from '../shared/elements-reference'
import { ElementsUsage } from '../shared/elements-usage';
import Code from '../utils/code';
import {
  elementsManualTailwind,
  scrollareaCode,
  scrollareaUsageCode,
  scrollareaUsageTwoCode,
  scrollareSecondStepCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination'
import { ExampleProps } from '../utils/type';

function ScrollAreaPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Accordion" />
      {/* Element name */}
      <ElementsName
        name="Accordion"
        description="A collection of vertically arranged interactive headers, each of which reveals a piece of content. Check it out by Example"
      >
        <Example padding="p-[10px]" />
      </ElementsName>
      <Div>
        <Tabs defaultValue="cli" className="w-full flex flex-col gap-6">
          <div className="flex gap-3">
            <TabsList>
              <TabsTrigger value="cli">CLI</TabsTrigger>
              <TabsTrigger value="manual">Manual</TabsTrigger>
            </TabsList>
          </div>
          {/* Installation CLI */}
          <TabsContent value="cli">
            <Code>npm install tailfront@latest elements accordion</Code>
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
                <Code>npm install tailfront@latest elements accordion</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{scrollareSecondStepCode}</Code>
              </ElementSteps>
              {/* Third step */}
              <ElementSteps
                step={3}
                description="Update tailwind.config.js"
                secondDescription="Add the following animations to your tailwind.config.js file:"
                className="pb-4"
              >
                <Code>{elementsManualTailwind}</Code>
              </ElementSteps>
            </div>
          </TabsContent>
        </Tabs>
      </Div>
      {/* Usage */}
      <ElementsUsage>
        <Code>{scrollareaUsageCode}</Code>
        <Code>{scrollareaUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Default',
              Description: '',
              Type: 'string',
              Default: 'false',
              Version: '1',
            },
          ]}
        />
      </ElementsRef>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default ScrollAreaPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  const tags = Array.from({ length: 11 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`,
  );
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={scrollareaCode}
    >
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
    </ElementsExampleTabs>
  );
};
