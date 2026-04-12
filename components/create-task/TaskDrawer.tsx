import {Drawer, DrawerClose, DrawerContent, DrawerTitle} from "@/components/ui/drawer";
import {X} from 'lucide-react'


type Props = {
    openFn: boolean;
    onCloseFn: () => void;
}


const TaskDrawer = ({openFn, onCloseFn}: Props) => {
    return (
        <Drawer open={openFn} onOpenChange={onCloseFn} onClose={onCloseFn}>
            <DrawerContent className={'px-5'}>
                    <DrawerTitle className={'flex justify-between'}>
                        <p className={'text-xl'}>Select Color</p>
                        <DrawerClose>
                            <X/>
                        </DrawerClose>
                    </DrawerTitle>
                <h3>Hello World</h3>
            </DrawerContent>
        </Drawer>
    );
};

export default TaskDrawer;