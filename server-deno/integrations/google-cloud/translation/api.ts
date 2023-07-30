import { API_KEY, ENDPOINT_TRANSLATE } from "./config.ts";
import { GoogleTranslationQuery } from "./types/google-translation-query.type.ts";
import { GoogleTranslationResponse } from "./types/google-translation-response.type.ts";
  
async function getTranslations(options: Partial<GoogleTranslationQuery>): Promise<GoogleTranslationResponse> {
    if (!options.q) {
        throw new Error("The 'q' parameter is required.");
    }
    
    const defaultOptions: GoogleTranslationQuery = {
        q: options.q,
        target: options.target || "en",
        source: options.source || "hu",
        format: options.format,
        model: options.model,
        key: options.key || API_KEY
    };

    const response = await fetch(`${ENDPOINT_TRANSLATE}?key=${defaultOptions.key}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(defaultOptions),
    });

    const data = await response.json();

    if (!data || !data.data || !data.data.translations) {
        throw new Error("Invalid translation response.");
    }

    return data.data.translations;
}

export default getTranslations;
