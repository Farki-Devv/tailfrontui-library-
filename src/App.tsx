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
import TabsPage from './pages/tabs';
import TextStyles from './pages/text-styles';
import Textarea from './pages/textarea';
import Toast from './pages/toast';
import Toggle from './pages/toggle';
import ToggleGroupPage from './pages/toggle-group';
import Tooltip from './pages/tooltip';
import Navbar from './shared/navbar';
import Saidbar from './shared/saidbar';

import { useLocation } from 'react-router-dom';
import Blog from './pages/blog';
import Themes from './pages/themes';

const Layout = () => {
  const location = useLocation(); // Hozirgi sahifa yo‘nalishini olish
  const hideSidebarPaths = ['/']; // Bu yo'llarda sidebar ko'rinmasin

  const shouldShowSidebar = !hideSidebarPaths.includes(location.pathname);

  return (
    <div>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Content */}
      <div className="flex">
        {/* Saidbar left */}
        {shouldShowSidebar && (
          <div className="mt-10 max-md:hidden">
            <Saidbar />
          </div>
        )}

        {/* Outlet for content */}
        <div className={`mt-10 ${shouldShowSidebar ? 'md:ml-10' : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

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
        path: '/docs/figma',
        element: <Figma />,
      },
      {
        path: '/docs/changelog',
        element: <Changelog />,
      },
      // Themes
      {
        path: '/themes',
        element: <Themes />,
      },
      {
        path: 'themes/colors',
        element: <Colors />,
      },
      {
        path: '/themes/effects',
        element: <Effects />,
      },
      {
        path: '/themes/text-styles',
        element: <TextStyles />,
      },
      {
        path: '/themes/icons-library',
        element: <IconLibrary />,
      },
      // Blog
      {
        path: '/blog',
        element: <Blog />,
      },
      // components
      {
        path: '/components',
        element: <AccordionPage />,
      },
      {
        path: '/components/accordion',
        element: <AccordionPage />,
      },
      {
        path: '/components/alert',
        element: <Alert />,
      },
      {
        path: '/components/adialog',
        element: <AlertDialogPage />,
      },
      {
        path: '/components/avatar',
        element: <Avatar />,
      },
      {
        path: '/components/badge',
        element: <Badge />,
      },
      {
        path: '/components/breadcrumb',
        element: <Breadcrumb />,
      },
      {
        path: '/components/button',
        element: <Button />,
      },
      {
        path: '/components/calendar',
        element: <Calendar />,
      },
      {
        path: '/components/card',
        element: <Card />,
      },
      {
        path: '/components/carousel',
        element: <Carousel />,
      },
      {
        path: '/components/checkbox',
        element: <Checkbox />,
      },
      {
        path: '/components/data-table',
        element: <DataTable />,
      },
      {
        path: '/components/data-picker',
        element: <DataPicker />,
      },
      {
        path: '/components/dialog',
        element: <Dialog />,
      },
      {
        path: '/components/drawer',
        element: <Drawer />,
      },
      {
        path: '/components/dropdown-menu',
        element: <DropdownMenu />,
      },
      {
        path: '/components/form',
        element: <Form />,
      },
      {
        path: '/components/hover-card',
        element: <HoverCard />,
      },
      {
        path: '/components/input',
        element: <Input />,
      },
      {
        path: '/components/input-otp',
        element: <InputOTP />,
      },
      {
        path: '/components/label',
        element: <Label />,
      },
      {
        path: '/components/navigation-menu',
        element: <NavigationMenu />,
      },
      {
        path: '/components/pagination',
        element: <Pagination />,
      },
      {
        path: '/components/popover',
        element: <Popover />,
      },
      {
        path: '/components/progress',
        element: <Progress />,
      },
      {
        path: '/components/radio-group',
        element: <RadioGroup />,
      },
      {
        path: '/components/resizable',
        element: <Resizable />,
      },
      {
        path: '/components/scroll-area',
        element: <ScrollArea />,
      },
      {
        path: '/components/select',
        element: <Select />,
      },
      {
        path: '/components/separator',
        element: <Separator />,
      },
      {
        path: '/components/sheet',
        element: <Sheet />,
      },
      {
        path: '/components/skeleton',
        element: <Skeleton />,
      },
      {
        path: '/components/carousel',
        element: <Carousel />,
      },
      {
        path: '/components/slider',
        element: <Slider />,
      },
      {
        path: '/components/switch',
        element: <Switch />,
      },
      {
        path: '/components/table',
        element: <Table />,
      },
      {
        path: '/components/tabs',
        element: <TabsPage />,
      },
      {
        path: '/components/textarea',
        element: <Textarea />,
      },
      {
        path: '/components/toast',
        element: <Toast />,
      },
      {
        path: '/components/toggle',
        element: <Toggle />,
      },
      {
        path: '/components/toggle-group',
        element: <ToggleGroupPage />,
      },
      {
        path: '/components/tooltip',
        element: <Tooltip />,
      },
    ],
  },
]);

export { router };
