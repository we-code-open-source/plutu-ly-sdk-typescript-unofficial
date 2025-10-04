# Plutu TypeScript SDK

A comprehensive non-official Typescript implementation for the Plutu payment gateway API provided by Libyan Spider

## Installation

```
npm install plutu-ly-sdk-unofficial
```

## Usage

First, you need to configure the SDK with your API key and access token.

```
import { create_plutu_sdk } from 'plutu-ly-sdk-unofficial';

const plutu = create_plutu_sdk({
  apiKey: 'YOUR_API_KEY',
  accessToken: 'YOUR_ACCESS_TOKEN',
});

const verify_sadad = await plutu.sadad.verify({
  mobile_number: '0913632323',
  birth_year: '1990',
  amount: '10.00',
});

const confirm_localbanks = await plutu.local_bank_cards.confirm({
  amount: '66.25',
  invoice_no: '2168020051',
  return_url: 'YOUR CALLBACK URL',
})

```

## Available Functions
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

### Sadad

- `sadad.verify: (payload: SadadVerifyPayload)`
- `sadad.confirm: (payload: SadadConfirmPayload)`

### Adfali

- `adfali.verify: (payload: AdfaliVerifyPayload)`
- `adfali.confirm: (payload: AdfaliConfirmPayload)`

### Local Bank Cards

- `local_bank_cards.confirm(payload: LocalBankCardsConfirmPayload)`

### MPGS

- `mpgs.confirm(payload: MpgsConfirmPayload)`

### T-Lync

- `tlync.confirm(payload: TlyncConfirmPayload)`

Please refer to the official Plutu API documentation for detailed information on the required payloads for each function.