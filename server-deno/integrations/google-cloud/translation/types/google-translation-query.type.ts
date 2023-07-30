export type GoogleTranslationQuery = {
  /**
   * The input text to translate. Provide an array of strings to
   * translate multiple phrases. The maximum number of strings is 128.
   */
  q: string | string[];

  /**
   * The language to use for translation of the input text,
   * set to one of the language codes listed in Language Support.
   */
  target: string;

  /**
   * The format of the source text, in either HTML (default) or plain-text.
   * A value of "html" indicates HTML and a value of "text" indicates plain-text.
   */
  format?: "html" | "text";

  /**
   * The language of the source text, set to one of the language codes
   * listed in Language Support. If the source language is not specified,
   * the API will attempt to detect the source language automatically
   * and return it within the response.
   */
  source?: string;

  /**
   * The translation model. Cloud Translation - Basic offers only
   * the nmt Neural Machine Translation (NMT) model.
   *
   * If the model is "base", the request is translated by using the NMT model.
   */
  model?: string;

  /**
   * A valid API key to handle requests for this API. If you are using
   * OAuth 2.0 service account credentials (recommended), do not supply this parameter.
   */
  key?: string;
};
