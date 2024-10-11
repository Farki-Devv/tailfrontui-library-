import { Tabs } from '@radix-ui/react-tabs';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import AccordionPage from './pages/accordion';
import Alert from './pages/alert';
import AlertDialogPage from './pages/alert-dialog';
import Avatar from './pages/avatar';
import Badge from './pages/badge';
import Breadcrumb from './pages/breadcrumb';
import Button from './pages/Button';
import Calendar from './pages/calendar';
import Card from './pages/card';
import Carousel from './pages/carousel';
import Changelog from './pages/changelog';
import Checkbox from './pages/checkbox';
import Colors from './pages/colors';
import DataPicker from './pages/data-picker';
import DataTable from './pages/data-table';
import Dialog from './pages/dialog';
import Documentation from './pages/documentation';
import Drawer from './pages/drawer';
import DropdownMenu from './pages/dropdown-menu';
import Effects from './pages/effects';
import Figma from './pages/figma';
import Form from './pages/form';
import GettingStarted from './pages/getting-started';
import Home from './pages/home';
import HoverCard from './pages/hover-card';
import IconLibrary from './pages/icon-library';
import Input from './pages/input';
import InputOTP from './pages/input-otp';
import Label from './pages/label';
import NavigationMenu from './pages/navigation-menu';
import Pagination from './pages/pagination';
import Popover from './pages/popover';
import Progress from './pages/progress';
import RadioGroup from './pages/radio-group';
import Resizable from './pages/resizable';
import ScrollArea from './pages/scroll-area';
import Select from './pages/select';
import Separator from './pages/separator';
import Sheet from './pages/sheet';
import Skeleton from './pages/skeleton';
import Slider from './pages/slider';
import Switch from './pages/switch';
import Table from './pages/table';
import TextStyles from './pages/text-styles';
import Textarea from './pages/textarea';
import Toast from './pages/toast';
import Toggle from './pages/toggle';
import Tooltip from './pages/tooltip';
import Navbar from './shared/navbar';
import Saidbar from './shared/saidbar';

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Content */}
      <div className="flex">
        {/* Saidbar left */}
        <div className="mt-10">
          <Saidbar />
        </div>

        <div>
          {/* Outlet for content */}
          <div className="mt-10 md:ml-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/docs',
        element: <Documentation />,
      },
      // Getting started

      {
        path: '/docs/getting-started',
        element: <GettingStarted />,
      },
      {
        path: '/docs/figma',
        element: <Figma />,
      },
      {
        path: '/docs/changelog',
        element: <Changelog />,
      },
      // Themes
      {
        path: '/docs/colors',
        element: <Colors />,
      },
      {
        path: '/docs/effects',
        element: <Effects />,
      },
      {
        path: '/docs/text-styles',
        element: <TextStyles />,
      },
      {
        path: '/docs/icons-library',
        element: <IconLibrary />,
      },
      // components
      {
        path: '/docs/components/accordion',
        element: <AccordionPage />,
      },
      {
        path: '/docs/components/alert',
        element: <Alert />,
      },
      {
        path: '/docs/components/adialog',
        element: <AlertDialogPage />,
      },
      {
        path: '/docs/components/avatar',
        element: <Avatar />,
      },
      {
        path: '/docs/components/badge',
        element: <Badge />,
      },
      {
        path: '/docs/components/breadcrumb',
        element: <Breadcrumb />,
      },
      {
        path: '/docs/components/button',
        element: <Button />,
      },
      {
        path: '/docs/components/calendar',
        element: <Calendar />,
      },
      {
        path: '/docs/components/card',
        element: <Card />,
      },
      {
        path: '/docs/components/carousel',
        element: <Carousel />,
      },
      {
        path: '/docs/components/checkbox',
        element: <Checkbox />,
      },
      {
        path: '/docs/components/data-table',
        element: <DataTable />,
      },
      {
        path: '/docs/components/data-picker',
        element: <DataPicker />,
      },
      {
        path: '/docs/components/dialog',
        element: <Dialog />,
      },
      {
        path: '/docs/components/drawer',
        element: <Drawer />,
      },
      {
        path: '/docs/components/dropdown-menu',
        element: <DropdownMenu />,
      },
      {
        path: '/docs/components/form',
        element: <Form />,
      },
      {
        path: '/docs/components/hover-card',
        element: <HoverCard />,
      },
      {
        path: '/docs/components/input',
        element: <Input />,
      },
      {
        path: '/docs/components/input-otp',
        element: <InputOTP />,
      },
      {
        path: '/docs/components/label',
        element: <Label />,
      },
      {
        path: '/docs/components/navigation-menu',
        element: <NavigationMenu />,
      },
      {
        path: '/docs/components/pagination',
        element: <Pagination />,
      },
      {
        path: '/docs/components/popover',
        element: <Popover />,
      },
      {
        path: '/docs/components/progress',
        element: <Progress />,
      },
      {
        path: '/docs/components/radio-group',
        element: <RadioGroup />,
      },
      {
        path: '/docs/components/resizable',
        element: <Resizable />,
      },
      {
        path: '/docs/components/scroll-area',
        element: <ScrollArea />,
      },
      {
        path: '/docs/components/select',
        element: <Select />,
      },
      {
        path: '/docs/components/separator',
        element: <Separator />,
      },
      {
        path: '/docs/components/sheet',
        element: <Sheet />,
      },
      {
        path: '/docs/components/skeleton',
        element: <Skeleton />,
      },
      {
        path: '/docs/components/carousel',
        element: <Carousel />,
      },
      {
        path: '/docs/components/slider',
        element: <Slider />,
      },
      {
        path: '/docs/components/switch',
        element: <Switch />,
      },
      {
        path: '/docs/components/table',
        element: <Table />,
      },
      {
        path: '/docs/components/tabs',
        element: <Tabs />,
      },
      {
        path: '/docs/components/textarea',
        element: <Textarea />,
      },
      {
        path: '/docs/components/toast',
        element: <Toast />,
      },
      {
        path: '/docs/components/toggle',
        element: <Toggle />,
      },
      {
        path: '/docs/components/toggle-group',
        element: <Carousel />,
      },
      {
        path: '/docs/components/tooltip',
        element: <Tooltip />,
      },
    ],
  },
]);

export { router };
