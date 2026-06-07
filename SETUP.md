# Deployment Setup for Bazaar Digital BD on Render

To successfully deploy this project as a **Static Site** on Render, please use the following configuration:

### Render Dashboard Settings

1.  **Service Type**: Static Site
2.  **Build Command**: `npm install; npm run build`
3.  **Publish Directory**: `out`
4.  **Environment Variables**:
    *   `NEXT_PUBLIC_SUPABASE_URL`: your-supabase-url
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: your-supabase-anon-key

### Important Notes

*   The project is configured for static export (`output: 'export'` in `next.config.ts`).
*   Next.js generates the static files in the `out` directory, which is what Render should serve.
*   Dynamic routes (like `/profile/[id]`) are pre-rendered using `generateStaticParams` with mock data for now.
