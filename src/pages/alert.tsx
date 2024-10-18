import { Circle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/alert';
import Div from '../components/div';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
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
  alertCode,
  alertSecondStepCode,
  alertUsageCode,
  alertUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function AlertPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Alert" />
      {/* Element name */}
      <ElementsName
        name="Alert"
        description="Displays a callout for user attention."
      >
        <Example variantAlert="default" />
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
            <Code>npm install tailfront@latest elements alert</Code>
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
                <Code>npm install tailfront@latest elements alert</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{alertSecondStepCode}</Code>
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
        <Code>{alertUsageCode}</Code>
        <Code>{alertUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'default',
              Description: 'modal that expects response',
              Type: 'string',
              Default: 'true',
              Version: '1',
            },
            {
              Property: 'destructive',
              Description: 'modal that expects response',
              Type: 'string',
              Default: 'false',
              Version: '1',
            },
          ]}
        />
      </ElementsRef>
      {/* Examples */}
      <ElementsExample>
        <Example
          header="Default"
          description="Use the size prop to control size of the dialog. It will affect the padding and border-radius of the Content."
          size="sm"
          variantAlert={'destructive'}
        />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default AlertPage;

const Example = ({
  header,
  description,
  padding,
  size,

  variantAlert,
}: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={alertCode}
    >
      <Alert className="md:w-[532px]" variant={variantAlert}>
        <Circle className="h-4 w-4" />
        <AlertTitle>Title</AlertTitle>
        <AlertDescription
          className={`${variantAlert == 'default' ? `text-type-500` : 'text-red-800'}`}
        >
          The leaves danced gently in the breeze, their rustling a symphony of
          nature’s.
        </AlertDescription>
      </Alert>
    </ElementsExampleTabs>
  );
};
