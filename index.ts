/**
 * @file plutu SDK Main Entry
 * @description Exports all the functionalities of the plutu SDK.
 */

import type { plutuConfig } from "./src/plutu/config";
export type { plutuConfig } from "./src/plutu/config";
export * from "./src/plutu/types";

import {
  sadadVerify,
  sadadConfirm,
  adfaliVerify,
  adfaliConfirm,
  localBankCardsConfirm,
  mpgsConfirm,
  tlyncConfirm,
} from "./src/plutu/gateways";
import type { SadadVerifyPayload, SadadConfirmPayload, AdfaliVerifyPayload, AdfaliConfirmPayload, LocalBankCardsConfirmPayload, MpgsConfirmPayload, TlyncConfirmPayload } from "./src/plutu/types";


export function create_plutu_sdk(config: plutuConfig) {

  return {
    sadad: {
      verify: (payload: SadadVerifyPayload) => sadadVerify(config, payload),
      confirm: (payload: SadadConfirmPayload) => sadadConfirm(config, payload),
    },
    adfali: {
      verify: (payload: AdfaliVerifyPayload) => adfaliVerify(config, payload),
      confirm: (payload: AdfaliConfirmPayload) => adfaliConfirm(config, payload),
    },
    local_bank_cards: {
      confirm: (payload: LocalBankCardsConfirmPayload) => localBankCardsConfirm(config, payload),
    },
    mpgs: {
      confirm: (payload: MpgsConfirmPayload) => mpgsConfirm(config, payload),
    },
    tlync: {
      confirm: (payload: TlyncConfirmPayload) => tlyncConfirm(config, payload),
    }
  }
}

