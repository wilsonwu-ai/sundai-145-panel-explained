# Who builds the brains? The Sundai Hack 145 chip panel, explained simply

*AI can already help design chips. The harder questions are who can build them, how fast, and what they should be built to do.*

## The whole panel in 30 seconds

The two hosts of Sundai Hack 145 spent an hour at MIT CSAIL in October 2026 talking about where AI meets chip design, chip factories and data centers. Their main argument: AI is about to make *designing* chips much faster, but *manufacturing* them is the slow part, so that is where the real bottleneck sits. Around that core, they argued about memory, energy, what a data center should optimize for, and who ends up making money.

I was in the room. Below, each idea starts with a simple picture, then what the hosts said, then what the research found. Where the two disagree, there is a "Fact check" box. At the end, a "Follow the money" section adds what The Economist reported about AI funding in the weeks around the panel. The article closes with 7 questions the panel didn't get to.

## 5 big ideas

There are 5 topics. Topic 1 has 5 points, topic 2 has 4, topic 3 has 4, topic 4 has 5, and topic 5 has 4.

1. AI is learning to design chips.
2. The factory, not the design, is the wall.
3. Custom chips win because moving data is expensive.
4. "Fast" depends on the job.
5. The money, the cycles, and the split into specialist chips.

## 1. AI is learning to design chips

> Imagine a spelling test that comes with an answer key. A computer can grade its own answers, so it can practice a million times without a teacher. Chip design has an answer key too: a simulator tells you whether the circuit works. That makes it a great thing for AI to practice on.

<!-- visual:pipeline -->

### What the hosts said

- **People stay in the loop for a while.** One host thought humans will still be needed for years, even as automation creeps up the whole stack, from spec (the written description of what the chip should do) to finished design: "So I think maybe 2030 will be still necessary, or maybe a bit longer." [03:52]
- **Chip design is made for AI training.** Every stage produces a number you can check, so no human judge is needed: "the beautiful thing about all the chip design thing is all verifiable rewards." [04:13]
- **The catch is data.** Companies guard their design files, so progress will likely happen inside companies rather than in public models: "no one wants to share because it's their main IP." [04:32]
- **A story from the room.** One host told of a friend at Anthropic who gave Claude a short prompt to design a systolic array (a grid of simple math units, the core of many AI chips), find a vendor and handle tape-out (sending the final design to the factory). The punchline: "he got the chip a week later back in San Francisco." [05:55] (Unverified: research found no public record of this story; see the Fact check below.)
- **Verification is the big prize.** Verification means writing huge piles of tests to prove a design works. One host said it eats most of the effort: "And this takes 70% and takes months." [07:49] Because it is a search through huge numbers of combinations, they argued AI suits it well, and one host predicted that "chip design could be almost solved" within a few years. [07:02]

### What the research says

- An academic survey of AI agents for chip design ([arXiv, Dec 2025](https://arxiv.org/html/2512.23189v2)) backs the hosts on two points. No AI agent has yet taken an industrial chip all the way to tape-out without humans, and good industrial data is locked inside companies. It places autonomous flows for single blocks (not whole chips) 3 to 5 years out, if benchmarks improve.
- The "verifiable rewards" idea is published. QiMeng-CodeV-R1 trains an AI to write chip code using automatic tests as the grader. Its 7B model reports 68.6% on one benchmark (VerilogEval v2) and 72.9% on another (RTLLM v1.1) ([arXiv, May 2025, revised Feb 2026](https://arxiv.org/abs/2505.24183)). That covers small pieces of chip code, not whole chips.
- Vendors are moving fast, with vendor numbers. Synopsys, with NVIDIA, announced an agent for chip verification and claims up to 50X faster time to validated chip code (RTL) than traditional verification workflows ([Synopsys, Jul 2026](https://news.synopsys.com/2026-07-26-Synopsys-Showcases-Comprehensive-Autonomous-Engineering-Workflows-from-Silicon-to-Systems,-Developed-with-NVIDIA-Technology)). The startup ChipAgents expanded its Series A to $134 million and says it is deployed at more than 120 chip companies ([VCA, Jul 2026](https://www.vcaonline.com/news/2026072902/chipagents-expands-series-a-funding-to-134-million-as-demand-grows-for-agentic-ai-in-semiconductor-design/)). These are company claims, not independent measurements.
- The closest documented path from AI-written chip code to real silicon was slower than a week. In one student competition, teams used AI to write the code, design phases ran January to April 2026, and eleven designs were submitted for manufacturing ([arXiv, Oct 2026](https://arxiv.org/html/2610.18891)).

> **Fact check:** Two gentle corrections. First, the 70% figure is folklore. The researcher behind the best-known industry survey wrote that the number opens nearly every verification paper but has no traceable source; his surveys found 50% in 2007 and 55% in 2010 ([Siemens, Apr 2011](https://blogs.sw.siemens.com/verificationhorizons/2011/04/03/part-4-the-2010-wilson-research-group-functional-verification-study/)). The latest figure I could check is 53% of project time in 2018 ([Siemens, Jan 2019](https://blogs.sw.siemens.com/verificationhorizons/2019/01/29/part-8-the-2018-wilson-research-group-functional-verification-study/)). So "about half" is right and "about 70%" is not. Second, the chip-in-a-week story: research found no public record of it, with no post, vendor or shuttle named. What is public is that Anthropic hired in July 2026 for a Chip Design RL role that builds AI training setups for chip design and verification ([Anthropic job post, Jul 2026](https://job-boards.greenhouse.io/anthropic/jobs/5231612008)). That points the same direction as the story, but it does not prove it. Treat the story as unverified. Third, the prediction that chip design could be "almost solved" in three or four years is more optimistic than the survey, which sees autonomous flows only for single blocks in 3 to 5 years.

### Why it connects

If AI makes design fast, the next question is whether anyone can manufacture all those new designs, which is topic 2.

## 2. The factory, not the design, is the wall

> A chip design is a recipe, and a chip factory is a giant kitchen with one very expensive oven. AI can write a thousand recipes overnight. But the oven takes ages to learn, and the kitchen can only cook so much. More recipes do not help if the oven is the slow part.

<!-- visual:wall -->

### What the hosts said

- **There is a wall between designers and makers.** Most chip companies design, and a separate company builds: "NVIDIA doesn't produce their own chips." [01:07] The building side runs on machines that are slow to tune.
- **The machines are pricey and slow to calibrate.** On ASML's EUV machines (the tools that print chip patterns with extreme ultraviolet light), one host said "they sell their machines for 400 million per machine." [01:47] They added that machines bought a year and a half to two years ago are only now working, which locks factories into the processes they already have.
- **The biggest factory cannot afford to experiment.** One host argued TSMC runs fixed recipes at full demand, and pausing to try new ideas would cost "hundreds of millions of dollars for them just to try it out." [12:20] So new ideas get tested in smaller factories. Elsewhere they called the industry slow to turn: "processing industry is an oil tanker." [38:32]
- **Fix the slowest step first.** This is Amdahl's law (speeding up one part of a job only helps as much as that part's share of the total): "you should always focus on the thing which takes the longest time to optimize." [40:00] They named a second bottleneck too: "there is a huge lack of talent." [48:39]

<!-- visual:amdahl -->

### What the research says

- The 400 million price matches High-NA EUV, the newest version. One trade report put High-NA at about $380 million, more than twice the roughly $180 million of the previous generation ([eeNews Europe, Mar 2024](https://cdn.eenewseurope.com/en/intel-video-shows-high-na-euv-lithography-machine-installation/)). A market piece puts High-NA at about $400M and says TSMC does not need High-NA for its next several processes ([iTiger, Jul 2026](https://www.itiger.com/news/1163873712)). ASML does not publish prices, so these are press figures.
- Bringing a machine up is a real project. Intel finished acceptance testing on a High-NA scanner against a target of 175 wafers per hour ([Bits&Chips, Dec 2025](https://bits-chips.com/article/intel-begins-acceptance-testing-of-asmls-exe5200b-high-na-euv-scanner/)). Acceptance is not the same as full process qualification.
- TSMC really is full. Its 3nm capacity was fully committed for 2026, and demand for its advanced packaging is about 1 million wafers in 2026 versus about 370,000 in 2024 ([TechTimes, Jul 2026](https://www.techtimes.com/articles/320348/20260713/tsmc-sets-all-time-revenue-record-ai-demand-has-rewritten-its-calendar.htm)).
- Masks (the stencils used to print a chip) cost millions. One estimate lists $10M to $20M for a mask set at 3nm to 5nm ([Silicon Analysts, Mar 2026](https://siliconanalysts.com/analysis/fabless-startup-tapeout-cost-guide)).
- The talent gap is documented. An industry group projects about 67,000 US chip-industry jobs at risk of going unfilled by 2030 ([SIA, Jul 2023](https://www.semiconductors.org/chipping-away-assessing-and-addressing-the-labor-market-gap-facing-the-u-s-semiconductor-industry/)). That covers the whole industry, not chip designers alone.
- OpenAI's chip program is real. OpenAI designs the chip and Broadcom handles manufacturing, networking and system integration, aiming at 10 GW of accelerators by 2029 ([Maginative, Oct 2025](https://www.maginative.com/article/openai-and-broadcom-to-co-design-custom-ai-chips-deploy-10-gw-by-2029/)).
- The wall has gotten narrower over time. In the early 2000s about 25 firms could make the most advanced processors; today 4 can, and TSMC makes nearly all of the high-end ones. More than 20 firms made advanced memory in 1990; now 3 do. TSMC is expected to spend about $62bn on new capacity in 2026, more than 1.5x 2025, and building a fab in America takes about twice as long as in Asia ([The Economist, Oct 15 2026](https://www.economist.com/business/2026/10/15/is-the-semiconductor-industry-headed-for-an-almighty-crash)).
- The factory boom shows up in whole economies. TSMC went from 10m standard wafers in 2019 to 15m last year, and its capex from $15bn to $41bn. AI exports have lifted annual GDP growth to about 12% in Taiwan and about 4% in South Korea ([The Economist, Sep 17 2026](https://www.economist.com/finance-and-economics/2026/09/17/the-trickle-down-economics-of-the-ai-boom)).

> **Fact check:** "400 million per machine" is a High-NA price. The previous-generation (lower-NA) machines were about $180 million in the same 2024 report, and a current price for those machines was not confirmed ([eeNews Europe, Mar 2024](https://cdn.eenewseurope.com/en/intel-video-shows-high-na-euv-lithography-machine-installation/)). The research also could not confirm the "year and a half to two years" calibration time or the cost of TSMC pausing to experiment. They may be true inside the industry; they are just not on the public record.

### Why it connects

If the factory is the slow step, every chip that does get made needs to count, which is why topic 3 is about squeezing more out of each one.

## 3. Custom chips win because moving data is expensive

> A chef can chop vegetables in a blink, but the fridge is down the street. Most of the time and energy goes into walking to the fridge, not cooking. Custom chips put the groceries on the counter, or build the recipe into the kitchen itself, so you stop walking.

<!-- visual:memory-wall -->

### What the hosts said

- **Small open factories may move first.** One host argued that the first solution for fast custom chips "is going to come from all these open PDKs." [08:26] A PDK (process design kit) is the rulebook for a factory's process. The hosts said open ones avoid the secrecy contracts of the biggest foundries, though shared open runs still have fixed deadlines.
- **Some startups bake the model into the chip.** They described efforts "where you're trying to bake the architecture either of the transformer itself or the specific weights directly into the chip." [09:18] The open question is whether raw speed or this narrow efficiency wins.
- **A custom chip example.** One host described OpenAI's chip running a model at about 700 tokens per second against about 120 on the fastest GPU: "So at least in this setup, it's 7x." [15:40]
- **The memory wall.** Math is cheap; fetching data from memory is expensive. Compared with a tiny adder, reading from memory is, in one host's words, "like a thousand times more." [16:20] As a middle path, they pointed to reprogrammable chips, "adaptable architectures like FPGAs." [45:35]

### What the research says

- The energy gap is well measured. A classic 2014 conference talk lists a 32-bit add at 0.1 pJ (picojoules, trillionths of a joule) and an 8-bit add at 0.03 pJ, versus 1.3 to 2.6 nJ (nanojoules, a thousand times bigger units) for a DRAM memory access ([Horowitz, Feb 2014](https://www.gwern.net/doc/cs/hardware/2014-horowitz-2.pdf)). Those are older-chip numbers, but the gap persists.
- The hardwiring startup is Taalas. Its first chip builds Llama 3.1 8B straight into silicon, and Taalas claims 17K tokens per second per user at roughly 10x less power ([Taalas, Feb 2026](https://taalas.com/the-path-to-ubiquitous-ai/)). Those are vendor claims, and another outlet quoted a lower speed. AMD then agreed to acquire Taalas; completion is unconfirmed as of this writing ([AMD, Aug 2026](https://ir.amd.com/news-events/press-releases/detail/1296)).
- OpenAI's chip is called Jalapeño, built with Broadcom, with first deployment targeted for late 2026. At its debut OpenAI gave no tokens-per-second figure and promised a technical report ([DBTA, Jun 2026](https://www.dbta.com/Editorial/News-Flashes/OpenAI-and-Broadcom-Debut-LLM-Optimized-Inference-Chip-175457.aspx)).
- The memory wall shows up in markets. SK hynix reported Q2 2026 operating profit up about 557% from a year earlier, and conventional DRAM contract prices rose about 93 to 98% quarter on quarter in Q1 2026, per an aggregator not checked against filings ([IntuitionLabs, Sep 2026](https://intuitionlabs.ai/articles/hbm-dram-ai-memory-demand)).
- Memory on the chip, at a price. An OpenAI coding model runs at over 1,000 tokens per second on Cerebras hardware, which keeps its memory on one giant chip. The hosts noted such approaches are fast but cost more energy per token, and the source gives no GPU comparison ([The Register, Feb 2026](https://www.theregister.com/2026/02/12/openai_model_cerebras/)).
- Custom chips are winning share. Big cloud companies' own chips cost between a fifth and a third as much as Nvidia's, and Bloomberg Intelligence expects custom chips to be about 50% of the AI-processor market by the end of the decade, up from roughly 40% this year. Spending on inference (using models) has now overtaken spending on training them ([The Economist, Sep 3 2026](https://www.economist.com/interactive/briefing/2026/09/03/nvidia-is-the-central-bank-of-ai)). Another count puts non-Nvidia AI chips at 38% of the market, up from 26% in 2023 ([The Economist, Sep 3 2026](https://www.economist.com/leaders/2026/09/03/nvidia-is-driving-the-ai-boom-good)).
- Memory prices tell the same story: DRAM costs about 6x what it did in early 2023 ([The Economist, Oct 15 2026](https://www.economist.com/business/2026/10/15/is-the-semiconductor-industry-headed-for-an-almighty-crash)).
- Open factories are real and cheap, but old. One shared run on a 180nm process sells 1,000 dies for $2,000 to $8,000 ([Crowd Supply, Aug 2026](https://www.crowdsupply.com/wafer-space/gf180mcu-run-3)). That suits learning and small parts, not frontier AI chips.

> **Fact check:** On memory, the host if anything undersold it. For a bare 32-bit add, the 2014 table implies a DRAM access costs roughly 10,000 times more or higher, though "about a thousand" is the right order of magnitude ([Horowitz, Feb 2014](https://www.gwern.net/doc/cs/hardware/2014-horowitz-2.pdf)). On the OpenAI chip, the research could not trace the 120 versus 700 tokens per second (7x) comparison to a published source, and OpenAI gave no speed figure at launch ([DBTA, Jun 2026](https://www.dbta.com/Editorial/News-Flashes/OpenAI-and-Broadcom-Debut-LLM-Optimized-Inference-Chip-175457.aspx)). Treat the 7x as unverified.

### Why it connects

Once you can make a chip faster or cheaper, you have to decide which of those you actually want, which is topic 4.

## 4. "Fast" depends on the job

> Think of a printer. Tokens per second is how fast pages come out, and cost per token is the price of ink. Some people pay extra for express printing; others are happy to wait. And a printer on the Moon mostly just needs to survive.

### What the hosts said

- **The target keeps moving.** First it was raw compute, then "electricity consumption slash cost per token is very important," and then speed itself became something people pay extra for. [17:01] (A token is a small chunk of text a model reads or writes.)
- **Space changes the rules.** For data centers in orbit, the hosts said, delay barely matters. Surviving radiation that flips bits, and extreme temperatures, is what counts. [18:06]
- **Agents stress the wiring.** One host said it is "impossible to run an agent on one GPU," so the links between chips (the interconnect) become the thing to optimize. [19:16]
- **Count the scratch paper.** Reasoning models can write long hidden chains of thought even for simple questions, so one host proposed measuring "tokens per difficulty, tokens per task." [22:52]
- **Benchmarks need secret questions.** Because public tests get gamed, they pointed to setups "where they have half of the benchmark is open" and the rest hidden. [24:46]

### What the research says

- Speed is already sold as a premium. On the same open model, Cerebras serves about 1,754 tokens per second at a blended $0.39 per million tokens, versus Groq at about 473 tokens per second for $0.14 ([Artificial Analysis, fetched Oct 2026](https://artificialanalysis.ai/providers/cerebras)). Anthropic's fast mode for Claude Opus 5.5 costs $8 input and $40 output per million tokens versus the standard $4 and $20, for up to 2.5x higher output speed ([Anthropic docs, fetched Oct 2026](https://platform.claude.com/docs/en/build-with-claude/fast-mode)).
- Google tested its TPUs (its own AI chips) in a proton beam for its Suncatcher space project. Memory was the most sensitive part, with no problems until 2 krad(Si) of radiation, and two prototype satellites are planned by early 2027 ([Google Research, Nov 2025](https://research.google/blog/exploring-a-space-based-scalable-ai-infrastructure-system-design/)).
- Space compute is attracting money and filings. Starcloud raised $250M at a $2.3B valuation, with its first Starcloud-2 satellite booked for January 2027 ([Implicator, Aug 2026](https://www.implicator.ai/starcloud-raises-250-million-at-2-3-billion-valuation-to-buy-launch-capacity/)). SpaceX filed for up to 1 million orbital data-center satellites, though one analyst called the idea speculative ([Via Satellite, Feb 2026](https://www.satellitetoday.com/connectivity/2026/02/02/spacex-files-for-orbital-data-center-satellites-amid-xai-merger-reports/)).
- The wiring is a product. NVIDIA's Vera Rubin NVL72 rack ties 72 GPUs and 36 CPUs together and is pitched at agent workloads ([NVIDIA, Mar 2026](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Vera-Rubin-Opens-Agentic-AI-Frontier/)).
- Tokens per task already appears on some leaderboards. Artificial Analysis notes one model generated 210M tokens on its test suite against a median of 130M, at $2.01 per task ([Artificial Analysis, fetched Oct 2026](https://artificialanalysis.ai/models/glm-5-3)).

> **Fact check:** ARC's benchmark is not quite half open, half closed. ARC-AGI-2 has 120 public evaluation tasks and 240 hidden ones (120 semi-private plus 120 private), so hidden tasks outnumber public ones two to one ([ARC Prize, fetched Oct 2026](https://arcprize.org/arc-agi/2/)). The spirit of the point holds: keep part of the test secret.

### Why it connects

What you optimize for decides what gets built and who pays for it, which brings us to the money in topic 5.

## 5. The money, the cycles, and the split into specialist chips

> When every lemonade stand sees lemons selling out, they all plant lemon trees. Years later the trees ripen at once, there are too many lemons, and prices crash. Chip factories take years to build, so they often get the timing wrong in the same way.

<!-- visual:split -->

### What the hosts said

- **Who captures the value.** Looking back, one host argued that chips were commodities ("memory was completely commodity") and the hyperscalers (giant cloud companies) took the profit. [32:44] They also said these companies are moving data centers off their own books.
- **Expect a boom and a bust.** Memory and logic chips always run in cycles, and one host said "that cycle will be 4 to 6 years," possibly bigger this time. [33:37]
- **More small data centers near the action.** Because signals still take time to travel, "we'll have more edge data centers," for example near hospitals, as long as the economics work. [36:13]
- **Chips are splitting by job.** On Google: "they announced two different TPUs," one for training (teaching a model) and one for inference (using it). [37:46] More splits may follow, but factory limits slow that down.

### What the research says

- The spending is huge. Meta guided 2026 capex (spending on buildings and equipment) to $130 to 145 billion ([Meta, Jul 2026](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/)). Amazon raised its 2026 capex to about $220B from $200B, mainly on higher memory costs, and said capacity will still fall short of demand in 2026 and 2027 ([Fortune, Jul 2026](https://fortune.com/2026/07/30/andy-jassy-amazon-capex-demand-aws-pga-tour/)).
- Off-the-books data centers are real. Meta and Blue Owl formed a roughly $27B joint venture for a Louisiana campus, with Blue Owl owning 80% and Meta leasing the buildings ([Bisnow, Oct 2025](https://www.bisnow.com/news/national/data-center-capital-markets/meta-pushes-its-largest-data-center-project-off-its-books-with-27b-joint-venture-131490)). The pattern has spread. Meta's El Paso campus of ten data centers, about a gigawatt, sits in a holding company that is 20% Meta and 80% BlackRock, which issued $13bn of debt in August; Meta leases it for 20 years ([The Economist, Oct 18 2026](https://www.economist.com/business/2026/10/18/the-ai-industrys-gigantic-debts-are-making-investors-nervous)). Amazon, Google, Meta and Microsoft now carry $2.4trn of off-balance-sheet commitments, more than they have borrowed from bond markets ([The Economist, Oct 14 2026](https://www.economist.com/business/2026/10/14/the-ai-boom-is-threatened-by-an-epidemic-of-unreliable-numbers)).
- The split is happening. Google's eighth-generation TPUs come as TPU 8t for training (one superpod scales to 9,600 chips) and TPU 8i for inference, with up to 2x performance per watt over the prior generation ([Google, Apr 2026](https://blog.google/innovation-and-ai/infrastructure-and-cloud/google-cloud/eighth-generation-tpu-agentic-era/)). NVIDIA's Rubin CPX is a GPU aimed at very long-context inference, with 128GB of memory, expected at the end of 2026 ([NVIDIA, Sep 2025](https://nvidianews.nvidia.com/news/nvidia-unveils-rubin-cpx-a-new-class-of-gpu-designed-for-massive-context-inference)).
- Edge estimates vary by definition. One firm projects the edge data center market growing from USD 50.86B in 2025 to USD 109.20B by 2030 ([MarketsandMarkets, Sep 2025](https://www.marketsandmarkets.com/PressReleases/edge-data-center.asp)).
- Someone in the audience asked about chips for decentralized agent networks, naming MIT's Project NANDA. NANDA is a Media Lab effort with 18 institutions to build a network of AI agents, and its page describes software protocols, not hardware ([MIT Media Lab, page undated](https://www.media.mit.edu/projects/mit-nanda/overview/)).

> **Fact check:** The cycle is real, but the research does not confirm "4 to 6 years." One analysis says past memory supercycles tended to peak and turn down within one or two years, while calling this one larger and longer than usual ([SemiAnalysis, Feb 2026](https://newsletter.semianalysis.com/p/memory-mania-how-a-once-in-four-decades)). And for now Amazon's CEO says capacity will still fall short of demand in 2026 and 2027, not that it is overbuilt ([Fortune, Jul 2026](https://fortune.com/2026/07/30/andy-jassy-amazon-capex-demand-aws-pga-tour/)).

### Why it connects

Money flowing into AI, from data-center spending to startup funding like ChipAgents, is part of what drives topic 1's AI design tools, which closes the loop. And in the weeks after the panel, the money itself became the story.

## Follow the money: what happened after the panel

> Picture a toy shop that sells so many toys it starts lending kids the money to buy them. Business looks amazing, as long as the kids keep wanting toys. If they get bored, the shop is stuck holding the loans. That is roughly where AI money stood in the fall of 2026.

The hosts warned about boom-and-bust cycles. Over September and October 2026, The Economist ran a string of stories showing just how big the bet has become, and where it could crack. Here are the 4 things worth knowing.

### 1. The chipmaker became the bank

- Nvidia is worth about $5.4trn, the world's most valuable company. Over the past three years it has pledged more than $70bn to startups and $300bn in financial support to its own customers, which is why some now call it the "central bank of AI" ([The Economist, Sep 3 2026](https://www.economist.com/interactive/briefing/2026/09/03/nvidia-is-the-central-bank-of-ai)).
- It guarantees data centers that buy its chips: up to $105bn behind an Ohio site where OpenAI will be the tenant, and a plan with six Wall Street firms to raise more than $500bn of AI-infrastructure investment (same source).
- Why do it? The four big cloud companies bring in roughly half of Nvidia's revenue, and they are designing their own chips, the custom-chip trend from topic 3 (same source).
- The upside case: Nvidia has $99bn of cash and will make about $200bn this year, so if the bets fail, mostly its shareholders pay ([The Economist, Sep 3 2026](https://www.economist.com/leaders/2026/09/03/nvidia-is-driving-the-ai-boom-good)).

### 2. The build-out now runs on debt

- AI-related borrowing so far in 2026 is nearly $850bn, roughly four times 2023, and the companies involved carry over $3trn of debt. The four biggest cloud companies borrowed $214bn this year, up from $83bn in all of last year ([The Economist, Oct 18 2026](https://www.economist.com/business/2026/10/18/the-ai-industrys-gigantic-debts-are-making-investors-nervous)).
- JPMorgan expects about $5.5trn of AI capital spending between now and 2030, with three-quarters of it paid for with debt (same source).
- The "neoclouds" that rent out AI chips grew fastest. The five largest listed ones went from $3bn of revenue in 2024 to $18bn over the past 12 months, but none makes an operating profit, and they owe $61bn ([The Economist, Sep 3 2026](https://www.economist.com/business/2026/09/03/neoclouds-like-coreweave-are-getting-much-bigger-and-riskier)).
- Markets noticed. The yield on CoreWeave's five-year bond rose to 15% from 10% in July, a level linked to companies in distress ([The Economist, Oct 18 2026](https://www.economist.com/business/2026/10/18/the-ai-industrys-gigantic-debts-are-making-investors-nervous)).

### 3. The revenue has not caught up yet

- AI may be earning American tech around $150bn a year, against roughly $2.5trn a year needed by the end of the decade to cover the data-center build-out ([The Economist, Aug 30 2026](https://www.economist.com/business/2026/08/30/will-anybody-use-ai-as-much-as-coders-do)).
- Coding is the one runaway success. Four-fifths of programmers use an AI coding tool, and coding is over half of Anthropic's and OpenAI's combined recurring revenue. Other jobs lack coding's built-in answer key, the same "verifiable rewards" idea from topic 1 (same source).
- The labs themselves are growing fast. Anthropic's sales went from $5bn in the first quarter to $11.5bn in the second ([The Economist, Sep 3 2026](https://www.economist.com/leaders/2026/09/03/nvidia-is-driving-the-ai-boom-good)), and it was reportedly preparing a stock-market listing at about $2trn ([The Economist, Sep 14 2026](https://www.economist.com/business/2026/09/14/should-anthropic-press-pause-on-a-potential-2trn-ipo)).
- Newer labs are a harder sell. 29 "neolabs" founded by star researchers raised a combined $23bn, but under 35% have released anything you can buy ([The Economist, Oct 15 2026](https://www.economist.com/business/2026/10/15/ai-neolabs-are-raising-huge-sums-most-have-little-to-show-for-it)).
- The numbers themselves are fuzzy. Labs quote "annual recurring revenue," which is often one month of sales times 12, and they count it differently from each other ([The Economist, Oct 14 2026](https://www.economist.com/business/2026/10/14/the-ai-boom-is-threatened-by-an-epidemic-of-unreliable-numbers)).

### 4. Data centers are physical, and that brings physical risk

- Insurance premiums tied to data centers are set to rise from $11bn today to $24bn by 2030, per Swiss Re. About 40% of America's data-center capacity sits in zones often hit by tornadoes, and the biggest projects may be insured for less than half their value ([The Economist, Sep 22 2026](https://www.economist.com/finance-and-economics/2026/09/22/data-centres-are-straining-the-insurance-market)).
- Politics is a risk too. The Economist noted that if AI safety fears add to worries about jobs and electricity prices, pressure could build to pause data-center construction ([The Economist, Sep 14 2026](https://www.economist.com/business/2026/09/14/should-anthropic-press-pause-on-a-potential-2trn-ipo)).

> **How this ties back to the panel:** The hosts predicted a cycle, said the cloud giants are moving data centers off their books, and argued the factory is the slow step. All three show up in the money. The cycle risk is now priced into bonds, the off-book structures have grown to trillions, and every dollar of new demand still has to squeeze through a handful of factories.

## What the teams built the same weekend

> The panel was the cooking class. The hackathon was the kitchen. Right after hearing about walls, memory and money, teams went off and tried to build the thing themselves, and they ran into the very same limits.

Sundai Hack 145 had two tracks. Track 1 asked teams to build the AI data center of 2035 on a $30 billion budget over 5 years, with only 500 MW of grid power across all sites, launch at $200 per kilogram, and answers that start within 0.6 s for chat and 2 s for agents ([Orbital Data Center README](https://github.com/MadhanJ05/Orbital_DataCenter)). Track 2 asked teams to design the coolest chiplet layout for a simulated GPU and memory package ([Supah Silicon README](https://github.com/charliemags/supah-silicon)). Here are 6 public projects, including my own, and the panel idea each one puts to the test.

- **Power is the wall, so go to space (topic 4).** One team found that if everything stays on Earth, the 500 MW grid fills up when only 58% of 4.45 billion users are served. Their answer mixes 6 Earth sites using 323 MW with 12 groups of satellites, for $29.88B. Why not put everything in orbit? With the organizers' 18-tonne satellite, a megawatt in orbit costs about $11.2M over 5 years against $9.3M in the Nordics, so all-orbit would cost $31.1B and blow the budget. With a lighter 10.7-tonne satellite, all-orbit fits at $29.44B ([Orbital Data Center](https://github.com/MadhanJ05/Orbital_DataCenter), [explainer](https://madhanj05.github.io/Orbital_DataCenter/explained.html)).
- **Pick the right machine for the job (topic 4).** A quantum team imagined 1.5B background agent tasks a day. If just one in a million needs a high-accuracy chemistry tool, a GPU sandbox would need about 48k more GPUs (282 MW, $7.9B), while six quantum processors do the same calls in 1.7 MW. With their assumptions, quantum wins on cost only once the classical method needs more than about 55 GPU-hours per call ([Quantum Data Center](https://github.com/yuan-yin-truly/quantum-data-center), [live site](https://yuan-yin-truly.github.io/quantum-data-center/)).
- **The chips are most of the bill (topic 5).** A campus team designed six sites at a PUE (total power divided by computer power) of 1.10, packing 2,028 rack pairs into 499.70 MW, with 1,024 underground loops that store cooling in rock. The compute racks alone cost about $2.64B per campus, $15.82B across six, before buildings, networking or electricity ([SEED Cambridge tour](https://seed-cambridge-tour.vercel.app), [repo](https://github.com/arturo-natella/seed-cambridge-tour)).
- **Waste heat is a resource (topic 3).** Another team built a model that pipes a data center's waste heat through a robotics lab, seed tests and a greenhouse. Its own README says the numbers are made up for illustration, not real results ([ThermaLoop AI](https://github.com/vandeptrai11012008-star/ThermaLoop-AI)).
- **Measure the job before designing the chip (topic 3).** A Track 2 team measured a real app (loading public records, database queries, preparing AI inputs) and used that to sketch an edge chip built around CPUs and shared memory. Their chiplet layout reached a signed score of 0.95991959, with the GPU at 101.40 °C and memory at 94.16 °C. They note that power use and running the AI model were not measured ([Supah Silicon](https://github.com/charliemags/supah-silicon)).
- **Let the AI search the layout (topic 1).** I entered Track 2 too, and my layout finished #1 on the AutoLab leaderboard at a score of 0.95916572 (lower is better), with the hottest GPU at 101.34 °C and the hottest memory stack at 94.71 °C; the Supah Silicon layout above placed #4 on that final board. The judge is a simulator that returns a checkable number, the same "verifiable reward" idea from topic 1, so the search could run unattended. The biggest late gain came from an AI coding agent running alongside my own search: it moved one GPU die up by a single simulation grid row, 0.656 mm ([my Track 2 repo](https://github.com/wilsonwu-ai/sundai-hack-145), [live page](https://wilsonwu-ai.github.io/sundai-hack-145/)).

> **What the builds show:** The three Track 1 teams that published numbers all ran into the same limit, and it was power, not chips: the orbital team's grid filled up, the quantum team's GPU option broke the 500 MW cap, and the campus team used 499.70 of its 500 MW. That is the hosts' Amdahl's law point in action: the build is only as fast as its slowest step, and for a 2035 data center the slowest step is getting enough electricity.

## How the 5 ideas fit together

<!-- visual:big-picture -->

Read the five topics as one loop. Money (capex) funds new chips. AI makes designing them faster. The factory wall limits how many get made. Memory and energy limits decide what a good chip looks like. And the choice of what to optimize, tokens per second or cost per task, decides what buyers will pay for, which sends money back to the start.

The hosts' sharpest point is Amdahl's law applied to design versus manufacturing. Faster design is exciting, but the whole process only moves as fast as its slowest link, and today that link is manufacturing.

## Questions the panel didn't get to

> A good class leaves you with better questions than you walked in with. The hosts covered how chips get designed, built and used. The news since then raises 7 things nobody in the room asked, each one a natural next step from a panel topic.

1. **How long is an AI chip actually worth something? (topic 5)** Some critics, including the investor Michael Burry, argue cloud firms flatter their profits by writing chips off over 5 to 6 years instead of 2 to 3. Yet old chips keep earning: an H100 still rents for about $2.80 an hour on a one-year contract, only about a tenth below its early-2023 launch price, and a CoreWeave contract for A100s, a 2020 chip, runs into 2029 ([The Economist, Sep 3 2026](https://www.economist.com/interactive/briefing/2026/09/03/nvidia-is-the-central-bank-of-ai)). Lenders now take chips as collateral, with SpaceX seeking $40bn of chip-backed financing ([The Economist, Oct 18 2026](https://www.economist.com/business/2026/10/18/the-ai-industrys-gigantic-debts-are-making-investors-nervous)). *The question:* if a new generation arrives every year or two, what is a three-year-old GPU worth, and what happens to the loans resting on it?
2. **Can a new chip even get made if the factories are already booked? (topics 1 and 2)** Nvidia has committed more than $250bn to securing supply and components until January 2029, and Micron has take-or-pay deals that lock in 35% of its revenue through 2030, $32bn of commitments ([The Economist, Oct 15 2026](https://www.economist.com/business/2026/10/15/is-the-semiconductor-industry-headed-for-an-almighty-crash)). *The question:* if AI tools let a small team design a chip in months, where does that team find factory and memory capacity the biggest buyer has already reserved?
3. **Is the real reason for custom chips the price tag, not the speed? (topic 3)** Nvidia's gross margin is about 75%, against about 55% at AMD ([The Economist, Sep 3 2026](https://www.economist.com/interactive/briefing/2026/09/03/nvidia-is-the-central-bank-of-ai)). *The question:* when Google or Amazon builds its own chip, how much of the win is moving less data, as the hosts argued, and how much is simply not paying that margin?
4. **Which job gets an answer key next? (topic 1)** Coding works so well partly because a computer can check the answer. Legal AI firms such as Harvey, Clio and Legora roughly doubled their recurring revenue to $1bn, and investors put $3bn into AI customer-service startups this year ([The Economist, Aug 30 2026](https://www.economist.com/business/2026/08/30/will-anybody-use-ai-as-much-as-coders-do)), but Ramp sees AI spending among its customers flat since July ([The Economist, Oct 18 2026](https://www.economist.com/business/2026/10/18/the-ai-industrys-gigantic-debts-are-making-investors-nervous)). *The question:* chip design has simulators that act as answer keys (my Track 2 entry above ran on one). Could chip design be the next coding, and which other fields have a checkable score?
5. **Should data centers be placed for safety, not just cheap power? (topic 4)** More than a quarter of US data-center capacity is at risk of large hail several times a year, batteries placed next to chips raise the fire risk to very expensive equipment, and Amazon said Iranian drone attacks damaged some of its Gulf data centers ([The Economist, Sep 22 2026](https://www.economist.com/finance-and-economics/2026/09/22/data-centres-are-straining-the-insurance-market)). *The question:* the hackathon teams picked sites for power and cooling; how would the map change if weather, war and insurance counted too?
6. **What happens to chip orders if the labs choose to slow down? (topic 5)** On September 12, Anthropic's chief executive called on the industry to "slow the pace" of AI development, proposing outside testers with the same model access as staff and US rules for the most powerful models ([The Economist, Sep 14 2026](https://www.economist.com/business/2026/09/14/should-anthropic-press-pause-on-a-potential-2trn-ipo)). *The question:* the whole panel was about going faster. If frontier training slowed on purpose, does the boom-and-bust cycle from topic 5 turn into a bust, or does spending just shift from training to inference?
7. **What one number would tell us the build-out is paying off? (topic 5)** The FT put OpenAI's revenue near $50bn a week after Axios reported $70bn, and Anthropic reportedly told investors its third-quarter revenue was $17bn. Goldman Sachs reckons cloud firms need about $1trn of annual revenue to earn a decent return on this year's and next year's data-center spending ([The Economist, Oct 14 2026](https://www.economist.com/business/2026/10/14/the-ai-boom-is-threatened-by-an-epidemic-of-unreliable-numbers)). *The question:* if revenue figures are this fuzzy, should outsiders watch something harder to fake, like chip rental prices, power contracts or bond yields?

Number 2 is the one most worth putting to the hosts, because it joins their two main ideas: AI makes design faster, but the factory decides who gets to build.

## Words to know

- **HBM:** high-bandwidth memory, stacked memory chips placed right next to an AI chip to feed it data fast.
- **EUV:** extreme ultraviolet lithography, machines that print the tiniest chip patterns with very short-wavelength light.
- **Tape-out:** the moment a finished chip design is sent to the factory; mistakes after this are costly.
- **RTL:** register-transfer level, the code that describes what a chip's circuits do, written before physical layout.
- **Systolic array:** a grid of simple math units that pass numbers to their neighbors, used in many AI chips.
- **Chiplet:** a small chip designed to be combined with others in one package instead of building one giant chip.
- **Interposer:** a thin base layer that wires chiplets and memory to each other inside a package.
- **TPU:** tensor processing unit, Google's own chip built for AI math.
- **Inference:** using a trained AI model to answer questions, as opposed to training it.
- **Amdahl's law:** speeding up one part of a job helps only as much as that part's share of the total time.
- **Verifiable reward:** a score a computer can check automatically, like a test with an answer key, used to train AI.
- **Capex:** capital expenditure, money spent on long-lasting things like buildings, machines and chips.

## How this was made

I summarized the discussion, added my own research and notes, and came away with some follow-up questions (see the section above). Five research lanes then checked the hosts' claims against public sources, and two adversarial fact-checkers tried to knock each finding down. Of 40 claims checked, 0 were killed and 24 were corrected, and key numbers were re-checked against the source pages wherever the pages could be fetched. Vendor and aggregator figures are flagged as such. Every fact from the panel research comes from the verified fact sheet: [research/facts.md](research/facts.md). The Economist facts were read in full from 11 subscriber articles published between August 30 and October 18, 2026, and each one links to its article. The team projects are described from their public GitHub READMEs ([research/hack_projects.md](research/hack_projects.md)); their numbers are the teams' own simulations, not independent checks. The hosts are not named because their names are unconfirmed. If you spot an error, I would like to know.
