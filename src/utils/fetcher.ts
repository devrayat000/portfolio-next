export default async function fetcher(document: string, variables?: object) {
  const res = await fetch("http://localhost:6060", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer`,
    },
    body: JSON.stringify({
      query: document,
      variables,
    }),
  });
  return res.json();
}
