import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://otuchosxgsvmfazksnda.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90dWNob3N4Z3N2bWZhemtzbmRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM4NjUwNDcsImV4cCI6MjA2OTQ0MTA0N30.IdIqSJc2U-ZmVI_zhfRqraHi5nwuWVolLuZxERLsRNU';

export const supabase = createClient(supabaseUrl, supabaseKey);