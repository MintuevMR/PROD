export const classNames = (str: string, mods: Record<string, string | boolean>, additional: string[]): string => {
    return [
        str,
        ...additional,
        ...Object.entries(mods).filter(([key, value]) => !!value).map(([key, value]) =>key)
    ]. join(' ')
}