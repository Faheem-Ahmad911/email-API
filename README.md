# Email API

A simple email sending API built with Express.js and Nodemailer.

## Features
- Send emails via Gmail
- REST API endpoint
- CORS enabled
- Environment variable support

## Local Setup

1. **Clone the repository**
```bash
git clone <repo-url>
cd email-API
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`
   - Add your Gmail credentials:
   ```
   GMAIL_USER=your_email@gmail.com
   GMAIL_PASS=your_app_password
   ```

4. **Run the server**
```bash
npm start
```

5. **Access the form**
   - Open: `http://localhost:5000/form.html`

## Deployment on Vercel

### Prerequisites
- Vercel account (free at https://vercel.com)
- GitHub account with this repository

### Steps

1. **Push to GitHub**
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect the Node.js configuration

3. **Set Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add:
     - `GMAIL_USER`: Your Gmail address
     - `GMAIL_PASS`: Your Gmail app password
   - Click "Save"

4. **Deploy**
   - Vercel will automatically deploy your project
   - Your app will be available at: `https://<project-name>.vercel.app`

## API Endpoints

### POST /send-email
Sends an email with order details.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "product": "Product Name",
  "price": 99.99
}
```

**Response:**
```json
{
  "message": "Email sent successfully!"
}
```

## Getting Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification (if not already enabled)
3. Search for "App passwords"
4. Select Mail and Windows Computer
5. Copy the generated 16-character password
6. Use it as `GMAIL_PASS` in `.env`

## Troubleshooting

- **Email not sending**: Verify Gmail credentials and ensure 2FA is enabled
- **Port issues**: Server automatically uses PORT env variable or defaults to 5000
- **CORS errors**: Check that the frontend URL matches the allowed origins

## License
MIT
