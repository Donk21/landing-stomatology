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
  if (!response.ok) throw new Error("Send failed");
}
