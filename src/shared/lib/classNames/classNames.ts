export const classNames = (str: string, mods: Record<string, string | boolean> = {}, additional: string[]=[]): string => {
    return [
        str,
        ...additional.filter(Boolean),
        ...Object.entries(mods).filter(([key, value]) => Boolean(value)).map(([key, value]) => key)
    ].join(' ')
}