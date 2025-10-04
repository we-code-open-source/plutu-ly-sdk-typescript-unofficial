/**
 * @file Pluto SDK Configuration
 * @description Handles the configuration for the Pluto API client.
 */

/**
 * Represents the configuration for the Pluto SDK.
 * @interface
 */
export interface PlutoConfig {
  apiKey: string;
  accessToken: string;
  secretKey?: string;
}

const PLUTU_API_URL = "https://api.plutus.ly/api/v1";

/**
 * Creates the full API URL for a given endpoint.
 * @param {string} endpoint - The API endpoint.
 * @returns {string} The full API URL.
 */
export const getApiUrl = (endpoint: string): string => {
  return `${PLUTU_API_URL}${endpoint}`;
};
