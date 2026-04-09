import {Label} from '../ui/label'
import {Input} from '../ui/input'


type Props = {
    label?: string
}

const TextInputComp = ({label}: Props) => {
    return (
        <div className={'flex flex-col justify-center gap-3'}>
            <Label htmlFor={'task-name'}>{label}</Label>
            <Input id={'task-name'} className={'h-10 border-chart-1'}/>
        </div>
    );
};

export default TextInputComp;