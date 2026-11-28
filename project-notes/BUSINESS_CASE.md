# Business case

## 1. The idea

I created Who’s in Net? to help local Halifax rec hockey teams find goalies because I am a rec hockey captain and understand the struggle of having a goalie drop out last minute. It is one thing if a player drops out last minute: you can move a forward back to play defence or have a defenceman play wing. But if your goalie drops out, you have to find someone who can play in net. When my goalie cancels, I usually end up frantically texting people to see who can play. When nobody is available in time, we have to forfeit.

The idea is that the website will allow captains to find available last-minute goalies who are able and willing to play. Goalies go on the site and select “I am a Goalie” and set their availability by choosing dates and times that work for them, while captains go on the site and select “I am a Captain” and select an available goalie for that date, rink, and time. Captains would pay goalies directly by e-transfer. Who’s in Net? would charge both captains and goalies a small membership fee and earn money from ads. Members who want an ad-free experience could pay more for a premium account.

## 2. Where IT creates value

When my goalie drops out an hour before a game, I usually go through my phone and start texting anyone who might be able to play in net. Half of the problem is that I have no idea who is free that night. That is where Who’s in Net? improves team operations. By the time I need a goalie, I can already see who is available for our ice time. The part of team operations that Who’s in Net? improves is finding someone who can actually make it to the game.

When my goalie cancels, I usually start texting people I know. The problem is that knowing a goalie’s number tells me nothing about whether they can play that night. Someone might be free at 7:30 but unable to get to the arena before puck drop. I could spend twenty minutes waiting for a reply only to find that out. With Who’s in Net?, goalies can post where and when they are willing to play ahead of time.

As a captain, I can search for my team’s rink, date, and ice time and see who has already listed that game as an option. That also gives me a chance to reach a goalie I have never played with and would not have thought to text. I still need someone to accept the request before I can tell my team that we have a goalie. The difference is that my first message can be “Can you play this game?” because I already know the times and locations that work for them. For a captain trying to avoid a forfeit, getting to that conversation sooner is where the website adds the most value.

## 3. Network effects

Who’s in Net? has a two-sided network effect because captains and goalies both give the other group a reason to use the site. What matters to me is how many goalies can actually make it to my game. I tested this using the “Compare goalie pools” feature on the captain page. For the December 8 game at 7:30 p.m. at Sackville Community Arena, the sample showed one available goalie in a pool of five and seven in a pool of 25.

With the 5-person pool, if a goalie cannot make it, I have to frantically text more people. With the 25-person pool, I still have six others I can ask. It works the other way for goalies, too. A goalie who posts their availability has more chances to play and get paid when more captains use the site to find a spare.

The challenge is getting both groups interested when the site is new. One way I could start is with a single Halifax rec league. I could ask the goalies I usually text to post which games they could cover that week. Then, when I invite the other captains to try it, they could search for their own ice time and see whether someone is free. I would consider waiving the membership fee during that trial so both groups can see whether the site helps them before deciding to pay.

## 4. Can it be copied?

This is worth the most. Anyone in the class could rebuild the website in a weekend with the same AI tool, so the site itself is not my advantage. A competitor could copy the website with similar goalie profiles, availability search, and a request button. They could also copy the “Find goalies” button in a day, but they would still need Halifax goalies who post where and when they can play.

That network could become valuable once captains could count on finding someone for their game. What could make that network rare is knowing who can get to a certain rink on short notice. I might have ten goalies in my contacts, but if our game starts in less than an hour, I still have to text each one and wait for an answer, which is usually a no. A competitor could get those same goalies to sign up, but the hard part is getting them to keep their availability up to date every week, especially if they are already getting enough games through my website.

If a goalie accepts a last-minute request and shows up, the captain will probably want to use the site again. If captains in my league had already found goalies through the site, a competitor would have to give them a reason to switch. The competitor could offer a free membership or pay goalies a bonus for accepting their first game. I would probably go straight to whoever runs the league. Getting the league to send the link to every captain could save weeks of trying to reach teams one at a time. Combined with paying goalies to join, a company with more money might catch up quickly. That is why I think being the first company would only help for a while.

Goalies could also list their availability on both sites, and captains could still use group chats. That makes it hard to claim a permanent advantage. Even as the person who came up with the idea, if a goalie I was friends with texted me and said he could play, I would take him and be done with it. I would need the site most when everyone I know has already rejected a request and there is not much time until the game. That is when having access to goalies outside my friends would matter.

I would know Who’s in Net? was becoming harder to replace if a captain found a goalie through the site one week and came back the next time their goalie cancelled. If that happened across the league over a season, a competitor would have to give those captains a good reason to change what was already working.

The network could be valuable and initially rare because it contains goalies who can reach Halifax rinks on short notice. However, it could be difficult to make it inimitable and non-substitutable. Goalies can join multiple platforms, and a captain can continue to use personal contacts or group chats. The advantage would become stronger if the site accumulated reliable confirmations and showed which goalies consistently accepted and attended games. It would also become stronger if rec leagues adopted the site so captains could find replacements through one familiar tool. The VRIN resources are therefore the trusted local network, league relationships, and accumulated data on reliability and availability.

## 5. Cloud and operations

Right now, Who’s in Net? saves availability in the goalie’s browser. To run it in real life, I would use a hosting platform with a managed database so a goalie could post from a phone and a captain could see it from theirs. This would be PaaS. I would use a login service for everyone to manage accounts and a payment service like Stripe to collect membership fees. These would be SaaS. Captains would still pay goalies directly through e-transfer.

With a hosting platform, I would not need to rent and maintain my own virtual servers. My “What a real version would need” table in the project log gives more detail on the work and cost involved.

My biggest concern would be the host going down an hour before puck drop. I would send both people an email when a goalie accepts, so they would still have the rink and game time even if the site crashes. Captains still looking for a goalie would have to go back to texting until it came back online. If the host raised its prices, I would compare the increase with the cost of moving. I would keep regular database backups and test that I could restore them on another host so switching could be a realistic option.

## 6. Risks and ethics

The first risk I would worry about is privacy. A goalie might be fine sharing an e-transfer email with the captain they are playing for, but putting it on their profile would mean anyone could see it. I would let the captain send a request through the site and let goalies share their email privately once they accept.

Another risk is a captain thinking they have a goalie just because they clicked “Request a Goalie.” If I saw a confirmation and stopped looking, my team could still end up forfeiting. I would have the site say “Waiting for the goalie to reply” and only show “Confirmed” once the goalie accepts. If the goalie declines, the captain should hear back right away so they have time to ask someone else.

Finally, I would make the membership fee clear before anyone signs up and explain that paying the fee does not guarantee a goalie for a particular game.

## AI use

I used GitHub Copilot to build and troubleshoot the Who’s in Net? prototype, and I used ChatGPT to brainstorm ideas and help draft and revise parts of my business case.
