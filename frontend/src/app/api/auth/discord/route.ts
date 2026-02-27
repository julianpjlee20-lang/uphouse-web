import { NextResponse } from 'next/server';

// Discord OAuth config
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
const DISCORD_REDIRECT_URI = process.env.DISCORD_REDIRECT_URI || ''; // Auto-detect in request

export async function POST(request: Request) {
  const baseUrl = request.headers.get('x-forwarded-proto') + '://' + request.headers.get('host');
  const redirectUri = DISCORD_REDIRECT_URI || `${baseUrl}/api/auth/discord/callback`;
  try {
    if (!DISCORD_CLIENT_ID || !DISCORD_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'Discord OAuth 未設定' },
        { status: 500 }
      );
    }

    // Generate state for CSRF protection
    const state = Math.random().toString(36).substring(7);
    
    // Store state in cookie (simple approach)
    const stateCookie = `oauth_state=${state}; Path=/; HttpOnly; SameSite=Lax; Max-Age=300`;

    // Build Discord OAuth URL
    const params = new URLSearchParams({
      client_id: DISCORD_CLIENT_ID,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope: 'identify email',
      state,
    });

    const discordUrl = `https://discord.com/api/oauth2/authorize?${params.toString()}`;

    const response = NextResponse.json({ url: discordUrl });
    response.headers.set('Set-Cookie', stateCookie);
    
    return response;
  } catch (error) {
    console.error('Discord OAuth error:', error);
    return NextResponse.json(
      { error: '伺服器錯誤' },
      { status: 500 }
    );
  }
}
