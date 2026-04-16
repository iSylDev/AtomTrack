import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";


const RecurrenceComponent = () => {
    return (
        <Tabs defaultValue="overview">
            <TabsList variant="default" className={'w-full bg-chart-5 group-data-horizontal/tabs:h-12 '}>
                <TabsTrigger value="overview">Daily</TabsTrigger>
                <TabsTrigger value="analytics">Weekly</TabsTrigger>
                <TabsTrigger value="reports">Specific Day</TabsTrigger>
            </TabsList>
        </Tabs>
    );
};

export default RecurrenceComponent;