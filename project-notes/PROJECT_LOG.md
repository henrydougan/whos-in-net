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

### Session 3 — Nov 26 — driver: Henry

- **Goal for this session:** Publish Who’s in Net? so someone could open it without signing in.
- **Key prompts we gave Copilot** (paste the important ones):
  1.
  2.
- **What worked:** Enabled GitHub Pages and saw GitHub confirm the site was live.
- **Public test result:** I opened the site without signing in. For the December 8 game at Sackville Community Arena, 1 of 5 goalies was available in the smaller pool and 7 of 25 were available in the larger pool.
- **What broke, and how we fixed it:** I opened the Codespaces preview by mistake, then switched to the public GitHub Pages link and tested it there.
- **Committed?** yes / no — commit message:

### Session 4 — Nov 26 — driver: Henry

- **Goal for this session:** Reconcile the local and remote branches and merge their changes onto main.
- **Key prompts we gave Copilot** (paste the important ones):
  1. Help me reconcile the two branches so that i merge back onto the main
- **What worked:** Merged the local and remote changes onto main. Preserved the Session 3 public test details and the remote Session 2 commit status. Main is aligned with origin/main.
- **What broke, and how we fixed it:** A conflict in project-notes/PROJECT_LOG.md. Resolved it by keeping the Session 3 details and the Session 2 commit status.
- **Committed?** Yes — Merge remote-tracking branch 'origin/main'

---

## Things that broke (running list)

| Nov 25 | I couldn’t open the site at first. | I asked Copilot to start the preview. | I clicked the link that showed up in Ports and the site opened. |

## What a real version would need

| Real accounts | Each goalie needs to control their own availability, and captains need to know who accepted a request. | Medium. I would use a login service and connect each account to the right profile. |
| Shared database | A goalie could post from their phone and a captain could see it from theirs. Right now, availability is saved in one browser. | Medium. I would need a hosted database and backups. |
| Booking confirmations | Two captains might request the same goalie for the same time. Once the goalie accepts one game, the other captain needs to know. | Medium to high. I would need to track requests and test what happens when two come in at once. |
| Email notifications | A captain needs to hear quickly if a goalie accepts or cancels, especially close to puck drop. | Low to medium. I could use an email service and pay more as the number of messages grows. |
| Membership billing | The site would need to collect membership fees and let people cancel. Captains would still pay goalies directly by e-transfer. | Medium. A billing service could handle subscriptions and charge a fee on each payment. |
| User support | If a goalie keeps accepting games and then failing to show up, captains need someone they can report it to. | Low cost at first. Reviewing reports would take more time as more teams joined. |

## Reflection (fill in at the end)

1. What surprised you most about building software with AI?
When I started on Wednesday, I had to ask what a repository was. I figured making the website would be the part I’d get stuck on. Once I got my prompt into Copilot, though, it made a first version of Who’s in Net? that was pretty close to what I had in mind. The moment that stood out to me was trying the sample game at Sackville Community Arena. For the December 8 game at 7:30, I had one goalie available in the group of five. When I switched to the group of 25, I had seven options for that same game. I’ve been in situations where even having one more person to text would’ve helped. It was cool to see that idea actually work on the screen.
2. Which parts were easy, and which were hard? Why do you think that is?
The easiest part was deciding what should happen when someone clicks “I’m a captain.” When my goalie drops out, I already know where and when we’re playing. All I want to know is who can get there. I could explain that part to Copilot because I’ve had to do it myself. GitHub was where I got stuck. At one point Copilot said it had built the site, but when I clicked Ports, the tab was empty. I kept looking for a link that wasn’t there. Once I asked Copilot to start the preview, a link showed up and I could open it. Saving my work was confusing too. I was used to pressing Command-S and being done, so it took me a while to understand why I also had to commit and sync my changes.
3. If a competitor had the same AI tool, how long would it take them to copy your site?
I think someone could copy my site in a weekend. If they already knew how to use GitHub, they could probably do it faster than I did. They could click through my site, see what happens when a goalie posts or a captain makes a request, and give Copilot pretty clear instructions. Since my goalies are fictional, a competitor could make their own sample profiles and have a similar demo up and running. The part that would take longer is getting real goalies in Halifax to keep posting when they’re free. As a captain, if I found a goalie through the site and they showed up in time for our game, I’d remember that the next time I needed someone. That’s the part I think would be hardest for another site to copy.
