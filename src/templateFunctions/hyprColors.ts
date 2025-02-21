const hex: RegExp = new RegExp("#[0-9a-fA-F]{6,8}");
export default function hexToHypr(text: string, render: Function) {
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

  if (text.length > 6) {
    let alpha = parseInt(text.slice(6, 8), 16);
    alpha = alpha / 255;
    alpha = Math.floor(alpha * 100) / 100;
    values.push(alpha);
  } else {
    values.push(1);
  }

  return values.join(", ");
}
