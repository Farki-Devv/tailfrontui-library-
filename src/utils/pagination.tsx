import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { saidbarElementsLinks } from '.';
import { Button } from '../components/button';

export function NavigationButtons() {
  const location = useLocation();
  const navigate = useNavigate();

  // Joriy sahifaning indeksini aniqlash
  const currentIndex = saidbarElementsLinks.findIndex((link) =>
    location.pathname.endsWith(link.path),
  );

  // Oldingi va keyingi linklar
  const prevLink = saidbarElementsLinks[currentIndex - 1];
  const nextLink = saidbarElementsLinks[currentIndex + 1];

  // Agar path allaqachon '/docs/' bo'lsa, uni qo'shmaymiz
  const constructPath = (path: string) => {
    if (location.pathname.includes('/docs') && path.includes('/docs')) {
      // Agar path allaqachon 'docs' ni o'z ichiga olsa, uni yana qo'shmaymiz
      return path;
    } else {
      return `/${path}`;
    }
  };

  return (
    <div className="flex justify-between">
      {/* last component */}
      {prevLink && (
        <Button
          variant={'outline'}
          onClick={() => navigate(constructPath(prevLink.path))}
        >
          <ChevronLeft className="size-4" /> {prevLink.name}
        </Button>
      )}

      {/* Next component */}
      {nextLink && (
        <Button
          variant={'outline'}
          className="ml-auto"
          onClick={() => navigate(constructPath(nextLink.path))}
        >
          {nextLink.name}
          <ChevronRight className="size-4" />
        </Button>
      )}
    </div>
  );
}
