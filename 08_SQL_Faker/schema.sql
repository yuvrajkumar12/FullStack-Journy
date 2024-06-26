CREATE TABLE user (
    id CHAR(36) PRIMARY KEY,  -- Assuming a UUID
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE NOT NULL,  -- Increased length for email
    password CHAR(60) NOT NULL  -- Assuming hashed passwords with algorithms like bcrypt
);
