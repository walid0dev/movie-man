import type { ClassValue } from 'clsx';

type ButtonProps = {
    label?: string;
    action?: () => void;
    children: React.ReactNode;
    classes?: ClassValue;
} & React.ComponentProps<'button'>;

export default function Button({
    label,
    action,
    children,
    ...rest
}: ButtonProps) {
    return (
        <>
            <button {...rest} onClick={action}>
                {label && <span>{label}</span>}
                {children && <span>{children}</span>}
            </button>
        </>
    );
}
