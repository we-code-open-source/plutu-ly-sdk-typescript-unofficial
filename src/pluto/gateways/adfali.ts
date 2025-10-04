/**
 * @file Adfali Payment Gateway
 * @description Implements the Adfali payment gateway functionalities.
 */

import type { PlutoConfig } from "../config";
import type {
  AdfaliVerifyPayload,
  AdfaliConfirmPayload,
  VerifyResponse,
  ConfirmResponse,
} from "../types";

import { getApiUrl } from "../config";
import { post } from "../client";

/**
 * Sends an OTP to the customer's phone number to initiate an Adfali transaction.
 *
 * @param {PlutoConfig} config - The Pluto API configuration.
 * @param {AdfaliVerifyPayload} payload - The data required to verify the transaction.
 * @returns {Promise<VerifyResponse>} A promise that resolves with the verification response.
 */
export const adfaliVerify = (
  config: PlutoConfig,
  payload: AdfaliVerifyPayload
): Promise<VerifyResponse> => {
  const url = getApiUrl("/transaction/edfali/verify");
  return post(url, config, payload);
};

/**
 * Confirms and pays the Adfali transaction.
 *
 * @param {PlutoConfig} config - The Pluto API configuration.
 * @param {AdfaliConfirmPayload} payload - The data required to confirm the transaction.
 * @returns {Promise<ConfirmResponse>} A promise that resolves with the confirmation response.
 */
export const adfaliConfirm = (
  config: PlutoConfig,
  payload: AdfaliConfirmPayload
): Promise<ConfirmResponse> => {
  const url = getApiUrl("/transaction/edfali/confirm");
  return post(url, config, payload);
};
