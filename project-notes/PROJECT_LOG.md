# Project log

Keep this up to date as you go — a few lines per work session is enough. It's much harder to reconstruct at the end.

**Team name:** Henry
**Startup name:** Who’s in Net?
**Live site link:** https://henrydougan.github.io/whos-in-net/

---

## Work sessions

Copy this block for each session.

### Session 1 — Nov 25 — driver: Henry

-  **Goal for this session:** Build a first version where goalies can post when they’re free and captains can request a last-minute goalie.
- **Key prompts we gave Copilot** (paste the important ones):
  1. Read the README and follow the course rules. Build **Who’s in Net?**, a website for a student-run rec hockey league in Halifax. When a team’s usual goalie can’t play, the captain can use the site to find a last-minute replacement.

Give me two options on the homepage: **“I’m a goalie”** and **“I’m a captain.”** As a goalie, let me choose a fictional goalie profile, pick a rink, date, and game time, and click **“Post availability.”** As a captain, let me pick that same rink, date, and time and see which goalies are available, including the one who just posted. Let me click **“Request goalie”** and show a demo confirmation with the goalie’s name, rink, date, and time.

Include a few fictional goalies with availability already posted so someone can try the captain side right away. Make it easy to use on a phone. Use the existing starter files, keep the student prototype footer, and leave the project notes for me to fill in. 
  2. Start a preview of Who’s in Net? in this Codespace and leave it running so I can test the site. Tell me which port number it’s using.
- **What worked: I found that it was easy to get it to make exactly what I wanted, there were no errors in the actual making of the website.
- **What broke, and how we fixed it: It did not let me open the link at first. I fixed it by telling it to give me a preview so I can run the site.
- **Committed?** yes / no — commit message:

### Session 2 — Nov 26 — driver: Henry

- **Goal for this session:** Update the colours and show how a larger goalie pool helps captains.
- **Key prompts we gave Copilot** (paste the important ones):
  1. Give Who’s in Net? a clean rec hockey look. Use a deep navy header, an ice-blue page background, and white cards. On the homepage, make “I’m a goalie” and “I’m a captain” look like two clear options. Use orange for the “Request goalie” button with dark text so it’s easy to read. Keep it simple and easy to use on a phone. Make these changes in styles.css and preserve the existing wording, buttons, and functionality.
  2. My website preview showed a 502 error. Please check whether the preview server is running, restart it if needed, and give me a working link to open the updated site.
- **What worked:** Tested the December 8, 2026 game at 7:30 p.m. at Sackville Community Arena. For that game, 1 of 5 goalies was available and 7 of 25 were available.
- **What broke, and how we fixed it:** Saw a 502 error when opening the preview.
- **Committed?** Yes — Build first goalie finder prototype and record session 1
---

## Things that broke (running list)

| Nov 25 | I couldn’t open the site at first. | I asked Copilot to start the preview. | I clicked the link that showed up in Ports and the site opened. |

## What a real version would need

Everything we wanted but faked or left out — real logins, a real database, payments, security, moderation, an app, staff, etc. For each one, say **why** it's needed and roughly **how hard or expensive** you think it would be.

| Feature we faked or skipped | Why a real company would need it | How hard / expensive? |
|---|---|---|
| | | |

## Reflection (fill in at the end)

1. What surprised you most about building software with AI?
2. Which parts were easy, and which were hard? Why do you think that is?
3. If a competitor had the same AI tool, how long would it take them to copy your site?
