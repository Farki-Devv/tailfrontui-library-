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
  elementsManualTailwind,
  tabsCode,
  tabsSecondStepCode,
  tabsTwoCode,
  tabsUsageCode,
  tabsUsageTwoCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function TabsPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Tabs" />
      {/* Element name */}
      <ElementsName
        name="Tabs"
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
            <Code>npm install tailfront@latest elements tabs</Code>
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
                <Code>npm install tailfront@latest elements tabs</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{tabsSecondStepCode}</Code>
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
        <Code>{tabsUsageCode}</Code>
        <Code>{tabsUsageTwoCode}</Code>
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

export default TabsPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={tabsCode}
    >
      <Tabs defaultValue="tabone" className="w-[25rem]">
        <TabsList>
          <TabsTrigger value="tabone">Tab</TabsTrigger>
          <TabsTrigger value="tabtwo">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tabone">
          Make changes to your account here
        </TabsContent>
        <TabsContent value="tabtwo">Change your password here.</TabsContent>
      </Tabs>
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
      elementCode={tabsTwoCode}
    >
      <Tabs defaultValue="tabone" className="w-[25rem]">
        <TabsList>
          <TabsTrigger value="tabone">Tab</TabsTrigger>
          <TabsTrigger value="tabtwo">Tab</TabsTrigger>
          <TabsTrigger value="tabthree">Tab</TabsTrigger>
          <TabsTrigger value="tabfour">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tabone">
          Make changes to your account here
        </TabsContent>
        <TabsContent value="tabtwo">Change your password here.</TabsContent>
        <TabsContent value="tabthree">
          Make changes to your account here
        </TabsContent>
        <TabsContent value="tabfour">Change your password here.</TabsContent>
      </Tabs>
    </ElementsExampleTabs>
  );
};
