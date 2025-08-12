import { neon } from '@neondatabase/serverless';

const databaseUrl = import.meta.env.VITE_DATABASE_URL;

if (!databaseUrl || databaseUrl === 'postgresql://username:password@hostname:5432/database_name') {
  console.warn('Database URL not configured. Database features will be disabled.');
}

const sql = databaseUrl && databaseUrl !== 'postgresql://username:password@hostname:5432/database_name' 
  ? neon(databaseUrl) 
  : null;

export { sql };

// Initialize database tables
export const initializeDatabase = async () => {
  if (!sql) {
    console.warn('Database not configured. Skipping database initialization.');
    return;
  }
  
  try {
    // Create users table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
  }
};