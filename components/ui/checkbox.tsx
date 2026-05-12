import { ComponentProps } from 'react';

type Variant = 'color' | 'grayscale';

type CheckBoxProps = {
  label: string;
  targetId: string;
  variant: Variant;
} & ComponentProps<'input'>;

function getVariantStyles(variant: Variant) {
  switch (variant) {
    case 'color':
      return '';
    case 'grayscale':
      return '';
    default:
      throw new Error(`Invalid variant: ${variant satisfies never}`);
  }
}

export default function Checkbox({
  targetId,
  label,
  variant,
  ...props
}: CheckBoxProps) {
  return (
    <>
      <label
        htmlFor={targetId}
        className="relative flex items-center gap-[.4em] select-none before:content-[''] before:w-[2em] before:h-[1em] before:bg-red-100 before:rounded-[1em] after:content-[''] after:w-[.9em] after:h-[.9em] after:bg-red-700 after:rounded-[1em] after:absolute after:left-[.1em]"
      >
        <input
          {...props}
          type="checkbox"
          id={targetId}
          className="appearance-none"
        />
        {label}
      </label>
    </>
  );
}
