// BioGuide concept database
// Each concept: id, title, tags, chain[], blurb, detail, memory, examTip, facts[]

const SECTIONS = [

  // ── SECTION 1: Chemistry Foundations ──────────────────────────────────────
  {
    id: 'chemistry',
    icon: '⚗️',
    title: 'Chemistry Foundations',
    subtitle: 'The building blocks of everything — before you can understand DNA, you need to understand atoms',
    concepts: [

      {
        id: 'atoms-elements',
        title: 'Atoms & Elements',
        tags: ['chem'],
        chain: ['All matter is atoms', 'Atom = nucleus + electrons', 'Proton count = element', 'Elements on periodic table', 'CHNOPS = life elements'],
        blurb: 'Everything in your body is made of atoms. The number of protons in an atom defines which element it is — oxygen always has 8, carbon always has 6. No exceptions.',
        detail: `An atom has three parts:\n• Protons (positive charge) — inside the nucleus. The proton count = the element.\n• Neutrons (no charge) — also inside the nucleus. Add mass but don't change the element.\n• Electrons (negative charge) — orbit the nucleus in shells. Determine how atoms bond.\n\n<strong>Atomic number</strong> = proton count. Carbon = 6, Nitrogen = 7, Oxygen = 8.\n<strong>Atomic mass</strong> = protons + neutrons.\n<strong>Valence electrons</strong> = electrons in the outermost shell. These are the ones that do the bonding. Atoms "want" a full outer shell (usually 8 electrons = octet rule).\n\n<strong>CHNOPS</strong> — the six elements that make up 98% of living matter:\n• C = Carbon (the skeleton of all biological molecules)\n• H = Hydrogen (everywhere)\n• N = Nitrogen (in amino acids, DNA bases)\n• O = Oxygen (breathing, water, everywhere)\n• P = Phosphorus (DNA backbone, ATP energy)\n• S = Sulfur (in some amino acids, protein structure)\n\nIsotopes = same element, different neutron count. Carbon-12 vs Carbon-14 (used in radiocarbon dating).`,
        memory: `Atom = tiny solar system. Nucleus = the sun (heavy, in the middle). Electrons = planets (light, orbiting). The number of "suns" (protons) defines which element it is — one proton = hydrogen, six protons = carbon, always.\n\nCHNOPS = "See How Neatly Our Proteins Synthesize" — the 6 elements of life.`,
        examTip: `CHNOPS is the first thing to memorize. Carbon has 4 valence electrons — that's why it can form 4 bonds and build complex molecules. Valence electrons = bonding electrons. A full outer shell = stable atom that doesn't want to bond.`,
        facts: ['Protons = positive', 'Electrons = negative', 'Proton count = element', 'CHNOPS = life elements', 'Carbon = 4 valence e-', 'Valence e- = bonding']
      },

      {
        id: 'chemical-bonds',
        title: 'Chemical Bonds',
        tags: ['chem'],
        chain: ['Atoms want full outer shells', 'They share or transfer electrons', 'Covalent = sharing', 'Ionic = transfer', 'Hydrogen = weak attraction'],
        blurb: 'Atoms bond to become stable. Covalent bonds share electrons and hold molecules together. Ionic bonds transfer electrons. Hydrogen bonds are weak but they\'re why DNA stays together and water has its weird properties.',
        detail: `<strong>Covalent bonds</strong> — atoms share electrons.\nSingle bond (share 1 pair): C-H, O-H. Relatively strong.\nDouble bond (share 2 pairs): C=O, C=C. Stronger, shorter.\nPolar covalent: one atom pulls electrons harder (like O in water pulls electrons from H). Creates partial charges (δ+ and δ-).\nNonpolar covalent: electrons shared equally (like C-C or C-H). No partial charges.\n\n<strong>Ionic bonds</strong> — one atom gives an electron to another.\nCreates ions: positively charged (cation, lost electron) and negatively charged (anion, gained electron).\nExample: NaCl (table salt). Na gives its electron to Cl. Strong in solids, but dissolves in water easily.\n\n<strong>Hydrogen bonds</strong> — weak attraction between a partial positive H and a partial negative atom (usually O or N).\nNot a real "bond" — no electrons shared. Just electrostatic attraction.\nWeak individually (~1/20th of a covalent bond). But millions of them together = significant force.\nCritical for: DNA structure (holds complementary strands together), water properties, protein folding.`,
        memory: `Covalent = best friends sharing a car (electrons). They each use the car (electrons are in between). Ionic = one friend gives the car completely to the other. Hydrogen bonds = neighbors waving to each other across the fence — weak gesture, but friendly.\n\nDNA strands are held together by hydrogen bonds — easily unzipped (by enzymes) but stable enough to store information.`,
        examTip: `Polar covalent bonds create partial charges. That's why water is polar — oxygen pulls the shared electrons harder, making it slightly negative, and the hydrogens slightly positive. This polarity is responsible for almost everything water does.`,
        facts: ['Covalent = share electrons', 'Ionic = transfer electrons', 'H-bond = weak attraction', 'DNA held by H-bonds', 'Water = polar covalent', 'Double bond = stronger']
      },

      {
        id: 'water-properties',
        title: 'Water & Its Properties',
        tags: ['chem'],
        chain: ['O pulls electrons harder', 'Water molecule = polar', 'H end = δ+, O end = δ−', 'H-bonds form between molecules', 'Special properties emerge'],
        blurb: 'Water is polar — oxygen hogs the electrons, making one end slightly negative and the two hydrogens slightly positive. This simple fact gives water all its life-enabling properties.',
        detail: `Water (H₂O) is a bent molecule. Oxygen sits at the corner, pulling electrons from both hydrogens — making the O end slightly negative (δ-) and the H ends slightly positive (δ+).\n\n<strong>Properties that matter for life:</strong>\n\n• <strong>Cohesion</strong>: water molecules stick to each other (H-bonds between water molecules). Explains surface tension. Why water forms droplets.\n\n• <strong>Adhesion</strong>: water sticks to other polar surfaces. How water climbs up plant stems (capillary action).\n\n• <strong>High specific heat</strong>: water resists temperature change. Takes a lot of energy to heat it up, releases a lot when cooling. Stabilizes body temperature and ocean temperatures.\n\n• <strong>High heat of vaporization</strong>: sweating cools you — water carries a lot of heat when it evaporates.\n\n• <strong>Universal solvent</strong>: polar and ionic substances dissolve in water (like dissolves like). Blood, cytoplasm — all water-based solutions.\n\n• <strong>Ice floats</strong>: in liquid water, H-bonds are dynamic and close. In ice, H-bonds are rigid and space the molecules farther apart → ice is less dense than liquid water. Lakes freeze from top down, letting life survive below.\n\n<strong>Hydrophilic</strong> = water-loving (polar or charged molecules). <strong>Hydrophobic</strong> = water-fearing (nonpolar molecules). Oils don't dissolve in water — their electrons aren't polarized.`,
        memory: `Water = a magnet molecule. One end is + (H), other end is - (O). Magnets attract each other — so water molecules cling together. This clingy behavior = cohesion, surface tension, and why water is such a good solvent.\n\n"Like dissolves like" — salt (ionic) dissolves in water (polar). Oil (nonpolar) does not.`,
        examTip: `Hydrophobic interactions are what drive proteins to fold (nonpolar amino acids hide from water inside the protein). Cell membranes work because phospholipid tails are hydrophobic — they spontaneously hide from water, forming the bilayer without any energy input.`,
        facts: ['H₂O = polar molecule', 'Cohesion = water-water', 'Adhesion = water-surface', 'High specific heat', 'Universal solvent', 'Ice less dense than water']
      },

      {
        id: 'ph-acids-bases',
        title: 'pH, Acids & Bases',
        tags: ['chem'],
        chain: ['Water splits into H⁺ and OH⁻', 'More H⁺ = acidic', 'More OH⁻ = basic', 'pH scale 0–14', 'Each unit = 10× difference'],
        blurb: 'pH measures how acidic or basic a solution is — specifically the concentration of hydrogen ions (H⁺). Every single unit change on the scale is a 10-fold difference. Blood must stay between 7.35–7.45 or you\'re in serious trouble.',
        detail: `Water partially splits into H⁺ and OH⁻ ions:\nH₂O ⇌ H⁺ + OH⁻\n\nIn pure water, they're equal. When something adds more H⁺ → acidic. When something removes H⁺ (or adds OH⁻) → basic.\n\n<strong>pH scale</strong>: 0–14\n• 0–7 = acidic (more H⁺)\n• 7 = neutral (equal H⁺ and OH⁻)\n• 7–14 = basic / alkaline (more OH⁻)\n\n<strong>Logarithmic scale</strong>: pH = -log[H⁺]\npH 5 is 10× more acidic than pH 6. pH 4 is 100× more acidic than pH 6.\n\n<strong>Acids</strong> donate H⁺ (proton donors). HCl → H⁺ + Cl⁻. Strong acids fully dissociate.\n<strong>Bases</strong> accept H⁺ (proton acceptors). NaOH → Na⁺ + OH⁻ (OH⁻ grabs H⁺ from water).\n\n<strong>Buffers</strong>: resist pH change. They absorb excess H⁺ or OH⁻.\nBlood uses the bicarbonate buffer system (H₂CO₃ / HCO₃⁻). This keeps blood pH at 7.35–7.45.\nEnzymes have an optimal pH — stray too far and they stop working or denature.\n\nBiological pH examples: stomach acid ~pH 2, blood ~7.4, lysosomes inside cells ~pH 5.`,
        memory: `pH = "potential of Hydrogen." Think seesaw: H⁺ on one side, OH⁻ on the other. Acidic = H⁺ side is heavier. Basic = OH⁻ side is heavier.\n\nThe scale is like earthquake magnitudes — each step is 10×. Blood at pH 7.4 isn't "slightly basic" — it's extremely precisely controlled. Drop to pH 7.0 and you're in a coma.`,
        examTip: `Buffers are critical in biology — without them, every meal would kill you by changing your blood pH. Bicarbonate (HCO₃⁻) is the main blood buffer. Cells maintain their internal pH tightly. Lysosomes are kept acidic (~pH 5) so their digestive enzymes work.`,
        facts: ['Below 7 = acid', 'Above 7 = base', 'Each unit = 10× difference', 'Blood pH = 7.35–7.45', 'Buffers resist change', 'Enzymes have optimal pH']
      },

      {
        id: 'carbon-backbone',
        title: 'Carbon: The Backbone of Life',
        tags: ['chem'],
        chain: ['Carbon has 4 valence electrons', 'Can form 4 bonds at once', 'Chains, rings, branches possible', 'Enormous structural variety', 'All 4 macromolecules are carbon-based'],
        blurb: 'Carbon is the skeleton of every biological molecule. It can bond to 4 different things simultaneously — forming chains, rings, and branches — creating the almost unlimited variety that life requires.',
        detail: `Carbon (C) has 4 valence electrons. To get a full outer shell (8), it forms 4 covalent bonds.\n\nThis gives carbon superpowers:\n• Can bond to C, H, O, N, S, P simultaneously\n• Forms long chains (like fatty acids)\n• Forms rings (like glucose, DNA bases)\n• Forms branches at every carbon\n• Single, double, or triple bonds possible\n\n<strong>Organic chemistry</strong> = the study of carbon-containing compounds. "Organic" in science means carbon-based, not health food.\n\n<strong>The 4 macromolecules of life</strong> (all carbon-based):\n1. <strong>Carbohydrates</strong> — sugars and starches. Energy storage, structure.\n2. <strong>Lipids</strong> — fats, oils, membranes. Long-term energy, cell structure.\n3. <strong>Proteins</strong> — enzymes, structure, transport, immune. Functional workhorses.\n4. <strong>Nucleic acids</strong> — DNA and RNA. Store and express genetic information.\n\nMonomers → Polymers: each macromolecule is built from smaller repeating units (monomers) linked together.\nSugar (monomer) → starch (polymer).\nAmino acid (monomer) → protein (polymer).\nNucleotide (monomer) → DNA (polymer).\n\n<strong>Condensation (dehydration synthesis)</strong>: links monomers together, releases water.\n<strong>Hydrolysis</strong>: breaks polymers apart, uses water.`,
        memory: `Carbon = LEGO brick with 4 pegs. You can attach 4 things to it. Stack thousands of LEGO bricks = enormous, complex structures. Change which bricks you use = different molecule. Life is a LEGO city built entirely from carbon bricks.\n\n4 macromolecules = CLIP: Carbohydrates, Lipids, (Proteins) and nucleIc acids. Or just: Sugar, Fat, Protein, DNA.`,
        examTip: `The 4 macromolecules is one of the most important lists in biology. Know their monomers: carbs = monosaccharides, proteins = amino acids, nucleic acids = nucleotides, lipids = fatty acids + glycerol (not technically a polymer but built the same way). Condensation synthesis removes water; hydrolysis adds it back.`,
        facts: ['Carbon = 4 bonds', 'Forms chains and rings', '4 macromolecules', 'Monomer → polymer', 'Condensation = join', 'Hydrolysis = break']
      },

      {
        id: 'functional-groups',
        title: 'Functional Groups',
        tags: ['chem'],
        chain: ['Carbon skeleton', 'Functional groups attach', 'Groups define chemical behavior', 'Carboxyl = acid', 'Amino = base', 'Phosphate = DNA + energy'],
        blurb: 'Functional groups are clusters of atoms that give molecules their chemical personality. The same carbon chain behaves completely differently depending on which groups are attached.',
        detail: `Functional groups are specific arrangements of atoms that react in predictable ways. They\'re why an amino acid is acidic AND basic. They\'re why ATP stores energy.\n\n<strong>The key functional groups:</strong>\n\n• <strong>Hydroxyl (-OH)</strong>: polar, forms H-bonds. Makes alcohols. Sugars are full of -OH groups. Hydrophilic.\n\n• <strong>Carboxyl (-COOH)</strong>: acidic — donates H⁺. Found in amino acids (every one has this) and fatty acids. The -COOH end is one end of every amino acid.\n\n• <strong>Amino (-NH₂)</strong>: basic — accepts H⁺. Found in every amino acid (on the other end from -COOH). Also in DNA/RNA bases.\n\n• <strong>Phosphate (-PO₄³⁻)</strong>: negatively charged at physiological pH. Links the DNA backbone (sugar-phosphate chain). Key part of ATP (the energy currency of cells). Links nucleotides together.\n\n• <strong>Sulfhydryl (-SH)</strong>: in the amino acid cysteine. Two -SH groups oxidize to form disulfide bonds (-S-S-). Disulfide bonds stabilize protein structure.\n\n• <strong>Carbonyl (C=O)</strong>: found in sugars. If terminal = aldehyde. If internal = ketone.\n\n• <strong>Methyl (-CH₃)</strong>: nonpolar, hydrophobic. Added to DNA cytosine in epigenetics to silence genes.`,
        memory: `Functional groups = charms on a charm bracelet. The bracelet (carbon chain) is the base. The charms (functional groups) determine what the bracelet does — whether it acts as an acid, a base, stores energy, or links other molecules.\n\nEvery amino acid has both -COOH (acid) and -NH₂ (base) attached to the same central carbon. That's what makes amino acids amphoteric — they can act as both.`,
        examTip: `The phosphate group is essential for understanding DNA structure AND energy. In DNA, phosphates link sugar molecules together (the backbone). In ATP, you break the phosphate bond = release energy. In epigenetics, methyl groups (-CH₃) added to DNA cytosines silence genes.`,
        facts: ['-OH = hydroxyl (polar)', '-COOH = acid', '-NH₂ = base', '-PO₄ = phosphate', '-SH = sulfhydryl', 'Methyl = epigenetics']
      },

      {
        id: 'macromolecules',
        title: 'The 4 Macromolecules',
        tags: ['chem'],
        chain: ['Monomers link together', 'Condensation removes water', 'Polymers form', 'Carbs · Lipids · Proteins · Nucleic acids', 'Everything alive is made of these 4'],
        blurb: 'Life is built from 4 types of giant molecules. Knowing their monomers and functions is the foundation for everything else in biology.',
        detail: `<strong>1. Carbohydrates</strong>\nMonomer: monosaccharides (simple sugars — glucose, fructose, galactose)\nPolymers: disaccharides (sucrose, lactose), polysaccharides (starch, glycogen, cellulose, chitin)\nFunctions: quick energy (glucose), energy storage (glycogen in animals, starch in plants), structure (cellulose in plant cell walls, chitin in insect exoskeletons)\n\n<strong>2. Lipids</strong> (not true polymers — but assembled from smaller parts)\nParts: fatty acids + glycerol\nTypes:\n• Triglycerides: 3 fatty acids + glycerol. Energy storage. Fats and oils.\n• Phospholipids: 2 fatty acids + glycerol + phosphate head. Make cell membranes.\n• Steroids: ring-based structure. Cholesterol (membrane), hormones (testosterone, estrogen, cortisol).\nFunctions: long-term energy storage, cell membranes, hormones, insulation, vitamin absorption.\n\n<strong>3. Proteins</strong>\nMonomer: amino acids (20 types)\nPolymers: polypeptides → proteins\nFunctions: catalysis (enzymes), structure (collagen, keratin), transport (hemoglobin), signaling (insulin), defense (antibodies), movement (actin, myosin)\n\n<strong>4. Nucleic acids</strong>\nMonomer: nucleotides (base + sugar + phosphate)\nPolymers: DNA (double-stranded), RNA (single-stranded)\nFunctions: store genetic information (DNA), express it (RNA), execute it (proteins made from RNA instructions)`,
        memory: `"Every Living Cell Makes Proteins from Nucleotides" — helps remember the 4 types? Or just: Carbs = fuel, Lipids = storage + membranes, Proteins = workers, Nucleic acids = blueprints.\n\nA nucleotide = the LEGO brick of DNA/RNA. Each one has 3 parts: base (the information part), sugar (deoxyribose in DNA, ribose in RNA), phosphate (links the backbone).`,
        examTip: `The monomer-to-polymer relationship is tested constantly. For bioinformatics specifically: nucleotides are your data units. A genome is one very long polymer of 4 types of nucleotide monomers. Sequence alignment = comparing the order of those monomers.`,
        facts: ['Carbs monomer = sugar', 'Protein monomer = amino acid', 'DNA monomer = nucleotide', 'Lipids = fatty acids + glycerol', 'Condensation = join (remove H₂O)', 'Hydrolysis = break (add H₂O)']
      },

    ]
  },

  // ── SECTION 2: Cell Biology ────────────────────────────────────────────────
  {
    id: 'cell-biology',
    icon: '🔬',
    title: 'Cell Biology',
    subtitle: 'The fundamental unit of life — understanding the cell is understanding biology',
    concepts: [

      {
        id: 'prokaryotes-eukaryotes',
        title: 'Prokaryotes vs. Eukaryotes',
        tags: ['cell'],
        chain: ['All life = cells', 'Prokaryote = no nucleus', 'Eukaryote = has nucleus', 'Bacteria = prokaryotes', 'Plants, animals, fungi, you = eukaryotes'],
        blurb: 'Two fundamentally different cell types. Prokaryotes (bacteria) are simpler, faster to reproduce, no membrane-bound nucleus. Eukaryotes (you, plants, fungi) are complex, have a nucleus, and have membrane-bound compartments for different jobs.',
        detail: `<strong>Prokaryotes</strong> (bacteria and archaea):\n• No nucleus — DNA floats freely in the cytoplasm (in a region called the nucleoid)\n• No membrane-bound organelles\n• Smaller (1–10 μm)\n• Ribosomes are 70S (smaller subtype)\n• Usually have a cell wall (peptidoglycan in bacteria)\n• Reproduce by binary fission (simple splitting)\n• Single circular chromosome + sometimes small plasmid circles\n\n<strong>Eukaryotes</strong> (animals, plants, fungi, protists — including you):\n• Have a nucleus (DNA enclosed in a nuclear membrane)\n• Have membrane-bound organelles (mitochondria, ER, Golgi, etc.)\n• Larger (10–100 μm)\n• Ribosomes are 80S (larger subtype)\n• Reproduce by mitosis (and meiosis for sex cells)\n• Multiple linear chromosomes\n\n<strong>What both share</strong>: DNA (the universal information molecule), ribosomes, cell membrane, cytoplasm.\n\n<strong>Endosymbiotic theory</strong>: mitochondria (in all eukaryotes) and chloroplasts (in plants/algae) were once free-living bacteria swallowed by a larger cell. Evidence: they have their own DNA, their own 70S ribosomes, and divide by binary fission.`,
        memory: `Pro-karyote = "before nucleus" (Greek: karyon = nut/nucleus). Eu-karyote = "true nucleus."\n\nProkaryote = studio apartment (everything in one room — no separate nucleus). Eukaryote = house with separate rooms (nucleus/bedroom, mitochondria/furnace room, etc.).\n\nBacteria are prokaryotes. You are a eukaryote. A simple rule that almost never has exceptions.`,
        examTip: `70S ribosomes = prokaryotes. 80S = eukaryotes. This difference is why antibiotics (like streptomycin, erythromycin) can target bacterial ribosomes without killing your cells — the ribosomes are a different size and shape. Mitochondria have 70S ribosomes because they were once bacteria.`,
        facts: ['Prokaryote = no nucleus', 'Eukaryote = has nucleus', 'Bacteria = prokaryotes', '70S ribosomes (pro)', '80S ribosomes (eu)', 'Binary fission = bacteria']
      },

      {
        id: 'cell-membrane',
        title: 'The Cell Membrane',
        tags: ['cell'],
        chain: ['Cell needs a selective boundary', 'Phospholipids self-assemble in water', 'Hydrophilic heads face water', 'Hydrophobic tails hide inside', 'Bilayer forms automatically', 'Proteins embedded = fluid mosaic'],
        blurb: 'The cell membrane is a double layer of phospholipids with proteins embedded throughout. It forms spontaneously in water because the tails hate water and hide together. It controls what enters and exits — selectively permeable.',
        detail: `<strong>Phospholipid structure</strong>:\n• Head: glycerol + phosphate group = hydrophilic (loves water)\n• Tails: 2 fatty acid chains = hydrophobic (hates water)\nIn water, phospholipids self-assemble into a bilayer: heads face the watery outside and inside, tails hide in the middle.\n\n<strong>Fluid Mosaic Model</strong> (Singer & Nicolson, 1972):\n• Fluid: phospholipids can move laterally (sideways) — the membrane isn't rigid\n• Mosaic: proteins are scattered throughout like tiles in a mosaic\n\n<strong>Membrane proteins</strong>:\n• Integral proteins: span the whole membrane (transmembrane). Include ion channels, carrier proteins, receptors.\n• Peripheral proteins: attached to surface. Signaling, structural support.\n\n<strong>Cholesterol</strong>: embedded between phospholipids in animal cells.\n• At high temperatures: reduces fluidity (prevents membrane from going liquid)\n• At low temperatures: prevents membrane from stiffening/freezing\n• Acts as a fluidity buffer\n\n<strong>Functions of the membrane</strong>:\n• Selective permeability: controls what enters/exits\n• Communication: receptor proteins receive signals\n• Transport: channel and carrier proteins move substances\n• Recognition: glycoproteins act as cellular ID tags`,
        memory: `Phospholipid = lollipop with two sticks. The candy (head) loves water. The sticks (tails) hate water. Put them in water = two layers of lollipops with sticks hiding in the middle, candies facing out.\n\nThe membrane is a city with guards (transport proteins) at every gate. Small, nonpolar things sneak through the wall itself. Big things or ions need to go through a gate.`,
        examTip: `Saturated fatty acid tails = straight, pack tightly = less fluid membrane. Unsaturated fatty acid tails = kinked, can't pack as tightly = more fluid. That's why butter (saturated) is solid and olive oil (unsaturated) is liquid at room temperature.`,
        facts: ['Phospholipid bilayer', 'Heads = hydrophilic', 'Tails = hydrophobic', 'Fluid mosaic model', 'Cholesterol = stability', 'Selectively permeable']
      },

      {
        id: 'organelles',
        title: 'Organelles — The Cell\'s Machinery',
        tags: ['cell'],
        chain: ['Eukaryotes have compartments', 'Nucleus = DNA + control center', 'Mitochondria = energy (ATP)', 'Ribosomes = protein factories', 'Golgi = sort and ship proteins'],
        blurb: 'Organelles are the specialized compartments inside eukaryotic cells. Each has a specific job. The division of labor is what makes eukaryotes so much more capable than bacteria.',
        detail: `<strong>Nucleus</strong>: command center. Contains DNA (chromosomes). Has nuclear pores (controls what enters/exits). Site of transcription (DNA → RNA). Double membrane (nuclear envelope).\n\n<strong>Mitochondria</strong>: power plants. Make ATP via cellular respiration. Have their own DNA (circular, like bacteria — endosymbiont origin). Double membrane: outer membrane + inner membrane (cristae). The electron transport chain runs on the inner membrane.\n\n<strong>Ribosomes</strong>: protein factories. Made of rRNA + protein. Two subunits (large + small). Free ribosomes in cytoplasm (make proteins that stay in cell). Ribosomes on rough ER (make proteins for secretion or membranes).\n\n<strong>Endoplasmic Reticulum (ER)</strong>:\n• Rough ER: studded with ribosomes. Modifies and folds newly made proteins. Continuous with nuclear envelope.\n• Smooth ER: no ribosomes. Makes lipids, metabolizes drugs, stores calcium.\n\n<strong>Golgi apparatus</strong>: the cell's post office. Receives vesicles from ER. Modifies, sorts, and packages proteins. Ships to their destination (lysosomes, cell surface, secretion outside cell).\n\n<strong>Lysosomes</strong>: digestive compartments. Contain hydrolytic enzymes at pH ~5. Break down waste, old organelles (autophagy), pathogens. Lysosomes are kept acidic to activate enzymes.\n\n<strong>Chloroplasts</strong>: (plants/algae only) run photosynthesis. Have their own DNA. Double membrane + thylakoids (where light reactions happen) + stroma (where Calvin cycle happens).`,
        memory: `Cell = factory city.\n• City hall with blueprints = Nucleus\n• Power station = Mitochondria\n• Assembly line workers = Ribosomes\n• Conveyor belt out of factory = Rough ER\n• Post office / shipping dept = Golgi apparatus\n• Waste disposal = Lysosomes\n• Solar panels = Chloroplasts (plants only)\n\nIf it\'s eukaryotic and you don\'t know where something happens — it\'s probably in one of these.`,
        examTip: `Mitochondria and chloroplasts both have: double membrane, their own DNA, 70S ribosomes, ability to self-replicate. This is the evidence for endosymbiotic theory — they were once independent bacteria. This is also why they're so important in bioinformatics: mitochondrial DNA is used to trace maternal lineage (mitochondria only come from mom's egg).`,
        facts: ['Nucleus = DNA control', 'Mitochondria = ATP', 'Ribosomes = proteins', 'Rough ER = modify proteins', 'Golgi = sort + ship', 'Lysosome = digest']
      },

      {
        id: 'cell-transport',
        title: 'Cell Transport',
        tags: ['cell'],
        chain: ['Substances need to cross membrane', 'Small nonpolar = diffuse freely', 'Ions + large = need proteins', 'Down gradient = no ATP', 'Against gradient = ATP required'],
        blurb: 'Cells tightly control what crosses their membrane. Small nonpolar molecules pass freely. Ions and large molecules need protein channels. Moving against the concentration gradient costs ATP — the cell\'s energy currency.',
        detail: `<strong>Passive transport</strong> (no ATP needed — goes WITH the concentration gradient):\n\n• <strong>Simple diffusion</strong>: small, nonpolar molecules pass directly through the lipid bilayer. O₂, CO₂, ethanol. From high → low concentration.\n\n• <strong>Facilitated diffusion</strong>: polar/charged molecules use protein channels or carriers. Still down the gradient — no energy needed. Glucose enters cells this way (via GLUT transporters).\n\n• <strong>Osmosis</strong>: diffusion of water specifically. Water moves across a selectively permeable membrane toward higher solute concentration (lower water concentration). The cell doesn\'t pump water — water follows solutes.\n\n<strong>Active transport</strong> (ATP required — goes AGAINST the gradient):\n\n• <strong>Protein pumps</strong>: use ATP to move ions against their gradient. Na⁺/K⁺ pump: pumps 3 Na⁺ out, 2 K⁺ in per ATP. Creates the electrical gradient that nerves and muscles use.\n\n<strong>Bulk transport</strong>:\n• <strong>Endocytosis</strong>: cell engulfs material (membrane wraps around it). Phagocytosis (solids, immune cells eating bacteria). Pinocytosis (fluids).\n• <strong>Exocytosis</strong>: vesicle fuses with membrane and dumps contents outside. How hormones and neurotransmitters are secreted.\n\n<strong>Tonicity</strong> (effect on water movement):\n• Hypotonic: low solute outside → water flows in → cell swells (could burst = lysis)\n• Hypertonic: high solute outside → water flows out → cell shrinks (crenation)\n• Isotonic: equal solute → no net water movement`,
        memory: `Passive transport = rolling downhill (free). Active transport = pushing a boulder uphill (costs ATP = energy).\n\nOsmosis = water always moves toward the crowd (toward more dissolved stuff). Imagine a party in one room and an empty room — people (water) naturally drift toward the party (high solute side).\n\nHypotonic = cell becomes fat (water floods in). Hypertonic = cell shrivels (water leaves).`,
        examTip: `Na⁺/K⁺ pump is the most tested active transport example. It runs constantly, using 1/3 of all the ATP your cells make. Osmosis is water movement — never say water is "pumped." It moves passively down its concentration gradient.`,
        facts: ['Diffusion = high→low', 'Osmosis = water moves', 'Facilitated = protein channel', 'Active = ATP needed', 'Endocytosis = engulf', 'Exocytosis = secrete']
      },

      {
        id: 'atp-energy',
        title: 'ATP & Cellular Energy',
        tags: ['cell'],
        chain: ['Glucose from food', 'Glycolysis in cytoplasm → 2 ATP', 'Krebs cycle in mitochondria → 2 ATP', 'Electron transport chain → ~32 ATP', 'Total ~36 ATP per glucose'],
        blurb: 'ATP (adenosine triphosphate) is the cell\'s universal energy currency. Every process — moving, building, signaling — runs on ATP. Food energy is converted to ATP. When you need energy, you break ATP apart.',
        detail: `<strong>ATP structure</strong>: adenosine (adenine + ribose) + 3 phosphate groups linked by high-energy bonds.\nWhen the bond to the terminal phosphate breaks:\nATP → ADP + Pᵢ + ~30 kJ/mol of energy\nADP can be recharged back to ATP using energy from food.\n\n<strong>Cellular respiration</strong> — the 3-stage process to make ATP from glucose:\n\n<strong>Stage 1 — Glycolysis</strong> (cytoplasm, no oxygen needed):\nGlucose (6C) → 2 pyruvate (3C each)\nNet yield: 2 ATP, 2 NADH\n\n<strong>Stage 2 — Krebs cycle / TCA cycle</strong> (mitochondrial matrix):\nPyruvate converted to Acetyl-CoA, enters cycle\nYield per glucose: 2 ATP, 6 NADH, 2 FADH₂\nCarbon released as CO₂ (you breathe this out)\n\n<strong>Stage 3 — Electron transport chain + Oxidative phosphorylation</strong> (inner mitochondrial membrane):\nNADH and FADH₂ donate electrons → powers proton pumps → H⁺ gradient → ATP synthase makes ATP\nYield: ~32 ATP\nOxygen = the final electron acceptor (makes water)\n\n<strong>Total</strong>: 1 glucose → ~36–38 ATP\n\n<strong>NADH and FADH₂</strong> = electron carriers. They collect "electron energy" from glucose breakdown and bring it to the electron transport chain, like charged batteries.`,
        memory: `ATP = rechargeable phone battery. Full battery = ATP (3 phosphates). Using energy = removing one phosphate (like your battery draining: ATP → ADP). Cellular respiration = plugging back in and recharging from food.\n\nMitochondria = the charger. The more mitochondria in a cell, the more energy it needs (muscle cells are packed with them).`,
        examTip: `Glycolysis is the ONLY stage that doesn't require oxygen. That's why you can make some ATP from glucose even when you're running out of breath (anaerobic glycolysis → lactic acid). The ETC needs oxygen as the final electron acceptor. No oxygen = ETC stops = only glycolysis = much less ATP.`,
        facts: ['ATP = energy currency', 'ATP → ADP + Pᵢ', 'Glycolysis = 2 ATP', 'Krebs = 2 ATP', 'ETC = ~32 ATP', 'NADH = electron carrier']
      },

      {
        id: 'cell-division',
        title: 'Cell Division: Mitosis & Meiosis',
        tags: ['cell'],
        chain: ['DNA copied first (S phase)', 'Mitosis = 2 identical daughters', 'Meiosis = 4 unique sex cells', 'Crossing over = genetic shuffle', 'Cancer = cell cycle out of control'],
        blurb: 'Mitosis makes two identical copies of a cell (for growth and repair). Meiosis makes four genetically unique sex cells (eggs and sperm). Same DNA copying step, completely different outcomes.',
        detail: `<strong>Cell cycle</strong>: G1 (growth) → S (DNA synthesis) → G2 (growth) → M (mitosis)\nCheckpoints at G1, G2, and during mitosis verify everything is correct before proceeding.\n\n<strong>Mitosis — PMAT</strong>:\n• Prophase: chromosomes condense. Nuclear envelope breaks down. Spindle fibers form.\n• Metaphase: chromosomes line up at cell equator (metaphase plate). Spindle attaches to centromeres.\n• Anaphase: sister chromatids pulled apart to opposite poles.\n• Telophase: nuclear envelope reforms. Two nuclei form. Cell begins to pinch.\n→ Cytokinesis: cell physically splits into 2.\n<strong>Result</strong>: 2 diploid (2n) cells, genetically identical to parent.\n\n<strong>Meiosis — two rounds of division</strong>:\nMeiosis I: separates homologous chromosome pairs.\n• Prophase I: homologs pair up, <strong>crossing over</strong> happens (swap segments → genetic recombination)\nMeiosis II: separates sister chromatids (like mitosis).\n<strong>Result</strong>: 4 haploid (n) cells, each genetically unique.\n\n<strong>Why meiosis matters</strong>: fertilization restores diploid number. Crossing over creates variation → evolution.\n\n<strong>Cancer</strong>: cells that bypass cell cycle checkpoints and divide uncontrollably. Tumor suppressor genes (p53, Rb) = brakes. Proto-oncogenes = accelerators. Mutations that break the brakes or jam the accelerator → cancer.`,
        memory: `Mitosis = PMAT = "People Meet And Talk." Two identical copies — like hitting a copy button.\n\nMeiosis = two rounds of PMAT, but the first round has crossing over (shuffling genetic cards). End result = 4 unique gametes, each with half the chromosomes.\n\nDiploid (2n) = full set. Haploid (n) = half set. Sperm + egg = haploid + haploid = diploid again.`,
        examTip: `Crossing over in Prophase I of Meiosis is the source of genetic variation in sexual reproduction. This is why siblings look different — different crossover points during meiosis produced different gametes from your parents. Without meiosis and crossing over, offspring would be exact copies of parents (like bacteria).`,
        facts: ['Mitosis = PMAT', '2 identical diploid cells', 'Meiosis = 4 haploid cells', 'Crossing over = variation', 'Prophase I = crossing over', 'Cancer = checkpoint failure']
      },

    ]
  },

  // ── SECTION 3: DNA & RNA ───────────────────────────────────────────────────
  {
    id: 'dna-rna',
    icon: '🧬',
    title: 'DNA & RNA',
    subtitle: 'The molecular instruction manual — how information is stored, copied, and expressed',
    concepts: [

      {
        id: 'dna-structure',
        title: 'DNA Structure',
        tags: ['dna'],
        chain: ['Nucleotide = base + sugar + phosphate', '4 bases: A T G C', 'A pairs with T, G pairs with C', 'Two strands antiparallel', 'Twist into double helix'],
        blurb: 'DNA is two strands of nucleotides twisted into a double helix. The two strands are held together by hydrogen bonds between complementary bases. A always pairs with T (2 bonds), G always pairs with C (3 bonds).',
        detail: `<strong>Nucleotide</strong> = the monomer of DNA. Three parts:\n1. Deoxyribose sugar (5-carbon sugar, missing an oxygen vs ribose)\n2. Phosphate group (links nucleotides together, gives DNA its negative charge)\n3. Nitrogenous base (the information-carrying part)\n\n<strong>4 bases in DNA</strong>:\nPurines (double ring): Adenine (A), Guanine (G)\nPyrimidines (single ring): Cytosine (C), Thymine (T)\n\n<strong>Base pairing rules</strong> (Watson-Crick base pairs):\n• A pairs with T — 2 hydrogen bonds\n• G pairs with C — 3 hydrogen bonds (stronger, higher GC = harder to melt)\n\n<strong>Structure of the double helix</strong>:\n• Two antiparallel strands: one runs 5'→3', the other runs 3'→5'\n• The 5' end has a free phosphate group. The 3' end has a free hydroxyl (-OH) group.\n• Sugar-phosphate backbone = the sides of the ladder\n• Base pairs = the rungs of the ladder\n• Major and minor grooves = where proteins bind to "read" DNA\n\nThe double helix was described by Watson and Crick in 1953, using X-ray crystallography data from Rosalind Franklin. One of the most important scientific discoveries ever.`,
        memory: `DNA = twisted ladder. Sides of the ladder = sugar-phosphate backbone (structural). Rungs = base pairs (information).\n\nRemember the pairs: AT&T (A pairs with T). GC (G pairs with C — "Gold Circle" or "Game Controller" — two things pressed together).\n\nAntiparallel = the two strands run in opposite directions. Like a two-lane highway — cars going opposite ways.`,
        examTip: `GC base pairs have 3 H-bonds, AT have 2. Higher GC content = higher melting temperature (Tm). This matters in PCR — you need to heat DNA to separate the strands. High-GC regions take more heat to "melt." DNA polymerase reads 3'→5' and builds the new strand 5'→3'.`,
        facts: ['4 bases: A T G C', 'A=T (2 H-bonds)', 'G≡C (3 H-bonds)', 'Sugar-phosphate backbone', 'Antiparallel strands', '5\'→3\' directionality']
      },

      {
        id: 'dna-packaging',
        title: 'DNA Packaging & Chromosomes',
        tags: ['dna'],
        chain: ['DNA is 2 meters long', 'Must fit in tiny nucleus', 'Wraps around histone proteins', 'Nucleosome = bead on a string', 'Coils and supercoils', 'Chromosome = final compact form'],
        blurb: 'Your DNA is 2 meters long but fits in a nucleus smaller than a pencil dot. It\'s wound around proteins called histones, then coiled and compacted into chromosomes. How tightly it\'s wound also controls which genes are active.',
        detail: `<strong>Levels of compaction</strong>:\n1. DNA double helix (~2 nm wide)\n2. Nucleosome: DNA winds ~1.7 times around a histone octamer (8 histone proteins). "Beads on a string" at 11 nm.\n3. 30 nm fiber: nucleosomes coil into a solenoid-like structure\n4. Loops attached to a protein scaffold: ~300 nm\n5. Chromosome: fully condensed, visible during mitosis (~1400 nm)\n\n<strong>Histone proteins</strong>: small, positively charged proteins. DNA (negatively charged from phosphates) wraps around them. Histones H2A, H2B, H3, H4 form the octamer core. H1 linker histone seals the nucleosome.\n\n<strong>Heterochromatin</strong>: tightly packed DNA. Genes in here are silenced (can't be transcribed). Appears dark in microscopy.\n<strong>Euchromatin</strong>: loosely packed DNA. Genes here are accessible and can be expressed. Appears lighter.\n\n<strong>Human genome</strong>:\n• 46 chromosomes (23 pairs) in diploid cells\n• ~3 billion base pairs per haploid genome\n• ~20,000 protein-coding genes\n• Only ~2% of DNA codes for proteins. The rest: regulatory regions, repetitive sequences, introns, structural DNA.\n\n<strong>Telomeres</strong>: repetitive sequences (TTAGGG in humans) at chromosome ends. Protect chromosomes from degradation. Shorten with each cell division — linked to aging.`,
        memory: `DNA packaging = extension cord storage. A 2-meter cord loose in a drawer = impossible mess. Wound tightly on a spool = neat and usable. Histones = the spool. Chromosome = the final product.\n\nTighter packing = gene off. Looser packing = gene on. The packaging is information, not just structure.`,
        examTip: `The degree of histone compaction is controlled by modifications to histone tails (acetylation, methylation) — this is epigenetics. Telomere shortening is associated with aging and cancer. Some cancer cells activate telomerase (enzyme that rebuilds telomeres) to become immortal.`,
        facts: ['Nucleosome = 8 histones', 'Beads on a string = 11 nm', '46 chromosomes (human)', '~3 billion bp per haploid', 'Heterochromatin = inactive', 'Telomeres = chromosome caps']
      },

      {
        id: 'dna-replication',
        title: 'DNA Replication',
        tags: ['dna'],
        chain: ['Origin of replication opens', 'Helicase unzips the helix', 'Primase makes RNA primer', 'DNA polymerase copies 5\'→3\'', 'Two identical helices formed'],
        blurb: 'Before a cell divides, its entire DNA must be copied. The double helix unzips, and each strand serves as a template for a new complementary strand. Result: two identical double helices from one — semi-conservative replication.',
        detail: `<strong>Semi-conservative replication</strong>: each new DNA molecule contains one original (parental) strand + one newly synthesized strand. Proven by Meselson-Stahl experiment (1958).\n\n<strong>Key enzymes</strong>:\n• <strong>Helicase</strong>: unwinds and separates the double helix (breaks H-bonds between bases). Creates a replication fork.\n• <strong>Single-strand binding proteins (SSBPs)</strong>: keep the separated strands apart and stable.\n• <strong>Topoisomerase</strong>: relieves the tension/supercoiling ahead of helicase.\n• <strong>Primase</strong>: synthesizes a short RNA primer (DNA polymerase can\'t start from scratch — it can only add to an existing strand).\n• <strong>DNA polymerase III</strong> (prokaryotes) / <strong>DNA Pol δ, ε</strong> (eukaryotes): reads template 3'→5', builds new strand 5'→3'. Has proofreading ability.\n• <strong>DNA ligase</strong>: seals the nicks (gaps between Okazaki fragments).\n\n<strong>Leading vs lagging strand</strong>:\nDNA polymerase can only synthesize 5'→3'. Both strands are copied simultaneously from the same fork but in opposite directions:\n• Leading strand: synthesized continuously in the same direction as fork movement.\n• Lagging strand: synthesized in short fragments (Okazaki fragments, ~100–200 nt in eukaryotes) going away from the fork. Fragments later joined by ligase.\n\n<strong>Error rate</strong>: ~1 error per 10⁹ bases (after proofreading). That\'s incredibly accurate — copying 3 billion bases with only ~3 errors.`,
        memory: `DNA replication = two people reading a book aloud while a third person writes down everything they say. Helicase = the person opening the book. DNA polymerase = the writer (can only write left to right = 5'→3'). Primase = the sticky note you need before the writer can start. Ligase = the tape that joins the sticky notes and new text together.`,
        examTip: `DNA polymerase can ONLY add nucleotides to an existing 3'-OH end — that's why a primer is required. Primer is RNA (made by primase). The RNA primer is later removed and replaced with DNA. Okazaki fragments on the lagging strand = the reason the lagging strand is discontinuous.`,
        facts: ['Semi-conservative = 1 old + 1 new', 'Helicase = unzips', 'Primase = RNA primer', 'DNA pol = 5\'→3\' only', 'Leading = continuous', 'Lagging = Okazaki fragments']
      },

      {
        id: 'rna-types',
        title: 'RNA — Three Types, Three Jobs',
        tags: ['dna'],
        chain: ['DNA can\'t leave nucleus', 'RNA carries the message out', 'mRNA = the message', 'tRNA = the delivery truck', 'rRNA = the factory itself'],
        blurb: 'RNA is DNA\'s working copy. Three main types: mRNA carries the genetic code from nucleus to ribosome. tRNA brings the right amino acids. rRNA is the structural and catalytic core of the ribosome that builds proteins.',
        detail: `<strong>RNA vs DNA</strong>:\n• RNA = single-stranded (usually)\n• RNA uses ribose sugar (has an -OH at 2' position; DNA has H instead)\n• RNA uses Uracil (U) instead of Thymine (T) — U pairs with A\n• RNA is generally less stable than DNA (the extra -OH makes it more reactive)\n\n<strong>mRNA (messenger RNA)</strong>:\nCopied directly from one gene. Carries the genetic code from nucleus to ribosomes in the cytoplasm.\nIn eukaryotes, pre-mRNA is processed before use:\n• 5' cap (7-methylguanosine): protects mRNA, signals ribosomes to start\n• Poly-A tail: 50–250 adenines on 3' end, protects from degradation\n• Splicing: introns (non-coding sequences) removed, exons (expressed sequences) joined\n\n<strong>tRNA (transfer RNA)</strong>:\n~76–90 nucleotides. L-shaped or cloverleaf structure. Two critical ends:\n• Anticodon loop: 3-nucleotide sequence that pairs with mRNA codon\n• Acceptor stem: where the amino acid attaches (amino acid = "charged" tRNA)\nAminoacyl-tRNA synthetase: the enzyme that matches the right amino acid to each tRNA. Critical accuracy checkpoint.\n\n<strong>rRNA (ribosomal RNA)</strong>:\nMakes up ~60% of the ribosome. The ribosome has two subunits (small and large).\nCatalytically active — rRNA (not protein) actually forms the peptide bond between amino acids. rRNA is a ribozyme (RNA with enzymatic activity). This is evidence that RNA came before proteins in evolution.`,
        memory: `mRNA = the script (blueprint of what to build, copied from the master DNA). tRNA = actors that carry each letter of the script to the stage (each tRNA brings one amino acid). rRNA = the stage itself and the director (the ribosome that reads the script and assembles the actors in order).`,
        examTip: `U replaces T in RNA (and pairs with A). Pre-mRNA has introns AND exons. Alternative splicing = different combinations of exons → different proteins from one gene. This is how humans can have ~20,000 genes but produce 100,000+ different proteins. One gene ≠ one protein anymore.`,
        facts: ['RNA = single-stranded', 'Uses uracil (U)', 'mRNA = message', 'tRNA = amino acid carrier', 'rRNA = ribosome core', 'Introns spliced out']
      },

      {
        id: 'transcription',
        title: 'Transcription: DNA → RNA',
        tags: ['dna'],
        chain: ['Gene activated', 'RNA polymerase finds promoter', 'Helix unwinds locally', 'RNA built 5\'→3\' from template', 'Pre-mRNA processed', 'Mature mRNA leaves nucleus'],
        blurb: 'Transcription is copying a specific gene from DNA into RNA. RNA polymerase reads the DNA template strand and builds a complementary mRNA. Happens in the nucleus. The result is a message that carries gene instructions to the ribosomes.',
        detail: `<strong>Three stages</strong>:\n\n<strong>Initiation</strong>:\nRNA polymerase binds to the promoter — a specific DNA sequence "upstream" of the gene.\nIn eukaryotes: transcription factors first bind promoter elements (like the TATA box, ~25 bp before start), then help RNA polymerase II bind.\nIn prokaryotes: sigma factor guides RNA polymerase directly to promoter.\n\n<strong>Elongation</strong>:\nRNA polymerase unwinds the DNA locally (no helicase needed for transcription).\nReads template strand 3'→5', synthesizes RNA 5'→3'.\nBases: A in template → U in RNA. T in template → A in RNA. G↔C.\nRNA polymerase doesn\'t need a primer (unlike DNA polymerase).\nThe coding strand (non-template strand) has the same sequence as the mRNA (but with T instead of U).\n\n<strong>Termination</strong>:\nRNA polymerase reaches a terminator sequence → releases from DNA.\n\n<strong>Post-transcriptional processing in eukaryotes</strong>:\n1. 5' cap: 7-methylguanosine added to 5' end → protection + ribosome recognition\n2. Poly-A tail: 50–250 As added to 3' end → protection + nuclear export signal\n3. Splicing: spliceosome (snRNA + proteins) removes introns, joins exons\n\nMature mRNA exits nucleus through nuclear pores → ready for translation.`,
        memory: `Transcription = making a photocopy of one page of a book. The book (DNA) stays in the library (nucleus). The photocopy (mRNA) is taken out to the factory floor (cytoplasm) to be used. RNA polymerase = the photocopier. Promoter = the "start copying here" arrow.\n\nCoding strand = same sequence as mRNA (with T→U). Template strand = what RNA pol actually reads (antiparallel to mRNA).`,
        examTip: `RNA polymerase does NOT need a primer (unlike DNA polymerase). One gene can be transcribed by many RNA polymerases at once (making lots of mRNA copies quickly). Each mRNA is a disposable working copy of one gene — when the gene needs to be "off," the mRNA is degraded.`,
        facts: ['RNA pol reads 3\'→5\'', 'mRNA built 5\'→3\'', 'No primer needed', 'TATA box = eukaryote promoter', 'Introns spliced out', 'Cap + poly-A = stability']
      },

      {
        id: 'genetic-code',
        title: 'The Genetic Code',
        tags: ['dna'],
        chain: ['mRNA has codons', 'Codon = 3 bases', '64 possible codons', '20 amino acids coded', 'AUG = start, 3 codons = stop'],
        blurb: 'The genetic code is the dictionary that translates nucleotide sequences into amino acids. Every 3 bases (a codon) codes for one amino acid. 64 possible codons for only 20 amino acids — so the code is redundant (multiple codons per amino acid) but never ambiguous (one codon → only one amino acid).',
        detail: `<strong>Codon</strong> = a sequence of 3 mRNA bases. 4³ = 64 possible codons.\n\n<strong>Start codon</strong>: AUG = methionine (Met/M). Every protein starts with methionine.\n\n<strong>Stop codons</strong> (3 total, no amino acid):\n• UAA ("U Are Away")\n• UAG ("U Are Gone")\n• UGA ("U Go Away")\n\n<strong>Redundancy (degeneracy)</strong>: most amino acids have multiple codons.\nExample: Leucine = UUA, UUG, CUU, CUC, CUA, CUG (6 codons for one amino acid)\nPhenylalaine = UUU, UUC (2 codons)\nTryptophan = UGG (only 1 codon)\nMethionine = AUG (only 1 codon — also the start)\n\n<strong>Wobble position</strong>: the 3rd base of the codon is most flexible — different 3rd bases often code for the same amino acid. This is why many mutations in the 3rd position are "silent" (synonymous mutations).\n\n<strong>Reading frame</strong>: which base you start counting from. A frameshift mutation (insertion or deletion of bases not divisible by 3) changes the entire reading frame downstream.\n\n<strong>Universal</strong>: almost all organisms on Earth use the same genetic code. Strong evidence for a common ancestor. (Exceptions: some mitochondria use slightly different codes.)`,
        memory: `Genetic code = Morse code for proteins. 3 dots/dashes (bases) = 1 letter (amino acid). 64 possible 3-letter combinations. 20 letters in the amino acid "alphabet" — so some letters have multiple Morse codes. AUG = "start transmission." UAA/UAG/UGA = "end of message."\n\nThe code is universal = discovered in E. coli, works in humans, works in plants. Life has one language.`,
        examTip: `Know AUG = start (always Met). Know the 3 stop codons. Synonymous (silent) mutations change codon but not amino acid — they often happen at the "wobble" 3rd position. In bioinformatics, you use the genetic code to translate DNA/RNA sequences into predicted protein sequences.`,
        facts: ['Codon = 3 bases', '64 codons total', '20 amino acids', 'AUG = start (Met)', 'UAA/UAG/UGA = stop', 'Redundant, not ambiguous']
      },

      {
        id: 'translation',
        title: 'Translation: RNA → Protein',
        tags: ['dna'],
        chain: ['Mature mRNA moves to ribosome', 'Small subunit finds AUG', 'tRNA delivers first amino acid', 'Ribosome shifts codon by codon', 'Peptide bond forms each step', 'Stop codon → protein released'],
        blurb: 'Translation is building a protein from an mRNA template at the ribosome. The ribosome reads codons, tRNAs deliver matching amino acids, and peptide bonds chain them together — one amino acid added per codon.',
        detail: `<strong>Three stages</strong>:\n\n<strong>Initiation</strong>:\n• Small ribosome subunit binds 5' cap of mRNA, scans for AUG\n• Initiator tRNA (carrying Met) binds AUG at the P site\n• Large subunit joins → ribosome assembled and ready\n\n<strong>Elongation</strong> — one cycle per codon:\n• Aminoacyl-tRNA enters A site (anticodon matches mRNA codon)\n• Peptide bond forms between the growing chain (in P site) and the new amino acid (A site). Catalyzed by the rRNA of the large subunit (peptidyl transferase activity)\n• Ribosome translocates: moves 3 bases (1 codon) down the mRNA\n• Empty tRNA exits from E site\n• Repeat\n\n<strong>Ribosome sites (A, P, E)</strong>:\n• A site (Aminoacyl): incoming charged tRNA\n• P site (Peptidyl): growing polypeptide chain\n• E site (Exit): empty tRNA leaves\n\n<strong>Termination</strong>:\n• Stop codon in A site → no tRNA matches\n• Release factor (protein) enters A site, triggers hydrolysis of bond between chain and last tRNA\n• Polypeptide released. Ribosome subunits dissociate.\n\n<strong>Polysomes</strong>: multiple ribosomes translating the same mRNA simultaneously. Makes many copies of the protein quickly.\n\nPost-translational modification: protein may be folded with chaperone help, cut, modified (phosphorylation, glycosylation), or sent to a specific location.`,
        memory: `Translation = assembly line reading a scroll. mRNA = the scroll (instruction tape). Ribosome = the machine reading it. tRNAs = workers delivering correct parts. Amino acids = the parts being assembled. Three workers at the machine at any time (A, P, E). Ribosome steps down the scroll one codon at a time, snapping parts together.`,
        examTip: `A, P, E sites: remember "APE." A = arrival, P = peptide (chain being built), E = exit. Stop codons are NOT recognized by any tRNA — they're recognized by protein release factors. Initiator tRNA delivers Met but it's in the P site first (not A site), which is unique to the start.`,
        facts: ['Ribosome = A + P + E sites', 'tRNA anticodon matches codon', 'Peptide bond = rRNA catalyzes', 'Stop codon → release factor', 'Starts at AUG', 'Polysomes = multiple ribosomes']
      },

      {
        id: 'gene-expression',
        title: 'Gene Expression & Regulation',
        tags: ['dna'],
        chain: ['Same DNA in every cell', 'Different cells look different', 'Gene expression regulated', 'TFs + enhancers control transcription', 'miRNA silences mRNA', 'Multiple regulatory layers'],
        blurb: 'Every cell has the same DNA, but a liver cell and a neuron do completely different things. Gene expression — which genes are on or off — is tightly controlled at multiple levels. This control is the basis of development, disease, and bioinformatics.',
        detail: `<strong>Why regulation?</strong>\nYou have ~37 trillion cells. All have the same DNA. But each cell type expresses a unique set of genes. Liver cells = liver genes on. Neurons = neuron genes on, liver genes off. How?\n\n<strong>Transcriptional regulation (most important level)</strong>:\n• <strong>Transcription factors (TFs)</strong>: proteins that bind specific DNA sequences and either activate or repress transcription.\n• <strong>Promoters</strong>: where RNA polymerase binds. Basal transcription vs activated transcription.\n• <strong>Enhancers</strong>: DNA sequences far from the gene that boost transcription when TFs bind. Can be thousands of base pairs away.\n• <strong>Silencers</strong>: reduce transcription.\n• Chromatin remodeling: histone acetylation (HATs) opens chromatin → gene activation. Deacetylation (HDACs) closes it → silencing.\n\n<strong>Post-transcriptional regulation</strong>:\n• mRNA stability: poly-A tail length, RNA-binding proteins affect how long mRNA lasts\n• Alternative splicing: same gene, different exon combos → different proteins\n• <strong>miRNA (microRNA)</strong>: tiny (~22 nt) RNAs that bind complementary mRNA sequences → cause degradation or block translation. ~1,000+ miRNAs in humans, each regulating many genes.\n• siRNA: similar to miRNA, used in gene silencing research and therapeutics\n\n<strong>Prokaryotic operons</strong>:\nGenes with related functions grouped together, transcribed as one mRNA, regulated together.\nLac operon (E. coli): genes for lactose metabolism. Normally OFF (repressor protein blocks). When lactose present → repressor removed → genes turn ON.`,
        memory: `Gene regulation = a city's lighting grid. Same wires go to every building (same DNA), but different switches are on in different buildings at different times. Transcription factors = the switches. Enhancers = the remote controls that can flip switches from far away.\n\nmiRNA = a sticky note on the instruction scroll (mRNA) that says "ignore this."`,
        examTip: `Alternative splicing is huge — it's why humans (~20,000 genes) can make 100,000+ proteins. Bioinformatics tools like RNA-seq measure which genes are expressed and at what level in any tissue. Differential expression analysis = comparing which genes are on in sick tissue vs healthy tissue.`,
        facts: ['TFs = transcription control', 'Enhancers = boost (distant)', 'miRNA = silences mRNA', 'Alternative splicing', 'Same DNA, different expression', 'Operon = prokaryote clusters']
      },

    ]
  },

  // ── SECTION 4: Proteins ────────────────────────────────────────────────────
  {
    id: 'proteins',
    icon: '⚙️',
    title: 'Proteins',
    subtitle: 'The molecular workforce — what genes actually build, and how shape becomes function',
    concepts: [

      {
        id: 'amino-acids',
        title: 'Amino Acids — The Building Blocks',
        tags: ['prot'],
        chain: ['20 amino acids', 'Each has the same core structure', 'R group = what makes them different', 'R group = hydrophobic or charged or polar', 'Sequence = primary structure'],
        blurb: 'All 20 amino acids share the same backbone: a central carbon bonded to an amino group, a carboxyl group, and a hydrogen. The R group — the "side chain" — is unique to each amino acid and determines its chemical personality.',
        detail: `<strong>Universal amino acid structure</strong>:\nCentral α-carbon bonded to:\n• -NH₂ (amino group) — basic\n• -COOH (carboxyl group) — acidic\n• -H\n• -R (side chain — variable)\n\nThis is why amino acids are both acids and bases (amphoteric).\nPeptide bond: forms between the -COOH of one amino acid and the -NH₂ of the next (condensation = releases water).\n\n<strong>Categories by R group</strong>:\n\n• <strong>Nonpolar/hydrophobic</strong>: Glycine (G), Alanine (A), Valine (V), Leucine (L), Isoleucine (I), Proline (P), Phenylalanine (F), Methionine (M), Tryptophan (W)\n→ Fold to the INSIDE of proteins, away from water\n\n• <strong>Polar/uncharged</strong>: Serine (S), Threonine (T), Cysteine (C), Tyrosine (Y), Asparagine (N), Glutamine (Q)\n→ Can form H-bonds. Cysteine (-SH) forms disulfide bonds.\n\n• <strong>Positively charged (basic)</strong>: Lysine (K), Arginine (R), Histidine (H)\n→ Attracted to negatively charged molecules (like DNA — why histones are lysine/arginine-rich)\n\n• <strong>Negatively charged (acidic)</strong>: Aspartate (D), Glutamate (E)\n→ Repelled by other negative charges\n\n<strong>Special cases</strong>:\n• Glycine: smallest, allows tight turns\n• Proline: rigid ring, creates kinks in polypeptide chains\n• Cysteine: -SH group forms disulfide bonds (-S-S-) with other Cys\n• Methionine: start amino acid (AUG codon)\n\n<strong>Essential amino acids</strong> (must get from food): His, Ile, Leu, Lys, Met, Phe, Thr, Trp, Val (9 total — "HI, LLMPTV")`,
        memory: `Every amino acid = a T-shape. The top = H. Left arm = amino group (-NH₂). Right arm = carboxyl (-COOH). The stem = R group (unique to each). Change the stem = different amino acid.\n\nHydrophobic R groups fold INSIDE proteins (away from water). Charged/polar R groups stay on the OUTSIDE (face the water). This is the main rule of protein folding.`,
        examTip: `Remember: charged amino acids on outside, nonpolar on inside. Cysteine's disulfide bonds stabilize protein structure (like staples holding the folded chain in place). In bioinformatics, amino acids are represented by their 1-letter codes — you'll see them constantly in protein sequences and databases like UniProt.`,
        facts: ['20 amino acids', 'R group = variable', 'Nonpolar = inside', 'Charged = outside', 'Cys = disulfide bonds', '9 essential = from food']
      },

      {
        id: 'protein-structure',
        title: 'Protein Structure — 4 Levels',
        tags: ['prot'],
        chain: ['1° = amino acid sequence', '2° = local folding (helix/sheet)', '3° = overall 3D shape', '4° = multiple chains together', 'Shape = function'],
        blurb: 'Proteins have four levels of structure, each built on the previous. The final 3D shape is everything — it determines what the protein does, what it binds to, and how it works. Change the shape, lose the function.',
        detail: `<strong>Primary (1°) structure</strong>:\nThe linear sequence of amino acids. Determined by DNA (via mRNA). Example: Met-Gly-Lys-Ala-...\nThis sequence determines everything downstream. Change one amino acid in the wrong place → entirely different protein.\n\n<strong>Secondary (2°) structure</strong>:\nLocal folding of the polypeptide backbone, driven by hydrogen bonds between backbone atoms (N-H and C=O groups).\n• <strong>Alpha helix (α-helix)</strong>: backbone spirals. H-bond between residue and residue 4 positions away. Right-handed. Common in membrane-spanning proteins.\n• <strong>Beta sheet (β-sheet)</strong>: backbone runs in parallel or antiparallel strands connected by H-bonds. Flat, pleated. Common in structural proteins and antibodies.\n• Turns and loops: connect secondary structures.\n\n<strong>Tertiary (3°) structure</strong>:\nOverall 3D shape of the entire single polypeptide. Driven by interactions between R groups (side chains):\n• Hydrophobic interactions (most important): nonpolar R groups cluster inside\n• Disulfide bonds: Cys-Cys covalent bonds\n• Ionic interactions: between + and - charged R groups\n• Hydrogen bonds: between polar R groups\n• Van der Waals forces: weak, numerous\n\n<strong>Quaternary (4°) structure</strong>:\nTwo or more polypeptide chains (subunits) assembled into one functional protein complex.\nExamples: Hemoglobin (4 subunits: 2 α + 2 β), antibodies, DNA polymerase, ATP synthase.\nNot all proteins have quaternary structure.\n\n<strong>Denaturation</strong>: loss of 3D structure from heat, pH extremes, detergents. Usually breaks non-covalent bonds (doesn\'t change sequence). Protein loses function. Usually irreversible.`,
        memory: `1° = amino acid necklace (just the sequence). 2° = parts of the necklace curl into spirals or zigzags (local patterns). 3° = the whole necklace scrunched into a ball in your hand (overall shape). 4° = multiple necklace-balls clipped together.\n\nDenaturation = unboiling an egg. You changed the 3D structure (protein coagulated). You can\'t easily undo that. The sequence is still intact — it\'s the folding that's been lost.`,
        examTip: `Denaturation affects 3° and 4° structure but NOT 1° (sequence stays the same). The sequence determines the structure — this is Anfinsen's dogma. Sickle cell anemia = one amino acid change (position 6 in β-hemoglobin: Glu→Val) → changes tertiary structure → changes function → disease.`,
        facts: ['1° = sequence', '2° = helix/sheet', '3° = 3D shape', '4° = multiple chains', 'Denaturation = unfold', 'Shape = function']
      },

      {
        id: 'protein-folding',
        title: 'Protein Folding',
        tags: ['prot'],
        chain: ['Amino acid sequence made', 'Hydrophobic residues avoid water', 'Chaperones prevent misfolding', 'Native 3D structure achieved', 'Wrong fold = disease'],
        blurb: 'Proteins fold into their 3D shape driven mainly by the need to hide hydrophobic amino acids from water. Chaperone proteins help guide the process and prevent misfolding. When folding goes wrong, the result can be disease.',
        detail: `<strong>What drives folding?</strong>\nMinimizing free energy. The biggest force = hydrophobic effect:\nNonpolar amino acids (hydrophobic) are thermodynamically unstable when exposed to water. They cluster together inside the protein → stable "hydrophobic core." This is like oil droplets merging in water.\n\n<strong>Folding pathway</strong>:\nProteins don\'t randomly try all conformations (that would take longer than the age of the universe — Levinthal\'s paradox). They follow folding pathways — specific intermediates that guide the process.\n\n<strong>Chaperones (molecular chaperones)</strong>:\nProteins that assist other proteins in folding correctly. They don\'t provide folding information — they prevent wrong interactions during the process.\n• HSP70 (heat shock protein 70): binds exposed hydrophobic segments of unfolded proteins, prevents aggregation\n• GroEL/GroES (E. coli): barrel-shaped cage where proteins fold in isolation\n• HSP90: helps stabilize and fold signaling proteins\nChaperone expression increases when cells are stressed (high temperature, oxidative stress).\n\n<strong>Protein misfolding diseases</strong>:\n• Alzheimer\'s: amyloid-β peptide misfolds and aggregates into plaques\n• Parkinson\'s: alpha-synuclein aggregates\n• Type 2 diabetes: islet amyloid polypeptide aggregates\n• Prion diseases (CJD, Scrapie, Mad Cow): PrPᶜ (normal) → PrPˢᶜ (misfolded)\n\n<strong>Prions</strong>: misfolded proteins that cause normal copies of the same protein to misfold. Infectious without DNA or RNA. Extreme example of why protein folding matters.`,
        memory: `Protein folding = oil-in-water repulsion. Hydrophobic amino acids are like oil droplets — they desperately want to escape contact with water, so they clump together inside the protein. The protein\'s outer surface ends up being polar/charged (water-friendly).\n\nMisfolded proteins = origami gone wrong. Instead of a perfect crane, you get a crumpled mess that sticks to other crumpled messes. That\'s amyloid plaques in Alzheimer\'s.`,
        examTip: `AlphaFold (DeepMind, 2021) is an AI system that can predict 3D protein structure from amino acid sequence with near-experimental accuracy. This is one of the biggest breakthroughs in bioinformatics history — proteins that would take years to crystallize and image are now predicted in seconds.`,
        facts: ['Hydrophobic core', 'Chaperones prevent aggregation', 'HSP70 = stress response', 'Prions = misfolded proteins', 'Alzheimer\'s = amyloid plaques', 'AlphaFold = AI structure pred.']
      },

      {
        id: 'enzymes',
        title: 'Enzymes — Biological Catalysts',
        tags: ['prot'],
        chain: ['Cell needs reactions 10⁶× faster', 'Enzyme = biological catalyst', 'Substrate binds active site', 'Activation energy lowered', 'Product released, enzyme unchanged'],
        blurb: 'Enzymes are proteins that speed up chemical reactions without being used up. They work by lowering the activation energy — the energy needed to start the reaction. Without enzymes, most reactions in your cells would take years.',
        detail: `<strong>Catalyst</strong>: a substance that speeds up a reaction without being consumed.\nEnzyme speeds reactions 10⁶ to 10¹² times faster than uncatalyzed.\n\n<strong>Active site</strong>: specific 3D pocket on the enzyme that binds the substrate. Shape-complementary to substrate.\n\n<strong>Lock-and-key model</strong> (old): rigid, perfect fit between active site and substrate.\n<strong>Induced-fit model</strong> (current): active site changes shape slightly when substrate binds, optimizing interaction. Like a handshake — you adjust your grip to the other person\'s hand.\n\n<strong>Enzyme-substrate (ES) complex</strong>:\nE + S → ES → E + P\nEnzyme + substrate → reaction happens → enzyme releases product, is unchanged, free to do it again.\n\n<strong>Cofactors</strong>: non-protein helpers required for enzyme function:\n• Metal ions: Fe²⁺, Mg²⁺, Zn²⁺ (often in active site)\n• Coenzymes: organic cofactors (NAD⁺, FAD, Coenzyme A, vitamins B6, B12)\n• Prosthetic groups: permanently attached cofactors (heme in hemoglobin)\n\n<strong>Enzyme naming</strong>: usually ends in "-ase." Named after substrate or reaction:\n• Lactase (breaks lactose), DNA polymerase (makes DNA polymer), Helicase (unwinds helix)\n\n<strong>Inhibition</strong>:\n• Competitive inhibition: inhibitor resembles substrate, competes for active site. Can be overcome with more substrate.\n• Noncompetitive inhibition: inhibitor binds elsewhere (allosteric site), changes shape of active site → reduces activity. More substrate can\'t overcome it.\n• Irreversible inhibition: inhibitor covalently binds active site. Permanently disabled. (e.g., nerve agents inactivate acetylcholinesterase)`,
        memory: `Enzyme = highly specialized locksmith. The active site = the lock. Substrate = the key that fits. Locksmith opens the door (catalyzes reaction) and is ready for the next door. Competitive inhibitor = a wrong key jammed in the lock. Noncompetitive inhibitor = someone bent the lock itself.`,
        examTip: `Induced fit (not lock-and-key) is the accepted model. Competitive inhibitors can be overcome with more substrate (the real substrate can out-compete). Noncompetitive cannot be overcome — it changes the enzyme's shape so even with lots of substrate, maximum rate is reduced.`,
        facts: ['Enzyme = catalyst', 'Lowers activation energy', 'Active site = binding pocket', 'Induced fit model', 'Competitive = overcome with [S]', 'Named with -ase suffix']
      },

      {
        id: 'enzyme-kinetics',
        title: 'Enzyme Kinetics',
        tags: ['prot'],
        chain: ['More substrate = faster at first', 'Enzymes eventually saturate', 'Vmax = maximum rate', 'Km = affinity measure', 'Low Km = high affinity'],
        blurb: 'As you add more substrate, reaction speed increases — until all enzymes are working flat-out and the rate plateaus. Vmax is that maximum rate. Km tells you how much substrate an enzyme needs to work at half speed — a measure of enzyme affinity.',
        detail: `<strong>Michaelis-Menten kinetics</strong>:\nv = Vmax [S] / (Km + [S])\n\n• v = reaction rate at a given [S]\n• Vmax = maximum rate (when all enzyme active sites are occupied)\n• [S] = substrate concentration\n• Km = Michaelis constant = [S] at which v = Vmax/2\n\n<strong>Interpreting Km</strong>:\n• Low Km: enzyme achieves half-max rate at low [S] → high affinity for substrate → "doesn\'t need much"\n• High Km: enzyme achieves half-max rate at high [S] → low affinity → "needs a lot of substrate"\n\n<strong>Effect of inhibitors on Michaelis-Menten parameters</strong>:\n• Competitive inhibitor: increases apparent Km (harder to get to Vmax), Vmax unchanged (eventually, with enough substrate)\n• Noncompetitive inhibitor: Vmax decreases, Km unchanged\n\n<strong>Allosteric regulation</strong>:\nEnzyme has an allosteric site (different from active site). When an effector binds:\n• Allosteric activator: changes shape to increase activity\n• Allosteric inhibitor: changes shape to decrease activity\nMany metabolic enzymes are allosteric — the end product of a pathway inhibits the enzyme at the beginning of the pathway = <strong>feedback inhibition</strong>. Elegant self-regulation.\n\n<strong>Covalent modification</strong>:\nPhosphorylation (adding phosphate group) activates or inactivates many enzymes rapidly. Kinases add phosphate. Phosphatases remove it. Fast on/off switch for enzyme activity.`,
        memory: `Km = "how hungry is the enzyme?" Low Km = satisfied with a little food (high affinity). High Km = needs a lot of food before it gets going (low affinity).\n\nVmax = the assembly line\'s top speed. Competitive inhibition = slow down workers with distractions (but more real work = they catch up). Noncompetitive = break the assembly line (no amount of work helps).`,
        examTip: `Competitive inhibition: Km increases, Vmax unchanged. Non-competitive: Vmax decreases, Km unchanged. Feedback inhibition is everywhere in metabolism — the end product inhibits the first enzyme in its own synthesis pathway. This is how cells auto-regulate metabolite levels.`,
        facts: ['Vmax = max rate', 'Km = half-Vmax [S]', 'Low Km = high affinity', 'Competitive: Km↑ Vmax=', 'Noncompetitive: Vmax↓ Km=', 'Feedback inhibition']
      },

      {
        id: 'protein-functions',
        title: 'What Proteins Actually Do',
        tags: ['prot'],
        chain: ['DNA encodes sequence', 'Sequence folds to shape', 'Shape determines binding', 'Binding determines function', 'Proteins do almost everything'],
        blurb: 'Proteins are the workforce of the cell. Enzymes catalyze reactions. Structural proteins give shape. Transport proteins carry molecules. Receptor proteins receive signals. Antibodies defend. Every function depends entirely on shape.',
        detail: `<strong>Functional categories of proteins</strong>:\n\n• <strong>Enzymes</strong>: catalyze biochemical reactions. Digestive enzymes (amylase, lipase, pepsin), metabolic enzymes (hexokinase, DNA polymerase, ATP synthase). Speed up reactions up to 10¹² times.\n\n• <strong>Structural proteins</strong>: provide shape and mechanical support.\nCollagen: most abundant protein in the body. Provides tensile strength to tendons, ligaments, skin.\nKeratin: in hair, nails, skin outer layer.\nActin and tubulin: cytoskeleton, cell shape, intracellular transport.\n\n• <strong>Transport proteins</strong>: carry molecules.\nHemoglobin: carries O₂ in red blood cells. 4 subunits, each with a heme group.\nAlbumin: carries fatty acids, drugs, hormones in blood.\nMembrane transporters: move ions and molecules across membranes.\n\n• <strong>Signaling proteins</strong>: hormones, receptors, kinases.\nInsulin: peptide hormone (protein) that signals cells to take up glucose.\nGrowth hormone, glucagon, erythropoietin = protein hormones.\nReceptors: on cell surface, detect signals and transmit message inside cell.\n\n• <strong>Motor proteins</strong>: convert ATP energy → movement.\nMyosin: muscle contraction (walks along actin filaments).\nKinesin: carries cargo along microtubules inside cells.\n\n• <strong>Immune proteins</strong>: antibodies (immunoglobulins), complement proteins.\nAntibodies: Y-shaped proteins. Bind specifically to antigens (pathogens). Neutralize or mark for destruction.\n\n• <strong>Storage proteins</strong>: ferritin (iron), casein (milk protein), ovalbumin (egg white).`,
        memory: `Proteins are the entire workforce: the workers (enzymes), the building materials (collagen, keratin), the delivery trucks (hemoglobin, albumin), the managers (signaling proteins), the security guards (antibodies), the vehicles (motor proteins).\n\nDNA = the company policy manual. RNA = the work orders. Proteins = the employees who actually do the work.`,
        examTip: `In bioinformatics, when you find a new DNA sequence, one of the first things you do is translate it to protein sequence and BLAST it against protein databases (like UniProt or PDB) to find similar proteins with known functions. The function of a protein is inferred from its shape — which comes from its sequence.`,
        facts: ['Enzymes = catalysis', 'Structural = collagen/keratin', 'Transport = hemoglobin', 'Signaling = insulin/receptors', 'Motor = myosin/kinesin', 'Immune = antibodies']
      },

    ]
  },

  // ── PART 2 PLACEHOLDER — DO NOT EDIT BELOW ────────────────────────────────
  // Sections 5 (Genetics), 6 (Molecular Biology), 7 (Quick Reference) will be added next

];

// Build flat index for search
const ALL_CONCEPTS = SECTIONS.flatMap(s =>
  s.concepts.map(c => ({ ...c, sectionId: s.id, sectionTitle: s.title }))
);
