window.env = {
  apiUrl: "http://localhost:5000",
};

let expensesApi = {
  getTotals: async () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(`${window.env.apiUrl}/total`, options);
      const json = await res.json();
      console.log(json);
      return json;
    } catch (err) {
      console.log("Error getting total", err);
    }
  },
  getReports: async () => {
    return [
      {
        date: new Date(),
        description: "Pizza for a Coding Dojo session.",
        value: 102,
      },
      {
        date: new Date(),
        description: "Coffee for a Coding Dojo session.",
        value: 42,
      },
    ];
  },
};

export default expensesApi;
