# Supabase Backend Setup for MyAllergies

This guide will help you set up the Supabase backend for your MyAllergies application.

## 🚀 Quick Setup

### 1. Database Schema Setup

1. Go to your Supabase project dashboard: https://supabase.com/dashboard/project/dyxlwmpsxfjtvpmmuyxv
2. Navigate to the **SQL Editor** tab
3. Copy and paste the contents of `supabase-schema.sql` into the editor
4. Click **Run** to execute the schema

### 2. Environment Variables

Create a `.env.local` file in your project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://dyxlwmpsxfjtvpmmuyxv.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR5eGx3bXBzeGZqdHZwbW11eXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY3NzIzNzIsImV4cCI6MjA3MjM0ODM3Mn0.zoBGJKCYGfN_GuIMh1JiMBkIIK05cAqzcA7NonCNSSs
```

### 3. Authentication Setup

#### Enable Email Authentication
1. Go to **Authentication** → **Settings** in your Supabase dashboard
2. Under **Auth Providers**, ensure **Email** is enabled
3. Configure your site URL: `http://localhost:3000` (for development)

#### Enable Google OAuth (Optional)
1. Go to **Authentication** → **Providers** in your Supabase dashboard
2. Enable **Google** provider
3. Add your Google OAuth credentials:
   - Client ID
   - Client Secret
4. Add redirect URL: `https://dyxlwmpsxfjtvpmmuyxv.supabase.co/auth/v1/callback`

### 4. Database Tables Created

The schema creates the following tables:

#### `profiles`
- Extends the auth.users table
- Stores user profile information
- Automatically created when a user signs up

#### `allergy_cards`
- Stores user-generated allergy cards
- Contains allergies array, language, and optional name
- Linked to user via user_id

#### `allergy_profiles`
- Stores detailed allergy information per user
- Includes severity levels and notes
- Linked to user via user_id

### 5. Row Level Security (RLS)

All tables have RLS enabled with policies that ensure:
- Users can only access their own data
- Users can create, read, update, and delete their own records
- No cross-user data access

### 6. API Usage

The application uses the following Supabase features:

#### Authentication
```typescript
import { AuthService } from '@/lib/auth'

// Sign up
await AuthService.signUp(email, password, firstName, lastName)

// Sign in
await AuthService.signIn(email, password)

// Google OAuth
await AuthService.signInWithGoogle()

// Sign out
await AuthService.signOut()
```

#### Database Operations
```typescript
import { DatabaseService } from '@/lib/database'

// Create allergy card
await DatabaseService.createAllergyCard({
  user_id: userId,
  allergies: ['peanuts', 'shellfish'],
  language: 'Spanish'
})

// Get user's allergy cards
await DatabaseService.getAllergyCards(userId)
```

### 7. Testing the Setup

1. Start your development server: `npm run dev`
2. Navigate to `/signup` and create a test account
3. Check your Supabase dashboard to see the user in the **Authentication** tab
4. Verify the profile was created in the **Table Editor** under `profiles`

### 8. Production Considerations

For production deployment:

1. Update the site URL in Supabase settings to your production domain
2. Add your production domain to allowed origins
3. Consider enabling additional security features:
   - Rate limiting
   - CAPTCHA
   - Email confirmation requirements
4. Set up proper backup strategies
5. Monitor usage and performance

### 9. Troubleshooting

#### Common Issues:

1. **"Invalid API key"**: Check that your environment variables are correctly set
2. **"Row Level Security" errors**: Ensure RLS policies are properly configured
3. **OAuth redirect issues**: Verify redirect URLs match your domain
4. **Email not sending**: Check Supabase email settings and SMTP configuration

#### Useful Supabase Dashboard Sections:
- **Authentication** → **Users**: View registered users
- **Table Editor**: Browse and edit data
- **SQL Editor**: Run custom queries
- **Logs**: Monitor API usage and errors
- **Settings** → **API**: View project configuration

### 10. Next Steps

With the backend set up, you can now:
- Implement user authentication flows
- Create and manage allergy cards
- Build user profiles and preferences
- Add real-time features with Supabase subscriptions
- Implement file storage for card images
- Set up email notifications

For more advanced features, consider:
- Real-time subscriptions for live updates
- File storage for user avatars and card images
- Edge functions for serverless API endpoints
- Database backups and monitoring
