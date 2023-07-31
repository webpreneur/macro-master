// https://fdc.nal.usda.gov/data-documentation.html

export enum DATA_TYPE_ENUM {
  /**
   * Definition: Data from labels of national and international branded foods collected by a public-private partnership.
   * Data Source: Manufacturers: based on food label information.
   * Update Frequency: Monthly
   */
  BRANDED = "Branded",
  /**
   * Definition: Data and metadata on individual samples of commodity/commodity-derived minimally processed foods with insights into variability.
   * Data Source: USDA: based on analytically derived values
   * Update Frequency: April and October of each year
   */
  FOUNDATION = "Foundation",
  /**
   * Definition: Data on nutrients and portion weights for foods and beverages reported in What We Eat in America, NHANES.
   * Data Source: USDA: compiled based on values from FDC data types.
   * Update Frequency: Every two years in concert with WWEIA, NHANES release
   */
  SURVEY = "Survey (FNDDS)",
  /**
   * Definition: Historic data on food components including nutrients derived from analyses, calculations, and published literature.
   * Data Source: USDA: based on Standard Reference originally available via the USDA National Nutrient Database (NNDB).
   * Update Frequency: Final release April 2018. No longer updated.
   */
  SR_LEGACY = "SR Legacy",
}
