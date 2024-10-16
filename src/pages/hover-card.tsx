import { IconCalendarWeek } from '@tabler/icons-react';
import { Button } from '../components/button';
import Div from '../components/div';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../components/hover-card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsExampleTabs from '../shared/elements-example-tabs';
import { ElementsName } from '../shared/elements-name';
import ElementsRef from '../shared/elements-ref';
import { ElementsReference } from '../shared/elements-reference';
import { ElementsUsage } from '../shared/elements-usage';
import Code from '../utils/code';
import {
  elementsManualTailwind,
  hovercardCode,
  hovercardSecondStepCode,
  hovercardUsageCode,
  hovercardUsageTwoCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function HoverCardPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Hover Card" />
      {/* Element name */}
      <ElementsName
        name="Hover Card"
        description="A collection of vertically arranged interactive headers, each of which reveals a piece of content. Check it out by Example"
      >
        <Example padding="p-[10px]" />
      </ElementsName>
      {/* Installation */}
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
            <Code>npm install tailfront@latest elements hover-card</Code>
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
                <Code>npm install tailfront@latest elements hover-card</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{hovercardSecondStepCode}</Code>
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
        <Code>{hovercardUsageCode}</Code>
        <Code>{hovercardUsageTwoCode}</Code>
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

export default HoverCardPage;
const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={hovercardCode}
    >
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
    </ElementsExampleTabs>
  );
};
