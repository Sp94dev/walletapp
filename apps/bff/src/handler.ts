// deno-lint-ignore require-await
export async function handler(): Promise<Response> {
  const message = JSON.stringify({ message: "Hello apps-bff" });
  return new Response(message, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
}
