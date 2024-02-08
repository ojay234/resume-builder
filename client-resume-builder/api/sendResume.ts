import axios from "axios";

interface ResumeData {
  html: string;
  css: string;
}

export async function sendResume(data: ResumeData): Promise<ArrayBuffer> {
  try {
    const response = await axios.post<ArrayBuffer>(
      "http://localhost:4000/generate-pdf",
      data,
      {
        responseType: "arraybuffer",
      }
    );
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error sending resume:", error);
    throw new Error("Failed to send resume");
  }
}
