/**
 * @file MPGS Payment Gateway
 * @description Implements the MPGS payment gateway functionalities.
 */

import type { MpgsConfirmPayload, CheckoutRedirectResponse } from "../types";
import type { PlutoConfig } from "../config";

import { getApiUrl } from "../config";

import { post } from "../client";

/**
 * Initiates a payment transaction with MPGS.
 *
 * @param {PlutoConfig} config - The Pluto API configuration.
 * @param {MpgsConfirmPayload} payload - The data required for the transaction.
 * @returns {Promise<CheckoutRedirectResponse>} A promise that resolves with the checkout redirect response.
 */
export const mpgsConfirm = (
  config: PlutoConfig,
  payload: MpgsConfirmPayload
): Promise<CheckoutRedirectResponse> => {
  const url = getApiUrl("/transaction/mpgs/confirm");
  return post(url, config, payload);
};
