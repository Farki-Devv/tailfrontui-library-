import Div from '../components/div';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { ToggleGroup, ToggleGroupItem } from '../components/toggle-group';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsExampleTabs from '../shared/elements-example-tabs';
import { ElementsName } from '../shared/elements-name';
import ElementsRef from '../shared/elements-ref'
import { ElementsReference } from '../shared/elements-reference'
import { ElementsUsage } from '../shared/elements-usage'
import Code from '../utils/code';
import {
  elementsManualTailwind,
  toggleGroupCode,
  toggleGroupSecondStepCode,
  toggleGroupUsageCode,
  toggleGroupUsageTwoCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination'
import { ExampleProps } from '../utils/type';

function ToggleGroupPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Toggle Group" />
      {/* Element name */}
      <ElementsName
        name="Toggle Group"
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
            <Code>npm install tailfront@latest elements toggle-group</Code>
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
                <Code>npm install tailfront@latest elements toggle-group</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{toggleGroupSecondStepCode}</Code>
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
        <Code>{toggleGroupUsageCode}</Code>
        <Code>{toggleGroupUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Default',
              Description: '',
              Type: 'string',
              Default: 'true',
              Version: '1',
            },
          ]}
        />
      </ElementsRef>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default ToggleGroupPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={toggleGroupCode}
    >
      <div className="flex flex-col gap-6">
        <ToggleGroup type="single">
          <ToggleGroupItem value="a">A</ToggleGroupItem>
          <ToggleGroupItem value="b">B</ToggleGroupItem>
          <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>

        <ToggleGroup type="single">
          <ToggleGroupItem variant={'outline'} value="a">
            A
          </ToggleGroupItem>
          <ToggleGroupItem variant={'outline'} value="b">
            B
          </ToggleGroupItem>
          <ToggleGroupItem variant={'outline'} value="c">
            C
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </ElementsExampleTabs>
  );
};
