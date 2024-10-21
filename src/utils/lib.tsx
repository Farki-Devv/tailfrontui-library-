import { Badge } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saidbarElementsLinks } from '.';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/dialog';
import { Input } from '../components/input';
import { Separator } from '../components/separator';

const GLobalSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useNavigate();
  const filteredItems = saidbarElementsLinks.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleItemClick = (path: string) => {
    router(path);
    setIsOpen(false);
    setSearchTerm('');
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown); // Tozalanadi
    };
  }, []);
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger>
          <div className="relative w-full ml-1">
            <Input
              placeholder="Type keywords..."
              className="w-[300px] md:w-[17.5rem] pr-[3rem] max-md:h-8 cursor-pointer"
            />
            <div className="border absolute rounded-lg text-xs px-1 py-0.5 text-type-500 right-3 top-2 max-md:top-1.5 border-stroke-200">
              ⌘ K
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Search Elements</DialogTitle>
          </DialogHeader>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search elements"
            className="w-full pr-[3rem] max-md:h-8"
          />

          <div className="flex flex-col w-full">
            {searchTerm && (
              <ul className={searchTerm && 'h-28 overflow-auto'}>
                <Separator />
                {filteredItems.length > 0 ? (
                  filteredItems.map((item) => (
                    <li
                      key={item.name}
                      onClick={() => handleItemClick(item.path)}
                      className="p-2 mt-1 text-sm rounded cursor-pointer flex gap-2 items-center hover:bg-container-100 squircle"
                    >
                      <Badge className="size-4" />
                      {item.name}
                    </li>
                  ))
                ) : (
                  <li className="p-2 text-gray-400">No items found</li>
                )}
              </ul>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default GLobalSearch;
