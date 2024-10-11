import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from '../components/breadcrumb';
interface ElementsBreadcrumbProps {
  page: string;
}
function ElementsBreadcrumb({ page }: ElementsBreadcrumbProps) {
  return (
    <div>
      <Breadcrumb className="text-type-400">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbEllipsis />/
          <BreadcrumbItem>
            <BreadcrumbLink href="/components">Docs</BreadcrumbLink>
          </BreadcrumbItem>
          /
          <BreadcrumbItem>
            <BreadcrumbPage>{page}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default ElementsBreadcrumb;
