/**
 * @file Type definitions for the plutu SDK
 * @description Contains all the core type definitions used throughout the SDK.
 */

export interface SadadVerifyPayload {
  mobile_number: string;
  birth_year: string;
  amount: string;
}

export interface SadadConfirmPayload {
  process_id: string;
  code: string;
  amount: string;
  invoice_no: string;
  customer_ip?: string;
}

export interface AdfaliVerifyPayload {
  mobile_number: string;
  amount: string;
}

export interface AdfaliConfirmPayload {
  process_id: string;
  code: string;
  amount: string;
  invoice_no: string;
  customer_ip?: string;
}

export interface LocalBankCardsConfirmPayload {
  amount: string;
  invoice_no: string;
  return_url: string;
  customer_ip?: string;
  lang?: "ar" | "en";
}

export interface MpgsConfirmPayload {
  amount: string;
  invoice_no: string;
  return_url: string;
  customer_ip?: string;
  lang?: "ar" | "en";
}

export interface TlyncConfirmPayload {
  amount: string;
  invoice_no: string;
  mobile_number: string;
  email?: string;
  return_url: string;
  callback_url: string;
  customer_ip?: string;
  lang?: "ar" | "en";
}

export interface VerifyResponse {
  status: number;
  result: {
    process_id: string;
  };
  message: string;
}

export interface ConfirmResponse {
  status: number;
  result: {
    transaction_id: string;
    amount: string;
  };
  message: string;
}

export interface CheckoutRedirectResponse {
  status: number;
  result: {
    code: "CHECKOUT_REDIRECT";
    redirect_url: string;
  };
}
