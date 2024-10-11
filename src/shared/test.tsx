import { Circle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../components/alert';
function Test() {
  return (
    <Alert className="w-[532px]">
      <Circle className="h-4 w-4" />
      <AlertTitle>Title</AlertTitle>
      <AlertDescription className="text-type-500">
        The leaves danced gently in the breeze, their rustling a symphony of
        nature’s.
      </AlertDescription>
    </Alert>
  );
}

export default Test;
