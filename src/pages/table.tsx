import ElementsBreadcrumb from '../shared/elements-breadcrumb';
import ElementsContainer from '../shared/elements-container';
import { ElementsName } from '../shared/elements-name';

function TablePage() {
  return (
    <ElementsContainer>
      {/* Breadcrumb  element*/}
      <ElementsBreadcrumb page="Table" />
      {/* Element name */}
      <ElementsName
        name="Table"
        description="A collection of vertically arranged interactive headers, each of which reveals a piece of content. Check it out by Example"
      >
        <Example padding="p-[10px]" />
      </ElementsName>
    </ElementsContainer>
  );
}

export default TablePage;

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/table';
import ElementsExampleTabs from '../shared/elements-example-tabs';
import { ExampleProps } from '../utils/type';

const invoices = [
  {
    invoice: 'INV001',
    paymentStatus: 'Paid',
    totalAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    invoice: 'INV002',
    paymentStatus: 'Pending',
    totalAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    invoice: 'INV003',
    paymentStatus: 'Unpaid',
    totalAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
];

export function Example({ header, description, padding, size }: ExampleProps) {
  return (
    <ElementsExampleTabs
      size={size}
      header={header}
      description={description}
      padding={padding}
      elementCode={''}
    >
      <Table className="w-[551px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[128px]">Invoice</TableHead>
            <TableHead className="w-[128px]">Status</TableHead>
            <TableHead className="w-[167px]">Method</TableHead>
            <TableHead className="w-[128px] text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </ElementsExampleTabs>
  );
}
