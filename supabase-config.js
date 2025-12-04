// supabase-config.js

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// You MUST replace both strings below
export const supabase = createClient(
  "https://gjchzuetcfuyfosiunwo.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqY2h6dWV0Y2Z1eWZvc2l1bndvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4NDQxNTksImV4cCI6MjA4MDQyMDE1OX0.LGNV_vV5QONRLXEpBqWW40-SoG1SvLung70YlBVQG2I"
);
