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
      return 'bg-blue-700';
    case 'grayscale':
      return 'bg-gray-700';
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
      <input
        {...props}
        type="checkbox"
        id={targetId}
        className={getVariantStyles(variant)}
      />
      <label htmlFor={targetId}>{label}</label>
    </>
  );
}
