/*
 * Bhagavad Gita Jnana Mandir — Loading-screen verse pool.
 *
 * Each entry has six fields:
 *   sanskrit       — original Devanagari (never translated)
 *   transliteration
 *   english        — shown when language is English
 *   te             — shown when language is Telugu
 *   hi             — shown when language is Hindi
 *   citation       — scripture reference (Devanagari + Roman, never translated)
 *
 * To add a language, add a matching field to every entry and update
 * the LOADER_STRINGS table in main.js.
 */
const GITA_VERSES = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana",
    english: "Your right is to the work alone, never to its fruit.",
    te: "నీకు కర్మ యందే అధికారం కలదు, ఫలమున ఎప్పుడూ కాదు.",
    hi: "तुम्हारा अधिकार केवल कर्म में है, फल में कभी नहीं।",
    citation: "भगवद्गीता · Bhagavad Gita 2.47",
  },
  {
    sanskrit: "न जायते म्रियते वा कदाचित्।",
    transliteration: "na jāyate mriyate vā kadācit",
    english: "The soul is never born and it never dies.",
    te: "ఆత్మ ఎప్పుడూ పుట్టదు మరియు ఎప్పుడూ చనిపోదు.",
    hi: "आत्मा न कभी जन्म लेती है और न कभी मरती है।",
    citation: "भगवद्गीता · Bhagavad Gita 2.20",
  },
  {
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।",
    transliteration: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya",
    english: "Steady in spirit, do your work, and let go of every attachment.",
    te: "మనసు స్థిరంగా ఉంచుకొని నీ కర్మ చేయి, ప్రతి అనురక్తినీ వదిలిపెట్టు.",
    hi: "मन को स्थिर रखकर अपना कर्म करो, हर आसक्ति छोड़ दो।",
    citation: "भगवद्गीता · Bhagavad Gita 2.48",
  },
  {
    sanskrit: "वासांसि जीर्णानि यथा विहाय।",
    transliteration: "vāsāṁsi jīrṇāni yathā vihāya",
    english: "As a person sets aside worn clothes, the soul sets aside a worn body.",
    te: "ఒక వ్యక్తి పాత వస్త్రాలు వదిలినట్లు, ఆత్మ పాత శరీరాన్ని వదిలిపెడుతుంది.",
    hi: "जैसे मनुष्य पुराने वस्त्र उतारता है, वैसे ही आत्मा पुराना शरीर छोड़ती है।",
    citation: "भगवद्गीता · Bhagavad Gita 2.22",
  },
  {
    sanskrit: "सर्वधर्मान् परित्यज्य मामेकं शरणं व्रज।",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja",
    english: "Set all else aside and take refuge in Me alone.",
    te: "అన్నిటినీ పక్కన పెట్టి కేవలం నాలో శరణం పొందు.",
    hi: "सब कुछ छोड़कर केवल मुझमें शरण लो।",
    citation: "भगवद्गीता · Bhagavad Gita 18.66",
  },
  {
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata",
    english: "Whenever righteousness fades, I take form again and again.",
    te: "ఎప్పుడైతే ధర్మం క్షీణిస్తుందో, నేను మళ్ళీ మళ్ళీ జన్మిస్తాను.",
    hi: "जब-जब धर्म की हानि होती है, तब-तब मैं जन्म लेता हूँ।",
    citation: "भगवद्गीता · Bhagavad Gita 4.7",
  },
  {
    sanskrit: "समत्वं योग उच्यते।",
    transliteration: "samatvaṁ yoga ucyate",
    english: "To meet gain and loss with an even heart, that is yoga.",
    te: "లాభ నష్టాలు రెండింటినీ సమభావంతో స్వీకరించడమే యోగం.",
    hi: "लाभ और हानि दोनों को समभाव से लेना ही योग है।",
    citation: "भगवद्गीता · Bhagavad Gita 2.48",
  },
  {
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।",
    transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru",
    english: "Fix your mind on Me, love Me, serve Me, and bow to Me.",
    te: "నీ మనసు నాపై నిలిపి, నన్ను ప్రేమించి, నాకు సేవ చేసి, నాకు నమస్కరించు.",
    hi: "मन मुझमें लगाओ, मुझसे प्रेम करो, मेरी सेवा करो, मुझे प्रणाम करो।",
    citation: "भगवद्गीता · Bhagavad Gita 9.34",
  },
  {
    sanskrit: "श्रेयान् स्वधर्मो विगुणः परधर्मात् स्वनुष्ठितात्।",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt",
    english: "Better your own path walked imperfectly than another's walked well.",
    te: "అపూర్ణంగా నడిచిన నీ స్వధర్మం, పరిపూర్ణంగా నడిచిన పరధర్మం కంటే మేలు.",
    hi: "अपूर्ण रूप से चला गया स्वधर्म, पूर्ण रूप से चले परधर्म से श्रेष्ठ है।",
    citation: "भगवद्गीता · Bhagavad Gita 3.35",
  },
  {
    sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।",
    transliteration: "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ",
    english: "No weapon can cut the soul, no fire can burn it.",
    te: "ఏ ఆయుధమూ ఆత్మను ఛేదించలేదు, ఏ అగ్నీ దాన్ని దహించలేదు.",
    hi: "कोई शस्त्र आत्मा को काट नहीं सकता, कोई अग्नि उसे जला नहीं सकती।",
    citation: "भगवद्गीता · Bhagavad Gita 2.23",
  },
  {
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet",
    english: "Lift yourself by your own effort. Do not let yourself sink.",
    te: "నీ స్వంత ప్రయత్నంతో నిన్ను నువ్వు ఉద్ధరించుకో. అధఃపాతానికి జారనీయకు.",
    hi: "अपने प्रयास से स्वयं को उठाओ। स्वयं को अधोगति में मत जाने दो।",
    citation: "भगवद्गीता · Bhagavad Gita 6.5",
  },
  {
    sanskrit: "योगः कर्मसु कौशलम्।",
    transliteration: "yogaḥ karmasu kauśalam",
    english: "Skill in action, performed with a calm mind, is itself yoga.",
    te: "నిర్మల మనసుతో చేసే కర్మలో నైపుణ్యమే యోగం.",
    hi: "शांत मन से किए गए कर्म में कुशलता ही योग है।",
    citation: "भगवद्गीता · Bhagavad Gita 2.50",
  },
  {
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।",
    transliteration: "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati",
    english: "A leaf, a flower, a fruit, a little water, offered with love, I accept.",
    te: "ఒక ఆకు, ఒక పువ్వు, ఒక ఫలం, కొంచెం నీరు — ప్రేమతో అర్పిస్తే నేను స్వీకరిస్తాను.",
    hi: "एक पत्ता, एक फूल, एक फल, थोड़ा जल — प्रेम से अर्पित करो, मैं स्वीकार करता हूँ।",
    citation: "भगवद्गीता · Bhagavad Gita 9.26",
  },
  {
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate",
    english: "To those who think of Me alone, I carry what they lack and keep what they have.",
    te: "కేవలం నన్నే స్మరించే వారికి, లేనిది నేను ఇస్తాను, ఉన్నది నేను కాపాడతాను.",
    hi: "जो केवल मुझे ही सोचते हैं, उनकी कमी मैं पूरी करता हूँ और जो है उसे रखता हूँ।",
    citation: "भगवद्गीता · Bhagavad Gita 9.22",
  },
  {
    sanskrit: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्।",
    transliteration: "teṣāṁ satata-yuktānāṁ bhajatāṁ prīti-pūrvakam",
    english: "To those who serve Me with love, I give the wisdom that leads them home.",
    te: "ప్రేమతో నాకు సేవ చేసే వారికి, నేను వారిని నిజగృహానికి నడిపించే జ్ఞానం ప్రసాదిస్తాను.",
    hi: "जो प्रेम से मेरी सेवा करते हैं, उन्हें मैं वह ज्ञान देता हूँ जो उन्हें घर ले जाता है।",
    citation: "भगवद्गीता · Bhagavad Gita 10.10",
  },
  {
    sanskrit: "शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।",
    transliteration: "śāntiṁ nirvāṇa-paramāṁ mat-saṁsthām adhigacchati",
    english: "Resting in Me, the heart finds the peace that ends all sorrow.",
    te: "నాలో నిలుస్తే, హృదయం సమస్త దుఃఖాన్ని అంతం చేసే శాంతిని పొందుతుంది.",
    hi: "मुझमें विश्राम करने से हृदय को वह शांति मिलती है जो सब दुःख समाप्त कर देती है।",
    citation: "भगवद्गीता · Bhagavad Gita 6.15",
  },
  {
    sanskrit: "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना।",
    transliteration: "dhyānenātmani paśyanti kecid ātmānam ātmanā",
    english: "Through stillness, some come to see the Self within the self.",
    te: "మౌనం ద్వారా, కొందరు తమలో తాముగా ఉన్న ఆత్మను చూస్తారు.",
    hi: "स्थिरता के माध्यम से, कुछ लोग आत्मा में आत्मा को देखते हैं।",
    citation: "भगवद्गीता · Bhagavad Gita 13.25",
  },
  {
    sanskrit: "अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।",
    transliteration: "abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",
    english: "The restless mind is steadied by patient practice and gentle release.",
    te: "చంచల మనసు ఓపికతో కూడిన అభ్యాసం మరియు మృదువైన వదలివేత ద్వారా స్థిరపడుతుంది.",
    hi: "अभ्यास और वैराग्य से चंचल मन को स्थिर किया जाता है।",
    citation: "भगवद्गीता · Bhagavad Gita 6.35",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = GITA_VERSES;
}
