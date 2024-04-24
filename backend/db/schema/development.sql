INSERT INTO organizations (organization_name, website_url, image, first_name, last_name, phone_number, email, address, password, is_deleted, created_at, updated_at)
VALUES ('MARS Wildlife Rescue Centre', 'www.marswildliferescue.com', 'https://marswildliferescue.com/wp-content/uploads/2017/08/MARS-LOGO-transparent-background.png', 'Gyl', 'Andersen', '250-337-2021', 'gyl@marswildliferescue.com', '1331 Williams Beach Road,
Merville, British Columbia', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Ocean Conservation Society', 'www.oceanconservationsociety.org', '/oceanOrg.jpg', 'Avery', 'Chang', '604-123-4567', 'avery@oceanconservationsociety.org', '123 Ocean Ave, Vancouver, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
 ('North Island Wildlife Recovery Centre', 'https://www.niwra.org/', '/niwra.png', 'Sarah', 'Lotridge', '250-248-8534', 'wildlife@niwra.org', '1240 Leffler Road, Errington, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Good Caws Crow Rescue', 'https://www.goodcawscrowrescue.ca/', '/good-caws.png', 'Olivia', 'Kumar', '604-345-6789', 'olivia@goodcaws.org', '789 Raven Ave, Prince George, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('PNWS Wildlife Conservation Foundation', 'www.pnwswildlifeconservationfoundation.org', '/pnws-wildlife-alliance.png', 'Liam', 'Nguyen', '902-456-7890', 'liam@pnwswildlifeconservationfoundation.org', '101 Forest Ave, Greenwood, NS', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Community Wildlife Rescue Centre', 'www.communitywildliferescue.org', '/community-wildlife.png', 'Harper', 'Patel', '807-567-8901', 'harper@communitywildliferescue.org', '202 Harvest Lane, Thunderbay, ON', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Green Earth Wildlife Rescue Alliance', 'www.greenearthalliance.org', '/greenearth-rescue-alliance.png', 'Noah', 'Garcia', '618-678-9012', 'noah@greenearthalliance.org', '303 Eco Blvd, Kingston, ON', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Endangered Wildlife Foundation', 'www.endangeredwildlifefoundation.org', '/endangered-wildlife-foundation.png', 'Ava', 'Wong', '618-789-0123', 'ava@endangeredwildlifefoundation.org', '404 Birch Ave, Ottawa, ON', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Wildlife Rescue Coalition', 'www.wildliferescuecoalition.org', '/wildlife-rescue-coalition.png', 'Mia', 'Johnson', '250-901-2345', 'mia@wildliferescuecoalition.org', '606 Oak Blvd, Victoria, BC', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Rescue Action Network', 'www.rescueactionnetwork.org', '/rescue-action-network.png', 'Logan', 'Martinez', '709-012-3456', 'logan@rescueactionnetwork.org', '707 Earth St, St. Johns, NL', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Healing for All Creatures', 'www.healingforallfoundation.org', '/all-creatures.jpg', 'Sophia', 'Brown', '204-123-4567', 'sophia@healingforallfoundation.org', '808 Elk Blvd, Brandon, MB', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Paws for Hope', 'www.pawsforhope.org', '/paws-for-hope.png', 'Jackson', 'White', '867-234-5678', 'jackson@pawsforhope.org', '909 Racoon Ave, Yellowknife, NWT', '$2b$10$8mG8IaIVhP2NNdkzr1mQTO6nSLfQ2QJFbsCdncmL3Mm5gKEDeTIhy', FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


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
  ('Raccoon', 'Procyon lotor', 'Raccoons are stocky animals with short legs and small, rounded ears. Their fur is gray, with dark black markings around their eyes, and black bands on their tail.', 'racoon.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Varied Thrush', 'Ixoreus naevius', 'The varied thrush is a member of the thrush family, Turdidae. It is the only species in the monotypic genus Ixoreus.', 'varied-thrush.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sea Otter', 'Enhydra lutris', 'The sea otter is a marine mammal native to the coasts of the northern and eastern North Pacific Ocean. They are known for their playful behavior and use of tools, such as rocks, to crack open shellfish.', 'sea-otter.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('River Otter', 'Lontra canadensis', 'The river otter is a semiaquatic mammal found in North America. They are skilled swimmers and feed on fish, crustaceans, and other aquatic prey.', 'river-otter.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Harbour Seal', 'Pinniped', 'Seals are marine mammals characterized by their streamlined bodies, flippers, and ability to swim gracefully underwater. They are found in both polar and temperate waters.', 'harbour-seal.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Sea Lion', 'Otariinae', 'Sea lions are marine mammals belonging to the family Otariidae. They are characterized by external ear flaps, long foreflippers, and the ability to walk on land using all four limbs.', 'sea-lions.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Marmot', 'Marmota', 'Marmots are large ground squirrels belonging to the genus Marmota. They are typically found in mountainous regions and are known for their burrowing behavior and loud warning calls.', 'marmot.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Roosevelt Elk', 'Cervus canadensis roosevelti', 'The Roosevelt elk is the largest of the four surviving subspecies of elk in North America. They are primarily found in the Pacific Northwest region.', 'roosevelt-elk.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Crow', 'Corvus', 'Crows are highly intelligent birds belonging to the genus Corvus. They are known for their adaptability, problem-solving skills, and distinct cawing calls.', 'crow.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Pileated Woodpecker', 'Picidae', 'Woodpeckers are a family of birds known for their drumming behavior on trees and ability to excavate wood to find insects. They have strong bills and specialized tongues.', 'pileated-woodpecker.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Violet Green Swallow', 'Hirundinidae', 'Swallows are small passerine birds known for their graceful aerial acrobatics. They feed on insects caught in flight and often build mud nests.', 'violet-green-swallow.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Least Sandpiper', 'Scolopacidae', 'Sandpipers are a diverse family of shorebirds found worldwide. They have long bills for probing in mud and sand, and they feed on small invertebrates.', 'leasts-sandpiper.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Deer', 'Cervidae', 'Deer are hoofed mammals belonging to the family Cervidae. They are known for their antlers, which are typically found on males, and their herbivorous diet.', 'deer.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Moose', 'Alces alces', 'The moose, also known as elk in Europe, is the largest extant species in the deer family. They are primarily found in boreal and mixed deciduous forests.', 'moose2.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


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
  (1, 'PRLO 008', 3, 'Comox', '2024-01-04', FALSE, FALSE, 6, 'In the quiet streets of Comox, a tale of resilience is being written as an adult raccoon, bearing the case number PRLO 008, endures the aftermath of a dog attack. This unforeseen confrontation left it in dire need of care, leading to its admission to the wildlife rehabilitation hospital on January 4, 2024. The raccoons situation swiftly captured the attention of the rehabilitation staff, who diligently assessed its injuries and formulated a recovery plan aimed at healing its physical traumas. The spark of survival, evident in its determined gaze, inspired a shared determination among the staff to support its journey back to health.\n\nThe path to recuperation for this tenacious raccoon is characterized by comprehensive trauma care, aimed at mending the wounds inflicted during its ordeal. Nutritional support is also a critical component of its treatment, designed to restore its weakened state to its natural vigor. Under the vigilant care of the rehabilitation staff, each day marks a step forward in its recovery, signifying progress that is both physical and emotional. As the raccoon gradually regains its strength, its ongoing story serves as a testament to the challenges wildlife faces in an increasingly human-dominated landscape, and the invaluable role of compassionate intervention in fostering a bridge towards healing and eventual reintegration into the wild.', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'SEO 212', 5, 'Victoria, BC', '2024-04-15', TRUE, FALSE, 1, 'On the tranquil shores of Victoria, a baby sea otter,  separated from its mother due to unforeseen circumstances, was found in need of urgent care. Admitted under case number SEO 212, on April 15, 2024, to the wildlife rehabilitation hospital. This young otter faced the challenges of orphanhood, emaciation, and a mild infection. The rehabilitation staff, recognizing the vulnerability of this tiny otter. Immediately initiated a specialized care plan focused on providing round-the-clock nutritional support and fluid therapy to ensure proper hydration. Each day brings new progress and hope for this resilient sea otter, symbolizing the enduring spirit of marine life in the face of adversity.', NULL, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'RELK 084', 1, 'Campbell River', '2024-03-28', FALSE, FALSE, 5, 'In the serene vicinity of Campbell River, a sub-adult Roosevelt Elk, once a sovereign of the forests. Was discovered in a precarious state, burdened by the limitations of a broken leg. Admitted to the wildlife rehabilitation hospital on March 28, 2024, under case number RELK 084, this noble creature faced a challenging ordeal, contending not only with the physical hindrances of its injury. But, also with infection and emaciation, a trio of hardships that severely tested its fortitude. The rehabilitation staff, aware of the critical care required, promptly devised a comprehensive treatment regimen. With the aim of mending its body and spirit.', 'roosevelt-elk.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'VASH 1223', 7, 'Vancouver Island', '2022-05-10', FALSE, FALSE, 1, 'A Baby Seal was rescued from after a Boat Strike in the tranquil waters of Vancouver Island. The baby harbor seal, bearing the case number VASH 1223, bears testament to the harsh reality of human maritime activities, when it fell victim to a boat strike. Admitted to the MARS Wildlife Rescue Centre on May 10, 2022, this tiny seal pup faced a perilous journey to recovery while fighting to survive  head trauma and a fractured flipper. The dedicated team at the rescue center swiftly mobilized the seal pup. Employing a combination of trauma therapy, fluid therapy, and nutritional support to address the seals critical condition. With each passing day, the seals playful spirit is beginning to resurface.', 'harbour-seal.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'BEAG 017', 1, 'Merville', '2021-07-05', FALSE, FALSE, 6, 'This adult Bald Eagle was rescued from a Power Line along the rugged cliffs of Merville. After finding itself tangled in the perils of modern infrastructure, and suffering a debilitating injury from a power line collision. The eagle was transported to the MARS Wildlife Rescue Centre on July 5, 2021. This majestic raptor bore the brunt of a broken wing and electrocution, necessitating immediate intervention. The skilled rehabilitation team orchestrated a comprehensive treatment plan encompassing: physiotherapy, antibiotics, and wing wrapping techniques to facilitate healing. As the eagles strength gradually returned, so did its ability to soar.', 'bald-eagle.jpg', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'RORO 202', 6, 'Comox Lake', '2023-06-18', FALSE, FALSE, 6, 'This River Otter is recovering from a car strike along-side the serene waters of Comox Lake. The resilient river otter, identified as RORO 202, sustained multiple injuries in a car strike. And was admitted to the MARS Wildlife Rescue Centre on June 18, 2023, battling head trauma and emaciation, which challenges its survival in the wild. The rehabilitation team at MARS sprang into action, implementing trauma therapy, fluid therapy, and orphan care to nurse the otter back to health. With dedicated care and perseverance, RORO 202 embarked on a remarkable journey of recovery, embodying the indomitable spirit of wildlife in the face of urban perils.', 'river-otter.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'PRLO 050', 9, 'Mt. Douglas Park, Victoria, BC', '2022-08-12', TRUE, FALSE, 3, 'A resilient Marmot recovering from a dog attack amidst the urban sprawl of Victoria, BC. This resourceful marmot, registered as PRLO 050, sustained severe injuries in the attack. Admitted to the MARS Wildlife Rescue Centre on August 12, 2022, this tenacious mammal has grappled with broken bones and infections, necessitating urgent around the clock medical attention. The dedicated team of veterinarians and caregivers at MARS devised a holistic treatment regimen, combining trauma therapy, antibiotics, and nutritional support to aid in the marmots recuperation. With each passing day, PRLO 050 showcased remarkable resilience, offering a poignant reminder of the symbiotic relationship between wildlife and urban environments.', 'marmot.png',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'VATH 180', 4, 'Cowichan Lake', '2022-04-28', FALSE, FALSE, 5, 'This Varied Thrush is recovering from a window strike.The Varied Thrush, denoted as VATH 180, fell victim to the perils of reflective surfaces, in the idyllic woodlands of Vancouver Island. After sustaining these injuries it was transported to the MARS Wildlife Rescue Centre on April 28, 2022. This beautiful bird grappled with wing fractures and trauma, which impaired its ability to navigate its natural habitat. The skilled rehabilitation team at MARS orchestrated a tailored treatment plan, incorporating wing wrapping techniques, trauma therapy, and nutritional support to aid in the thrushs recovery. With patience and expertise, VATH 180 embarked on a journey of healing. ', 'varied-thrush.png',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
(1, 'LESA 055', 14, 'Tofino', '2022-05-30', TRUE, FALSE, 6, 'This Least Sandpiper is recovering from a cat attack along the stormy shores of Tofino. The delicate Least Sandpiper, identified as LESA 055, encountered the hazards of predatory house pets, and sustained multiple injuries Admitted to the MARS Wildlife Rescue Centre on May 30, 2022, this petite shorebird faced wing fractures, puncture wounds, and stress. Each a significant  challenge exacerbated by its migratory lifestyle. The compassionate team at MARS swiftly intervened, employing wing wrapping techniques, antibiotics, physiotherapy, and nutritional support to aid in the sandpipers rehabilitation. As LESA 055 regained its strength and agility, it epitomized the resilience of migratory species navigating perilous human-dominated landscapes.', 'leasts-sandpiper.png', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

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
  (6, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 11, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 12, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

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
  (6, 4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 6, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 7, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 8, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 9, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 11, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 12, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


INSERT INTO donations (user_id, organization_id, patient_id, donation_in_cents, created_at, updated_at)
VALUES
  (1, 1, 1, 10000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 1, 3, 5000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 2, 2500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 1, 2, 3500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 1, 1, 600000, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 2, 2, 2500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (1, 1, 4, 4500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


