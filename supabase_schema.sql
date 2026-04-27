-- 1. Create Experiences Table
CREATE TABLE experiences (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  company text NOT NULL,
  date_range text NOT NULL,
  description text NOT NULL,
  order_num integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Projects Table
CREATE TABLE projects (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  title text NOT NULL,
  tech_stack text NOT NULL,
  description text NOT NULL,
  github_link text,
  order_num integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create Messages Table (For Contact Form)
CREATE TABLE messages (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Turn on Row Level Security (RLS) for all tables
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Create Policies to allow anonymous read access to public data
CREATE POLICY "Allow public read access on experiences" 
  ON experiences FOR SELECT 
  USING (true);

CREATE POLICY "Allow public read access on projects" 
  ON projects FOR SELECT 
  USING (true);

-- Create Policy to allow anyone to insert messages (contact form)
CREATE POLICY "Allow public insert on messages" 
  ON messages FOR INSERT 
  WITH CHECK (true);

-- We intentionally DO NOT create a policy for reading messages
-- Only authenticated admins can read messages in the Supabase Dashboard


-- 4. Insert Initial Data (To populate the website right away)
INSERT INTO experiences (title, company, date_range, description, order_num) VALUES
('Software Engineering Intern', 'Flo Group - İstanbul (Uzaktan)', '06/2025 - 07/2025', 'Milyonlarca aktif kullanıcısı olan E-Ticaret altyapısını ve CRM sistemlerini analiz ettim. Çevik (Agile) metodolojiler ve Dijital Dönüşüm odaklı 4 haftalık yoğun teknik eğitimi tamamladım.', 1),
('Information Technology Intern', 'Pendik Belediyesi - İstanbul', '07/2025 - 08/2025', 'Günlük yaklaşık 15+ teknik destek talebini çözümledim. 50''den fazla belediye personeline yazılım ve ofis otomasyonu konularında doğrudan teknik destek sağladım.', 2),
('Digital Media Designer', 'Google Developer Student Clubs (GDSC) - Elazığ', '11/2024 - 08/2025', 'Teknik atölyeler, hackathonlar ve etkinlikler için görsel materyaller tasarladım. Topluluk etkileşimini artırmak için sosyal medya kanallarını yönettim.', 3);

INSERT INTO projects (title, tech_stack, description, github_link, order_num) VALUES
('Veerify', 'Yapay Zeka | Veri Bilimi | NLP', 'Sektörel potansiyeli oldukça yüksek olan, yapay zeka destekli bir yalan haber (fake news) tespit sistemi. Geliştirme süreci aktif olarak devam etmektedir.', 'https://github.com/busrademirrr', 1),
('Panomda', 'Next.js | TypeScript', 'Kullanıcıların notlarını, görevlerini ve fikirlerini organize edebilecekleri dijital bir tuval platformu. Co-Developer olarak geliştirme sürecine katkı sağladım.', 'https://github.com/busrademirrr', 2),
('NovaTravel & AI Portal', 'C# | ASP.NET MVC 5 | MS SQL', 'Kullanıcıların hayalindeki tatili bulmasını sağlayan, yapay zeka destekli sohbet botu (NovaBot) barındıran dinamik turizm acentesi otomasyonu.', 'https://github.com/busrademirrr/NovaTravel-Project', 3),
('Breast Cancer KNN Analysis', 'Python | Scikit-Learn | PCA & NCA', 'Wisconsin veri setini kullanarak K-En Yakın Komşu algoritması ile kanser teşhisi. Boyut indirgeme tekniklerinin model performansına etkisinin karşılaştırmalı analizi.', 'https://github.com/busrademirrr/Breast-Cancer-KNN-Analysis', 4);
