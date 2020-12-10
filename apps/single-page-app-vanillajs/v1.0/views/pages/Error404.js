let Error404 = {
  render: async () => {
    let view = /*html*/ `
      <h1>Not Found</h1>
    `;
    return view;
  },
  postRender: async () => {},
};

export default Error404;
