import { Avatar, AvatarFallback, AvatarImage } from '../components/avatar';
import Div from '../components/div';
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
  avatarCode,
  avatarSecondStepCode,
  avatarUsageCode,
  avatarUsageTwoCode,
  elementsManualTailwind,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';

function AvatarPage() {
  return (
    <ElementsContainer className="w-full">
      <ElementsBreadcrumb page="Avatar" />
      {/* Element name */}
      <ElementsName
        name="Avatar"
        description="A stock image element to represent the user. Copy the code and use in sequence or install and use in sequence"
      >
        <Example />
      </ElementsName>{' '}
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
            <Code>npm install tailfront@latest elements avatar</Code>
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
                <Code className="w-full">
                  npm install tailfront@latest elements avatar
                </Code>
              </ElementSteps>
              {/* Second step */}
              <ElementSteps
                step={2}
                description="Copy and paste this code into your project."
                className="pb-4"
              >
                <Code>{avatarSecondStepCode}</Code>
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
        <Code>{avatarUsageCode}</Code>
        <Code>{avatarUsageTwoCode}</Code>
      </ElementsUsage>
      {/* API reference table */}
      <ElementsRef>
        <ElementsReference
          elements={[
            {
              Property: 'Default',
              Description: 'Default avatar',
              Type: 'string',
              Default: 'true',
              Version: '1',
            },
          ]}
        />
      </ElementsRef>
      <NavigationButtons />
    </ElementsContainer>
  );
}

export default AvatarPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={avatarCode}
    >
      <Avatar>
        <AvatarImage
          src="https://avatars.githubusercontent.com/u/173272923?s=200&v=4"
          alt="@tailfront"
        />
        <AvatarFallback>FG</AvatarFallback>
      </Avatar>
    </ElementsExampleTabs>
  );
};