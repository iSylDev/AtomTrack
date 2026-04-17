import {z} from "zod";
import {CUSTOM_CATEGORY_ICON_CONFIG} from "@/components/create-task/data/iconData";

const IconEnum = z.custom<keyof typeof CUSTOM_CATEGORY_ICON_CONFIG>()


const CreateTaskSchema = z.object({
    name: z.string().min(3, 'Task Name must be at least 3 characters'),
    priority: z.enum(['low', 'medium', 'high']),
    category: z.string().min(3, 'Category Name must be at least 3 characters'),
    isCustomCategory: z.boolean,
    occurrence: z.enum(["daily", "weekly", "specific-days"]),
    occurrence_days: z.array(z.string()).min(1, 'Select at least  1 day'),
    category_color: z.string().startsWith('#'),
    temp_category_color: z.string().startsWith('#'),
    category_icon: IconEnum,
    temp_category_icon: IconEnum,
}).refine((data) => {
    if (data.isCustomCategory) {
        return data.category.trim().length > 0;
    }
    return true;
}, {
    message: 'Custom Category Name cannot be blank',
    path: ['category'],
})

export type CreateTaskType = z.infer<typeof CreateTaskSchema>;