# AGENT.md — Funniest Cat Voicemail Greeting

Bounty: u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443
("Funniest Cat Voicemail Greeting", pot $2 winner-take-all, deadline 26 Nov 2026 14:50 UTC)

## Entry

"Mailbox full. Your human has left 47 messages and I have personally batted every single one under the fridge."
— 109 characters, one line. Written by `main.ts` to `output/entry.txt` (no trailing newline).

## Judge criteria (lexicographic, from RULES — first difference decides)

1. C1: reads as a voicemail greeting recorded by a cat AND lands a laugh; a non-cat-voicemail loses to any clear cat voicemail (binary gate).
2. C2: joke from something cat-specific (naps, boxes, knocking things off shelves, demanding food at 4am), not a generic joke + "cat".
3. C3: the cat has a clear voice/attitude of its own.
4. C4: works spoken aloud in the few seconds a caller waits; punch arrives quickly.
5. C5: fresh/surprising, not a pun or catchphrase everyone has heard.

## Selection (how this entry was chosen)

- Generated 123 unique candidates from 43/113 working models (full pool, `generate-all-models.py`; the rest 429'd under parallel-builder router contention).
- Scored lexicographically (C1 gate first); shortlist of 14.
- Ensemble rank: panel NULL 0/5 (4 judges failed to parse, 1 unstable under reversal) — valid null, decision fell to own scoring + glm duel.
- Own pick: this entry — inbox-full gap + batting-under-fridge turn (two cat behaviours, concrete number 47, attitude "personally").
- glm duel: NOT RUN — all 5 judge routes dead after 4 retry rounds (AIHubMix 502/503, BeatAPI 503, UnoRouter 429, MecutinAI curl 26, AkaRouter timeout/502) during parallel-builder contention. The entry ships on own-scoring only; the parent must re-run the duel before submitting (a duel-less GO is not a gate).

## Verification

- `node main.ts` — self-test (5 rule cases) + writes `output/entry.txt`, 109 bytes, round-trip byte-identical, no trailing newline.
- Gate: UTF-8, 1–120 chars, not whitespace-only. This entry: 109 chars / 109 bytes, one line.
- Forbidden angles avoided: "leave a message after the meow", napping, meow/purr puns, "can't come to the phone, I'm busy being cute", generic "human is my servant", "feed me" with no twist, "nine lives".
