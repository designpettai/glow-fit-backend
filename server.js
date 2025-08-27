const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", async (req, res) => {
  try {
    const { mobileNumber, appointmentDate, timeSlot, reasonForVisit, email, branch } = req.body;

    const yourEmail = " glowfitclinic@gmail.com ";
    const appPassword = "wfmb uvqu xgkw rfpg";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: yourEmail,
        pass: appPassword
      }
    });

    await transporter.sendMail({
      from: `"${email}" <${yourEmail}>`,  // ✅ safer: shows user email, but sends via your Gmail
      to: yourEmail,
      subject: "New Appointment Booking",
      html: `
         <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Appointment Request</title>
          <style>
            * { 
              margin: 0; 
              padding: 0; 
              box-sizing: border-box; 
            }
            
            body { 
              font-family: 'Arial', sans-serif; 
              line-height: 1.6; 
              color: #333; 
              background-color: #f8f8f8;
              padding: 20px;
            }
            
            .email-wrapper {
              max-width: 600px;
              margin: 0 auto;
              background: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 4px 12px rgba(0,0,0,0.1);
              border: 2px solid #D4AF37;
            }
            
            .header {
              background: #D4AF37;
              padding: 30px 20px;
              text-align: center;
              color: white;
            }
            
            .header-icon {
              font-size: 36px;
              margin-bottom: 15px;
              display: block;
            }
            
            .header h1 {
              font-size: 24px;
              font-weight: 600;
              margin-bottom: 8px;
            }
            
            .header p {
              font-size: 14px;
              opacity: 0.9;
              font-weight: 300;
            }
            
            .content {
              padding: 30px;
              background: #ffffff;
            }
            
            .appointment-card {
              background: #ffffff;
              border: 1px solid #D4AF37;
              border-radius: 6px;
              padding: 25px;
              margin-bottom: 25px;
            }
            
            .field {
              display: flex;
              align-items: center;
              margin-bottom: 15px;
              padding: 10px 0;
              border-bottom: 1px solid #f0f0f0;
            }
            
            .field:last-child { 
              border-bottom: none; 
              margin-bottom: 0;
            }
            
            .field-icon {
              width: 20px;
              margin-right: 12px;
              font-size: 16px;
              color: #D4AF37;
              text-align: center;
            }
            
            .field-content {
              flex: 1;
            }
            
            .label {
              font-weight: 600;
              color: #666;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 3px;
              display: block;
            }
            
            .value {
              color: #333;
              font-size: 15px;
              font-weight: 500;
            }
            
            .highlight {
              color: #D4AF37;
              font-weight: 600;
            }
            
            .action-buttons {
              text-align: center;
              margin: 25px 0;
            }
            
            .btn {
              display: inline-block;
              padding: 12px 24px;
              margin: 0 10px 10px 0;
              text-decoration: none;
              border-radius: 4px;
              font-weight: 600;
              font-size: 13px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              transition: all 0.3s ease;
              border: 2px solid #D4AF37;
            }
            
            .btn-confirm {
              background: #D4AF37;
              color: white;
            }
            
            .btn-confirm:hover {
              background: #B8941F;
              border-color: #B8941F;
            }
            
            .btn-reschedule {
              background: white;
              color: #D4AF37;
            }
            
            .btn-reschedule:hover {
              background: #D4AF37;
              color: white;
            }
            
            .footer {
              background: #f9f9f9;
              padding: 20px;
              text-align: center;
              border-top: 1px solid #e0e0e0;
            }
            
            .footer-content {
              max-width: 400px;
              margin: 0 auto;
            }
            
            .footer p {
              color: #666;
              font-size: 12px;
              margin-bottom: 6px;
            }
            
            .company-name {
              color: #D4AF37;
              font-weight: 700;
              font-size: 16px;
              margin-bottom: 10px;
            }
            
            .divider {
              height: 1px;
              background: #D4AF37;
              margin: 15px 0;
              opacity: 0.3;
            }
            
            @media (max-width: 600px) {
              .email-wrapper { 
                margin: 10px; 
                border-radius: 6px; 
              }
              .content { 
                padding: 20px; 
              }
              .header { 
                padding: 25px 15px; 
              }
              .appointment-card { 
                padding: 20px; 
              }
              .btn { 
                display: block; 
                margin: 8px 0; 
                width: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div class="email-wrapper">
            <div class="header">
              <div class="header-icon">📅</div>
              <h1>Appointment Request</h1>
              <p>GlowFit Clinic - Premium Healthcare Services</p>
            </div>
            
            <div class="content">
              <div class="appointment-card">
                <div class="field">
                  <div class="field-icon">✉️</div>
                  <div class="field-content">
                    <span class="label">Patient Email</span>
                    <span class="value highlight">${email}</span>
                  </div>
                </div>
                
                <div class="field">
                  <div class="field-icon">📱</div>
                  <div class="field-content">
                    <span class="label">Contact Number</span>
                    <span class="value">${mobileNumber}</span>
                  </div>
                </div>
                
                <div class="divider"></div>
                
                <div class="field">
                  <div class="field-icon">📅</div>
                  <div class="field-content">
                    <span class="label">Appointment Date</span>
                    <span class="value highlight">${appointmentDate}</span>
                  </div>
                </div>
                
                <div class="field">
                  <div class="field-icon">🕒</div>
                  <div class="field-content">
                    <span class="label">Time Slot</span>
                    <span class="value highlight">${timeSlot}</span>
                  </div>
                </div>
                
                <div class="divider"></div>
                
                <div class="field">
                  <div class="field-icon">🏥</div>
                  <div class="field-content">
                    <span class="label">Service Required</span>
                    <span class="value">${reasonForVisit}</span>
                  </div>
                </div>
                
                ${branch ? `
                  <div class="field">
                    <div class="field-icon">📍</div>
                    <div class="field-content">
                      <span class="label">Branch Location</span>
                      <span class="value">${branch}</span>
                    </div>
                  </div>
                ` : ''}
              </div>
            </div>
        </body>
        </html>
      `,
      replyTo: email,
    });

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending email" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
