let format = (data) => {
  if (typeof data === "number") return `$${data.toFixed(2)}`;
  if (data instanceof Date) return data.toLocaleDateString("en-US");
  return data;
};

let Data = (data) => /*html*/ `<td>${format(data)}</td>`;

let Body = (data) =>
  data
    .map(
      (data) => /*html*/ `<tr>
   ${Object.keys(data)
     .map((k) => Data(data[k]))
     .join("\n ")}
  </tr>`
    )
    .join("\n ");

let Header = (labels) => /*html*/ `
<tr>
  ${labels.map((l) => /*html*/ `<th><strong>${l}</strong></th>`).join("\n ")}
</tr>
`;

let Table = {
  render: async (data) => /*html*/ `
  <table border="1">
    ${Header(Object.keys(data[0]))}
    ${Body(data)}
  </table>
  `,
  postRender: async () => {},
};

export default Table;
