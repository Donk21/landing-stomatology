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
    throw new Error(
      "The appointment service is currently unavailable. Please try again later."
    );
  }

  try {
    await response.json();
  } catch {
    throw new Error(
      "Received an unexpected response from the server. Please try again later."
    );
  }
}