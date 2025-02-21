const hex: RegExp = new RegExp("#[0-9a-fA-F]{6}");
export default function hexToRgba(text: string, render: Function) {
  text = render(text);
  text = text.trim();

  let valid = hex.test(text);
  if (!valid) throw Error("Given string is not a hex code");

  text = text.slice(1);

  let values: number[] = [];
  for (let i = 0; i < 6; i += 2) {
    let hexValue: string = text.slice(i, i + 2);
    values.push(parseInt(hexValue, 16));
  }
  return values.join(", ");
}
