# Deployment Setup for Bazaar Digital BD

I have fully prepared the application and the database.

### Database (Supabase)
- **Project**: Test (ukkeaheoqyherwmzsapb)
- **Status**: Schema initialized (profiles, listings, transactions tables created).
- **RLS**: Policies configured for secure access.

### Frontend (Next.js)
- **Build**: Configured for static export (`out` directory).
- **Branch**: Use the branch provided in the PR/Submit.

### Render Deployment Instructions
1.  **Service Type**: Static Site
2.  **Build Command**: `npm install; npm run build`
3.  **Publish Directory**: `out`
4.  **Environment Variables** (Already configured in the code as fallbacks, but set these in Render for security):
    *   `NEXT_PUBLIC_SUPABASE_URL`: https://ukkeaheoqyherwmzsapb.supabase.co
    *   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: sb_publishable_NbFhumtFBOidqC0Vd_OBMw_vCunQVPA

The application is now ready to be hosted and fully connected to the live Supabase instance.
