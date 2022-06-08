export interface CourseSummary {
  slug: string;
  name: string;
  pitch: string;
}

export interface CoursePageSummary {
  title: string;
  slug: string;
}

export interface PageContent {
  courseName: string;
  pageName: string;
  content: string;
  nextPage?: CoursePageSummary;
}

export function getDummyPageContent(slug: string): PageContent {
  return PAGE_CONTENTS[slug];
}

const PAGE_CONTENTS: { [key: string]: PageContent } = {
  ['joe-c/component-tdd/01-intro']: {
    courseName: 'Components through TDD',
    pageName: 'Intro',
    nextPage: {
      title: 'Initial test',
      slug: 'joe-c/component-tdd/02-initial-test',
    },
    content: `Hello and welcome to a bite sized tutorial on how to do TDD while building a UI angular component

    We'll work through:
    - setting up the test suite's basic skeleton
    - how to write tests in plan english
    - testing user interaction
    - abstracting away detail to keep tests clear and precise
    - bonus tools and tips to increase productivity

    This is aimed at any angular developer who's keen to start writing unit tests for UI components but doesn't quite know where to start.

    Let's kick into it!`,
  },
  ['joe-c/component-tdd/02-initial-test']: {
    courseName: 'Components through TDD',
    pageName: 'Initial test',
    nextPage: {
      title: 'User input',
      slug: 'joe-c/component-tdd/01-intro',
    },
    content: `
    # Quid iacebat in languere

## Squamamque saepe nec voce

Lorem markdownum vitam sanguine [fontemque monumentis
tolerare](http://est-his.io/qua-ab) impediunt curis *exuit* factura putas.
Studiis patriis Peneosque omnia iuvenisque declivis. Pars rogus, de atque foret
contrarius ante; qua est sequitur magis. Coei tremuere uterque aristis at
lacrimae, rogem natus excidit *patet* enim flos,
[fuit](http://www.erat.io/sana-petebar.php)?

\`\`\`
motionEide += programming_mp_drop.tDebuggerParse(card);
if (83 - ict - frozen) {
    row += petaflops_spider_newbie + 1 + floating - 53;
    excel_moodle = remoteCompressionService;
    media_file_trackback.excel.alphaIntegerSurge(softwareD, bus(4, only, 3));
} else {
    multithreading(rpm + pplHeader, digitalMenuClipboard, 4 - flaming);
    externalNanometer.blog_thread_serial += 1;
}
driveMasterSmishing = searchClientWebsite;
alu *= motherboard(bus, emulationMidiHypertext(-1), management_desktop);
netbios_boot(application *
        supplyLeopardChipset.dawMountainConstant.raid_console(clipboardDvd));
\`\`\`

## Et ore nec tuum noctes

Suggerit iam et sed, quo Aesarei; ira mihi vocisque in auro solet nymphae. Quae
trahar inroravit collo inguina; meminit ossa per *meliore*. Que lateque,
cumulusque per vivere ripae dentes fuerat movet moderantum,
[linguae](http://pectoraque-gressu.net/etvoce) plausu, si deo [et
mediis](http://estmovent.net/laudatgrandia.aspx). Exilium vivunt.

## Tibi Thetidis pretium

Virgineum exarsit. Praesens nitidum ut obituque vertice carcere. Ossaque nec
habebam, dicere contrarius ludos, ab motaeque rebus. **Te ore** pervigilem tamen
rupit mutor que **tu tutela** operis cognoscere.

## Eligit haud velle Oresteae illa

Fit non et tenet, sua quae [Phaethon restat](http://www.turis.io/), cur. Et sub
transit, tellus indignis Aquilonem quem.

## Caeli quia vidi cadentibus telas silvarum durisque

Nunc suo metusque genitor Tantalis est senior, e ritu animisque celebres
diversa; **venatibus**. Duplici annosque Iphis praesensque. Hausitque velit
spectabere sermone medio partem mirantur constitit muro: dea urgeturque pondere
patriam adhuc [sceleratus](http://procul.io/aetheraimperat). Semeleia petunt
neutrumque portant verba hoc forti Iovis, abit.

\`\`\`
processor_commerce(teraflops_volume(3, networking, vista_irc_android) + primary,
        cloud.matrix_emulation_pup(30), boolean);
if (flowchartCard / thermistorPayloadCtp) {
    simm_leopard_bar += trackback_domain - printer / nas;
    rubyBar(bios, variable);
} else {
    card = 4;
    ipxPpp(page_menu, down.ict.command(817769, hypertext, qwerty_risc),
            rpcStatusUpload);
    telnet_bar.mbpsKey.rate(rtf, 2);
}
var heap_aix = ata.onOpengl(alu, resolutionUps - hyper_application_exbibyte,
        smm) * tiger_snmp_file(1, camera_public);
        \`\`\`

Pedibusque cribri communia. Iter ita anguem soror: Phoebus simul curam vulnera
campus ferentes et amplexa gratia narret negare desertae, esse. Duas Dixit
effluat canet Thoona Argolicae, **tegmina**: ait conplexusque perque.
    `,
  },
};

const PAGE_SUMMARIES: { [key: string]: CoursePageSummary[] } = {
  ['joe-c/component-tdd']: [
    {
      title: 'Intro',
      slug: 'joe-c/component-tdd/01-intro',
    },
    {
      title: 'Initial test',
      slug: 'joe-c/component-tdd/02-initial-test',
    },
    {
      title: 'User input',
      slug: 'joe-c/component-tdd/03-user-input',
    },
    {
      title: 'Dependencies',
      slug: 'joe-c/component-tdd/04-dependencies',
    },
  ],
};

export function getDummyCoursePageSummaries(slug: string): CoursePageSummary[] {
  return PAGE_SUMMARIES[slug];
}

export function getDummyCourseSummaries(): CourseSummary[] {
  return [
    {
      slug: 'joe-c/component-tdd/01-intro',
      name: 'Components through TDD',
      pitch: 'Learn how write unit tests as you build a basic component',
    },
    {
      slug: 'joe-c/marble-testing/01-intro',
      name: 'Marble testing',
      pitch: 'Learn how to test observables using marble diagrams',
    },
  ];
}
