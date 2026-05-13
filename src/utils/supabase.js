export async function getClientBySlug(slug) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    console.warn('Supabase credentials are not set in environment variables');
    return null;
  }

  try {
    const res = await fetch(
      `${supabaseUrl}/rest/v1/clients?slug=eq.${slug}&select=*`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        },
        next: { revalidate: 60 } // Cache data for 60 seconds
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch client:', await res.text());
      return null;
    }

    const data = await res.json();
    return data.length > 0 ? data[0] : null;
  } catch (error) {
    console.error('Error fetching client:', error);
    return null;
  }
}
