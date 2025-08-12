import Cookies from 'js-cookie';
import { sql } from './database';

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

// Simple client-side session management
const SESSION_KEY = 'user_session';

export const registerUser = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  if (!sql) {
    return {
      success: false,
      message: 'Database not configured. Please contact support.'
    };
  }
  
  try {
    // Check if user already exists
    const existingUser = await sql`
      SELECT id FROM users WHERE email = ${email}
    `;

    if (existingUser.length > 0) {
      return {
        success: false,
        message: 'User with this email already exists'
      };
    }

    // For demo purposes, we'll store password as plain text
    // In production, this should be handled by a secure backend
    const result = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${password})
      RETURNING id, name, email, created_at
    `;

    const user = result[0] as User;

    // Store user session
    localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    Cookies.set('user_id', user.id.toString(), { expires: 7, secure: true, sameSite: 'strict' });

    return {
      success: true,
      message: 'Registration successful',
      user
    };
  } catch (error) {
    console.error('Registration error:', error);
    return {
      success: false,
      message: 'Registration failed. Please try again.'
    };
  }
};

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  if (!sql) {
    return {
      success: false,
      message: 'Database not configured. Please contact support.'
    };
  }
  
  try {
    // Find user and verify password
    const result = await sql`
      SELECT id, name, email, password, created_at FROM users 
      WHERE email = ${email} AND password = ${password}
    `;

    if (result.length === 0) {
      return {
        success: false,
        message: 'Invalid email or password'
      };
    }

    const user = result[0] as User & { password: string };

    // Remove password from response
    const { password: _, ...userWithoutPassword } = user;

    // Store user session
    localStorage.setItem(SESSION_KEY, JSON.stringify(userWithoutPassword));
    Cookies.set('user_id', user.id.toString(), { expires: 7, secure: true, sameSite: 'strict' });

    return {
      success: true,
      message: 'Login successful',
      user: userWithoutPassword
    };
  } catch (error) {
    console.error('Login error:', error);
    return {
      success: false,
      message: 'Login failed. Please try again.'
    };
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  if (!sql) {
    return null;
  }
  
  try {
    const sessionData = localStorage.getItem(SESSION_KEY);
    const userId = Cookies.get('user_id');
    
    if (!sessionData || !userId) {
      return null;
    }

    const user = JSON.parse(sessionData) as User;

    // Verify user still exists in database
    const result = await sql`
      SELECT id, name, email, created_at FROM users WHERE id = ${parseInt(userId)}
    `;

    if (result.length === 0) {
      logoutUser();
      return null;
    }

    return result[0] as User;
  } catch (error) {
    console.error('Get current user error:', error);
    logoutUser();
    return null;
  }
};

export const logoutUser = (): void => {
  localStorage.removeItem(SESSION_KEY);
  Cookies.remove('user_id');
};