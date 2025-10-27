# Deployment Guide

## Environment Variables Required

Before deploying, you must configure the following environment variables:

### Required Variables

| Variable | Description | Where to Get It |
|----------|-------------|-----------------|
| `RESEND_API_KEY` | API key for sending emails via Resend | https://resend.com/api-keys |

---

## Vercel Deployment

### 1. Deploy to Vercel

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel
```

### 2. Add Environment Variables

#### Via Vercel Dashboard:
1. Go to your project on Vercel
2. Navigate to **Settings** → **Environment Variables**
3. Add the following:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
   - **Environment**: Production, Preview, Development (select all)
4. Click **Save**

#### Via Vercel CLI:
```bash
vercel env add RESEND_API_KEY
# When prompted, enter your API key
```

### 3. Redeploy

After adding environment variables, trigger a new deployment:
```bash
vercel --prod
```

Or redeploy from the Vercel dashboard.

---

## Local Development

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and add your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

---

## Verifying Email Functionality

After deployment:

1. Visit your deployed site's contact page: `/contact`
2. Fill out and submit the form
3. Check the email inbox: `info@cordoba-ai.com`
4. The email should arrive within seconds (check spam folder if needed)

---

## Domain Verification (Production)

For production use, verify your domain in Resend to prevent emails from going to spam:

1. Go to: https://resend.com/domains
2. Click **Add Domain**
3. Enter: `cordoba-ai.com`
4. Add the DNS records Resend provides to your domain registrar
5. Wait for verification (usually 1-24 hours)
6. Update the `from` address in `app/api/contact/route.ts` to use your verified domain

---

## Security Notes

- ⚠️ **Never commit `.env.local` to git** (it's already in `.gitignore`)
- ⚠️ **Never share your API keys publicly**
- ✅ Rotate API keys periodically for security
- ✅ Use different API keys for development and production (if possible)

---

## Troubleshooting

### Emails not sending:
1. Check environment variable is set correctly in Vercel
2. Check Resend dashboard for error logs: https://resend.com/emails
3. Verify API key is valid and not expired
4. Check rate limits (free tier: 100 emails/day)

### Emails going to spam:
1. Verify your domain in Resend
2. Add SPF, DKIM, and DMARC records
3. Use a verified `from` email address
