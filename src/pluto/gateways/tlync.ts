/**
 * @file T-Lync Payment Gateway
 * @description Implements the T-Lync payment gateway functionalities.
 */

import type { TlyncConfirmPayload, CheckoutRedirectResponse } from "../types";
import type { PlutoConfig } from "../config";

import { getApiUrl } from "../config";

import { post } from "../client";

/**
 * Initiates a payment transaction with T-Lync.
 *
 * @param {PlutoConfig} config - The Pluto API configuration.
 * @param {TlyncConfirmPayload} payload - The data required for the transaction.
 * @returns {Promise<CheckoutRedirectResponse>} A promise that resolves with the checkout redirect response.
 */
export const tlyncConfirm = (
  config: PlutoConfig,
  payload: TlyncConfirmPayload
): Promise<CheckoutRedirectResponse> => {
  const url = getApiUrl("/transaction/tlync/confirm");
  return post(url, config, payload);
};
