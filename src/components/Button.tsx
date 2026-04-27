import type { IconType } from 'react-icons';
import { cn } from '../utils';
import type { ClassValue } from 'clsx';

type ButtonProps = {
    label?: string;
    action: () => void;
    Icon?: IconType;
    classes: ClassValue;
} & React.ComponentProps<'button'>;

export default function Button({
    label,
    action,
    Icon,
    classes,
    ...rest
}: ButtonProps) {
    return (
        <>
            <button {...rest} className={cn('btn', classes)} onClick={action}>
                {label && <span>{label}</span>}
                {Icon && (
                    <span>
                        <Icon />
                    </span>
                )}
            </button>
        </>
    );
}
