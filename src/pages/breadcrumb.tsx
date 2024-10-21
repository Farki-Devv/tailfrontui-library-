import { Tabs } from '@radix-ui/react-tabs';
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/breadcrumb';
import Div from '../components/div';
import { TabsContent, TabsList, TabsTrigger } from '../components/tabs';
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
  breadcrumbCode,
  breadcrumbcodeTwo,
  breadcrumbSecondStepCode,
  breadcrumbUsageCode,
  breadcrumbUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function BreadcrumbPageList() {
  return (
    <ElementsContainer>
      <ElementsBreadcrumb page="Breadcrumb" />
      {/* Element name */}
      <ElementsName
        name="Breadcrumb"
        description="Specifies the path to the current resource using the connection hierarchy. install the component and use it in sequence"
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
            <Code>npm install tailfront@latest elements breadcrumb</Code>
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
                <Code>npm install tailfront@latest elements breadcrumb</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{breadcrumbSecondStepCode}</Code>
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
        <Code>{breadcrumbUsageCode}</Code>
        <Code>{breadcrumbUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Default',
              Description: 'variant',
              Type: 'string',
              Default: 'false',
              Version: '1',
            },
          ]}
        />
      </ElementsRef>
      {/* Examples */}
      <ElementsExample>
        <ExampleTwo
          header="Default"
          description="Use the size prop to control size of the dialog. It will affect the padding and border-radius of the Content."
          size="sm"
        />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default BreadcrumbPageList;
const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={breadcrumbCode}
    >
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbEllipsis />
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Page</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
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
      elementCode={breadcrumbcodeTwo}
    >
      <Breadcrumb className="text-stroke-400">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbEllipsis />/
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Page</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </ElementsExampleTabs>
  );
};
