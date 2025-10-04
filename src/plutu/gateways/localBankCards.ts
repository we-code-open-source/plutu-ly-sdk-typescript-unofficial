/**
 * @file Local Bank Cards Payment Gateway
 * @description Implements the Local Bank Cards payment gateway functionalities.
 */

import type { plutuConfig } from "../config";
import type {
  LocalBankCardsConfirmPayload,
  CheckoutRedirectResponse,
} from "../types";

import { getApiUrl } from "../config";

import { post } from "../client";

/**
 * Initiates a payment transaction with Local Bank Cards.
 *
 * @param {plutuConfig} config - The plutu API configuration.
 * @param {LocalBankCardsConfirmPayload} payload - The data required for the transaction.
 * @returns {Promise<CheckoutRedirectResponse>} A promise that resolves with the checkout redirect response.
 */
export const localBankCardsConfirm = (
  config: plutuConfig,
  payload: LocalBankCardsConfirmPayload
): Promise<CheckoutRedirectResponse> => {
  const url = getApiUrl("/transaction/localbankcards/confirm");
  return post(url, config, payload);
};
