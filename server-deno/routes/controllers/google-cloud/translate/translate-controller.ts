import getTranslations from "../../../../integrations/google-cloud/translation/api.ts";

async function translate(context: any) {
  const q = context.request.url.searchParams.get("q");
  const from = context.request.url.searchParams.get("from") || undefined;
  const to = context.request.url.searchParams.get("to") || undefined;

  if (!q) {
    context.response.status = 400; // Bad Request
    context.response.body = { error: "A 'q' query paraméter hiányzik." };
    return;
  }

  try {
    const translations = await getTranslations({
      q,
      source: from,
      target: to,
    });
    context.response.status = 200;
    context.response.type = "application/json";
    context.response.body = translations;
  } catch (error) {
    context.response.status = 500; // Internal Server Error
    context.response.body = { error: error.message };
  }
}

export default translate;