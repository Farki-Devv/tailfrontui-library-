import { IconBold } from '@tabler/icons-react';
import Div from '../components/div';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { Toggle } from '../components/toggle';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsExampleTabs from '../shared/elements-example-tabs';
import { ElementsName } from '../shared/elements-name';
import { ElementsUsage } from '../shared/elements-usage';
import Code from '../utils/code';
import {
  elementsManualTailwind,
  toggleCode,
  toggleSecondStepCode,
  toggleUsageCode,
  toggleUsageTwoCode,
} from '../utils/element-code';
import { ExampleProps } from '../utils/type';
import ElementsRef from '../shared/elements-ref'
import { ElementsReference } from '../shared/elements-reference'
import { NavigationButtons } from '../utils/pagination'

function TogglePage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Toggle" />
      {/* Element name */}
      <ElementsName
        name="Toggle"
        description="The Alert Dialog component provides a modal dialog that captures user attention for important information or actions. It’s ideal for warnings, confirmations, or critical messages that require user interaction before proceeding."
      >
        <Example />
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
            <Code>npm install tailfront@latest elements toggle</Code>
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
                <Code>npm install tailfront@latest elements toggle</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{toggleSecondStepCode}</Code>
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
        <Code>{toggleUsageCode}</Code>
        <Code>{toggleUsageTwoCode}</Code>
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

export default TogglePage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={toggleCode}
    >
      <Toggle aria-label="Toggle bold">
        <IconBold className="h-4 w-4 text-type-500" />
      </Toggle>
    </ElementsExampleTabs>
  );
};
