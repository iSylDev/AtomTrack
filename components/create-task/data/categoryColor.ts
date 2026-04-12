type Props = {
    color: string;
}

const colorList: Props[] = [
    // Line 1: The "Power" Row (Reds & Oranges)
    { color: '#EF4444' }, // True Red
    { color: '#F97316' }, // Sunset Orange
    { color: '#FB923C' }, // Peach Orange
    { color: '#F87171' }, // Soft Coral

    // Line 2: The "Nature" Row (Yellows & Greens)
    { color: '#FACC15' }, // Cyber Yellow
    { color: '#3FFF8B' }, // Your Signature Neon Green
    { color: '#22C55E' }, // Forest Green
    { color: '#14B8A6' }, // Teal

    // Line 3: The "Deep" Row (Blues & Cyans)
    { color: '#06B6D4' }, // Bright Cyan
    { color: '#3B82F6' }, // Royal Blue
    { color: '#1D4ED8' }, // Deep Navy
    { color: '#6366F1' }, // Indigo

    // Line 4: The "Premium" Row (Purples & Pinks)
    { color: '#A855F7' }, // Vivid Purple
    { color: '#D946EF' }, // Fuchsia
    { color: '#EC4899' }, // Hot Pink
    { color: '#94A3B8' }  // Neutral Slate
];

export default colorList;