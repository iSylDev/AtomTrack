import {Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerTitle} from "@/components/ui/drawer";
import {X} from 'lucide-react'
import {Button} from "@/components/ui/button";
import {ReactNode} from "react";
import {useIsMobile} from "@/hooks/shared/use-mobile";


type Props = {
    openFn: boolean;
    onCloseFn: () => void;
    component: ReactNode;
}

const TaskDrawer = ({openFn, onCloseFn, component}: Props) => {
    const isMobile = useIsMobile();

    return (
        <>
            {
                isMobile && <Drawer open={openFn} onOpenChange={onCloseFn} onClose={onCloseFn}>
                    <DrawerContent className={'col px-5'}>
                        <DrawerTitle className={'flex justify-between'}>
                            <div>
                                <p className={'text-xl'}>Category Color</p>
                                <DrawerDescription>
                                    Pick a color
                                </DrawerDescription>
                            </div>
                            <DrawerClose className={'hover:cursor-pointer'}>
                                <X/>
                            </DrawerClose>
                        </DrawerTitle>

                        <div className={'mt-8 mb-2 w-full'}>
                            {component}
                        </div>
                        <DrawerFooter className={'px-0'}>
                            <Button
                                onClick={() => onCloseFn()}
                                className={'py-5 mx-0 px-0'}>
                                Save
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            }
        </>
    );
};

export default TaskDrawer;