import { Badge } from '../components/badge';
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
  badgeCode,
  badgeSecondStepCode,
  badgeUsageCode,
  badgeUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function BadgePage() {
  return (
    <ElementsContainer>
      <ElementsBreadcrumb page="Badge" />
      {/* Element name */}
      <ElementsName
        name="Badge"
        description="A collection of vertically arranged interactive headers, each of which reveals a piece of content. Check it out by Example"
      >
        <Example padding="p-[10px]" variant={'default'} />
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
            <Code>npm install tailfront@latest elements accordion</Code>
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
                <Code>npm install tailfront@latest elements accordion</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{badgeSecondStepCode}</Code>
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
        <Code>{badgeUsageCode}</Code>
        <Code>{badgeUsageTwoCode}</Code>
      </ElementsUsage>
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Default',
              Description: 'variant',
              Type: 'string',
              Default: 'true',
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
              Property: 'Destructive',
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
          ]}
        />
      </ElementsRef>
      {/* Examples */}
      <ElementsExample>
        <Example header="Destructive" size="sm" variant={'destructive'} />
        <Example header="Outline" size="sm" variant={'outline'} />
        <Example header="Secondary" size="sm" variant={'secondary'} />
        <Example header="Default" size="sm" variant={'default'} />
      </ElementsExample>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default BadgePage;

interface VariantProps extends ExampleProps {
  variant:
    | 'default'
    | 'destructive'
    | 'secondary'
    | 'outline'
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
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={badgeCode}
    >
      <Badge variant={variant}>Badge</Badge>
    </ElementsExampleTabs>
  );
};
