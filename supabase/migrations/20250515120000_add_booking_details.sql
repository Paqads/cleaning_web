/*
  # Add booking details and status management

  1. Schema Changes
    - Add customer contact and service details to bookings table
    - Add status field for booking management (pending, confirmed, completed, cancelled)
    - Add estimated_price field for price tracking
    - Add special_instructions field for customer notes

  2. New Columns Added to bookings table:
    - `name` (text) - Customer full name
    - `email` (text) - Customer email address
    - `phone` (text) - Customer phone number
    - `address` (text) - Service location street address
    - `city` (text) - Service location city
    - `postal_code` (text) - Service location postal code
    - `service` (text) - Type of cleaning service
    - `property_type` (text) - Type of property (house, apartment, etc.)
    - `property_size` (text) - Size category of property
    - `frequency` (text) - Booking frequency (one-time, weekly, etc.)
    - `status` (text) - Booking status with default 'pending'
    - `special_instructions` (text) - Optional customer notes
    - `estimated_price` (numeric) - Estimated service price

  3. Security
    - Maintains existing RLS policies
    - Status field allows admin to manage booking lifecycle

  4. Important Notes
    - Default status is 'pending' for new bookings
    - All new fields use IF NOT EXISTS to prevent errors on re-run
    - Existing data is preserved
*/

DO $$
BEGIN
  -- Add name column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'name'
  ) THEN
    ALTER TABLE bookings ADD COLUMN name text NOT NULL DEFAULT '';
  END IF;

  -- Add email column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'email'
  ) THEN
    ALTER TABLE bookings ADD COLUMN email text NOT NULL DEFAULT '';
  END IF;

  -- Add phone column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'phone'
  ) THEN
    ALTER TABLE bookings ADD COLUMN phone text NOT NULL DEFAULT '';
  END IF;

  -- Add address column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'address'
  ) THEN
    ALTER TABLE bookings ADD COLUMN address text NOT NULL DEFAULT '';
  END IF;

  -- Add city column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'city'
  ) THEN
    ALTER TABLE bookings ADD COLUMN city text NOT NULL DEFAULT 'Ottawa';
  END IF;

  -- Add postal_code column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'postal_code'
  ) THEN
    ALTER TABLE bookings ADD COLUMN postal_code text NOT NULL DEFAULT '';
  END IF;

  -- Add service column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'service'
  ) THEN
    ALTER TABLE bookings ADD COLUMN service text NOT NULL DEFAULT '';
  END IF;

  -- Add property_type column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'property_type'
  ) THEN
    ALTER TABLE bookings ADD COLUMN property_type text NOT NULL DEFAULT '';
  END IF;

  -- Add property_size column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'property_size'
  ) THEN
    ALTER TABLE bookings ADD COLUMN property_size text NOT NULL DEFAULT 'medium';
  END IF;

  -- Add frequency column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'frequency'
  ) THEN
    ALTER TABLE bookings ADD COLUMN frequency text NOT NULL DEFAULT 'one-time';
  END IF;

  -- Add status column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'status'
  ) THEN
    ALTER TABLE bookings ADD COLUMN status text NOT NULL DEFAULT 'pending';
  END IF;

  -- Add special_instructions column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'special_instructions'
  ) THEN
    ALTER TABLE bookings ADD COLUMN special_instructions text;
  END IF;

  -- Add estimated_price column if it doesn't exist
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'bookings' AND column_name = 'estimated_price'
  ) THEN
    ALTER TABLE bookings ADD COLUMN estimated_price numeric(10,2);
  END IF;
END $$;

-- Create index on status for faster filtering
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);

-- Create index on date for faster date-based queries
CREATE INDEX IF NOT EXISTS idx_bookings_date ON bookings(date);
