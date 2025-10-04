/**
 * @file Sadad Payment Gateway
 * @description Implements the Sadad payment gateway functionalities.
 */
import type { plutuConfig } from "../config";
import type {
  SadadVerifyPayload,
  VerifyResponse,
  SadadConfirmPayload,
  ConfirmResponse,
} from "../types";


import { getApiUrl } from "../config";
import { post } from "../client";

/**
 * Sends an OTP to the customer's phone number to initiate a Sadad transaction.
 *
 * @param {plutuConfig} config - The plutu API configuration.
 * @param {SadadVerifyPayload} payload - The data required to verify the transaction.
 * @returns {Promise<VerifyResponse>} A promise that resolves with the verification response.
 */
export const sadadVerify = (
  config: plutuConfig,
  payload: SadadVerifyPayload
): Promise<VerifyResponse> => {
  const url = getApiUrl("/transaction/sadadapi/verify");
  return post(url, config, payload);
};

/**
 * Confirms and pays the Sadad transaction.
 *
 * @param {plutuConfig} config - The plutu API configuration.
 * @param {SadadConfirmPayload} payload - The data required to confirm the transaction.
 * @returns {Promise<ConfirmResponse>} A promise that resolves with the confirmation response.
 */
export const sadadConfirm = (
  config: plutuConfig,
  payload: SadadConfirmPayload
): Promise<ConfirmResponse> => {
  const url = getApiUrl("/transaction/sadadapi/confirm");
  return post(url, config, payload);
};
