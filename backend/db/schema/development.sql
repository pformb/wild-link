INSERT INTO organizations (organization_name, website_url, first_name, last_name, phone_number, email, address, password, is_deleted, created_at, updated_at)
VALUES ('MARS Wildlife Rescue Centre', 'www.marswildliferescue.com', 'Gyl', 'Andersen', '250-337-2021', 'gyl@marswildliferescue.com', '1331 Williams Beach Road,
Merville, British Columbia', 'password', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO users (first_name, last_name, email, address, password, created_at, updated_at)
VALUES 
  ('Desiree', 'Ingram', 'desiree@email.com', 'Somewhere, Victoria, BC', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('David', 'Carmichael', 'david@email.com', 'Somewhere, Campbell River, BC', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Paul', 'Formby', 'paul@email.com', 'Somewhere, Victoria', 'password', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO species (name, scientific_name, description, image, created_at, updated_at)
VALUES
  ('Bald Eagle', 'Haliaeetus leucocephalus', 'The bald eagle is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle, which occupies the same niche as the bald eagle in the Palearctic.', 'bald-eagle.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Common Raven', 'Corvus corax', 'The common raven is a large all-black passerine bird. It is the most widely distributed of all corvids, found across the Northern Hemisphere.', 'common-raven.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Raccoon', 'Procyon lotor', 'Raccoons are stocky animals with short legs and small, rounded ears. Their fur is gray, with dark black markings around their eyes, and black bands on their tail.', 'raccoon.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Varied Thrush', 'Ixoreus naevius', 'The varied thrush is a member of the thrush family, Turdidae. It is the only species in the monotypic genus Ixoreus.', 'varied-thrush.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO conditions (condition_name, created_at, updated_at)
VALUES
  ('Cat Attack', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Dog Attack', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Broken Wing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Infection', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Emaciation', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Window Strike', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Car Strike', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Head Trauma', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO treatments (treatment_name, treatment_cost, created_at, updated_at)
VALUES
  ('Physiotherapy', 20000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Fluid Therapy', 10000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Wing Wrap', 6000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Anti-Biotics', 15000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Trauma Therapy', 30000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Nutritional Support', 15000 , CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Orphan Care', 50000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO age_ranges (range_name, created_at, updated_at)
VALUES
  ('Baby', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Hatchling', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Fledgling', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Juvenile', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sub-Adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Adult', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO patients (organization_id, patient_case, species_id, location_found, date_admitted, is_released, is_archived, age_range_id, created_at, updated_at)
VALUES
  (1, 'BAEA 083', 1, 'Campbell River', '2024-03-28', FALSE, FALSE, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (1, 'CORA 987', 2, 'Sayward', '2023-09-16', FALSE, FALSE, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (1, 'PRLO 008', 3, 'Comox', '2024-01-04', FALSE, FALSE, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO patients (organization_id, patient_case, species_id, location_found, date_admitted, release_date, is_released, is_archived, age_range_id, created_at, updated_at)
VALUES
  (1, 'VATH 1020', 4, 'Courtenay', '2023-12-14', '2024-04-03', TRUE, FALSE, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO patient_conditions (condition_id, patient_id, created_at, updated_at)
VALUES
  (3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO patient_treatments (treatment_id, patient_id, created_at, updated_at)
VALUES
  (1, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO patient_images (patient_id, image_url, created_at, updated_at)
VALUES
  (1, 'https://wreg.com/wp-content/uploads/sites/18/2023/02/eagle-ms.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO donations (user_id, organization_id, patient_id, donation_amount, donation_date, created_at, updated_at)
VALUES
  (1, 1, 1, 10000, '2024-04-02', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 3, 5000, '2024-03-16', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 2, 2500, '2024-03-24', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
