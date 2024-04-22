INSERT INTO organizations (organization_name, website_url, image, first_name, last_name, phone_number, email, address, password, is_deleted, created_at, updated_at)
VALUES ('MARS Wildlife Rescue Centre', 'www.marswildliferescue.com', 'https://marswildliferescue.com/wp-content/uploads/2017/08/MARS-LOGO-transparent-background.png', 'Gyl', 'Andersen', '250-337-2021', 'gyl@marswildliferescue.com', '1331 Williams Beach Road,
Merville, British Columbia', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ocean Conservation Society', 'www.oceanconservationsociety.org', '/oceanOrg.jpg', 'Avery', 'Chang', '555-123-4567', 'avery@oceanconservationsociety.org', '123 Ocean Ave, Seaville, CA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
 ('Global Health Initiative', 'www.globalhealthinitiative.org', '-----', 'Ethan', 'Tran', '555-234-5678', 'ethan@globalhealthinitiative.org', '456 Health Blvd, Wellville, NY', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Clean Energy Alliance', 'www.cleanenergyalliance.org', '-----', 'Olivia', 'Kumar', '555-345-6789', 'olivia@cleanenergyalliance.org', '789 Renewable St, Greentown, OR', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Wildlife Conservation Foundation', 'www.wildlifeconservationfoundation.org', '-----', 'Liam', 'Nguyen', '555-456-7890', 'liam@wildlifeconservationfoundation.org', '101 Forest Ave, Wildville, WA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Community Food Bank', 'www.communityfoodbank.org', '-----', 'Harper', 'Patel', '555-567-8901', 'harper@communityfoodbank.org', '202 Harvest Lane, Foodville, TX', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Green Earth Alliance', 'www.greenearthalliance.org', '-----', 'Noah', 'Garcia', '555-678-9012', 'noah@greenearthalliance.org', '303 Eco Blvd, Sustainaville, NV', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Tech for Good Foundation', 'www.techforgoodfoundation.org', '-----', 'Ava', 'Wong', '555-789-0123', 'ava@techforgoodfoundation.org', '404 Innovation Ave, Techville, CA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Animal Rescue Coalition', 'www.animalrescuecoalition.org', '-----', 'Mia', 'Johnson', '555-901-2345', 'mia@animalrescuecoalition.org', '606 Pet Blvd, Petville, CA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Climate Action Network', 'www.climateactionnetwork.org', '-----', 'Logan', 'Martinez', '555-012-3456', 'logan@climateactionnetwork.org', '707 Earth St, Greenworld, NY', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Arts for All Foundation', 'www.artsforallfoundation.org', '-----', 'Sophia', 'Brown', '555-123-4567', 'sophia@artsforallfoundation.org', '808 Creativity Blvd, Artsville, TX', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sports for Everyone Organization', 'www.sportsforeveryone.org', '-----', 'Jackson', 'White', '555-234-5678', 'jackson@sportsforeveryone.org', '909 Athlete Ave, Sportstown, CA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO users (first_name, last_name, email, address, password, created_at, updated_at)
VALUES 
  ('Desiree', 'Ingram', 'desiree@email.com', 'Somewhere, Victoria, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('David', 'Carmichael', 'david@email.com', 'Somewhere, Campbell River, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Paul', 'Formby', 'paul@email.com', 'Somewhere, Victoria', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Emily', 'Parker', 'emily@email.com', '123 Main St, Anytown, USA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Michael', 'Johnson', 'michael@email.com', '456 Elm St, Sometown, CA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Jennifer', 'Garcia', 'jennifer@email.com', '789 Oak St, Anycity, TX', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Daniel', 'Martinez', 'daniel@email.com', '101 Pine St, Anothercity, NY', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sarah', 'Hernandez', 'sarah@email.com', '202 Maple St, Yetanothercity, FL', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Matthew', 'Lopez', 'matthew@email.com', '303 Cedar St, Anytown, USA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Jessica', 'Gonzalez', 'jessica@email.com', '404 Birch St, Sometown, CA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Christopher', 'Rodriguez', 'christopher@email.com', '505 Fir St, Anycity, TX', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Amanda', 'Wilson', 'amanda@email.com', '606 Spruce St, Anothercity, NY', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('James', 'Martinez', 'james@email.com', '707 Cedar St, Yetanothercity, FL', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Megan', 'Garcia', 'megan@email.com', '808 Oak St, Anytown, USA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Brandon', 'Lopez', 'brandon@email.com', '909 Pine St, Sometown, CA', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
  


INSERT INTO species (name, scientific_name, description, image, created_at, updated_at)
VALUES
  ('Bald Eagle', 'Haliaeetus leucocephalus', 'The bald eagle is a bird of prey found in North America. A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle, which occupies the same niche as the bald eagle in the Palearctic.', 'bald-eagle.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Common Raven', 'Corvus corax', 'The common raven is a large all-black passerine bird. It is the most widely distributed of all corvids, found across the Northern Hemisphere.', 'common-raven.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Raccoon', 'Procyon lotor', 'Raccoons are stocky animals with short legs and small, rounded ears. Their fur is gray, with dark black markings around their eyes, and black bands on their tail.', 'raccoon.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Varied Thrush', 'Ixoreus naevius', 'The varied thrush is a member of the thrush family, Turdidae. It is the only species in the monotypic genus Ixoreus.', 'varied-thrush.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sea Otter', 'Enhydra lutris', 'The sea otter is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. They are known for their playful behavior and use of tools, such as rocks, to crack open shellfish.', 'sea-otter.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('River Otter', 'Lontra canadensis', 'The river otter is a semiaquatic mammal found in North America. They are skilled swimmers and feed on fish, crustaceans, and other aquatic prey.', 'river-otter.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Seal', 'Pinniped', 'Seals are marine mammals characterized by their streamlined bodies, flippers, and ability to swim gracefully underwater. They are found in both polar and temperate waters.', 'seal.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sea Lion', 'Otariinae', 'Sea lions are marine mammals belonging to the family Otariidae. They are characterized by external ear flaps, long foreflippers, and the ability to walk on land using all four limbs.', 'sea-lion.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Marmot', 'Marmota', 'Marmots are large ground squirrels belonging to the genus Marmota. They are typically found in mountainous regions and are known for their burrowing behavior and loud warning calls.', 'marmot.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Roosevelt Elk', 'Cervus canadensis roosevelti', 'The Roosevelt elk is the largest of the four surviving subspecies of elk in North America. They are primarily found in the Pacific Northwest region.', 'roosevelt-elk.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Crow', 'Corvus', 'Crows are highly intelligent birds belonging to the genus Corvus. They are known for their adaptability, problem-solving skills, and distinct cawing calls.', 'crow.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Woodpecker', 'Picidae', 'Woodpeckers are a family of birds known for their drumming behavior on trees and ability to excavate wood to find insects. They have strong bills and specialized tongues.', 'woodpecker.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Swallow', 'Hirundinidae', 'Swallows are small passerine birds known for their graceful aerial acrobatics. They feed on insects caught in flight and often build mud nests.', 'swallow.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sandpiper', 'Scolopacidae', 'Sandpipers are a diverse family of shorebirds found worldwide. They have long bills for probing in mud and sand, and they feed on small invertebrates.', 'sandpiper.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Deer', 'Cervidae', 'Deer are hoofed mammals belonging to the family Cervidae. They are known for their antlers, which are typically found on males, and their herbivorous diet.', 'deer.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Moose', 'Alces alces', 'The moose, also known as elk in Europe, is the largest extant species in the deer family. They are primarily found in boreal and mixed deciduous forests.', 'moose.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO conditions (condition_name, created_at, updated_at)
VALUES
  ('Cat Attack', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Dog Attack', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Broken Wing', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Infection', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Emaciation', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Window Strike', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Boat Strike', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
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
  (3, 1, 2, 2500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 2, 3500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 1, 1, 600000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 2, 2500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (1, 1, 4, 4500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


