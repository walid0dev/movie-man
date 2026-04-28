import type { ClassValue } from 'clsx';
import { cn } from '../utils';
type InputProps = {
    label?: string;
    classes?: ClassValue;
    error?: string;
} & React.ComponentProps<'input'>;

export default function Input({ label, classes, error, ...rest }: InputProps) {
    return (
        <div className={cn('input', { 'input-error': !!error }, classes)}>
            <label>{label}</label>
            <input {...rest}></input>
            <p className="">{error}</p>
        </div>
    );
}
