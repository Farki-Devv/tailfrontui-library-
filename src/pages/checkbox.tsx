import { Checkbox } from '../components/checkbox';
import Div from '../components/div';
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
  checkboxSecondStepCode,
  checkboxUsageCode,
  checkboxUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function CheckboxPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Checkbox" />
      {/* Element name */}
      <ElementsName
        name="Checkbox"
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
            <Code>npm install tailfront@latest elements checkbox</Code>
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
                <Code>npm install tailfront@latest elements checkbox</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{checkboxSecondStepCode}</Code>
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
        <Code className="text-base">{checkboxUsageCode}</Code>
        <Code>{checkboxUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API Reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Default',
              Type: 'string',
              Default: 'false',
              Version: '2.12.12',
              Description: '',
            },
          ]}
        />
      </ElementsRef>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default CheckboxPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={''}
    >
      <div className="flex gap-2 items-center">
        <Checkbox />
        <span className="text-sm">Accept terms and conditions</span>
      </div>
    </ElementsExampleTabs>
  );
};
