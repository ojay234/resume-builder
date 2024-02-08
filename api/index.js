const express = require("express");
const puppeteer = require("puppeteer");
const bodyParser = require("body-parser");
const fs = require("fs");
const cors = require("cors"); // Import CORS middleware

const app = express();
const port = 4000;

// Middleware to parse JSON and urlencoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add CORS middleware
app.use(cors());

// Endpoint to receive HTML/CSS template
app.post("/generate-pdf", async (req, res) => {
  try {
    const { html, css } = req.body;

    // Generate a temporary HTML file with the provided HTML/CSS content
    const htmlFilePath = "./temp/template.html";
    fs.writeFileSync(htmlFilePath, `<style>${css}</style>${html}`, "utf8");

    // Generate PDF using Puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`file://${__dirname}/${htmlFilePath}`, {
      waitUntil: "networkidle0",
    });
    const pdfBuffer = await page.pdf({ format: "A4" });
    await browser.close();

    // Send PDF file as a download
    res.setHeader("Content-Disposition", 'attachment; filename="resume.pdf"');
    res.setHeader("Content-Type", "application/pdf");
    res.send(pdfBuffer);

    // Cleanup: delete temporary HTML file
    fs.unlinkSync(htmlFilePath);
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
