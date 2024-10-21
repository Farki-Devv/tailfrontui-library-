// src/test.tsx
// test file using GPT
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Badge } from '../components/badge';

describe('Button Component', () => {
  it('renders button with correct text', () => {
    render(<Badge className="">Click Me</Badge>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  it('calls onClick function when clicked', async () => {
    render(<Badge className="">Click Me</Badge>);

    await userEvent.click(screen.getByText('Click Me'));
  });
});