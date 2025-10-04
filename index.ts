/**
 * @file Pluto SDK Main Entry
 * @description Exports all the functionalities of the Pluto SDK.
 */

import type { PlutoConfig } from "./src/pluto/config";
export type { PlutoConfig } from "./src/pluto/config";
export * from "./src/pluto/types";

import {
  sadadVerify,
  sadadConfirm,
  adfaliVerify,
  adfaliConfirm,
  localBankCardsConfirm,
  mpgsConfirm,
  tlyncConfirm,
} from "./src/pluto/gateways";
import type { SadadVerifyPayload, SadadConfirmPayload, AdfaliVerifyPayload, AdfaliConfirmPayload, LocalBankCardsConfirmPayload, MpgsConfirmPayload, TlyncConfirmPayload } from "./src/pluto/types";


export function create_pluto_sdk(config: PlutoConfig) {

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

