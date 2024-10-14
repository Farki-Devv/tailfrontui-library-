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

  /**
   * Path'ni kerakli formatda konstruksiya qilish.
   * Agar path `components` bilan boshlangan bo'lsa, uni to'g'ridan-to'g'ri qo'llaymiz.
   */
  const constructPath = (path: string) => {
    if (path.startsWith('components')) {
      return `${path}`; // `docs/` ni qo‘shamiz
    }
    return `${path}`;
  };

  return (
    <div className="flex justify-between">
      {/* Oldingi komponent */}
      {prevLink && (
        <Button
          variant="outline"
          onClick={() => navigate(constructPath(prevLink.path))}
        >
          <ChevronLeft className="size-4" /> {prevLink.name}
        </Button>
      )}

      {/* Keyingi komponent */}
      {nextLink && (
        <Button
          variant="outline"
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
