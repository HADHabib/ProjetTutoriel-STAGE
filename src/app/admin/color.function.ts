import { ColorOptions } from "./colors.enum";


export function getColorByStatus(text: string): string {
  return getEnumKeyByEnumValue(ColorOptions, text);
}

export function getEnumKeyByEnumValue(myEnum: any, value: string): string {
  let found = [...Object.keys(myEnum)].find((o: any) => o.toUpperCase() === value?.replace(/\s+/g, '').toUpperCase()) as string;

  return myEnum[found];
}
