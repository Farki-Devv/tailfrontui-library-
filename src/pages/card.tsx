import { Button } from '../components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/card';
import Div from '../components/div';
import { Input } from '../components/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { ElementSteps } from '../shared/element-steps';
import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import ElementsExampleTabs from '../shared/elements-example-tabs';
import { ElementsName } from '../shared/elements-name';
import ElementsRef from '../shared/elements-ref';
import { ElementsReference } from '../shared/elements-reference';
import { ElementsUsage } from '../shared/elements-usage';
import Code from '../utils/code';
import {
  cardCode,
  cardSecondStepCode,
  cardUsageCode,
  cardUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function CardPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Card" />
      {/* Element name */}
      <ElementsName
        name="Card"
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
            <Code>npm install tailfront@latest elements card</Code>
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
                <Code>npm install tailfront@latest elements card</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{cardSecondStepCode}</Code>
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
        <Code>{cardUsageCode}</Code>
        <Code>{cardUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Default',
              Type: 'string',
              Default: 'true',
              Version: '1',
              Description: '',
            },
          ]}
        />
      </ElementsRef>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default CardPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={cardCode}
    >
      <Card className="w-[20rem]">
        <CardHeader>
          <CardTitle>Title</CardTitle>
          <CardDescription>Subtitle</CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="Text" />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant={'outline'}>cancel</Button>
          <Button>Done</Button>
        </CardFooter>
      </Card>
    </ElementsExampleTabs>
  );
};
