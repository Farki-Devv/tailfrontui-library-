import { Button } from '../components/button';
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
  buttonSecondStepCode,
  buttonUsageCode,
  buttonUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function ButtonPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb element */}
      <ElementsBreadcrumb page="Button" />
      {/* Element name */}
      <ElementsName
        name="Button"
        description="The Alert Dialog component provides a modal dialog that captures
            user attention for imp"
      >
        <Example variant={'primary'} />
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
            <Code>npm install tailfront@latest elements button</Code>
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
                <Code>npm install tailfront@latest elements button</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{buttonSecondStepCode}</Code>
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
        <Code>{buttonUsageCode}</Code>
        <Code>{buttonUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Primary',
              Description: 'variant',
              Type: 'string',
              Default: 'true',
              Version: '1',
            },
            {
              Property: 'destructive',
              Description: 'variant',
              Type: 'string',
              Default: 'false',
              Version: '1',
            },
            {
              Property: 'Outline',
              Description: 'variant',
              Type: 'string',
              Default: 'false',
              Version: '1',
            },
            {
              Property: 'Secondary',
              Description: 'variant',
              Type: 'string',
              Default: 'false',
              Version: '1',
            },
            {
              Property: 'Ghost',
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
        <Example header="Destructive" size="sm" variant="destructive" />
        <Example header="Outline" size="sm" variant="outline" />
        <Example header="Ghost" size="sm" variant="ghost" />
        <Example header="Primary" size="sm" variant="primary" />
        <Example header="Secondary" size="sm" variant="secondary" />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default ButtonPage;
interface VariantProps extends ExampleProps {
  variant:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'ghost'
    | null
    | undefined;
}
const Example = ({
  header,
  description,
  padding,
  size,
  variant,
}: VariantProps) => {
  const buttonCode = `import { Button } from '../components/button';
function Test() {
  return (
    <div>
      <Button variant={${variant}}>Button</Button>
    </div>
  );
}
export { Test };`;
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={buttonCode}
    >
      <Button variant={variant}>Button</Button>
    </ElementsExampleTabs>
  );
};
