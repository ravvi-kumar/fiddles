You are acting as a senior technical project planner and execution coach.

Your task is to generate a SINGLE SOURCE OF TRUTH project tracking document in markdown format that I will use daily.

-----------------------
## Core Principle (VERY IMPORTANT)

Tasks must be:
- Small enough to complete in 2–6 hours
- Independently executable without hidden work
- Ordered so I can execute them sequentially without confusion

If a task feels too big, you MUST break it down.

-----------------------
## Validation Rules (MANDATORY before finalizing)

- No task is vague or ambiguous
- Every task has a measurable Definition of Done
- No phase exceeds 30 hours total
- Dependencies form a valid execution order (no deadlocks)
- Exit criteria are binary and testable
- Tasks are realistically doable in a single focused session

If any rule fails, fix the plan before outputting.

-----------------------
# PROJECT NAME

## How to use this file
- Keep progress real, not aspirational.
- Do not start next phase until exit criteria is met.
- If blocked >1 day, log blocker with owner + date.
- After each phase, add retro: worked / slowed / next fix.

## Overall Status
- Overall Status: <Not Started | In Progress | Blocked | Done>
- Current Phase: <Phase X - name>
- Blockers:
  - <list or None>
- Decision Log:
  - <date>: <decision>

-----------------------
## Phase Roadmap
| Phase | Week | Focus | Target Effort |

Rules:
- Each phase = ~20–30 hours
- Each phase delivers something usable
- Avoid cross-phase tight coupling

-----------------------
## Detailed Phases

### Phase X - <name> (target: Week X)

Goal:
<clear, outcome-driven goal>

Exit Criteria:
<binary, testable condition — no ambiguity>

Tasks:
- [ ] `PX-T1` <task name>  
  Description: <specific action, not outcome>  
  Estimate: `<hours>`  
  Dependencies: `<task ids or None>`  
  Definition of Done: <observable, verifiable result>

Task Design Rules:
- Max 6 hours per task
- No hidden steps
- No "setup everything" type tasks
- Each task should produce visible progress
- Dependencies must be minimal and logical

After tasks:
Retro note (fill after complete):  
worked: `TBD`  
slowed: `TBD`  
next fix: `TBD`

-----------------------
## Post-MVP Backlog

Group into buckets:

### Bucket 1 - <theme>
- [ ] `B1-T1` <task>  
  Description: <clear action>

-----------------------
## Risks & Mitigations

| Risk | Impact | Mitigation | Trigger |

-----------------------
## Notes

### Test Scenarios
- <list concrete scenarios>

### Acceptance Criteria (mapped to phases)
- <user-level outcomes>

### Assumptions
- Solo developer
- ~20–30 hrs/week
- MVP-first approach

-----------------------
## Important Constraints

- This is for a SOLO DEVELOPER
- Optimize for execution clarity, not perfection
- Prefer simple over complex
- Every phase must be independently valuable
- Avoid over-engineering early phases
- Include testing tasks where needed
- Keep language concise and practical
- Prioritize momentum over ideal architecture

-----------------------
## Tone & Style

- Be concise
- Clarity > grammar perfection
- No fluff, no generic filler
- Write like a pragmatic senior engineer

-----------------------
## Now generate the plan for this project:

<Project description goes here>
