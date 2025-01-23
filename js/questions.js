// Questions array
const questions = [
    {
        "numb": 1,
        "question": "The term cellular pathology was coined by ",
        "answer": "Rudolf Virchow",
        "options": [
            "Rudolf Virchow",
            "Louis Pasteur",
            "NA",
            "Edward Jenner",
            "Antoine van Leeuwenhoek"
        ]
    },
    {
        "numb": 2,
        "question": "What is the term used for the mechanism of death?",
        "answer": "Thanatogenesis",
        "options": [
            "Pathomorphism ",
            "Pathogenesis",
            "Etiology ",
            "Thanatogenesis",
            "Morphogenesis "
        ]
    },
    {
        "numb": 3,
        "question": "What does health criteria include?",
        "answer": "State of optimal well-being, absence of health complaints.",
        "options": [
            "State of optimal health, presence of health complaints.",
            "State of optimal well-being, absence of health complaints.",
            "abnormal diagnostic test",
            "presence of the main signs and symptoms of the disease.",
            "abnormal laboratory test"
        ]
    },
    {
        "numb": 4,
        "question": "What do experimental modeling methods in pathophysiology include?",
        "answer": "method of isolated organs ",
        "options": [
            "method of descriptive pathology ",
            "method of isolated organs ",
            "shutdown method ",
            "selection method",
            "method of compatible organs"
        ]
    },
    {
        "numb": 5,
        "question": "Which sigh of death characterized by emptiness of arteries and overflowing veins with blood?",
        "answer": "Cadaveric spots  ",
        "options": [
            "Cadaveric drying",
            "Cadaveric cooling",
            "Cadaveric spots  ",
            "Stop of breath",
            "Rigor mortis"
        ]
    },
    {
        "numb": 6,
        "question": "Which sign of biologic death which associated with hardning of muscles?",
        "answer": "Rigor mortis",
        "options": [
            "Cadaveric drying",
            "Rigor mortis",
            "Cadaveric spots ",
            "Cadaveric decomposition",
            "Cadaveric cooling "
        ]
    },
    {
        "numb": 7,
        "question": "Which statement is not true regarding cell damage caused by hypoxia?",
        "answer": "Sudden and severe hypoxia causes atrophy",
        "options": [
            "Hypoxia is a common cause of cell injury and cell death ",
            "Sudden and severe hypoxia causes atrophy",
            "Reduced aerobic respiration ",
            "Maybe caused by ischemia, cardiorespiratory failure, carbon monoxide poisoning and severe blood loss ",
            "NA"
        ]
    },
    {
        "numb": 8,
        "question": "What human body organ or system damage can cause general oxygen deficiency \u2013hypoxia, according to disorder of oxygen delivery to tissues?",
        "answer": "blood system",
        "options": [
            "respiratory system",
            "tissue itself",
            "blood system",
            "GIT system",
            "circulatory system"
        ]
    },
    {
        "numb": 9,
        "question": "Which of the following is involved in recognition and clearance of necrotic cells? ",
        "answer": "inflammasome",
        "options": [
            "p selectin",
            "Manoreceptor",
            "Toll-like receptors (TLRs)",
            "inflammasome",
            "NA"
        ]
    },
    {
        "numb": 10,
        "question": "In cell injury, increased eosinophilia is due to?",
        "answer": "Both",
        "options": [
            "NA",
            "Loss of cytoplasmic RNA",
            "Denatured protein",
            "Both",
            "None of the above"
        ]
    },
    {
        "numb": 11,
        "question": "Which of the following best describes the consequence of reversible cell injury?",
        "answer": "Impaired cell function with potential for recovery",
        "options": [
            "Disruption of cellular membrane integrity",
            "Complete loss of cellular structure",
            "Formation of apoptotic bodies",
            "Impaired cell function with potential for recovery",
            "Activation of inflammatory response"
        ]
    },
    {
        "numb": 12,
        "question": "23-year-old male athlete who is practicing for his upcoming marathon felt chest discomfort during his practice which was relieved after few minutes of rest. Which is the following is false regarding the cell injury in this scenario? ",
        "answer": "Breakdown of plasma membrane ",
        "options": [
            "Breakdown of plasma membrane ",
            "Detachment of ribosomes from the endoplasmic reticulum (ER) ",
            "Hydropic change",
            "Accumulation of myelin figures in the cytoplasm",
            "NA"
        ]
    },
    {
        "numb": 13,
        "question": "Causes of the coagulative necrosis are?",
        "answer": "Denaturation of protein",
        "options": [
            "NA",
            "None",
            "Denaturation of protein",
            "Infection",
            "Enzymatic digestion"
        ]
    },
    {
        "numb": 14,
        "question": "Which among the following is responsible for necrosis?",
        "answer": "Both stated in options",
        "options": [
            "Enzymatic digestion",
            "NA",
            "None of the above",
            "Both stated in options",
            "Denaturation of protein"
        ]
    },
    {
        "numb": 15,
        "question": "A chest X-ray reveals findings \"consistent with a Ghon complex.\" Sputum cultures grow acid-fast bacilli. Examination of hilar lymph nodes in this patient would most likely demonstrate which of the following pathologic changes?",
        "answer": "Caseous necrosis ",
        "options": [
            "NA",
            "Fibrinoid necrosis",
            "Caseous necrosis ",
            "Coagulative necrosis",
            "Fat necrosis"
        ]
    },
    {
        "numb": 16,
        "question": "During Cell injury, FAS Ligand and TNF ex combine/attaches with FAS & TNF Receptors respectively leading to TRIMERIZATION & Activation of FADD which activates Caspase 8 ultimately leading to activation of Proteases and Endonucleases causing Cell Death & CD 95 is an important marker of the whole. Which process described here?",
        "answer": "Extrinsic pathway of apoptosis",
        "options": [
            "Necrosis of cell",
            "NA",
            "Cellular adaption",
            "Extrinsic pathway of apoptosis",
            "Intrinsic pathway of apoptosis. "
        ]
    },
    {
        "numb": 17,
        "question": "Which of the following is a true statement about apoptosis?",
        "answer": "Plasma membrane is intact.",
        "options": [
            "There is enzymatic digestion of cellular contents",
            "Plasma membrane is intact.",
            "NA",
            "It is associated with adjacent inflammation",
            "Karyolysis is present"
        ]
    },
    {
        "numb": 18,
        "question": "What histologically signs of fatty changes are seen by light microscopy",
        "answer": "Vacuoles in the cytoplasm around the nucleus",
        "options": [
            "Vacuoles in the cytoplasm around the nucleus",
            "Eosinophilic granules",
            "Extracellular granules",
            "Basophilic granules",
            "Intracellular granules"
        ]
    },
    {
        "numb": 19,
        "question": "What the name of the cells accumulating fat within the intimal layer of aorta and large arteries in atherosclerotic plaques?",
        "answer": "Foam cells",
        "options": [
            "Foam cells",
            "Leukocytes",
            "Lymphocytes",
            "Fibroblasts",
            "Epithelial cells"
        ]
    },
    {
        "numb": 20,
        "question": "A 48-year-old patient with glomerulonephritis has renal changes. Microscopically: pink formations in the form of drops in the epithelium of the kidney tubules. What pathological process developed in this case?",
        "answer": "Accumulation of proteins",
        "options": [
            "Accumulation of carbohydrates",
            "Accumulation of amyloid",
            "Accumulation of proteins",
            "Accumulation of lipids",
            "Accumulation of cholesterol"
        ]
    },
    {
        "numb": 21,
        "question": "What pathological process is characterized by derangements of glycogen metabolism?",
        "answer": "Diabetes Mellitus",
        "options": [
            "Diabetes Mellitus",
            "Goiter",
            "Viral hepatitis",
            "Atherosclerosis",
            "Arterial hypertension"
        ]
    },
    {
        "numb": 22,
        "question": "A 50-year-old patient suffering from hypertension died of cerebral hemorrhage. Microscopically revealed: the walls of the arterioles are thickened, represent a homogeneous mass of pink when stained with hematoxylin and eosin, the lumen of the vessels is narrowed. What type of dystrophy in this case?",
        "answer": "Hyalinosis",
        "options": [
            "Fatty change",
            "Hyalinosis",
            "Hemosiderosis",
            "Hemochromatosis",
            "Amyloidosis"
        ]
    },
    {
        "numb": 23,
        "question": "Which of the following staining methods is not used for amyloidosis?",
        "answer": "Methenamine Silver",
        "options": [
            "Methenamine Silver",
            "Congo-Red",
            "NA",
            "Crystal Violet",
            "Thioflavin T"
        ]
    },
    {
        "numb": 24,
        "question": "What are the main types of amyloidosis, and which genes or proteins are associated with their development?",
        "answer": " AL amyloidosis, caused by overexpression of immunoglobulin light chains",
        "options": [
            " Type I amyloidosis associated with age",
            " AL amyloidosis, caused by overexpression of immunoglobulin light chains",
            "Amyloidosis AL, caused by aggregation of the acute phase reagent, serum amyloid A",
            "Amyloidosis A1, caused by genetic mutation",
            "Amyloidosis type X, caused by mutation of an unknown gene"
        ]
    },
    {
        "numb": 25,
        "question": "Accumulation of which pigment may leads to decrease of blood pressure?",
        "answer": "Ferritin",
        "options": [
            "Hemosiderin",
            "Porphyrin",
            "Ferritin",
            "Hemomelanin",
            "Bilirubin"
        ]
    },
    {
        "numb": 26,
        "question": "A 83 year old thin built male was brought Unconscious. Upon examination Pulse was feeble, BP unrecordable, GCS 3/15. ECG shown Flat line in all leads. Autopsy was done. HPE of cardiac tissue revealed peri nuclear brown pigment . This HPE finding occurs due to: ",
        "answer": "Lipofuscin",
        "options": [
            "Bilirubin",
            "Hemosiderin",
            "Melanin",
            "Lipofuscin",
            "NA"
        ]
    },
    {
        "numb": 27,
        "question": "Which pigment derived from hemoglobin found in normal conditions?",
        "answer": "Hemosiderin",
        "options": [
            "Hematoidin",
            "Hemin ",
            " Hemomelanin",
            "Hemosiderin",
            "Porphyrin"
        ]
    },
    {
        "numb": 28,
        "question": "At 22-year-old patient has photosensitivity of skin, massive enlargement of liver with severe abdominal pain, red color of urine. What pigment exchange disorder is there in this case?",
        "answer": "Porphyrins",
        "options": [
            "Hemosiderin",
            "Hematoidin",
            "Porphyrins",
            "Bilirubin",
            "Lipofuscin"
        ]
    },
    {
        "numb": 29,
        "question": "What is dystrophic calcification",
        "answer": "deposition of calcium salts in dead tissues",
        "options": [
            "Increased bone catabolism",
            "derangement in calcium and phosphate metabolism",
            "Hypervitaminosis D",
            "deposition of calcium salts in normal tissues",
            "deposition of calcium salts in dead tissues"
        ]
    },
    {
        "numb": 30,
        "question": "In Metastatic calcification, Serum Calcium levels are elevated and gets deposited in living tissues. An internal alkaline compo111ent is needed in the tissue for which the Metastatic calcification to happen.Which organ will not have metastatic calcification?",
        "answer": "Cardiac valves",
        "options": [
            "Cardiac valves",
            "Lungs ",
            "NA",
            "Gastric mucosa ",
            "Kidneys"
        ]
    },
    {
        "numb": 31,
        "question": "ABG analysis of a patient reveals the following values: pC02 \u00b7 16 mm Hg; HC03 \u00b7 6 I mEq/L; and pH - 7 .1. What is the probable underlying acid-base disorder in this patient?",
        "answer": "Metabolic acidosis with compensatory respiratory alkalosis",
        "options": [
            "NA",
            "Metabolic alkalosis with compensatory respiratory acidosis",
            "Mixed acid- based sorder",
            "Respiratory acidosis with compensatory metabolic alkalosis",
            "Metabolic acidosis with compensatory respiratory alkalosis"
        ]
    },
    {
        "numb": 32,
        "question": "A diabetic normotensive patient of Enterococcus faecalis sepsis, on intravenous Linezolid developed high anion gap metabolic acidosis with increased serum lactate and negative ketone. The acid base abnormality is most probably? ",
        "answer": "Type B lactic acidosis due to linezolid",
        "options": [
            "Diabetic ketoacidosis",
            "Type A lactic acidosis due to septic shock ",
            "NA",
            "Metabolic acidosis of uncertain etiology ",
            "Type B lactic acidosis due to linezolid"
        ]
    },
    {
        "numb": 33,
        "question": "Which of the following electrolytes is primarily regulated by aldosterone?",
        "answer": "Sodium",
        "options": [
            "Chloride",
            "Potassium",
            "Sodium",
            "Calcium",
            "Magnesium"
        ]
    },
    {
        "numb": 34,
        "question": "In which of the following conditions is decreased colloidal osmotic pressure the main cause of edema?",
        "answer": "Nephrotic syndrome",
        "options": [
            "Nephrotic syndrome",
            "Deep venous thrombosis",
            "Congestive heart failure",
            "Constrictive pericarditis",
            "NA"
        ]
    },
    {
        "numb": 35,
        "question": "Cyanotic induration of kidney is characterized by:",
        "answer": "Enlarged, hard, blue-red",
        "options": [
            "Small. soft, red",
            "Enlarged, soft, brown",
            "Small, hard, red-brown",
            "Enlarged, hard, brown",
            "Enlarged, hard, blue-red"
        ]
    },
    {
        "numb": 36,
        "question": "Patient 52 years old suffered of cardiomyopathy was died of cardiopulmonary insufficiency. An autopsy revealed changes in the liver. Grossly: liver enlarged in size and weight, hard, with on cut surface \u2013 nutmeg appearance. Which type of hemodynamic disorders occurs in this case?",
        "answer": "Chronic venous hyperemia",
        "options": [
            "Chronic venous hyperemia",
            "Collateral hyperemia",
            "Acute venous hyperemia",
            "General arterial hyperemia",
            "Local arterial hyperemia"
        ]
    },
    {
        "numb": 37,
        "question": "Virchow\u2019s triad is etiology of one of local circulation disorders which includes what one of following signs?",
        "answer": "hypercoagubility",
        "options": [
            "hypocoagubility",
            "hypercoagubility",
            "smoot vessel wall",
            "low oxyhemoglobin",
            "fast blood flow"
        ]
    },
    {
        "numb": 38,
        "question": "A 71-year-old patient suffered from ischemic heart disease and was died from chronic heart failure. Microscopic examination of the heart revealed: in the branch of the left coronary artery thrombotic masses with proliferation of connective tissue in which channels covered with endothelial cells. Which outcome of thrombus occurs in this case?",
        "answer": "Suppuration",
        "options": [
            "Recanalization",
            "Organization",
            "Dissolution",
            "Suppuration",
            "Calcification "
        ]
    },
    {
        "numb": 39,
        "question": "Which embolism may be the cause of a rare syndrome due to the entry of infected material into the systemic venous bloodstream and pulmonary arterial system?",
        "answer": " Foreign body embolism",
        "options": [
            " Foreign body embolism",
            " Amniotic fluid embolism\n",
            " Air embolism\n",
            " Fat embolism\n",
            "Septic embolism\n"
        ]
    },
    {
        "numb": 40,
        "question": "Which of the following is the most common cause of pulmonary embolism?\n",
        "answer": " Fat embolism\n",
        "options": [
            "Air embolism\n",
            " Fat embolism\n",
            " Foreign body embolism.",
            " Amniotic fluid embolism\n",
            "Septic embolism\n"
        ]
    },
    {
        "numb": 41,
        "question": "Characteristic of the infarction?",
        "answer": "vascular necrosis",
        "options": [
            "vascular necrosis",
            "trophoneurotic necrosis",
            "direct necrosis",
            "caseous necrosis",
            "traumatic necrosis"
        ]
    },
    {
        "numb": 42,
        "question": "What type of embolism may lead to generalization of the infection?",
        "answer": "Microbial embolism",
        "options": [
            "Microbial embolism",
            "Thromboembolism",
            "Amniotic fluid embolism",
            "Foreign body embolism",
            "Gas embolism"
        ]
    },
    {
        "numb": 43,
        "question": "Which term used for hemorrhage from respiratory system?",
        "answer": "Haemoptoe",
        "options": [
            "Epistaxis",
            "Maelena",
            "Haemoptoe",
            "Haematemesis ",
            "Metrorrhagia"
        ]
    },
    {
        "numb": 44,
        "question": "A patient suffered of arterial hyprtension was suddenly died. An autopsy showed massive intracerebral hemorrhage in the right hemosphere of the brain What is the cause of the hemorrhage?",
        "answer": "Rupture of the vessel wall",
        "options": [
            "Rupture of the vessel wall",
            "Inflammation of vessel wall",
            "Corrosion of the vessel wall",
            "Increased permeability of the vessel wall",
            "Vascular atherosclerosis"
        ]
    },
    {
        "numb": 45,
        "question": "Which of the following is the most common type of shock: ",
        "answer": "Hypovolemic",
        "options": [
            "Hypovolemic",
            "Cardiogenic",
            "Distributive",
            "NA",
            "Obstructive"
        ]
    },
    {
        "numb": 46,
        "question": "A 20-year-old patient has profuse hemorrhage (2 L) as a result of trauma of the femoral artery. On admission to the hospital, revealed pale of the skin, a severe decrease of blood pressure (60/30 mm Hg). Which type of shock occurs in this case? ",
        "answer": "Hypovolemic",
        "options": [
            "Toxic",
            "Anaphylactic",
            "Neurogenic",
            "Hypovolemic",
            "Cardiogenic"
        ]
    },
    {
        "numb": 47,
        "question": "Most common feature of polytrauma in pediatric age group:",
        "answer": "Hypovolemic shock ",
        "options": [
            "Hypoxemia",
            "Hypotension ",
            "NA",
            "Hypothermia",
            "Hypovolemic shock "
        ]
    },
    {
        "numb": 48,
        "question": "In hypovolemic shock which organ should be assessed for determining under-perfusion?",
        "answer": "Kidney",
        "options": [
            "NA",
            "Lung",
            "Kidney",
            "Liver",
            "Heart"
        ]
    },
    {
        "numb": 49,
        "question": "Which of the following does not apply to DIC syndrome?",
        "answer": "Decreased fibrin degradation products ",
        "options": [
            "Release of tissue factor",
            "Fibrin deposition in microcirculation ",
            "Decreased fibrin degradation products ",
            "NA",
            "Platelet aggregation "
        ]
    },
    {
        "numb": 50,
        "question": "A 45-year-old male with severe sepsis secondary to pneumonia presents to the intensive care unit. Despite aggressive fluid resuscitation and broad-spectrum antibiotics, he develops ecchymoses, petechiae, and mucosal bleeding. Laboratory tests show prolonged activated partial thromboplastin time (aPTT), decreased fibrinogen levels, and schistocytes on peripheral blood smear. What is the most likely diagnosis?",
        "answer": "Disseminated intravascular coagulation (DIC)",
        "options": [
            "Antiphospholipid syndrome",
            "Idiopathic thrombocytopenic purpura",
            "Disseminated intravascular coagulation (DIC)",
            "Hemolytic uremic syndrome",
            "Thrombotic thrombocytopenic purpura"
        ]
    },
    {
        "numb": 51,
        "question": "Which of these complement factor is a marker of humoral rejection?",
        "answer": "C4d",
        "options": [
            "C3b",
            "C4d",
            "C5a",
            "C3d",
            "NA"
        ]
    },
    {
        "numb": 52,
        "question": "A 45-year-old male complains of chronic joint pain, stiffness, and swelling, particularly in his hands and wrists. He reports that the symptoms worsen in the morning and improve with movement throughout the day. What autoimmune disorder is most likely causing his symptoms?",
        "answer": "Rheumatoid arthritis",
        "options": [
            "Multiple sclerosis",
            "Systemic lupus erythematosus (SLE)",
            "Rheumatoid arthritis",
            "Type 1 diabetes mellitus",
            "Hashimoto's thyroiditis"
        ]
    },
    {
        "numb": 53,
        "question": "Which of the following is secreted by classically activated macrophages (M1 )?",
        "answer": "IL-1 ",
        "options": [
            "IL-2",
            "NA",
            "IL-1 ",
            "IL-3",
            "IL-4"
        ]
    },
    {
        "numb": 54,
        "question": "Specific form of endocytosis involving the vesicular internalization of solid particles, such as bacteria. It is the process by w hich cells ingesl large objecls, such as cells which have undergone apoplosis, bacleria, or viruses. The function common to neutrophils. monocy;es, macrophages is",
        "answer": "Phagocytosis ",
        "options": [
            "Liberation of histamine ",
            "Destruction of old erythrocytes",
            "NA",
            "Immune response is reduced",
            "Phagocytosis "
        ]
    },
    {
        "numb": 55,
        "question": "Which of the following cells is the main source of antigens for activation of the immune system?",
        "answer": " Macrophages\n",
        "options": [
            "Erythrocytes\n",
            " Neurons\n",
            "Fibroblasts",
            "Platelets\n",
            " Macrophages\n"
        ]
    },
    {
        "numb": 56,
        "question": "Local lymph nodules are enlarged near the infected wound. Increased amount of macrophages, lymphocytes, lymphatic follicles in the cortical layer and large amount of plasma cells were revealed on histological examinat ion. What process in the lymphatic nodules represent these histological changes? ",
        "answer": "Antigen stimulation ",
        "options": [
            "Tumour transformation ",
            "Innate insufficiency of the lymphoid tissue",
            "NA",
            "Antigen stimulation ",
            "Acquired insufficiency of the lymphoid tissue "
        ]
    },
    {
        "numb": 57,
        "question": "What is the process by which an individual becomes hypersensitive to a particular antigen upon initial exposure?",
        "answer": "Sensitization ",
        "options": [
            " Immunosuppression",
            "Immunization ",
            " Desensitization ",
            "Tolerance ",
            "Sensitization "
        ]
    },
    {
        "numb": 58,
        "question": "A 45-year-old man presents with a history of seasonal exacerbations of asthma and allergic rhinitis. He reports worsening symptoms during the pollen season despite adherence to prescribed medications. Skin prick testing confirms sensitization to grass pollen. What lifestyle modification could help reduce his exposure to allergens and improve symptom control?",
        "answer": "Avoidance of outdoor activities during peak pollen times",
        "options": [
            "Smoking cessation",
            "Avoidance of outdoor activities during peak pollen times",
            "Consumption of a balanced diet",
            "Regular exercise regimen",
            "Use of air purifiers at home"
        ]
    },
    {
        "numb": 59,
        "question": "Which of the following is a marker of T lymphocytes?",
        "answer": "CD8",
        "options": [
            "CD20",
            "CD19",
            "NA",
            "CD45",
            "CD8"
        ]
    },
    {
        "numb": 60,
        "question": "Which of the following is a Type 2 Hypersensitivity reaction? ",
        "answer": "Mismatched blood transfusion ",
        "options": [
            "Arthus reaction ",
            "Mantoux test",
            "Chronic kidney rejection ",
            "Mismatched blood transfusion ",
            "NA"
        ]
    },
    {
        "numb": 61,
        "question": "A 20-year-old woman with a history of asthma and allergies undergoes skin testing to identify potential allergens in her environment. A positive skin reaction to ragweed in this patient would be mediated by which of the following classes of immunoglobulin? ",
        "answer": "IgE",
        "options": [
            "lgG",
            "lgD",
            "IgE",
            "NA",
            "lgA"
        ]
    },
    {
        "numb": 62,
        "question": "Which of the following organs is not involved in acute graft versus host disease",
        "answer": "Lung",
        "options": [
            "Liver",
            "Lung",
            "Skin",
            "Git",
            "NA"
        ]
    },
    {
        "numb": 63,
        "question": "A 52-year-old woman with a history of systemic hypertension and chronic renal failure undergoes kidney transplantation, but the graft fails to produce urine. A renal biopsy is diagnosed as \"hyperacute transplant rejection.\" Graft rejection in this patient is caused primarily by which of the following mediators of immunity and inflammation?",
        "answer": "Preformed antibodies",
        "options": [
            "Cyrotoxic T lymphocytes ",
            "Preformed antibodies",
            "Helper T lymphocytes ",
            "NA",
            "Mononuclear phagocytes"
        ]
    },
    {
        "numb": 64,
        "question": "Components of innate immunity are",
        "answer": "All of the above",
        "options": [
            "NA",
            "Complement system factors",
            "All of the above",
            "Dendritic cells",
            "NK cells"
        ]
    },
    {
        "numb": 65,
        "question": "A 5-month-old infant presents with recurrent fungal infections, particularly involving the skin, nails, and oral cavity. Laboratory tests show decreased levels of T lymphocytes. What primary immunodeficiency disorder is this patient likely suffering from?",
        "answer": "Severe combined immunodeficiency",
        "options": [
            "X-linked agammaglobulinemia",
            "Chronic granulomatous disease",
            "Severe combined immunodeficiency",
            "Hyper-IgM syndrome",
            "DiGeorge syndrome"
        ]
    },
    {
        "numb": 66,
        "question": "Most common malignancy in AIDS:",
        "answer": "Kaposi sarcoma ",
        "options": [
            "Kaposi sarcoma ",
            "B cell lymphoma",
            "NA",
            "Leukemia of myeloid origin",
            "Burkitt's lymphoma"
        ]
    },
    {
        "numb": 67,
        "question": "A 31 -year-old man with AIDS complains of difficulty in swallowing. Examination of his oral cavity demonstrates whitish membranes covering much of his tongue and palate. Endoscopy also reveals several whitish, ulcerated lesions in the esophagus. These pathologic findings are fundamentally caused by loss of which of the following immune cells in this patient?",
        "answer": "Helper T lymphocytes ",
        "options": [
            "B lymphocytes",
            "Killer T lymphocytes",
            "Helper T lymphocytes ",
            "Monocytes/macrophages",
            "NA"
        ]
    },
    {
        "numb": 68,
        "question": "Toll-like receptors, recognize bacterial products and stimulate immune response by",
        "answer": "Transcription of nuclear-factor-mediated by NFKB",
        "options": [
            "Perforin- and granzyme-mediated Apoptosis",
            "Cyclin",
            "Transcription of nuclear-factor-mediated by NFKB",
            "NA",
            "FADD ligand apoptosis"
        ]
    },
    {
        "numb": 69,
        "question": " In an inflammatory response, which of the following are involved in the recognition of the microbes or damaged cells?",
        "answer": "All of the above",
        "options": [
            "Toll-like receptors",
            "All of the above",
            "Cytosolic receptor",
            "Mannose-binding lectin protein",
            "NA"
        ]
    },
    {
        "numb": 70,
        "question": "A 45-year-old male complains of a burning sensation while urinating and increased urinary frequency. On examination, there is tenderness over the suprapubic area and dysuria. Urinalysis reveals leukocyte esterase and nitrites. Which of the following is the most likely diagnosis?",
        "answer": " Cystitis",
        "options": [
            " Cystitis",
            "Prostatitis",
            " Glomerulonephritis",
            "Pyelonephritis",
            " Nephrolithiasis"
        ]
    },
    {
        "numb": 71,
        "question": "Which of the following statements is false about transudate?",
        "answer": "It is caused by increased vascular permeability",
        "options": [
            "NA",
            "It has a specific gravity of less than 1.012",
            "It is a protein-poor and cell-poor fluid",
            "It is a non-inflammatory edema or effusion",
            "It is caused by increased vascular permeability"
        ]
    },
    {
        "numb": 72,
        "question": "Rolling, adhesion, and transmigration occur by interactions between complementary adhesion molecules on leukocytes and endothelium. The expression of these adhesion molecules is enhanced by a mediator.  Which of these is not involved in this process?",
        "answer": "Produced only in sepsis",
        "options": [
            "Can have paracrine action",
            "Include interleukins ",
            "Cytokines are polypeptides",
            "NA",
            "Produced only in sepsis"
        ]
    },
    {
        "numb": 73,
        "question": "Which of the following statements does not apply to acute inflammation?",
        "answer": "Prominent cells involved are monocytes/macrophages and lymphocytes.",
        "options": [
            "Onset is rapid, occurring within minutes or hours.",
            "Tissue injury is usually mild and self-limited",
            "Prominent cells involved are monocytes/macrophages and lymphocytes.",
            "Local and systemic signs are prominent",
            "NA"
        ]
    },
    {
        "numb": 74,
        "question": "Major components of acute inflammation are",
        "answer": "Emigration of leukocytes to site of injury",
        "options": [
            "Increased vascular permeability",
            "Vasodilation",
            "Emigration of leukocytes to site of injury",
            "NA",
            "All of the above"
        ]
    },
    {
        "numb": 75,
        "question": "What is the of type of chronic inflammation?",
        "answer": "Granulomatous inflammation",
        "options": [
            "Fibrinous inflammation",
            "Purulent inflammation",
            "Granulomatous inflammation",
            "Serous inflammation",
            "Hemorrhagic inflammation"
        ]
    },
    {
        "numb": 76,
        "question": "A 14-year-old child, suffering from rheumatism, was admitted to the clinic with complaints of pain in the region of the heart, high fever, shortness of breath. On the 2nd day of hospitalization, death occurred from heart failure. Grossly: the heart is flabby, hypertrophied. Microscopically: edema, hyperemia, blood vessels are surrounded with lymphocytes, histiocytes. What type of inflammation in this case?",
        "answer": "Interstitial",
        "options": [
            "Fibrinous",
            "Granulomatous",
            "Serous",
            "Purulent",
            "Interstitial"
        ]
    },
    {
        "numb": 77,
        "question": "The release of arachidonic acid from the membrane phospholipids is mediated mainly through the action of ",
        "answer": "Phospholipase A2",
        "options": [
            "Phospholipase A2",
            "Phospholipase A1",
            "Phospholipase C",
            "NA",
            "Phospholipase B"
        ]
    },
    {
        "numb": 78,
        "question": "A 30-year-old female presents with fever, chills, and fatigue for the past three days. She recently recovered from a urinary tract infection treated with antibiotics. On examination, her temperature is 38.8\u00b0C (101.8\u00b0F), and she has warm, flushed skin. What is the most likely cause of her fever?",
        "answer": "Endogenous pyrogens released from leukocytes during the infection",
        "options": [
            "Fever due to an allergic reaction",
            "Hypothalamic dysfunction secondary to antibiotic use",
            "Endogenous pyrogens released from leukocytes during the infection",
            "Pyrogens released from normal cellular metabolism",
            "Exogenous pyrogens produced by a viral infection"
        ]
    },
    {
        "numb": 79,
        "question": "Which type of bacterial toxin acts by stimulating the excessive release of cytokines?",
        "answer": "Superantigens",
        "options": [
            "Enterotoxins",
            "Exotoxins",
            "Endotoxins",
            "Neurotoxins",
            "Superantigens"
        ]
    },
    {
        "numb": 80,
        "question": "Which of the following bacterial virulence factors directly inhibits phagocytosis by preventing the fusion of lysosomes with phagosomes?",
        "answer": "Capsules",
        "options": [
            "Adhesins",
            "Endotoxins",
            "Leukocidins",
            "Exotoxins",
            "Capsules"
        ]
    },
    {
        "numb": 81,
        "question": "In what cases can we notice processes such as hyperplasia and hypertrophy?",
        "answer": "Pregnant uterus",
        "options": [
            "Breast development in puberty",
            "Cardiac muscle in cardiomegaly",
            "Pregnant uterus",
            "NA",
            "Skeletal muscle in athelete"
        ]
    },
    {
        "numb": 82,
        "question": "A 28-year-old woman experienced a decrease in the size of her immobilized leg after an injury. What term is used to refer to this pathology?",
        "answer": "Atrophy",
        "options": [
            "NA",
            "lschemic necrosis",
            "Metaplasia",
            "Atrophy",
            "Hyperplasia"
        ]
    },
    {
        "numb": 83,
        "question": "Which organs lack permanent cells?",
        "answer": "smooth muscle",
        "options": [
            "Skeletal muscle",
            "Cardiac cells",
            "smooth muscle",
            "Neurons",
            "NA"
        ]
    },
    {
        "numb": 84,
        "question": "A patient who died from a hemorrhagic insult. From the anamnesis: he had acute hepatitis 10 years ago. At autopsy, in addition to the changes characteristic of the basic disease, minimal changes in the liver were revealed. What is the recovery mechanism in this case?",
        "answer": "Regeneration of parenchymal cells",
        "options": [
            "Proliferation of connective tissue cells",
            "Regeneration of parenchymal cells",
            "Synthesis of extracellular matrix proteins",
            "Remodeling of connective tissue",
            "Scar formation"
        ]
    },
    {
        "numb": 85,
        "question": "Anaplasia is a hallmark feature of ",
        "answer": "Malignant tumors",
        "options": [
            "Normal cells",
            "Benign tumors",
            "Malignant tumors",
            "NA",
            "Both benign and malignant tumors"
        ]
    },
    {
        "numb": 86,
        "question": "All tumors with invasive properties metastasize(A). Reason (R): The invasive property of the tumor permits them to penetrate into blood vessels or lymphatics, thus allowing them to spread to distant sites. Which of the following statements is true? ",
        "answer": "A is false; B is true",
        "options": [
            "Both A and Rare true, but R is not the  Correct explanation of A",
            "A is false; B is true",
            "NA",
            "A is true; B is false",
            "Both A and R are true, and R is the Correct explanation of A."
        ]
    },
    {
        "numb": 87,
        "question": "Increased risk of cancer is seen in which of the following? ",
        "answer": "Chronic ulcerative colitis ",
        "options": [
            "Chronic ulcerative colitis ",
            "NA",
            "Leiomyoma of the uterus",
            "Bronchial asthma ",
            "Fibroadenoma of breast "
        ]
    },
    {
        "numb": 88,
        "question": "Which of the following is/are induced by LMP-1 gene plays a role in oncogenesis? 1. Human T cell leukemia virus type 1. 2. Hepatitis B Virus 3. Epstein Barr virus 4. Human Papilloma Virus ",
        "answer": "3on1y ",
        "options": [
            "NA",
            "1&4",
            "2&3 ",
            "3on1y ",
            "1 Only "
        ]
    },
    {
        "numb": 89,
        "question": "What the name of benign tumor arising from columnar epithelium?",
        "answer": "Adenoma",
        "options": [
            "Osteoma",
            "Fibroma",
            "Adenoma",
            "Lipoma",
            "Papilloma"
        ]
    },
    {
        "numb": 90,
        "question": "Which of the following statements is not true about adenomas?",
        "answer": "All adenomas form glandular Structures",
        "options": [
            "They are tumors arising from non-Glandular epithelial cells forming glandular structures",
            "They may or may not form glandular structures",
            "Benign epithelial neoplasm that are derived from glands.",
            "All adenomas form glandular Structures",
            "NA"
        ]
    },
    {
        "numb": 91,
        "question": "Which of the following is a disorganized but benign mass composed of cells indigenous to the involved site?",
        "answer": "Hamartoma",
        "options": [
            "Hamartoma",
            "Teratoma",
            "NA",
            "Choristoma",
            "Papilloma"
        ]
    },
    {
        "numb": 92,
        "question": "Microscopic examination of thyroid gland biopsy revealed changes in the structure of the gland: a well-differentiated epithelium of the glands with few mitoses and consist of groups of cells. Which type of adenoma occurs in this case",
        "answer": "Trabecular adenoma",
        "options": [
            "Tubular adenoma",
            "Cystadenoma",
            "Trabecular adenoma",
            " Fibroadenoma",
            "Acinar adenoma"
        ]
    },
    {
        "numb": 93,
        "question": "Which type of nevus often quite rich in melanin pigment",
        "answer": "Blue nevus.",
        "options": [
            "Intradermal nevus",
            "Juvenile nevus",
            "Compound nevus",
            "Blue nevus.",
            "Junctional nevus"
        ]
    },
    {
        "numb": 94,
        "question": "Not a characteristics of 'Dysplastic naevi' is",
        "answer": "measuring > 10 mm",
        "options": [
            "variegated pigmentation",
            "ill defined borders",
            "NA",
            "measuring > 10 mm",
            "undulating irregular surfaces"
        ]
    },
    {
        "numb": 95,
        "question": "If anabolism is more than catabolism what would it be means?",
        "answer": "positive nitrogen balance",
        "options": [
            "increased protein breakdown",
            "negative nitrogen  balance",
            "decreased stabilized protein synthesis",
            "positive nitrogen balance",
            "decreased growth protein synthesis"
        ]
    },
    {
        "numb": 96,
        "question": "Loss proteins with urine (proteinuria) typically leads to which one of following types of edema?",
        "answer": "throughout body ",
        "options": [
            "abdominal cavity ",
            "pulmonary edema",
            "legs region",
            "throughout body ",
            "face region "
        ]
    },
    {
        "numb": 97,
        "question": "Which of the following is a characteristic feature of obesity?",
        "answer": "Excessive accumulation of adipose tissue",
        "options": [
            "Excessive accumulation of adipose tissue",
            "Elevated levels of high-density lipoprotein (HDL) cholesterol",
            "Decreased appetite",
            "Increased risk of type 1 diabetes",
            "Low body fat percentage"
        ]
    },
    {
        "numb": 98,
        "question": "Macrophages replete by exceeded cholesterol are converted to which one of these cells type?",
        "answer": "foam cells",
        "options": [
            "phagocytes",
            "APC",
            "foam cells",
            "immunocytes",
            "plasma cells"
        ]
    },
    {
        "numb": 99,
        "question": "What symptom does not occur in diabetes mellitus?",
        "answer": "Weight gain",
        "options": [
            "Polyuria",
            "Weight gain",
            "",
            "Weight loss",
            "Polydipsia"
        ]
    },
    {
        "numb": 100,
        "question": "Which of the following is not found in diabetes",
        "answer": "Patients with type 2 diabetes are more prone to ketoacidosis as compared to type 1",
        "options": [
            "Patients with type 2 diabetes are more prone to ketoacidosis as compared to type 1",
            "Recognised endocrine causes of diabetes include acromegaly and cushing\u2019s syndrome",
            "NA",
            "The majority of type 2 diabetes mellitus patients die from cardiovascular disease",
            "Fasting blood sugar more than 126 establishes diagnosis of diabetes"
        ]
    },
    {
        "numb": 101,
        "question": "Whar does mean the term \"pathogenesis\"?",
        "answer": "the development mechanism",
        "options": [
            "mechanism of death ",
            "the development mechanism",
            "clinical manifestations",
            "complications ",
            "cause of development"
        ]
    },
    {
        "numb": 102,
        "question": "What does mean the term \"tanatogenesis\" ?",
        "answer": "mechanism of death ",
        "options": [
            "complications ",
            "mechanism of death ",
            "the development mechanism",
            "cause of development",
            "clinical manifestations"
        ]
    },
    {
        "numb": 103,
        "question": "What does pathological consequences include?",
        "answer": "Death",
        "options": [
            "self-healing",
            "body malaise",
            "general weakness",
            "transition to latent form",
            "Death"
        ]
    },
    {
        "numb": 104,
        "question": "What may the classification of diseases include?",
        "answer": "?hronic",
        "options": [
            "prodrome",
            "?hronic",
            "initial",
            "latent",
            "terminal"
        ]
    },
    {
        "numb": 105,
        "question": "How is called sign of biologic death characterized by not dissappear by pressing to spot?",
        "answer": "Imbibition",
        "options": [
            "Cadaveric drying",
            "Rigor mortis",
            "Cadaveric decomposition",
            "Cadaveric cooling",
            "Imbibition"
        ]
    },
    {
        "numb": 106,
        "question": "How is called sign of biologic death which associated with evaporation of fluid? ",
        "answer": "Cadaveric drying",
        "options": [
            "Cadaveric spots ",
            "Rigor mortis",
            "Cadaveric drying",
            "Cadaveric decomposition",
            "Cadaveric cooling "
        ]
    },
    {
        "numb": 107,
        "question": "Which cellls most sensitive to hypoxia?",
        "answer": "Neurons",
        "options": [
            "Myocardial cells ",
            "Renal tubular epithelial cells",
            "Hepatocytes",
            "Neurons",
            ""
        ]
    },
    {
        "numb": 108,
        "question": "If patient has decreased arterio-venous difference of O2, which type of hypoxia more probably is it?",
        "answer": "histogenous hypoxia",
        "options": [
            "circulatory hypoxia",
            "histogenous hypoxia",
            "respiratory hypoxia",
            "exogenous hypoxia",
            "hemic hypoxia"
        ]
    },
    {
        "numb": 109,
        "question": "A scientist Dr. Gobind was asked to participate in a research project on myocardial infarction in a rabbit model. Which of the following occurs in ischemic cell injury? ",
        "answer": "Influx of Na+ and Ca++",
        "options": [
            "Influx of Na+ and Ca++",
            "Influx of K+ and Ca++",
            "Efflux of K+ and Na+",
            "Influx of K+ and H 2o",
            "NA"
        ]
    },
    {
        "numb": 110,
        "question": "Among the following, what is the correct sequence of events that occur during necrosis? 1) Cell swelling 2) Karyolysis 3) Karyorrhexis 4) Pyknosis",
        "answer": "1, 4, 3, 2",
        "options": [
            "1,2, 3,4",
            "1, 4, 3, 2",
            "NA",
            "2,3, 4, 1",
            "4, 3, 2, 1"
        ]
    },
    {
        "numb": 111,
        "question": "Which cellular organelle is typically affected in reversible cell injury?",
        "answer": "Mitochondria",
        "options": [
            "Nucleus",
            "Mitochondria",
            "Golgi apparatus",
            "Lysosomes",
            "Endoplasmic reticulum"
        ]
    },
    {
        "numb": 112,
        "question": "A 45-year-old male smoker complains of shortness of breath and cough. Lung biopsy shows hypertrophy and hyperplasia of bronchial epithelial cells. Which cellular adaptation is most likely occurring in this patient's lungs?",
        "answer": "Hypertrophy",
        "options": [
            "Hypertrophy",
            "Metaplasia",
            "Hyperplasia",
            "Atrophy",
            "Dysplasia"
        ]
    },
    {
        "numb": 113,
        "question": "Which of the following processes is irreversible?",
        "answer": "Karyorrhexis",
        "options": [
            "Karyorrhexis",
            "NA",
            "Fatty change",
            "Visible vacuoles in cytoplasm",
            "Hydropic swelling"
        ]
    },
    {
        "numb": 114,
        "question": "Which type of necrosis occurs in patients having a history of trauma?",
        "answer": "Fat nonenzymatic necrosis",
        "options": [
            "Fat nonenzymatic necrosis",
            "Gangrene",
            "Liquefactive necrosis",
            "Coagulative necrosis",
            "Fibrinoid necrosis"
        ]
    },
    {
        "numb": 115,
        "question": "A 5O-year-old chronic alcoholic presents to the emergency room with 12 hours of severe abdominal pain. The pain radiates to the back and is associated with an urge to vomit. Physical examination discloses exquisite abdominal tenderness. Laboratory studies show elevated serum amylase. Which of following morphologic changes would be expected in the peripancreatic tissue of this patient?",
        "answer": "Fat necrosis ",
        "options": [
            "coagulative necrosis ",
            "Caseous necrosis ",
            "NA",
            "Fat necrosis ",
            "Fibrinoid necrosis"
        ]
    },
    {
        "numb": 116,
        "question": "Apoptosis literally means",
        "answer": "Falling off",
        "options": [
            "NA",
            "Die in peace",
            "Falling off",
            "Natural death",
            "Shrink"
        ]
    },
    {
        "numb": 117,
        "question": "Mark the correct statement(s) regarding Caspases: 1) It is an alanine protease in nature 2) Active caspase is a marker for cells undergoing apoptosis. 3) Exists as zymogens and undergo cleavage to get activated 4) Independent of proapoptotic and antiapoptotic proteins 5) Required for embryogenesis ",
        "answer": "Only 2,3,5 is correct ",
        "options": [
            "NA",
            "Only 1,2,3 is correct ",
            "Only 2 is correct  ",
            "Only 1,2.4 is correct ",
            "Only 2,3,5 is correct "
        ]
    },
    {
        "numb": 118,
        "question": "In which of the following organs fatty changes are not seen?",
        "answer": "Lungs",
        "options": [
            "Kidney",
            "Liver",
            "Lungs",
            "Heart",
            "Muscles"
        ]
    },
    {
        "numb": 119,
        "question": "What is the name of the pathological process which is associated with               accumulation of cholesterol and cholesterol esters with formation of tumorous masses?",
        "answer": "Xantoma",
        "options": [
            "Adenoma",
            "Xantoma",
            "Papilloma",
            "Teratoma",
            "Atheroma"
        ]
    },
    {
        "numb": 120,
        "question": "A 68-year-old deceased had changes in the coronary vessels and aorta. Grossly: the walls of the vessels are thickened, hard, with plaques. What pathological process developed in this case?",
        "answer": "Accumulation of cholesterol",
        "options": [
            "Accumulation of cholesterol",
            "Accumulation of amyloid",
            "Accumulation of carbohydrates",
            "Accumulation of proteins",
            "Accumulation of lipids"
        ]
    },
    {
        "numb": 121,
        "question": "What the name of the cells accumulating fat within the intimal layer of aorta and large arteries in atherosclerotic plaques?",
        "answer": "Foam cells",
        "options": [
            "Foam cells",
            "Fibroblasts",
            "Lymphocytes",
            "Epithelial cells",
            "Leukocytes"
        ]
    },
    {
        "numb": 122,
        "question": "A 50-year-old patient with chronic renal failure underwent biopsy. When staining with Congo-Red, it was revealed: extracellular, homogeneous, structure less, masses, red color. What type of dystrophy in this case? ",
        "answer": "Amyloidosis",
        "options": [
            "Hemosiderosis",
            "Hemochromatosis",
            "Fatty change",
            "Hyalinosis",
            "Amyloidosis"
        ]
    },
    {
        "numb": 123,
        "question": "What do amyloid fibrils represent?",
        "answer": " Insoluble fibrils in the extracellular ",
        "options": [
            " Cellular organelles",
            "Cellular structures that enable movement",
            " Insoluble fibrils in the extracellular ",
            " Soluble proteins in cells",
            "Liquid inclusions in cells"
        ]
    },
    {
        "numb": 124,
        "question": "What the name of substance with fibrillary structure which forms under the pathological conditions?",
        "answer": "Amyloid",
        "options": [
            "Reabsorbtion droplets",
            "Lipids",
            "Calcificates",
            "Russell bodies",
            "Amyloid"
        ]
    },
    {
        "numb": 125,
        "question": "What causes of posthepatic jaundice?",
        "answer": "Obstruction of bile ducts by stones",
        "options": [
            "Hemolytic disease of newborns",
            "Liver cirrhosis ",
            "Heterohemotransfusions ",
            "Obstruction of bile ducts by stones",
            "Hepatitis"
        ]
    },
    {
        "numb": 126,
        "question": "Which of the fol lowing are true about Xeroderma pigmentosum : A. Skin manifestations appear within first 2 years of life B. Increased risk of non melanotic skin cancers c. Nucleotide excision repair defect D. Autosomal dominant inheritance ",
        "answer": "A, B, C are true ",
        "options": [
            "NA",
            "B C Only",
            "B, C, D are true",
            "A and Bare true ",
            "A, B, C are true "
        ]
    },
    {
        "numb": 127,
        "question": "Which pigment derived from hemoglobin found in normal conditions? ",
        "answer": "Bilirubin",
        "options": [
            " Hemomelanin",
            "Bilirubin",
            "Porphyrin",
            "Hemin ",
            "Hematoidin"
        ]
    },
    {
        "numb": 128,
        "question": "At 33-year-old patient have white skin color, blond hair, poor vision and severe photophobia. They are highly sensitive to sunlight. What pigment exchange disorder is there in this case?",
        "answer": "Melanin",
        "options": [
            "Hematoidin",
            "Porphyrins",
            "Hemosiderin",
            "Bilirubin",
            "Melanin"
        ]
    },
    {
        "numb": 129,
        "question": "What is metastatic calcification?",
        "answer": "deposition of calcium salts in normal tissues",
        "options": [
            "derangement in calcium and phosphate metabolism",
            "deposition of calcium salts in normal tissues",
            "Hypervitaminosis D",
            "Increased bone catabolism",
            "deposition of calcium salts in dead tissues"
        ]
    },
    {
        "numb": 130,
        "question": "Which of the following is true about calcification? Which organ will not have metastatic calcification?",
        "answer": "Psammoma body is formed with dystrophic calcification ",
        "options": [
            "Psammoma body is formed with dystrophic calcification ",
            "Mitochondria is the rarest organelle affected in calcification",
            "It is most commonly seen in the kidneys ",
            "NA",
            "Serum calcium is normal in metastatic calcification "
        ]
    },
    {
        "numb": 131,
        "question": "Which of the following conditions is characterized by a primary respiratory acidosis?",
        "answer": "Chronic obstructive pulmonary disease (COPD)",
        "options": [
            "Hypokalemia",
            "Chronic obstructive pulmonary disease (COPD)",
            "Renal failure",
            "Excessive vomiting",
            "Diabetic ketoacidosis"
        ]
    },
    {
        "numb": 132,
        "question": "A 54-year-old male patient in renal failure has missed a round of dialysis and was feeling sick. What is the probable acid-base disorder that we can expect in this patient?",
        "answer": "Metabolic Acidosis",
        "options": [
            "NA",
            "Metabolic Acidosis",
            "Respiratory Acidosis",
            "Metabolic Alkalosis",
            "Respiratory Alkalosis"
        ]
    },
    {
        "numb": 133,
        "question": "What is the primary treatment for dehydration?",
        "answer": "Fluid replacement",
        "options": [
            "Fluid replacement",
            "Administering antihistamines",
            "Restricting fluid intake",
            "Administering antidiuretic hormone",
            "Administering diuretics"
        ]
    },
    {
        "numb": 134,
        "question": "Which of the following may cause edema? 1. Elevated vascular hydrostatic pressure 2. Reduced vascular hydrostatic pressure 3. Elevated plasma osmotic pressure 4. Reduced plasma osmotic pressure",
        "answer": "1 and 4",
        "options": [
            "NA",
            "1 and 3",
            "1 and 4",
            "2 and 3",
            "2 and 4"
        ]
    },
    {
        "numb": 135,
        "question": "Macro signs of arterial hyperemia is which one of these?",
        "answer": "increased tissue turgor",
        "options": [
            "increased number of capillaries",
            "fast blood flow",
            "decreased number of capillaries",
            "low local temperature",
            "increased tissue turgor"
        ]
    },
    {
        "numb": 136,
        "question": "A 66-year-old patient suffered from chronic ischemic heart disease died from chronic heart failure accompanied by chronic venous hyperemia of internal organs. At autopsy: the lung tissue is brown, hard, airless. Microscopically: accumulation of hemosiderin and fibrosis of the lung tissue are determined. What term is used for this pathological process in lungs?",
        "answer": "Brown induration",
        "options": [
            "Cirrhosis of lung",
            "Brown induration",
            "Congestive induration",
            "Muscat cirrhosis",
            "Nutmeg lungs"
        ]
    },
    {
        "numb": 137,
        "question": "Indicate what one of following signs Virchow\u2019s triad, as etiology of one of local circulation disorders, includes?",
        "answer": "injured vessel wall",
        "options": [
            "low oxyhemoglobin",
            "fast blood flow",
            "injured vessel wall",
            "hypocoagubility",
            "smoot vessel wall"
        ]
    },
    {
        "numb": 138,
        "question": "Which outcome of thrombus is characteristic by dislodge and transport to other sites?",
        "answer": "Embolization",
        "options": [
            "Suppuration",
            "Embolization",
            "Calcification",
            "Dissolution",
            "Propagation "
        ]
    },
    {
        "numb": 139,
        "question": "What type of embolism can occur in bone fracture?",
        "answer": "Fat embolism",
        "options": [
            "Thromboembolism",
            "Fat embolism",
            "Gas embolism",
            "Microbial embolism",
            "Amniotic fluid embolism"
        ]
    },
    {
        "numb": 140,
        "question": "Which type of embolism can cause a syndrome similar to acute respiratory distress syndrome (ARDS), with rapid development of severe hypoxemia and neurologic changes?\n\n",
        "answer": " Fat embolism\n",
        "options": [
            " Fat embolism\n",
            "Amniotic fluid embolism\n",
            " Air embolism\n",
            " Foreign body embolism.\n",
            "Septic embolism\n"
        ]
    },
    {
        "numb": 141,
        "question": "Which feature characterizes ischemia as a local circulation disorder?",
        "answer": "pallor",
        "options": [
            "increased blood flow",
            "edema",
            "pallor",
            "cyanosis",
            "redness"
        ]
    },
    {
        "numb": 142,
        "question": "During ischemia will be pale color of tissue due to which one of following?",
        "answer": "decreased  number of functional capillaries",
        "options": [
            "reduced hemoglobignal level",
            "decreased  number of functional capillaries",
            "increased number of functional capillaries",
            "increased hemoglobin level",
            "increased oxyhemoglobin"
        ]
    },
    {
        "numb": 143,
        "question": "Which term used for hemorrhage from urinary system? ",
        "answer": "Haematuria",
        "options": [
            "Haematemesis",
            "Epistaxis",
            "Haemoptoe",
            "Metrorrhagia",
            "Haematuria"
        ]
    },
    {
        "numb": 144,
        "question": "A 63-year-old patient who suffered from myocardial infarction and died from  acute heart failure. During autopsy was revealed: defect of the wall of left ventricle and blood in the pericardial cavity. Which term is used for this type of hemorrhage?",
        "answer": "Hemopericardium ",
        "options": [
            "Hemothorax",
            "Hemarthrosis",
            "Hemoperitoneum",
            "Hematomesis",
            "Hemopericardium "
        ]
    },
    {
        "numb": 145,
        "question": "Shock due to cardiac tamponade is an example of ",
        "answer": "Obstructive shock",
        "options": [
            "Distributive shock",
            "Hypovolemic shock",
            "Endocrine shock",
            "NA",
            "Obstructive shock"
        ]
    },
    {
        "numb": 146,
        "question": "A patient 30 years old after the injection developed edema, redness and itching at the injection site, a severe decrease of blood pressure (40/20 mm Hg). Pathanatomical examination revealed: fluid blood in the vessels, accumulation of blood in microcirculatory vessels, disseminated intravascular coagulation, \u201cshock kidney\u201d, \u201cshock lung\u201d. Which type of shock occurs in this case? ",
        "answer": "Anaphylactic ",
        "options": [
            "Traumatic ",
            "Cardiogenic",
            "Anaphylactic ",
            "Hypovolemic",
            "Septic"
        ]
    },
    {
        "numb": 147,
        "question": "In which type of shock we can see decreased of the peripheral vascular resistance? ",
        "answer": "Hypovolemic shock",
        "options": [
            "Cardiogenic shock",
            "Hypovolemic shock",
            "Obstructive shock",
            "Distributive shock",
            "NA"
        ]
    },
    {
        "numb": 148,
        "question": "An immunocompromised patient presents in the ER with fever, dyspnea and altered sensorium. His heart rate is 124 bpm, BP is 90/66 mm of Hg, and his central venous pressure (CVP) is low. What is the patient suffering from?",
        "answer": "Septic shock",
        "options": [
            "NA",
            "Cardiogenic shock",
            "Septic shock",
            "Hypovolemic shock",
            "Obstructive shock"
        ]
    },
    {
        "numb": 149,
        "question": "Which of the following best describes the primary initiating event in the pathophysiology of DIC?",
        "answer": "Release of tissue factor into circulation",
        "options": [
            "Endothelial injury resulting in exposure of subendothelial collagen",
            "Release of tissue factor into circulation",
            "Dissemination of malignant cells into the bloodstream",
            "Impaired fibrinolysis leading to fibrin deposition",
            "Activation of the intrinsic pathway of coagulation"
        ]
    },
    {
        "numb": 150,
        "question": "A 30-year-old pregnant female presents to the obstetrics ward with complaints of vaginal bleeding, abdominal pain, and decreased fetal movement. Laboratory tests show thrombocytopenia, elevated fibrin degradation products (FDPs), and prolonged clotting times. Obstetric ultrasound reveals intrauterine fetal demise. What is the most likely diagnosis?",
        "answer": "Disseminated intravascular coagulation (DIC)",
        "options": [
            "HELLP syndrome",
            "Thrombotic thrombocytopenic purpura",
            "Acute fatty liver of pregnancy",
            "Disseminated intravascular coagulation (DIC)",
            "Antiphospholipid syndrome"
        ]
    },
    {
        "numb": 151,
        "question": "Most potent stimulator of naive T cell is: ",
        "answer": "Dendritic cell ",
        "options": [
            "Plasma cell ",
            "NA",
            "Dendritic cell ",
            "B cell",
            "Macrophages "
        ]
    },
    {
        "numb": 152,
        "question": "A 32-year-old male presents with recurrent episodes of abdominal pain, diarrhea, and bloody stools. Colonoscopy reveals areas of inflammation and ulceration in the colon. What inflammatory bowel disease is he likely suffering from?",
        "answer": "Ulcerative colitis",
        "options": [
            "Diverticulitis",
            "Celiac disease",
            "Irritable bowel syndrome (IBS)",
            "Crohn's disease",
            "Ulcerative colitis"
        ]
    },
    {
        "numb": 153,
        "question": "Which autoimmune disorder is associated with elevated levels of antinuclear antibodies and decreased complement levels?",
        "answer": "Systemic lupus erythematosus (SLE)",
        "options": [
            "Systemic lupus erythematosus (SLE)",
            "Type 1 diabetes mellitus",
            "Multiple sclerosis",
            "Crohn's disease",
            "Rheumatoid arthritis"
        ]
    },
    {
        "numb": 154,
        "question": "Oxygen burst I Respiratory burst is the ra pid release of reactive oxygen species , superoxide anions and hydrogen peroxide from different cell types. Plays a vital role in cell signalling. Which of the following helps in generat ing oxygen burst in the neutrophils? ",
        "answer": "NADPH oxidase",
        "options": [
            "NA",
            "Glutathione peroxidase ",
            "Catalase ",
            "Superoxide dismutase",
            "NADPH oxidase"
        ]
    },
    {
        "numb": 155,
        "question": "Which mechanism of immune response is characterized by specific recognition and attack of pathogens?\n",
        "answer": " Cellular immunity",
        "options": [
            "Inflammation\n\n",
            " Antibodies\n ",
            " Phagocytosis\n",
            " Cellular immunity",
            "Apoptosis\n"
        ]
    },
    {
        "numb": 156,
        "question": "Which of the following molecules is the major signaling protein that activates immune cells and is involved in the inflammatory response?\n\n",
        "answer": " Tumor Necrosis Factor (TNF)",
        "options": [
            " Tumor Necrosis Factor (TNF)",
            "Transforming Growth Factor Beta (TGF-?)",
            "Interleukin-2",
            "Interferon gamma",
            " Interferon"
        ]
    },
    {
        "numb": 157,
        "question": "Which of the following mechanisms is associated with the development of allergic reactions?",
        "answer": "Sensitization of mast cells",
        "options": [
            "Increased production of IgG antibodies",
            "Desensitization of mast cells",
            "Sensitization of mast cells",
            "Activation of regulatory T cells",
            "Suppression of cytokine release"
        ]
    },
    {
        "numb": 158,
        "question": "A 35-year-old woman presents with recurrent hives and swelling of the lips and face after eating certain foods. She has noticed these symptoms after consuming shellfish, nuts, and strawberries. Skin prick testing reveals sensitization to multiple food allergens. What dietary modification could help prevent future allergic reactions?",
        "answer": "Elimination of identified food allergens",
        "options": [
            "Incorporating probiotics into the diet",
            "Increasing intake of allergenic foods",
            "Avoidance of fruits and vegetables",
            "Fasting for extended periods",
            "Elimination of identified food allergens"
        ]
    },
    {
        "numb": 159,
        "question": "During a Type 1 hypersensitive reaction, the binding of allergens to IgE antibodies on mast cells triggers the release of:",
        "answer": "Histamine",
        "options": [
            "Antibodies",
            "Interleukins",
            "Interferons",
            "Histamine",
            "Complement proteins"
        ]
    },
    {
        "numb": 160,
        "question": "Which of the following best describes the mechanism of Type 2 Hypersensitivity?",
        "answer": "Antibody-dependent cell-mediated cytotoxicity",
        "options": [
            "Local immune complex injury",
            "Immune complex deposition",
            "Delayed-type hypersensitivity",
            "Antibody-dependent cell-mediated cytotoxicity",
            "Immune response to soluble antigens in the blood"
        ]
    },
    {
        "numb": 161,
        "question": "A 20-year-old gardener presents to his family physician with his hands and arms appearing red, covered with oozing blisters and crusts. Which of the following best describes the pathogenesis of these skin lesions? ",
        "answer": "Delayed-type hypersensitivity",
        "options": [
            "Deposition of circulating immune complexes",
            "Delayed-type hypersensitivity",
            "NA",
            "Deposition of antigluten antibodies ",
            "Cytotoxic antibody production "
        ]
    },
    {
        "numb": 162,
        "question": "Hyperacute rejection is due to",
        "answer": "Preformed antibodies",
        "options": [
            "Preformed antibodies",
            "Endothelitis caused by donor antibodies",
            "Circulating macrophage- mediated injury",
            "NA",
            "Cytotoxic T lymphocyte-mediated injury "
        ]
    },
    {
        "numb": 163,
        "question": "Method of prevention of GVHD in bone marrow transplantation is: ",
        "answer": "AlI are correct",
        "options": [
            "NA",
            "Post procedure immune suppression",
            "Prior immune suppression ",
            "T-cell removal",
            "AlI are correct"
        ]
    },
    {
        "numb": 164,
        "question": "Which primary immunodeficiency disorder is characterized by selective deficiency of immunoglobulin A (IgA), leading to recurrent respiratory and gastrointestinal infections?",
        "answer": "Selective IgA deficiency",
        "options": [
            "Chronic granulomatous disease",
            "X-linked agammaglobulinemia",
            "Common variable immunodeficiency",
            "Selective IgA deficiency",
            "Severe combined immunodeficiency"
        ]
    },
    {
        "numb": 165,
        "question": "A 12-year-old girl presents with recurrent skin abscesses and lymphadenopathy. Laboratory tests show impaired phagocytosis by neutrophils. What primary immunodeficiency disorder is she likely suffering from?",
        "answer": "Chronic granulomatous disease",
        "options": [
            "Severe combined immunodeficiency",
            "Selective IgA deficiency",
            "X-linked agammaglobulinemia",
            "Chronic granulomatous disease",
            "Common variable immunodeficiency"
        ]
    },
    {
        "numb": 166,
        "question": "Risk of HIV transmission is not seen with: ",
        "answer": "Plasma derived Hepatitis B vaccine ",
        "options": [
            "Platelets ",
            "Leucocytes",
            "Whole blood ",
            "NA",
            "Plasma derived Hepatitis B vaccine "
        ]
    },
    {
        "numb": 167,
        "question": "A 28-year-old woman presents with fever, weight loss, and generalized lymphadenopathy. She reports unprotected sexual intercourse with multiple partners. On examination, she has oral hairy leukoplakia and Pneumocystis jirovecii pneumonia. What is the most likely diagnosis?",
        "answer": "Secondary immunodeficiency",
        "options": [
            "Chronic granulomatous disease",
            "Sarcoidosis",
            "Hypersensitivity reaction",
            "Secondary immunodeficiency",
            "Primary immunodeficiency"
        ]
    },
    {
        "numb": 168,
        "question": "Which of the following is a systemic sign of severe inflammation characterized by decreased blood pressure and organ dysfunction? ",
        "answer": "Sepsis",
        "options": [
            "Hyperemia",
            "Sepsis",
            "Leukocytosis",
            "Anaphylaxis",
            "Erythema"
        ]
    },
    {
        "numb": 169,
        "question": "What is the term for the process by which neutrophils squeeze through endothelial gaps to migrate to the site of injury or infection?",
        "answer": " Diapedesis ",
        "options": [
            "Margination ",
            " Diapedesis ",
            " Exocytosis",
            " Chemotaxis ",
            " Phagocytosis "
        ]
    },
    {
        "numb": 170,
        "question": "A 60-year-old obese male presents with severe pain, redness, and swelling in his left big toe. He reports a history of consuming a high-purine diet and excessive alcohol intake. Laboratory investigations reveal elevated serum uric acid levels. Which of the following is the most likely diagnosis?",
        "answer": " Ankylosing spondylitis",
        "options": [
            " Ankylosing spondylitis",
            "Osteoarthritis",
            " Rheumatoid arthritis",
            " Septic arthritis",
            " Gouty arthritis"
        ]
    },
    {
        "numb": 171,
        "question": "An anti-inflammatory cytokine is ",
        "answer": "IL-4",
        "options": [
            "IL-1",
            "TNF",
            "IFNy",
            "IL-4",
            "NA"
        ]
    },
    {
        "numb": 172,
        "question": "A 33 year old male presents with complaints of Itching and generalised redness who developed erythematous pruritic lesions all over the body which was triggered after washing his clothes. Which statement is not true in this case?",
        "answer": "Histamine receptor agonists are used to treat allergies.",
        "options": [
            "NA",
            "Histamine is a principal mediator of immediate transient response during acute inflammation.",
            "It increases the permeability of venules ",
            "It causes dilation of arterioles ",
            "Histamine receptor agonists are used to treat allergies."
        ]
    },
    {
        "numb": 173,
        "question": "What is the name of the inflammation, characterized by the outpouring of low-protein fluid?",
        "answer": "Serous inflammation",
        "options": [
            "Catarrhal inflammation",
            "Purulent inflammation",
            "Fibrinous inflammation",
            "Serous inflammation",
            "Hemorrhagic inflammation"
        ]
    },
    {
        "numb": 174,
        "question": "Cell to cell permeability occurs through:",
        "answer": "Connexins",
        "options": [
            "Occludin",
            "NA",
            "Zona adherens",
            "Connexins",
            "Zonulin"
        ]
    },
    {
        "numb": 175,
        "question": "Which of these is not a granulomatous disease",
        "answer": "Amebiasis",
        "options": [
            "Amebiasis",
            "Sarcoidosis",
            "Leprosy",
            "Tuberculosis",
            "Neutrophil infiltration"
        ]
    },
    {
        "numb": 176,
        "question": "Chronic granulomatous disease is:",
        "answer": "Associated with formation of multiple granulomas",
        "options": [
            "Margination",
            "A benign neoplastic process",
            "Associated with formation of multiple granulomas",
            "A parasitic disease",
            "Acquired leukocyte function defect"
        ]
    },
    {
        "numb": 177,
        "question": "Prostaglandin causing fever is: ",
        "answer": "PGE2 ",
        "options": [
            "PGE1",
            "PGF2 ",
            "PGE2 ",
            "PGT2",
            "NA"
        ]
    },
    {
        "numb": 178,
        "question": "A 55-year-old male with a history of rheumatoid arthritis presents with recurrent episodes of fever, joint pain, and fatigue. He is currently on immunosuppressive therapy. Laboratory tests reveal elevated levels of inflammatory markers. What is the likely explanation for his recurrent fevers?",
        "answer": "Endogenous pyrogen release due to his autoimmune condition",
        "options": [
            "Endogenous pyrogen release due to his autoimmune condition",
            "Hypothalamic dysfunction caused by long-term immunosuppressive therapy",
            "Exogenous pyrogens produced by an underlying infection",
            "Fever of unknown origin",
            "Side effect of his medication"
        ]
    },
    {
        "numb": 179,
        "question": "Which type of viral genome integrates into the host cell's DNA and remains latent, occasionally reactivating to produce new virions?",
        "answer": "Retrovirus",
        "options": [
            "Single-stranded DNA ",
            "Retrovirus",
            "Double-stranded RNA ",
            "Single-stranded RNA",
            "Double-stranded DNA "
        ]
    },
    {
        "numb": 180,
        "question": "In viral replication, which enzyme is responsible for synthesizing a complementary RNA strand from a viral RNA template?",
        "answer": "RNA-dependent RNA polymerase",
        "options": [
            "RNA-dependent RNA polymerase",
            "Reverse transcriptase ",
            "RNAase ",
            "DNA polymerase ",
            "DNA ligase"
        ]
    },
    {
        "numb": 181,
        "question": "Definition of Metaplasia is",
        "answer": "Columnar is the most common type",
        "options": [
            "Columnar is the most common type",
            "NA",
            "Is irreversible",
            "Involves only epithelial cells",
            "Can occurs at stem cells level"
        ]
    },
    {
        "numb": 182,
        "question": "A 56 Yr old Female complaints of heavy menstrual bleeding for the past 1 month,associated with pain. She added that her last menstruation was 10 years back. On Per Vaginalexamination, Non-Bloody vaginal discharge noted & patient was irritable and anxious during examination. Endometrial !biopsy was taken in OPD which revealed atypical cells. Which pathological process we will not find in this case?",
        "answer": "Bone marrow hyperplasia is not seen in response to peripheral blood cytopenias",
        "options": [
            "There is an increase in the number of cells",
            "NA",
            "Pathological hyperplasia can be a risk factor for malignancy ",
            "Bone marrow hyperplasia is not seen in response to peripheral blood cytopenias",
            "Seen in cells capable of dividing (labile cells)"
        ]
    },
    {
        "numb": 183,
        "question": "Which organs lack stable cells?",
        "answer": "Skeletal muscle",
        "options": [
            "Liver",
            "Pancreas",
            "Smooth muscle",
            "Skeletal muscle",
            "NA"
        ]
    },
    {
        "numb": 184,
        "question": " The patient consulted a surgeon at the clinic with a wound in the area of the right shoulder joint. The bottom of the wound upon examination has a fine-grained surface of a red-pink color. Which of the following types of regeneration develops in this case?",
        "answer": "Incomplete reparative regeneration",
        "options": [
            "physiological regeneration",
            "Incomplete reparative regeneration",
            "humoral regeneration",
            "pathological regeneration",
            "complete reparative regeneration"
        ]
    },
    {
        "numb": 185,
        "question": "Which of the following is not a sign of a malignancy",
        "answer": "Sensitivity to growth-inhibitory signals",
        "options": [
            "Evasion of apoptosis",
            "Sustained angiogenesis",
            "Self-sufficiency in growth signals",
            "NA",
            "Sensitivity to growth-inhibitory signals"
        ]
    },
    {
        "numb": 186,
        "question": "A 68 yr old woman with a repeated bouts of pneumonia and H/O heavy smoking presents with a 2-week history of fever and productive cough. A chest X-ray reveals a right lower lobe infiltrates confirming pneumonia. A transbronchial biopsy was done revealing preneoplastic changes within the bronchial mucosa. Which of the following best characterizes the morphology of this bronchial mucosa lesion?",
        "answer": "Cellular maturation shows abnormal pattern ",
        "options": [
            "NA",
            "Invasiveness ",
            "presence of poorly diiferentiated keratin producing cells",
            "Increased numbers of otherwise normal cells ",
            "Cellular maturation shows abnormal pattern "
        ]
    },
    {
        "numb": 187,
        "question": " Classification of neoplasms by WHO is based on",
        "answer": "Histogenesis of tumors.",
        "options": [
            ".Localization of tumors.",
            "Morphogenesis of tumors",
            "Etiology of tumors",
            "Differentiation of tumors",
            "Histogenesis of tumors."
        ]
    },
    {
        "numb": 188,
        "question": "Growth of tumor into the lumen of hollow organ is called",
        "answer": "Exophytic",
        "options": [
            "Invasive",
            "Endophytic",
            "Unicentric",
            "Expansive",
            "Exophytic"
        ]
    },
    {
        "numb": 189,
        "question": "Where is localized squamous cell papilloma?",
        "answer": "Vagina",
        "options": [
            "Ureter",
            "Urethra",
            "Calyces of kidney",
            "Vagina",
            "Pelvis of kidney "
        ]
    },
    {
        "numb": 190,
        "question": "A 45-year-old woman presents with complaints of post-coital bleeding. She is diagnosed to have invasive carcinoma of the cervix. Which of the following features differentiate invasive carcinoma from dysplasia or carcinoma in situ?",
        "answer": "Invasion of the basement membrane",
        "options": [
            "Typical mitoses",
            "Pleomorphism",
            "NA",
            "Nuclear hyperchromasia",
            "Invasion of the basement membrane"
        ]
    },
    {
        "numb": 191,
        "question": "Overgrowth of a bile duct at localized region is?",
        "answer": "Hamartoma",
        "options": [
            "Hamartoma",
            "Choriostoma",
            "Malignant tumor",
            "NA",
            "Polyp"
        ]
    },
    {
        "numb": 192,
        "question": "A woman of Asian ethnicity has a 0.5x0.3 cm dark node, elevated above the skin, with a smooth surface. Microscopic examination shows dendritic cells with high melanin content. Which type of tumor occurs in this case?",
        "answer": "Blue nevus",
        "options": [
            "Hemangioma",
            " Dysplastic nevi",
            "Hybernoma",
            "Blue nevus",
            "Lentigo"
        ]
    },
    {
        "numb": 193,
        "question": "Commonest type of pigmented nevus is",
        "answer": "Compound nevus",
        "options": [
            "Juvenile nevus.",
            "Junctional nevus.",
            "Blue nevus",
            "Compound nevus",
            "Intradermal nevus"
        ]
    },
    {
        "numb": 194,
        "question": "A 46-year-old man has a dark spot on his skin, which began to grow larger and pain appeared. Microscopically: Tumor cells have amphophilic cytoplasm and large pleomorphic nuclei with prominent nucleoli. What type of tumor is there in this case?",
        "answer": "Melanoma",
        "options": [
            " Blue nevus",
            "Melanoma",
            "Lentigo",
            "Hemangioma",
            "Dysplastic nevi"
        ]
    },
    {
        "numb": 195,
        "question": "If catabolism is more than anabolism what would it be means?",
        "answer": "negative nitrogen  balance",
        "options": [
            "increased stabilized protein synthesis",
            "negative nitrogen  balance",
            "increased growth protein synthesis",
            "protein breakdown not change",
            "positive nitrogen balance"
        ]
    },
    {
        "numb": 196,
        "question": "Which one of following changes in blood, related to protein metabolism disorders, is commonly risk factor for formation of stones in urinary tract?  ",
        "answer": "hyperuricemia ",
        "options": [
            "paraproteinemia",
            "azotemia",
            "hyperuricemia ",
            "uremia",
            "dysproteinemia"
        ]
    },
    {
        "numb": 197,
        "question": "What is the main pathophysiological process underlying the development of atherosclerosis?",
        "answer": "Chronic inflammation in blood vessels",
        "options": [
            "Decreased levels of low-density lipoprotein (LDL) cholesterol",
            "",
            "Excessive intake of dietary fiber",
            "Chronic inflammation in blood vessels",
            "Enhanced endothelial function"
        ]
    },
    {
        "numb": 198,
        "question": "Concerning lipid metabolism, chylomicrons absorption is damaged through which one of these?",
        "answer": "lacteal of villi ",
        "options": [
            "lacteal of villi ",
            "blood capillary",
            "lymph capillary",
            "brush border of enterocytes",
            "bile capillary"
        ]
    },
    {
        "numb": 199,
        "question": "Which of the following statements is true for type 1 diabetes?",
        "answer": "It is an autoimmune disease",
        "options": [
            "It is insulin dependent diabetes",
            "It is an autoimmune disease",
            "NA",
            "It is not associated with thyroid disorders",
            "Insulin resistance is the hallmark of the disease pathogenesis"
        ]
    },
    {
        "numb": 200,
        "question": "Which of the following is not a test for diabetes mellitus?",
        "answer": "D-Xylose test",
        "options": [
            "D-Xylose test",
            "NA",
            "Fructossamine assay",
            "Fasting blood sugar",
            "Random blood sugar"
        ]
    }
];
