/**
 * @file plutu API Client
 * @description A simple HTTP client for making requests to the plutu API.
 */

import type { plutuConfig } from "./config";

/**
 * Makes a POST request to the plutu API.
 *
 * @param {string} url - The full URL for the API endpoint.
 * @param {plutuConfig} config - The configuration object containing the API key and access token.
 * @param {Record<string, any>} data - The data to be sent in the request body.
 * @returns {Promise<any>} A promise that resolves with the JSON response from the API.
 * @throws {Error} If the API request fails.
 */
export const post = async (
  url: string,
  config: plutuConfig,
  data: Record<string, any>
): Promise<any> => {
  try {
    const formData = new FormData();
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key]);
      }
    }

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "X-API-KEY": config.apiKey,
        Authorization: `Bearer ${config.accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json() as any;
      throw new Error(errorData.error.message || "API request failed");
    }

    return await response.json();
  } catch (error) {
    console.error("plutu API Error:", error);
    throw error;
  }
};
