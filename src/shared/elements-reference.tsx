import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/table";
import React from 'react';

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
        {/* Dinamik qatorlarni props orqali chiqarish */}
        {props.elements.map((element, index) => (
          <TableRow key={index} className="font-sm font-normal">
            <TableCell className="py-3">{element.Property}</TableCell>
            <TableCell className="py-3">{element.Description}</TableCell>
            <TableCell className="py-3 text-purple-600">{element.Type}</TableCell>
            <TableCell
              className={`py-3 ${
                element.Default === 'false' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {element.Default}
            </TableCell>
            <TableCell className="text-right py-3">{element.Version}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
