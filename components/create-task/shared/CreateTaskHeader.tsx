import {CirclePlus} from "lucide-react";


const CreateTaskHeader = () => {
    return (
        <div
            className={'flex items-center gap-3'}>
            < div
                className={'bg-chart-1/30 h-17 w-17 shrink-0 flex items-center justify-center rounded-sm'}>
                <CirclePlus />
            </div>
            <div>
                <h3 className={'text-foreground text-lg'}>
                    Create New Task
                </h3>
                <p>
                    Define your next target
                </p>
            </div>
        </div>
    )
        ;
};

export default CreateTaskHeader;