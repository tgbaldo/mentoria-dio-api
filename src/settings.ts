export const NODE_PORT = process.env.NODE_PORT || 3000;
export const IS_DEVELOPMENT = true;
export const RABBIT_HOST= 'amqp://localhost';
export const RABBIT_USER='';
export const RABBIT_PASSWORD='';
export const RABBIT_PORT=5672;
export const RABBIT_DSN = IS_DEVELOPMENT ? `${RABBIT_HOST}` : ``;

export const DB_HOST = process.env.DB_HOST || 'dio.c84zkcyhqf7q.us-east-1.rds.amazonaws.com';
export const DB_USERNAME = process.env.DB_USERNAME || 'admin';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'mentoriadio2021';
export const DB_NAME = process.env.DB_NAME || 'mentoriadio';
export const DB_PORT = process.env.DB_PORT || 3306;
