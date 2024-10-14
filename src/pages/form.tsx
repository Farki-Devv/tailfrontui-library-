import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '../components/button';
import Div from '../components/div';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/form';
import { Input } from '../components/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';
import { Textarea } from '../components/textarea';
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
  formCode,
  formSecondStepCode,
  formUsageCode,
  formUsageTwoCode,
} from '../utils/element-code';
import { NavigationButtons } from '../utils/pagination';
import { ExampleProps } from '../utils/type';
function FormPage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Form" />
      {/* Element name */}
      <ElementsName
        name="Form"
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
                <Code>{formSecondStepCode}</Code>
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
        <Code>{formUsageCode}</Code>
        <Code>{formUsageTwoCode}</Code>
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

export default FormPage;

const Example = ({ header, description, padding, size }: ExampleProps) => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={formCode}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="w-[17.5rem]"
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </ElementsExampleTabs>
  );
};

const ExampleTwo = ({ header, description, padding, size }: ExampleProps) => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={formCode}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center gap-2"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="w-[11.8rem] h-9"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </ElementsExampleTabs>
  );
};

const ExampleThree = ({ header, description, padding, size }: ExampleProps) => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: 'Username must be at least 2 characters.',
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={formCode}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bio</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your username"
                    {...field}
                    className="w-[17.5rem] h-[4.5rem]"
                  />
                </FormControl>
                <FormDescription>
                  You can @mention other users and organizations.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </ElementsExampleTabs>
  );
};
