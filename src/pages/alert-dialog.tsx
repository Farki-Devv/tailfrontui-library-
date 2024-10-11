import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/alert-dialog';
import { Button } from '../components/button';
import Div from '../components/div';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../elements/tabs';
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
  alertDialogCode,
  alertDialogSecondStepCode,
  alertDialogUsageCode,
  alertDialogUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function AlertDialogPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Alert Dialog" />
      {/* Element name */}
      <ElementsName
        name="Alert Dialog"
        description="The Alert Dialog component provides a modal dialog that captures
            user attention for imp"
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
                <Code>{alertDialogSecondStepCode}</Code>
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
        <Code className="text-base">{alertDialogUsageCode}</Code>
        <Code>{alertDialogUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API Reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'dashed',
              Description: 'Whether line is dashed, dotted or solid',
              Type: 'string',
              Default: 'true',
              Version: '2.12.12',
            },
            {
              Property: 'orientation',
              Description:
                'The margin-left/right between the title and its closest border',
              Type: 'boolean',
              Default: 'true',
              Version: '1.0.0',
            },
            {
              Property: 'orientationMargin',
              Description: 'The direction type of divider',
              Type: 'CSSProperties',
              Default: 'false',
              Version: '1.0.0.122',
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
        />
        <Example
          header="Dashed"
          description="Use the size prop to control size of the dialog. It will affect the padding and border-radius of the Content. Use it in conjunction with the width, minWidth and maxWidth props to control the width of the dialog."
          size="sm"
        />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}
export default AlertDialogPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={alertDialogCode}
    >
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </ElementsExampleTabs>
  );
};
