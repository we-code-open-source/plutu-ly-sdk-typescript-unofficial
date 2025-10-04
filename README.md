# Plutu TypeScript SDK (Unofficial)

A comprehensive unofficial Typescript implementation for the [Plutu payment gateway API](https://docs.plutu.ly/) provided by [Libyan Spider](https://libyanspider.com/).

Please refer to the official Plutu API documentation for detailed information or changes in the API.

Full documentation can be found at: [https://docs.plutu.ly](https://docs.plutu.ly/).
LLM friendly version of the documentation: [https://docs.plutu.ly/llms-full.txt](https://docs.plutu.ly/llms-full.txt).

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
