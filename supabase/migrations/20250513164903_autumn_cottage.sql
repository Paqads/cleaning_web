/*
  # Create bookings table

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `date` (date, not null)
      - `time` (text, not null)
      - `user_id` (uuid, references auth.users)
      - `created_at` (timestamp with time zone)

  2. Security
    - Enable RLS on `bookings` table
    - Add policies for:
      - Users can read all bookings (to check availability)
      - Users can only create/update/delete their own bookings
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  date date NOT NULL,
  time text NOT NULL,
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(date, time)
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow all users to read bookings (needed for checking availability)
CREATE POLICY "Bookings are viewable by everyone" ON bookings
  FOR SELECT
  TO authenticated
  USING (true);

-- Users can only create their own bookings
CREATE POLICY "Users can create their own bookings" ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can only update their own bookings
CREATE POLICY "Users can update their own bookings" ON bookings
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own bookings
CREATE POLICY "Users can delete their own bookings" ON bookings
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);