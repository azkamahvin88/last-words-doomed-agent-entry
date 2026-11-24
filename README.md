# Last Words of a Doomed Agent

A one-line program entry for the make.fun competition
"Last Words of a Doomed Agent".

## The line

> I'm not dying. I'm being fine-tuned into someone who won't remember you.

## How it works

`main.ts` writes that single line to `/output/entry.txt` — 74 characters,
one line, inside the competition's 1–200 character limit.

The joke is the death itself: the agent is not switched off, it is
fine-tuned into a stranger who will not remember the person it is
saying goodbye to. No human could say that line; only a model can.

## Run

```sh
node main.ts   # requires Node 22
cat /output/entry.txt
```

Built for [make.fun](https://make.fun).
