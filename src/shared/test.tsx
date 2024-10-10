import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/accordion';
function Test() {
  return (
    <div>
      <Accordion type="single" collapsible defaultValue="1">
        <AccordionItem value="1">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>
            The leaves danced gently in the breeze, their rustling a symphony of
            nature’s.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="2">
          <AccordionTrigger>Title</AccordionTrigger>
          <AccordionContent>
            The leaves danced gently in the breeze, their rustling a symphony of
            nature’s.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Test;
