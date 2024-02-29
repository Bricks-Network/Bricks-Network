import axios from 'axios';
import { execSync } from 'child_process';
import FormData from 'form-data';

// Function to capture console output
function captureConsoleOutput(command) {
  try {
    const output = execSync(command, { encoding: 'utf-8' });
    return { success: true, output };
  } catch (error) {
    return { success: false, output: error.message };
  }
}

// Function to delay execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Run build and deploy commands
const buildResult = captureConsoleOutput('npm run build');
const deployResult = captureConsoleOutput('npm run deploy');

// Discord webhook URL
const webhookURL = 'https://discord.com/api/webhooks/1212747429347332126/suRECM8q4vbvog8vHE6j_S6vHGe2XuHSikes-sy-BZRIbX0mHCBW2JYl8EHAECxHZrqa';

// Construct the message
const message = `
Lesgo script executed:

Build Result:
${buildResult.output}

Deploy Result:
${deployResult.output}
`;

// Create form data and append the message as a file
const formData = new FormData();
formData.append('file', Buffer.from(message), { filename: 'output.txt' });

// Send the file to Discord with rate-limiting
async function sendFile() {
  try {
    const response = await axios.post(
      webhookURL,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    console.log('File sent to Discord', response.data);
  } catch (error) {
    console.error('Error sending file to Discord:', error.response ? error.response.data : error.message);
  }
}

// Send the file to Discord with rate-limiting
sendFile();
