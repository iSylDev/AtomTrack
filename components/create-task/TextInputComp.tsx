import {Input} from '../ui/input'


type Props = {
    label?: string;
    placeholder?: string
}

const TextInputComp = ({label, placeholder}: Props) => {
    return (
        <label className={'flex flex-col justify-center gap-2'}>
            <p
                className={'text-chart-1 uppercase text-xs'}>{label}</p>
            <Input id={label}
                   name={label}
                   className={'h-12 px-4 border-border bg-chart-5! text-foreground placeholder:text-sm placeholder:text-card-foreground/50'}
                   placeholder={placeholder}/>
        </label>
    );
};

export default TextInputComp;