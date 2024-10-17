import Div from '../components/div';
import { Label } from '../components/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { Textarea } from '../components/textarea';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsExample from '../shared/elements-example';
import ElementsExampleTabs from '../shared/elements-example-tabs';
import { ElementsName } from '../shared/elements-name';
import ElementsRef from '../shared/elements-ref';
import { ElementsReference } from '../shared/elements-reference';
import { ElementsUsage } from '../shared/elements-usage';
import Code from '../utils/code';
import {
  elementsManualTailwind,
  textareaCode,
  textareaSecondStepCode,
  textareaTwoCode,
  textareaUsageCode,
  textareUsageTwoCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function TextareaPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Text Area" />
      {/* Element name */}
      <ElementsName
        name="Text Area"
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
            <Code>npm install tailfront@latest elements textarea</Code>
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
                <Code>npm install tailfront@latest elements textarea</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{textareaSecondStepCode}</Code>
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
        <Code>{textareaUsageCode}</Code>
        <Code>{textareUsageTwoCode}</Code>
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
      {/* Examples */}
      <ElementsExample>
        <ExampleTwo header="Default" size="sm" />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default TextareaPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={textareaCode}
    >
      <div className="w-[17.5rem] h-[4.5rem]">
        <Label className="text-sm h-5">Label</Label>
        <Textarea placeholder="Text" />
      </div>
    </ElementsExampleTabs>
  );
};
const ExampleTwo = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={textareaTwoCode}
    >
      <div className="w-[17.5rem] h-[4.5rem]">
        <Label className="text-sm h-5">Your message</Label>
        <Textarea placeholder="Enter your message" />
        <span className="text-xs text-type-400">
          Your message will be copied to the support team.
        </span>
      </div>
    </ElementsExampleTabs>
  );
};
