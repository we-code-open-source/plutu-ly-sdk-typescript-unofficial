# Pluto TypeScript SDK

A comprehensive TypeScript SDK for the Pluto payment gateway system.

## Installation

```
npm install pluto-sdk
```

## Usage

First, you need to configure the SDK with your API key and access token.

```
import { PlutoConfig, sadadVerify } from 'pluto-sdk';

const config: PlutoConfig = {
  apiKey: 'YOUR_API_KEY',
  accessToken: 'YOUR_ACCESS_TOKEN',
};

const verifyPayload = {
  mobile_number: '0913632323',
  birth_year: '1990',
  amount: '10.00',
};

sadadVerify(config, verifyPayload)
  .then(response => {
    console.log('Verification successful:', response);
    // Proceed with the confirm step using the process_id
  })
  .catch(error => {
    console.error('Verification failed:', error);
  });
```

## Available Functions

### Sadad

- `sadadVerify(config, payload)`
- `sadadConfirm(config, payload)`

### Adfali

- `adfaliVerify(config, payload)`
- `adfaliConfirm(config, payload)`

### Local Bank Cards

- `localBankCardsConfirm(config, payload)`

### MPGS

- `mpgsConfirm(config, payload)`

### T-Lync

- `tlyncConfirm(config, payload)`

Please refer to the official Pluto API documentation for detailed information on the required payloads for each function.