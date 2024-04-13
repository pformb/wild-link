INSERT INTO organizations (organization_name, website_url, image, first_name, last_name, phone_number, email, address, password, is_deleted, created_at, updated_at)
VALUES ('MARS Wildlife Rescue Centre', 'www.marswildliferescue.com', 'https://marswildliferescue.com/wp-content/uploads/2017/08/MARS-LOGO-transparent-background.png', 'Gyl', 'Andersen', '250-337-2021', 'gyl@marswildliferescue.com', '1331 Williams Beach Road,
Merville, British Columbia', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO users (first_name, last_name, email, address, password, created_at, updated_at)
VALUES 
  ('Desiree', 'Ingram', 'desiree@email.com', 'Somewhere, Victoria, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('David', 'Carmichael', 'david@email.com', 'Somewhere, Campbell River, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Paul', 'Formby', 'paul@email.com', 'Somewhere, Victoria', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


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


INSERT INTO patients (organization_id, patient_case, species_id, location_found, date_admitted, is_released, is_archived, age_range_id, story, image, created_at, updated_at)
VALUES
  (1, 'BAEA 083', 1, 'Campbell River', '2024-03-28', FALSE, FALSE, 5, 'In the serene vicinity of Campbell River, an sub-adult bald eagle, once a sovereign of the skies, was discovered in a precarious state, burdened by the limitations imposed by a broken wing. Admitted to the wildlife rehabilitation hospital on March 28, 2024, under case number BAEA 083, this noble creature faced a challenging ordeal, contending not only with the physical hindrances of its injury but also with infection and emaciation, a trio of hardships that severely tested its fortitude. The rehabilitation staff, aware of the critical care required, promptly devised a comprehensive treatment regimen aimed at mending its body and spirit.\n\nThe pathway to recovery for this majestic eagle was carefully charted by the dedicated rehabilitation staff, incorporating an array of interventions including physiotherapy to rehabilitate its weakened muscles, a wing wrap to support the healing process of the broken bone, and fluid therapy coupled with nutritional support to counteract its state of dehydration and malnutrition. Crucially, antibiotics were administered to combat the infection that plagued it, an essential component of the treatment plan that addressed the immediate threat to its well-being. Day by day, the eagle’s resilience, bolstered by the unwavering commitment of the rehabilitation staff, signified a gradual return to its innate strength, signaling a hopeful journey towards its eventual reintegration into the wild, a testament to the collective efforts of those dedicated to the preservation of nature’s magnificence.', 'https://wreg.com/wp-content/uploads/sites/18/2023/02/eagle-ms.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (1, 'CORA 987', 2, 'Sayward', '2023-09-16', FALSE, FALSE, 6, 'In the shadowed underbrush of Sayward, an adult common raven, cloaked in its characteristic black plumage, was found far from its usual dominion in the sky, weakened and grounded by its battles with infection and emaciation. On September 16, 2023, it was admitted to a wildlife rehabilitation hospital under the case number CORA 987, where the rehabilitation staff quickly assessed its dire situation. With a keen understanding of the delicate balance required to nurse such a resilient yet vulnerable creature back to health, they prepared a comprehensive care plan to address its pressing needs.\n\nThe treatment regimen for this intelligent bird was multifaceted, emphasizing the eradication of the infection through antibiotics, and the critical importance of fluid therapy to rehydrate its weakened body. Nutritional support was also a cornerstone of its recovery, carefully designed to meet the specific dietary needs of a raven, aiming to replenish its diminished reserves and restore its vigor. Under the watchful eyes and tender care of the rehabilitation staff, the raven gradually began to reclaim its strength, each day bringing it closer to soaring once again amongst the towering trees of its home. This journey of recovery not only highlighted the resilience inherent within nature but also underscored the compassionate and dedicated efforts of those who work tirelessly to ensure the survival and well-being of its most vulnerable inhabitants.', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (1, 'PRLO 008', 3, 'Comox', '2024-01-04', FALSE, FALSE, 6, 'In the quiet streets of Comox, a tale of resilience is being written as an adult raccoon, bearing the case number PRLO 008, endures the aftermath of a dog attack. This unforeseen confrontation left it in dire need of care, leading to its admission to the wildlife rehabilitation hospital on January 4, 2024. The raccoons situation swiftly captured the attention of the rehabilitation staff, who diligently assessed its injuries and formulated a recovery plan aimed at healing its physical traumas. The spark of survival, evident in its determined gaze, inspired a shared determination among the staff to support its journey back to health.\n\nThe path to recuperation for this tenacious raccoon is characterized by comprehensive trauma care, aimed at mending the wounds inflicted during its ordeal. Nutritional support is also a critical component of its treatment, designed to restore its weakened state to its natural vigor. Under the vigilant care of the rehabilitation staff, each day marks a step forward in its recovery, signifying progress that is both physical and emotional. As the raccoon gradually regains its strength, its ongoing story serves as a testament to the challenges wildlife faces in an increasingly human-dominated landscape, and the invaluable role of compassionate intervention in fostering a bridge towards healing and eventual reintegration into the wild.', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO patients (organization_id, patient_case, species_id, location_found, date_admitted, release_date, is_released, is_archived, age_range_id, story, created_at, updated_at)
VALUES
  (1, 'VATH 1020', 4, 'Courtenay', '2023-12-14', '2024-04-03', TRUE, FALSE, 6, 'In the heart of Courtenay, an adult Varied Thrush experienced the unfortunate consequence of human architecture intersecting with the natural world, falling victim to a window strike. With its vibrant plumage dulled by the incident, it was admitted under case number VATH 1020 to the wildlife rehabilitation hospital on December 14, 2023. The rehabilitation staff, upon assessing its condition, recognized the immediate need for a delicate balance of intervention and care to nurse this small, yet striking bird back to health. The collision had not only left physical injuries but had also compromised the thrushs ability to forage, casting a shadow over its independence.\n\nThe treatment plan for the Varied Thrush was two-fold, focusing primarily on trauma care to address the immediate impact of the collision. This care was complemented by nutritional support, crucial for replenishing the energy reserves depleted in the wake of its trauma. The rehabilitation staffs expertise and compassionate care were instrumental in gradually restoring the birds strength, each day marking a tangible step towards recovery. In this nurturing environment, the thrush slowly began to reclaim its vigor, embodying the resilience of wildlife in the face of human-induced challenges. Through the dedicated efforts of the rehabilitation staff, this Varied Thrushs journey from vulnerability back to vitality highlights the pivotal role of wildlife rehabilitation in bridging the gap between humans and the natural world they share.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


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
  (4, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 3, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO donations (user_id, organization_id, patient_id, donation_in_cents, created_at, updated_at)
VALUES
  (1, 1, 1, 10000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 3, 5000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 2, 2500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
