import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/table';

// ElementReference interfeysi, bitta qator uchun
interface ElementReference {
  Property: string;
  Description: string;
  Type: string;
  Default: string;
  Version: string;
}

// Elementlarni dinamik ravishda uzatish
export function ElementsReference(props: { elements: ElementReference[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[178px] py-3">Property</TableHead>
          <TableHead className="w-[240px]">Description</TableHead>
          <TableHead className="w-[178px]">Type</TableHead>
          <TableHead className="w-[178px]">Default</TableHead>
          <TableHead className="text-right">Version</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.elements.map((element, index) => (
          <TableRow key={index} className="font-sm font-normal">
            <TableCell className="text-left">{element.Property}</TableCell>
            <TableCell className="text-left">{element.Description}</TableCell>
            <TableCell className="text-left text-purple-600">
              {element.Type}
            </TableCell>
            <TableCell
              className={`text-left ${
                element.Default === 'false' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {element.Default}
            </TableCell>
            <TableCell className="text-right">{element.Version}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
