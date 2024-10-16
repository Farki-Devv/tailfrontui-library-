import { Button } from '../components/button';
import Div from '../components/div';
import { Input } from '../components/input';
import { Popover, PopoverContent, PopoverTrigger } from '../components/popover';
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
  elementsManualTailwind,
  popoverCode,
  popoverSecondStepCode,
  popoverusageCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function PopoverPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Popover" />
      {/* Element name */}
      <ElementsName
        name="Popover"
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
            <Code>npm install tailfront@latest elements popover</Code>
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
                <Code>npm install tailfront@latest elements popover</Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{popoverSecondStepCode}</Code>
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
        <Code>{popoverusageCode}</Code>
        <Code>{popoverSecondStepCode}</Code>
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
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default PopoverPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={popoverCode}
    >
      <Popover>
        <PopoverTrigger>
          <Button variant={'outline'}>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-base font-medium">Dimensions</span>
              <span className="text-sm text-type-500">
                Set the dimensions for the layer.
              </span>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">Width</span>
                <Input defaultValue={'100%'} className="w-[194px] h-9" />
              </div>
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">Max. width</span>
                <Input defaultValue={'300px'} className="w-[194px] h-9" />
              </div>
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">height</span>
                <Input defaultValue={'25px'} className="w-[194px] h-9" />
              </div>
              <div className="flex gap-[1.125rem] items-center">
                <span className="w-[4.75rem]">
                  Max. <br /> Height
                </span>
                <Input defaultValue={'none'} className="w-[194px] h-9" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </ElementsExampleTabs>
  );
};
