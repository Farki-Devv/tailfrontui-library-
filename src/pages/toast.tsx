import { Button } from '../components/button';
import Div from '../components/div';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { useToast } from '../components/use-toast';
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
  toastCode,
  toastFiverthStepCode,
  toastFourthStepCode,
  toastSecondStepCode,
  toastThirdStepCode,
  toastTwoCode,
  toastUsageCode,
  toastUsageTwoCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function ToastPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Toast" />
      {/* Element name */}
      <ElementsName
        name="Toast"
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
            <Code>npm install tailfront@latest elements toast</Code>
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
                <Code>npm install tailfront@latest elements toast</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps step={2} description="toast.tsx" className="pb-4">
                <Code>{toastSecondStepCode}</Code>
              </ElementSteps>
              {/* Third step */}
              <ElementSteps step={3} description="toaster.tsx" className="pb-4">
                <Code>{toastThirdStepCode}</Code>
              </ElementSteps>
              {/* Fourth step */}
              <ElementSteps
                step={4}
                description="use-toast.tsx"
                className="pb-4"
              >
                <Code>{toastFourthStepCode}</Code>
              </ElementSteps>
              {/* fiveth step */}
              <ElementSteps
                step={5}
                description="Add toaster component"
                className="pb-4"
              >
                <Code>{toastFiverthStepCode}</Code>
              </ElementSteps>
              {/* Sixth step */}
              <ElementSteps
                step={6}
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
        <Code>{toastUsageCode}</Code>
        <Code>{toastUsageTwoCode}</Code>
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
            {
              Property: 'Destructive',
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
        <ExampleTwo header="Destructive" size="sm" />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default ToastPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  const { toast } = useToast();
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={toastCode}
    >
      <Button
        onClick={() => {
          toast({
            title: 'Title',
            description: 'Subtitle',
            action: (
              <Button variant={'outline'} className="w-[3.438rem] h-8 text-xs">
                Button
              </Button>
            ),
          });
        }}
      >
        Show Toast
      </Button>
    </ElementsExampleTabs>
  );
};

const ExampleTwo = ({ header, description, padding, size }: ExampleProps) => {
  const { toast } = useToast();
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={toastTwoCode}
    >
      <Button
        variant={'destructive'}
        onClick={() => {
          toast({
            title: 'Title',
            description: 'Subtitle',
            variant: 'destructive',
            action: (
              <Button
                variant={'destructive'}
                className="w-[3.438rem] h-8 text-xs"
              >
                Button
              </Button>
            ),
          });
        }}
      >
        Show Toast
      </Button>
    </ElementsExampleTabs>
  );
};
