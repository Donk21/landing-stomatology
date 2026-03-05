/**
 * Sends appointment form data to the backend.
 * @param {{ name: string; phone: string; service: string; time: string }} payload
 * @returns {Promise<void>}
 */
export async function sendAppointment(payload) {
  const response = await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Send failed");
  }

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    // This can happen if the SPA app shell HTML is returned instead of the API response.
    throw new Error(
      "The appointment service is currently unavailable. Please try again later."
    );
  }

  // Validate that the body is well-formed JSON, even though we do not use it.
  try {
    await response.json();
  } catch {
    throw new Error(
      "Received an unexpected response from the server. Please try again later."
    );
  }
}
