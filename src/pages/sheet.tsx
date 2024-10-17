import { Button } from '../components/button';
import Div from '../components/div';
import { Input } from '../components/input';
import { Separator } from '../components/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/sheet';
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
  elementsManualTailwind,
  sheetCode,
  sheetSecondStepCode,
  sheetTwoCode,
  sheetUsageCode,
  sheetUsageTwoCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function SheetPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Sheet" />
      {/* Element name */}
      <ElementsName
        name="Sheet"
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
            <Code>npm install tailfront@latest elements sheet</Code>
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
                <Code>npm install tailfront@latest elements sheet</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{sheetSecondStepCode}</Code>
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
        <Code>{sheetUsageCode}</Code>
        <Code>{sheetUsageTwoCode}</Code>
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
        <ExampleTwo side={'left'} header="Default" size="sm" />
        <ExampleTwo side={'right'} header="Default" size="sm" />
        <ExampleTwo side={'top'} header="Default" size="sm" />
        <ExampleTwo side={'bottom'} header="Default" size="sm" />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default SheetPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={sheetCode}
    >
      <Sheet>
        <SheetTrigger>
          <Button>Open</Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <Separator />
          <div className="flex flex-col gap-1">
            <span className="text-sm">Name</span>
            <Input className="h-9" defaultValue={'Komol Kuchkarov'} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm">Username</span>
            <Input className="h-9" defaultValue="@kuhckarov" />
          </div>
          <Button className="ml-auto">Save Changes</Button>
        </SheetContent>
      </Sheet>
    </ElementsExampleTabs>
  );
};

interface sheetSide extends ExampleProps {
  side: 'top' | 'bottom' | 'left' | 'right' | null | undefined;
}
const ExampleTwo = ({
  header,
  description,
  padding,
  size,
  side,
}: sheetSide) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={sheetTwoCode}
    >
      <Sheet>
        <SheetTrigger>
          <Button>{side}</Button>
        </SheetTrigger>
        <SheetContent side={side} className="flex flex-col gap-4">
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <Separator />
          <div className="flex flex-col gap-1">
            <span className="text-sm">Name</span>
            <Input className="h-9" defaultValue={'Komol Kuchkarov'} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm">Username</span>
            <Input className="h-9" defaultValue="@kuhckarov" />
          </div>
          <Button className="ml-auto">Save Changes</Button>
        </SheetContent>
      </Sheet>
    </ElementsExampleTabs>
  );
};
