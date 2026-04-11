import {Label} from '../ui/label'
import {Input} from '../ui/input'


type Props = {
    label?: string;
    placeholder?: string
}

const TextInputComp = ({label, placeholder}: Props) => {
    return (
        <div className={'flex flex-col justify-center gap-2'}>
            <Label htmlFor={'task-name'} className={'text-chart-1 uppercase text-xs'}>{label}</Label>
            <Input id={'task-name'} className={'h-10 border-chart-1/20! placeholder:text-sm placeholder:text-card-foreground/50'} placeholder={placeholder}/>
        </div>
    );
};

export default TextInputComp;