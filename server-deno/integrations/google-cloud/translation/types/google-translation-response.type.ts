/**
 * A response list contains a list of separate language translation responses.
 */

export type TranslateTextResponseList = GoogleTranslationResponse[];

/**
 * Represents the response from the Google Cloud Translation API.
 */
export type GoogleTranslationResponse = {
  /**
   * The source language of the initial request, detected automatically,
   * if no source language was passed within the initial request.
   * If the source language was passed, auto-detection of the language
   * will not occur and this field will be omitted.
   */
  detectedSourceLanguage?: string;

  /**
   * The translation model. Cloud Translation - Basic offers only
   * the nmt Neural Machine Translation (NMT) model.
   *
   * If you did not include a model parameter with your request,
   * then this field is not included in the response.
   */
  model?: string;

  /**
   * Text translated into the target language.
   */
  translatedText: string;
};
