import Div from '../components/div';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../components/resizable';
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
  resizableCode,
  resizableSecondStepCode,
  resizableThreeCode,
  resizableTwoCode,
  resizableUsageCode,
  resizableUsageCodeTwo,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function Resizable() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Resizable" />
      {/* Element name */}
      <ElementsName
        name="Resizable"
        description="A collection of vertically arranged interactive headers, each of which reveals a piece of content. Check it out by Example"
      >
        <Example padding="p-[10px]" />
      </ElementsName>
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
            <Code>npm install tailfront@latest elements resizable</Code>
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
                <Code>npm install tailfront@latest elements resizable</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{resizableSecondStepCode}</Code>
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
        <Code>{resizableUsageCode}</Code>
        <Code>{resizableUsageCodeTwo}</Code>
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
        <ExampleThree header="Default" size="sm" />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default Resizable;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={resizableCode}
    >
      <div className="h-[208px]">
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md h-[208px] rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={50}>
                <div className="flex items-center justify-center h-full">
                  <span>One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={50}>
                <div className="flex items-center justify-center h-full">
                  Two
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <div className="flex items-center justify-center h-full">
              <span>Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
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
      elementCode={resizableTwoCode}
    >
      <div className="h-[208px]">
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md h-[208px] rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex items-center justify-center h-full">
                  <span>One</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex items-center justify-center h-full">
                  Two
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </ElementsExampleTabs>
  );
};

const ExampleThree = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={resizableThreeCode}
    >
      <div className="h-[208px]">
        <ResizablePanelGroup
          direction="horizontal"
          className="max-w-md h-[208px] rounded-lg border md:min-w-[450px]"
        >
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel defaultSize={30}>
              <div className="flex items-center justify-center h-full">
                <span>Sidebar</span>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle={true} />
            <ResizablePanel defaultSize={70}>
              <div className="flex items-center justify-center h-full">
                Content
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanelGroup>
      </div>
    </ElementsExampleTabs>
  );
};
