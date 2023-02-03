export const pluck = (elements: any[], field: string): string[] => {
    return elements.map((element: any) => element[field]);
};
