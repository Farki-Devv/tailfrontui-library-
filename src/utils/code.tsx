import { Check, Copy } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../elements/button';

interface CodeProps {
  children: string;
  className?: string;
}

const Code: React.FC<CodeProps> = ({ children, className = '' }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [copied, setCopied] = useState(false); // new state for copy status

  // Expand
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(children)
      .then(() => {
        setCopied(true); // change icon to check
        setTimeout(() => {
          setCopied(false); // revert to copy icon after 2 seconds
        }, 2000);
      })
      .catch((error) => {
        console.error('Failed to copy: ', error);
      });
  };

  return (
    <div
      className={`relative bg-container-950 p-4 rounded-lg squircle text-type-50 ${className} ${
        children.length >= 300
          ? 'bg-gradient-to-t from-container-400/40 to-container-600/10'
          : ''
      }`}
    >
      {/* Code tag */}
      <code
        className={`flex ${
          isExpanded ? 'max-h-96 overflow-auto' : 'max-h-[11rem] overflow-auto'
        } transition-all  `}
      >
        {/* children */}
        <div className="w-[94%] whitespace-pre-line font-normal text-sm  md:text-base font-code">
          {children}
        </div>

        {/* Copy button */}
        {copied ? (
          <Check className="size-4 cursor-pointer top-4 right-4 absolute" />
        ) : (
          <Copy
            className="size-4 cursor-pointer top-4 right-4 absolute"
            onClick={copyToClipboard}
          />
        )}
      </code>

      <div className="flex justify-center">
        {/* Expand button */}
        {!isExpanded && children.length > 400 && (
          <Button variant={'secondary'} onClick={toggleExpand} size={'lg'}>
            Expand
          </Button>
        )}

        {/* Collapse button */}
        {isExpanded && (
          <Button variant={'secondary'} onClick={toggleExpand} size={'lg'}>
            Collapsile
          </Button>
        )}
      </div>
    </div>
  );
};

export default Code;
