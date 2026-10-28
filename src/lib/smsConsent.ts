// Estimate-form SMS consent (Heath/Davis 2026-10-28, A2P): the exact wording
// shown beside the UNCHECKED box. The form renders it and /api/estimate sends
// the same string to Heath's HighLevel webhook, so the recorded consent text
// is always the text the visitor saw.
export const SMS_TERMS_URL = "https://davisconstructioncontractors.com/terms/";
export const SMS_PRIVACY_URL = "https://davisconstructioncontractors.com/privacy/";
export const SMS_CONSENT_LEAD =
  "Yes, text and email me about my request and future offers from Heath Davis Construction Company, Inc. " +
  "(Davis Construction Contractors). Message frequency varies. Message and data rates may apply. " +
  "Reply STOP to opt out or HELP for help. Consent is not required to get an estimate.";
export const SMS_CONSENT_TEXT =
  `${SMS_CONSENT_LEAD} Terms: ${SMS_TERMS_URL} Privacy: ${SMS_PRIVACY_URL}`;
