import {Drawer, DrawerClose, DrawerContent, DrawerTitle} from "@/components/ui/drawer";
import {X} from 'lucide-react'
import CategoryColorPicker from "@/components/create-task/CategoryColorPicker";


type Props = {
    openFn: boolean;
    onCloseFn: () => void;
}


const TaskDrawer = ({openFn, onCloseFn}: Props) => {
    return (
        <Drawer open={openFn} onOpenChange={onCloseFn} onClose={onCloseFn}>
            <DrawerContent className={'col px-5'}>
                <DrawerTitle className={'flex justify-between'}>
                    <p className={'text-xl'}>Select Color</p>
                    <DrawerClose>
                        <X/>
                    </DrawerClose>
                </DrawerTitle>

                <div className={'mt-8 mb-6 w-full'}>
                    <CategoryColorPicker/>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default TaskDrawer;