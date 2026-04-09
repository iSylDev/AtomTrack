import Image from "next/image";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import TextInputComp from "@/components/create-task/TextInputComp";


function CreateTaskComponent() {


    return (
        <Card>
            <CardHeader>
                <div className={'flex items-center gap-3'}>
                    <div className={'bg-chart-1/30 h-17 w-17 shrink-0 flex items-center justify-center rounded-sm'}>
                        <Image src={'/images/create-task/create-icon.png'} alt={'Create Task Image'} height={20}
                               width={20}/>
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
            </CardHeader>

            <CardContent>
                <form>
                    <TextInputComp />
                </form>
            </CardContent>
        </Card>
    );
}

export default CreateTaskComponent;