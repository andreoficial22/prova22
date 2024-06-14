import {createClient} from "@supabase/supabase-js"

const link = "https://ytgrntpmoharcvfdckiv.supabase.co"
const chave = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0Z3JudHBtb2hhcmN2ZmRja2l2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyMjc3MzcsImV4cCI6MjAzMzgwMzczN30.y9LUizIgDcZbbR9ZWqxCEVlrtb1Ssdoc6gBYoeK9Dng"

export const supabase = createClient(link,chave)