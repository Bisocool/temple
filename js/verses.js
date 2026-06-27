/*
 * Bhagavad Gita Jnana Mandir — Loading-screen verse pool.
 *
 * Each entry has four fields: sanskrit, transliteration, english, citation.
 * The sanskrit field carries the verse in original Devanagari script,
 * exactly as it appears in the Gita tradition.
 * Renderings are plain-language paraphrases written for this temple,
 * not copied verbatim from any published translator.
 *
 * Add or edit verses here freely. No layout code needs to change.
 */
const GITA_VERSES = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana",
    english: "Your right is to the work alone, never to its fruit.",
    citation: "भगवद्गीता · Bhagavad Gita 2.47",
  },
  {
    sanskrit: "न जायते म्रियते वा कदाचित्।",
    transliteration: "na jāyate mriyate vā kadācit",
    english: "The soul is never born and it never dies.",
    citation: "भगवद्गीता · Bhagavad Gita 2.20",
  },
  {
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।",
    transliteration: "yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya",
    english: "Steady in spirit, do your work, and let go of every attachment.",
    citation: "भगवद्गीता · Bhagavad Gita 2.48",
  },
  {
    sanskrit: "वासांसि जीर्णानि यथा विहाय।",
    transliteration: "vāsāṁsi jīrṇāni yathā vihāya",
    english: "As a person sets aside worn clothes, the soul sets aside a worn body.",
    citation: "भगवद्गीता · Bhagavad Gita 2.22",
  },
  {
    sanskrit: "सर्वधर्मान् परित्यज्य मामेकं शरणं व्रज।",
    transliteration: "sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja",
    english: "Set all else aside and take refuge in Me alone.",
    citation: "भगवद्गीता · Bhagavad Gita 18.66",
  },
  {
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata",
    english: "Whenever righteousness fades, I take form again and again.",
    citation: "भगवद्गीता · Bhagavad Gita 4.7",
  },
  {
    sanskrit: "समत्वं योग उच्यते।",
    transliteration: "samatvaṁ yoga ucyate",
    english: "To meet gain and loss with an even heart, that is yoga.",
    citation: "भगवद्गीता · Bhagavad Gita 2.48",
  },
  {
    sanskrit: "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।",
    transliteration: "man-manā bhava mad-bhakto mad-yājī māṁ namaskuru",
    english: "Fix your mind on Me, love Me, serve Me, and bow to Me.",
    citation: "भगवद्गीता · Bhagavad Gita 9.34",
  },
  {
    sanskrit: "श्रेयान् स्वधर्मो विगुणः परधर्मात् स्वनुष्ठितात्।",
    transliteration: "śreyān sva-dharmo viguṇaḥ para-dharmāt sv-anuṣṭhitāt",
    english: "Better your own path walked imperfectly than another's walked well.",
    citation: "भगवद्गीता · Bhagavad Gita 3.35",
  },
  {
    sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।",
    transliteration: "nainaṁ chindanti śastrāṇi nainaṁ dahati pāvakaḥ",
    english: "No weapon can cut the soul, no fire can burn it.",
    citation: "भगवद्गीता · Bhagavad Gita 2.23",
  },
  {
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
    transliteration: "uddhared ātmanātmānaṁ nātmānam avasādayet",
    english: "Lift yourself by your own effort. Do not let yourself sink.",
    citation: "भगवद्गीता · Bhagavad Gita 6.5",
  },
  {
    sanskrit: "योगः कर्मसु कौशलम्।",
    transliteration: "yogaḥ karmasu kauśalam",
    english: "Skill in action, performed with a calm mind, is itself yoga.",
    citation: "भगवद्गीता · Bhagavad Gita 2.50",
  },
  {
    sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।",
    transliteration: "patraṁ puṣpaṁ phalaṁ toyaṁ yo me bhaktyā prayacchati",
    english: "A leaf, a flower, a fruit, a little water, offered with love, I accept.",
    citation: "भगवद्गीता · Bhagavad Gita 9.26",
  },
  {
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।",
    transliteration: "ananyāś cintayanto māṁ ye janāḥ paryupāsate",
    english: "To those who think of Me alone, I carry what they lack and keep what they have.",
    citation: "भगवद्गीता · Bhagavad Gita 9.22",
  },
  {
    sanskrit: "तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्।",
    transliteration: "teṣāṁ satata-yuktānāṁ bhajatāṁ prīti-pūrvakam",
    english: "To those who serve Me with love, I give the wisdom that leads them home.",
    citation: "भगवद्गीता · Bhagavad Gita 10.10",
  },
  {
    sanskrit: "शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति।",
    transliteration: "śāntiṁ nirvāṇa-paramāṁ mat-saṁsthām adhigacchati",
    english: "Resting in Me, the heart finds the peace that ends all sorrow.",
    citation: "भगवद्गीता · Bhagavad Gita 6.15",
  },
  {
    sanskrit: "ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना।",
    transliteration: "dhyānenātmani paśyanti kecid ātmānam ātmanā",
    english: "Through stillness, some come to see the Self within the self.",
    citation: "भगवद्गीता · Bhagavad Gita 13.25",
  },
  {
    sanskrit: "अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।",
    transliteration: "abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate",
    english: "The restless mind is steadied by patient practice and gentle release.",
    citation: "भगवद्गीता · Bhagavad Gita 6.35",
  },
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = GITA_VERSES;
}
