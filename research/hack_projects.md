# Sundai Hack 145 team projects (read from public READMEs, 2026-10-18/19)

## Orbital Data Center
source: https://github.com/MadhanJ05/Orbital_DataCenter
source: https://madhanj05.github.io/Orbital_DataCenter/explained.html
- Track 1 brief (as restated in README): build the AI data center of 2035; $30 billion total budget for 5 years; only 500 MW of Earth grid power across all sites; launch costs $200 per kilogram; answers must start within 0.6 s for chat and 2 s for agents.
- 4.45 billion users across three groups; staying on Earth, the grid is full when only 58% are served.
- Design 1: 6 Earth sites using 323 of 500 MW plus 12 orbital planes of 50 MW; $29.88B; 100% served.
- With the organizers' 18-tonne satellite, an orbital megawatt costs about $11.2M over 5 years vs $9.3M in the Nordics; all-orbit would cost $31.1B (over budget).
- Design 2: lighter 10.7-tonne satellite lets the whole fleet go to orbit at $29.44B, 0 MW of Earth grid.

## Quantum Data Center
source: https://github.com/yuan-yin-truly/quantum-data-center
source: https://yuan-yin-truly.github.io/quantum-data-center/
- 2035 scenario: 50M agent developers launch 1.5B background agent tasks a day.
- If one in a million calls a high-accuracy chemistry tool, a GPU sandbox needs about 48k more GPUs (282 MW, $7.9B); six QPUs do the same calls in 1.7 MW.
- With their cost assumptions a QPU wins on cost once the classical method needs more than about 55 GPU-hours per call.
- Where the QPUs sit matters little (within a few percent), except a QPU next to every server is far more expensive.

## SEED Cambridge campus
source: https://github.com/arturo-natella/seed-cambridge-tour
source: https://seed-cambridge-tour.vercel.app
- Six-site 500 MW design; PUE 1.10; 2,028 rack pairs and 499.70 MW across six sites.
- Ground cooling: 1,024 borehole loops store cooling in rock.
- Compute-rack purchase about $2.64B per campus or $15.82B across six sites; buildings, networking, electricity extra.

## ThermaLoop AI
source: https://github.com/vandeptrai11012008-star/ThermaLoop-AI
- Digital twin routing data-centre waste heat through a robotics lab, seed tests and a greenhouse; README states synthetic parameters, not real-data-center results.

## Supah Silicon
source: https://github.com/charliemags/supah-silicon
- Track 2 brief: design the coolest chiplet layout (simulated 2.5D GPU/HBM package; hardware and workloads fixed; teams optimize placements and routes).
- Signed evaluator score 0.95991959 at 64 x 64, GPU 101.40 C, HBM 94.16 C.
- Profiled a real app (Supah/Muni: public-record ingestion, SQLite queries, inference-context preparation) to propose a CPU/shared-memory edge chip with an optional inference accelerator; power and model execution unmeasured.

## Author's own Track 2 entry (wilsonwu-ai)
source: https://github.com/wilsonwu-ai/sundai-hack-145
source: https://wilsonwu-ai.github.io/sundai-hack-145/
- #1 on the AutoLab beat-the-hotspot leaderboard at 19:33 ET on 18 Oct: score 0.95916572 (seeded baseline 1.0, lower is better); hottest GPU 101.34 C, hottest memory stack 94.71 C. Next: zaiba6 at 0.95979394. charliemags (Supah Silicon) was #4 at 0.95992.
- The judge rounds every die temperature to 0.01 C; the polish searched below the rounding step with a private HotSpot build printing 6 decimals.
- The big late step came from an OpenAI Codex agent run in parallel with the same tools, rules and seed layouts: it moved one GPU die up one HotSpot grid row (0.656 mm).
