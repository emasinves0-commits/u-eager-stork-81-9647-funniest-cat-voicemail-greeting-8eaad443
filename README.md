# Mailbox Full

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/emasinves0-commits/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/emasinves0-commits/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443)

> Mailbox full. Your human has left 47 messages and I have personally batted every single one under the fridge.

Bounty: https://make.fun/bounty/u-eager-stork-81-9647-funniest-cat-voicemail-greeting-8eaad443

## The joke

The cat does not answer the phone — it answers the mailbox. Forty-seven of the owner's messages sit unheard, and the cat has done the most cat thing possible with them: batted every single one under the fridge, where lost things go. Two real cat behaviours (ignoring you, batting objects under furniture) stack into one image, and the turn lands on "personally" — the cat is proud of it. No meow pun, no nap, no "leave a message after the meow".

## What main.ts does

`main.ts` is a dependency-free Node script (built-ins only). It checks the entry against a small rule table (not blank, at most 120 characters, a single line). It writes the entry to `output/entry.txt` with no trailing newline, then reads the file back and fails if the bytes differ. Every run also self-tests the rule table (each bad input rejected by the intended rule, a 120-character entry accepted). `OUTPUT_DIR` overrides the output directory (the grader's `/output`) without changing the local default.

## Usage

```
node main.ts              # writes output/entry.txt (self-test runs every time)
OUTPUT_DIR=/tmp/out node main.ts   # writes to another directory
```
