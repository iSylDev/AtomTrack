import {create} from 'zustand';
import {CUSTOM_CATEGORY_ICON_CONFIG} from "@/components/create-task/data/iconData";
import {Occurrence, OccurrenceType} from "@/types/days";

export type PriorityType = 'low' | 'medium' | 'high';

// 1. Define the shape of your DATA only
interface TaskData {
    name: string;
    priority: PriorityType;
    category: string;
    isCustomCategory: boolean;
    occurrence: OccurrenceType;
    occurrence_days: Occurrence;
    category_color: string;
    temp_category_color: string;
    category_icon: keyof typeof CUSTOM_CATEGORY_ICON_CONFIG;
    temp_category_icon: keyof typeof CUSTOM_CATEGORY_ICON_CONFIG;
    errors: {
        nameError: string;
        categoryError: string;
    };
}

//  Full store (Data + Actions)
export interface TaskState extends TaskData {
    setTaskValue: <K extends keyof TaskData>(key: K, value: TaskData[K]) => void;
    resetForm: () => void;
}

// the default values object
const defaultValues: TaskData = {
    name: '',
    priority: 'low',
    category: 'Fitness',
    isCustomCategory: false,
    occurrence: 'daily',
    occurrence_days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    category_color: '#3FFF8B',
    temp_category_color: '#3FFF8B',
    category_icon: 'Star',
    temp_category_icon: 'Star',
    errors: {nameError: '', categoryError: ''},
};

// Initialize the store
const taskStore = create<TaskState>((set) => ({
    ...defaultValues,
    setTaskValue: (key, value) =>
        set((state) => ({
            ...state,
            [key]: value
        })),
    resetForm: () => set({...defaultValues}),
}));

export default taskStore;
