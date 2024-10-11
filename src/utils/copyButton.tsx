import { Check, Copy } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../components/button';

interface CopyButtonProps {
  elementCode: string;
}

function CopyButton({ elementCode }: CopyButtonProps) {
  const [copied, setCopied] = useState(false); // New state for copy status

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(elementCode);
      setCopied(true); // Change to check icon
      setTimeout(() => {
        setCopied(false); // Revert to copy icon after 2 seconds
      }, 2000);
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return (
    <Button
      variant="secondary"
      className="flex gap-2"
      onClick={copyToClipboard}
    >
      {copied ? (
        <Check className="size-4 text-type-500" />
      ) : (
        <Copy className="size-4 text-type-500" />
      )}
      {copied ? 'Copied' : 'Copy'}
    </Button>
  );
}

export default CopyButton;
