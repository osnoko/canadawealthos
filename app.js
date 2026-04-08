// ═══════════════════════════════════════════
//              DATA — 6 MODULES × 4 LESSONS
// ═══════════════════════════════════════════
const VALID_CODES = ['CWO-12345','CWO-ALPHA','CWO-DEMO1','CWO-PILOT'];

const modules = [
  {
    num:'01', title:'The Canadian Budget Blueprint',
    desc:'Build a budget that actually survives contact with Canadian taxes, biweekly paycheques, and real provincial costs.',
    lessons:[
      {
        title:'Why Most Budgets Fail Canadians',
        meta:'Lesson 1 of 4 · 8 min read',
        content:`
          <h2>Why Most Budgets Fail Canadians</h2>
          <p class="lesson-meta">Lesson 1 of 4 · 8 min read</p>
          <p>Open any American personal finance book and you'll find budgeting advice built around monthly paycheques, 401(k) accounts, and a federal tax system that looks nothing like Canada's. This is the first reason most budgeting systems fail Canadians before they even start — the foundation is wrong.</p>
          <h3>The Biweekly Problem</h3>
          <p>If you're paid biweekly (every two weeks), you receive <strong>26 paycheques per year</strong> — not 24. That's a critical difference. Most people multiply their paycheque by 2 to get their "monthly" income. That's wrong. Two months per year you'll receive three paycheques, not two.</p>
          <div class="number-callout">Correct formula: Biweekly net pay × 2.167 = True monthly income<br><br>Example: $2,300 biweekly × 2.167 = $4,984/month<br>Wrong method: $2,300 × 2 = $4,600/month (you're missing $384/month)</div>
          <p>That $384 gap is why you feel like you have "extra money" some months and your budget falls apart. You haven't budgeted for it, so it disappears into your daily spend.</p>
          <h3>The Tax Reality Check</h3>
          <p>Your budget must be built on your <strong>net pay</strong> — the amount that actually hits your bank account after CPP contributions, EI premiums, and income tax are deducted. Your gross salary is not your income for budgeting purposes. Never use it.</p>
          <div class="scenario"><strong>🇨🇦 Canadian Scenario</strong><p>Danielle earns $65,000/year in Ontario. Her gross biweekly is $2,500. After CPP (~$126), EI (~$39), and Ontario income tax (~$490), her net biweekly is approximately $1,845. Her actual monthly budget income: $1,845 × 2.167 = $3,997 — not $5,000 as she assumed from her gross salary.</p></div>
          <h3>The "Activate Windows" Trap</h3>
          <p>The most dangerous budget is the one you start but never update. Canadians fail at budgeting not because they lack discipline — but because they're using a system that doesn't account for how Canadian income actually arrives: irregular bonus months, GST/HST credits quarterly, CCB payments, and RRSP refund windfalls at tax time.</p>
          <div class="tip-box"><strong>🍁 Canadian Advantage:</strong> The CRA sends you money several times a year — GST/HST credits, CCB, Climate Action Incentive (if applicable). Most Canadians spend this money without realizing it arrived. Budget for it as a "bonus month" deposit, not spending money.</div>
          <p>In the next lesson, we'll build your exact Canadian budget from scratch using the 50/30/20 framework adjusted for your province and income bracket.</p>
        `,
        checklist:['Calculate your true monthly income using the 2.167 formula','Find your net pay on your last 3 paystubs and average them','Identify which CRA credits you receive (GST/HST, CCB, Climate Incentive)','List all income sources including irregular ones']
      },
      {
        title:'The Canadian 50/30/20 Framework',
        meta:'Lesson 2 of 4 · 10 min read',
        content:`
          <h2>The Canadian 50/30/20 Framework</h2>
          <p class="lesson-meta">Lesson 2 of 4 · 10 min read</p>
          <p>The 50/30/20 rule is the most effective budgeting framework for Canadians because it's flexible enough to work across all provinces, income levels, and life stages. But the original American version needs to be adjusted for Canadian realities — specifically housing costs, healthcare, and the tax-advantaged accounts available to us.</p>
          <h3>The Canadian Version</h3>
          <div class="number-callout">50% → NEEDS (housing, groceries, utilities, transport, min. debt payments)<br>30% → WANTS (dining, entertainment, travel, subscriptions)<br>20% → FINANCIAL GOALS (TFSA, RRSP, emergency fund, extra debt payments)</div>
          <h3>The Housing Problem in Canada</h3>
          <p>In Toronto and Vancouver, housing alone often consumes 40–50% of net income. If you're in this situation, the framework needs to be adapted — not abandoned. The fix: compress your wants category to 15–20% temporarily and treat the housing overage as a fixed constraint you're working to change (either by increasing income or relocating).</p>
          <div class="scenario"><strong>🇨🇦 Canadian Scenario — Toronto Renter</strong><p>Marcus earns $72,000/year. Net monthly income: ~$4,700. His rent is $2,100 (45%). Adjusted framework: 55% needs, 20% wants, 25% financial goals. He's still building wealth — just with a modified split. The goal is direction, not perfection.</p></div>
          <div class="scenario"><strong>🇨🇦 Canadian Scenario — Hamilton Homeowner</strong><p>Priya earns $58,000/year. Net monthly: ~$3,850. Mortgage + property tax: $1,450 (38%). She has room for the standard split. Her 20% ($770/month) goes: $400 TFSA, $200 RRSP, $170 emergency fund.</p></div>
          <h3>Provincial Adjustments</h3>
          <p>Your province significantly affects your after-tax income, which shifts all the percentages. Ontario and BC have higher marginal rates; Alberta has no provincial sales tax; Quebec residents pay significantly more in provincial tax but receive more provincial benefits (subsidized childcare, for example).</p>
          <div class="tip-box"><strong>🍁 Key insight:</strong> Quebecers often look "cash poor" on a take-home basis but receive $10/day daycare, lower tuition, and generous parental leave — benefits that don't show up in a salary comparison but absolutely affect your real cost of living.</div>
          <p>In the next lesson, we'll run the Invisible Budget Leak Audit — a 20-minute exercise that finds $200–$600/month most Canadians are losing without realizing it.</p>
        `,
        checklist:['Apply the 50/30/20 split to your actual net monthly income','Identify if housing exceeds 35% and adjust your split accordingly','List your province and look up your marginal tax rate','Set target dollar amounts for each of the three categories']
      },
      {
        title:'The Invisible Budget Leak Audit',
        meta:'Lesson 3 of 4 · 9 min read',
        content:`
          <h2>The Invisible Budget Leak Audit</h2>
          <p class="lesson-meta">Lesson 3 of 4 · 9 min read</p>
          <p>Pull up your last 3 months of bank and credit card statements right now. You're about to find money you didn't know you were losing. This exercise, done honestly, recovers an average of $280/month for Canadians who complete it.</p>
          <h3>The Four Leak Categories</h3>
          <p><strong>1. Zombie Subscriptions</strong> — Services you're paying for but haven't used in 30+ days. The average Canadian has 4–7 active subscriptions. Common culprits: streaming platforms (Netflix, Crave, Disney+, Apple TV+), fitness apps, cloud storage, news sites, software trials that became paid.</p>
          <div class="number-callout">Average Canadian subscription spend: $187/month<br>Average subscriptions actually used: $94/month<br>Average waste: $93/month = $1,116/year</div>
          <p><strong>2. Convenience Premium</strong> — The difference between what you paid and what you could have paid. This includes: daily coffee ($5 × 22 workdays = $110/month), food delivery apps (average $23 markup per order vs. cooking), and premium gas at the first station you see.</p>
          <div class="scenario"><strong>🇨🇦 Canadian Scenario — The Coffee Math</strong><p>Jamie buys a $6 latte every weekday. That's $120/month or $1,440/year. If that $120/month went into a TFSA invested in XEQT at 8% average return for 20 years: $70,847. One daily coffee costs Jamie $71,000 in retirement wealth. This isn't about shame — it's about making the choice consciously.</p></div>
          <p><strong>3. Auto-Renewals</strong> — Annual subscriptions that renew without notice. Check: Amazon Prime, Costco membership, software (Adobe, antivirus), domain names, gym memberships with annual contracts.</p>
          <p><strong>4. Bank Fees</strong> — Many Canadians pay $15–30/month in bank account fees unnecessarily. TD, RBC, Scotiabank, and BMO all charge monthly fees on basic accounts. Alternatives: EQ Bank (no fees, 2.5% savings rate), Simplii Financial (no fees), Tangerine (no fees). Switching banks saves $180–$360/year with zero sacrifice in service quality.</p>
          <div class="tip-box"><strong>🍁 The 48-Hour Rule:</strong> For any non-essential purchase over $50, wait 48 hours before buying. Canadian research shows 60% of impulse purchases feel unnecessary after two days. This single rule saves the average person $1,200–$2,400/year.</div>
        `,
        checklist:['Pull up 3 months of bank and credit card statements','List every subscription and mark each as "use weekly", "use sometimes", or "forgot about it"','Cancel all "forgot about it" subscriptions today — do not delay','Check your bank account type and compare fees to EQ Bank or Simplii','Apply the 48-hour rule to your next 5 non-essential purchases']
      },
      {
        title:'Sinking Funds & Annual Expense Planning',
        meta:'Lesson 4 of 4 · 8 min read',
        content:`
          <h2>Sinking Funds & Annual Expense Planning</h2>
          <p class="lesson-meta">Lesson 4 of 4 · 8 min read</p>
          <p>A sinking fund is money you set aside monthly for an expense you know is coming — but that doesn't arrive monthly. This concept is the single biggest reason why people's budgets "fail" in months like December (holidays), March (RRSP deadline), and September (back to school). The expense wasn't a surprise — the money just wasn't ready.</p>
          <h3>The Canadian Annual Expense Calendar</h3>
          <p>These are the predictable large expenses that break Canadian budgets every year:</p>
          <div class="number-callout">January: — (fresh start, use for RRSP prep)<br>February: RRSP deadline (March 3 for 2025 tax year)<br>March: Tax filing season — accountant fees<br>June: Car insurance renewal (many Canadians)<br>July-Aug: Vacation / summer activities<br>September: Back to school, Costco membership renewal<br>October: Winter tires installation<br>November-December: Holiday gifts, travel, entertainment<br><br>Avg. total for these events: $4,200–$8,000/year</div>
          <h3>How to Build Sinking Funds</h3>
          <p>List every predictable annual expense. Divide each by 12. Add to your monthly budget as a non-negotiable line item, same as rent. Keep sinking funds in a separate high-interest savings account — EQ Bank currently pays 2.50% on savings, meaning your sinking fund earns money while it waits.</p>
          <div class="scenario"><strong>🇨🇦 Canadian Scenario — Building a Holiday Fund</strong><p>Sarah spends $1,800 on Christmas every year and goes into debt for it every December. The fix: $1,800 ÷ 12 = $150/month into a dedicated EQ Bank account starting January. By December, the money is there and she enters the new year debt-free.</p></div>
          <h3>The Winter Tire Problem</h3>
          <p>In Ontario, Quebec, and other provinces with harsh winters, winter tire installation typically costs $80–$200 plus the tires themselves if you're buying new ($600–$1,200). This is entirely predictable — yet most Canadians put it on a credit card every October. $100/month in a sinking fund solves this permanently.</p>
          <div class="tip-box"><strong>🍁 Property Tax Timing:</strong> If you own a home, your municipality sends property tax bills on a schedule (often twice a year in lump sums). Divide your annual property tax by 12 and move that amount monthly into your sinking fund account. Never let a property tax bill catch you off guard.</div>
          <p>You've now completed Module 1. The checklist below covers everything from this module. Check off each item as you complete it in real life — not just in theory.</p>
        `,
        checklist:['List all your annual expenses and divide each by 12','Open a separate high-interest savings account for sinking funds (EQ Bank recommended)','Set up automatic monthly transfers to your sinking fund account','Add winter tires, car insurance renewal, and holiday budget to your sinking fund list','Review your budget every month on a fixed "money date" — same day, every month']
      }
    ]
  },
  {
    num:'02', title:'Destroy Debt the Canadian Way',
    desc:'Credit card debt at 22% is a financial emergency. Learn the exact payoff sequence, negotiation scripts, and the traps to avoid.',
    lessons:[
      {
        title:'Understanding Canadian Debt — The Real Numbers',
        meta:'Lesson 1 of 4 · 9 min read',
        content:`
          <h2>Understanding Canadian Debt — The Real Numbers</h2>
          <p class="lesson-meta">Lesson 1 of 4 · 9 min read</p>
          <p>Canada has a household debt problem. As of 2025, Canadians owe $1.80 for every $1 of disposable income — one of the highest ratios in the developed world. Understanding exactly what your debt is costing you is the first step to eliminating it permanently.</p>
          <h3>The True Cost of Canadian Credit Card Debt</h3>
          <p>Most Canadian credit cards charge between 19.99% and 22.99% annual interest. This sounds abstract until you see the math:</p>
          <div class="number-callout">$5,000 balance at 19.99% APR:<br>Monthly interest charge: $83.29<br>Annual interest paid: $999.50<br><br>Minimum payment only (2% of balance = $100/month):<br>Time to pay off: 30+ years<br>Total interest paid: $6,931<br><br>You borrowed $5,000 and paid back $11,931.</div>
          <div class="scenario"><strong>🇨🇦 Canadian Scenario — The Minimum Payment Trap</strong><p>Kevin has $8,500 in credit card debt at 20.99%. He pays the minimum each month (~$170). At this rate, Kevin will be in debt for 37 years and pay $10,200 in interest on top of his $8,500. If Kevin pays $400/month instead, he's debt-free in 26 months and pays $1,890 in interest — saving $8,310.</p></div>
          <h3>Types of Canadian Debt — Ranked by Urgency</h3>
          <p>Not all debt is equally dangerous. Here's how to prioritize:</p>
          <p><strong>Priority 1 — Payday loans</strong> (400%+ APR): Financial emergency. Eliminate immediately using any means available including family loans, credit union personal loans, or employer salary advances.</p>
          <p><strong>Priority 2 — Credit cards</strong> (19.99–22.99% APR): High urgency. This is the most common form of destructive Canadian debt.</p>
          <p><strong>Priority 3 — Personal loans and lines of credit</strong> (8–15% APR): Important but not emergency-level.</p>
          <p><strong>Priority 4 — Car loans</strong> (5–9% APR): Manageable. Pay on schedule while attacking higher-rate debt first.</p>
          <p><strong>Priority 5 — OSAP / student loans</strong> (prime + 1% or fixed 5.95% federal): Lowest urgency among consumer debts. Federal OSAP has no interest for the first 6 months, and there are repayment assistance programs if you qualify.</p>
          <div class="tip-box"><strong>🍁 Canadian Advantage:</strong> Unlike the US, federal OSAP loans are dischargeable in bankruptcy after 7 years (reduced to 5 with court approval). This doesn't mean you should ignore them — but it does mean student loans are your last debt-payoff priority, not your first.</div>
        `,
        checklist:['List every debt you owe with: balance, interest rate, minimum payment','Calculate the total monthly interest you are currently paying across all debts','Rank your debts from highest to lowest interest rate','Look up your credit card exact APR on your last statement']
      },
      {
        title:'Avalanche vs. Snowball — The Canadian Math',
        meta:'Lesson 2 of 4 · 10 min read',
        content:`
          <h2>Avalanche vs. Snowball — The Canadian Math</h2>
          <p class="lesson-meta">Lesson 2 of 4 · 10 min read</p>
          <p>There are two primary methods for paying off multiple debts: the avalanche and the snowball. Both work. The question is which one is right for you — and understanding the actual dollar difference is essential before you choose.</p>
          <h3>The Avalanche Method</h3>
          <p>Pay minimums on everything. Throw every extra dollar at the highest-interest debt first. When it's gone, roll that payment to the next highest. Mathematically optimal — you pay less total interest.</p>
          <h3>The Snowball Method</h3>
          <p>Pay minimums on everything. Throw every extra dollar at the lowest balance debt first. When it's gone, roll that payment to the next smallest. Psychologically powerful — early wins keep you motivated.</p>
          <div class="number-callout">Example — 3 Canadian debts, $300 extra/month available:<br><br>Debt A: $4,200 at 22.99% (credit card) — min $84<br>Debt B: $1,800 at 12.9% (line of credit) — min $36<br>Debt C: $9,500 at 6.5% (car loan) — min $190<br><br>AVALANCHE: Attack Debt A first<br>Total interest paid: $2,847 | Debt-free: 31 months<br><br>SNOWBALL: Attack Debt B first<br>Total interest paid: $3,204 | Debt-free: 33 months<br><br>Avalanche saves $357 and 2 months.</div>
          <div class="scenario"><strong>🇨🇦 Recommendation</strong><p>If the interest rate difference between your highest and lowest balance debt is more than 5%, use the avalanche — the savings are meaningful. If rates are similar (within 3%), use the snowball — the psychological boost of eliminating debts is worth more than the marginal interest savings.</p></div>
          <h3>The Cascade Effect</h3>
          <p>The real power of either method is what happens when a debt is fully paid off. You don't reduce your monthly debt payment — you redirect it. This creates a cascade: as each debt falls, your monthly weapon against the next one grows larger and larger.</p>
          <div class="scenario"><strong>🇨🇦 Cascade Scenario</strong><p>Anita has 4 debts. Her minimum payments total $380/month. She has $200 extra to put toward debt. She starts the avalanche. When her first debt ($3,200 credit card) is paid off 14 months later, she doesn't spend the freed $64/month minimum — she adds it to her weapon. Now she has $264 extra. When debt 2 falls, she has $340 extra. By the time she reaches debt 4, she's firing $580/month at it.</p></div>
        `,
        checklist:['Choose your method: avalanche (mathematical) or snowball (motivational)','Calculate your "cascade amount" — what happens to your monthly payment power as each debt falls','Set up your minimum payments on all debts by automatic payment so you never miss one','Direct every extra dollar to your target debt — no exceptions this month']
      },
      {
        title:'Negotiating With Canadian Banks — Scripts That Work',
        meta:'Lesson 3 of 4 · 8 min read',
        content:`
          <h2>Negotiating With Canadian Banks — Scripts That Work</h2>
          <p class="lesson-meta">Lesson 3 of 4 · 8 min read</p>
          <p>Canadian banks have internal "retention rates" they can offer to customers who threaten to leave or transfer balances. These rates — typically 9–14% — are not advertised. You have to ask. Most people never ask.</p>
          <h3>The Rate Reduction Call</h3>
          <p>This call takes 10 minutes and can save you hundreds of dollars in interest. Call the number on the back of your card. When you reach a representative:</p>
          <div class="number-callout">Script: "Hi, I've been a customer for [X] years and I have a balance of [amount] on my card. I've received offers from competitors for balance transfer rates of 0% for 12 months and ongoing rates as low as 12.9%. Before I consider moving my balance, I wanted to call and ask if there's anything you can do to reduce my current rate of [your rate]?"</div>
          <p>Then stop talking. Wait for their response. They will either say yes, offer a temporary promotional rate, or say no. If they say no, ask to speak to a retention specialist. The retention department has more flexibility than front-line agents.</p>
          <div class="scenario"><strong>🇨🇦 Real Outcome Example</strong><p>Daniel called TD Visa with a $6,200 balance at 19.99%. He used this script. The agent offered a 12-month promotional rate of 10.99% on existing balances. That saved Daniel $556 in interest over the next year — for a 10-minute phone call.</p></div>
          <h3>Balance Transfer Cards</h3>
          <p>Several Canadian credit cards offer 0% balance transfers for 6–12 months (with a 1–3% transfer fee). This is a legitimate strategy if you have the discipline to pay the balance before the promotional period ends. Key cards to research: MBNA True Line, Scotiabank Value, CIBC Select Visa.</p>
          <div class="tip-box"><strong>🍁 Warning:</strong> Balance transfer cards only work if you stop using your old card entirely after the transfer. If you continue spending on the old card while carrying the transferred balance, you've made your situation worse. Cut the old card if necessary.</div>
          <h3>Credit Unions — The Underused Alternative</h3>
          <p>Ontario's Meridian Credit Union, Quebec's Desjardins, and BC's Vancity regularly offer personal loans at 7–12% to consolidate high-interest credit card debt. Credit unions are member-owned and often more willing to work with you than the Big Five banks.</p>
        `,
        checklist:['Call each credit card issuer and request a rate reduction using the script above','Research 0% balance transfer offers currently available in Canada','Look up the nearest credit union in your province and compare their loan rates','If using a balance transfer: calculate the transfer fee and ensure savings outweigh the cost']
      },
      {
        title:'The HELOC Trap & Building Your Debt-Free Date',
        meta:'Lesson 4 of 4 · 9 min read',
        content:`
          <h2>The HELOC Trap & Building Your Debt-Free Date</h2>
          <p class="lesson-meta">Lesson 4 of 4 · 9 min read</p>
          <p>A Home Equity Line of Credit (HELOC) is one of the most tempting and dangerous financial products available to Canadian homeowners. Understanding it correctly can save you from a debt cycle that traps people for decades.</p>
          <h3>How HELOCs Work</h3>
          <p>A HELOC allows you to borrow against the equity in your home at a much lower rate than credit cards — typically prime + 0.5% to prime + 1.0%, which at today's rates is roughly 6.2–6.7%. On the surface, using a HELOC to pay off a 22% credit card seems like a brilliant move. Mathematically, it often is.</p>
          <h3>Why It Goes Wrong</h3>
          <p>Research shows that 62% of Canadians who use a HELOC to pay off credit card debt rebuild that credit card debt within 18 months — while also now carrying HELOC debt. They've doubled their problem. The psychological barrier of "my credit cards are at zero" triggers spending behaviour that rebuilds the balance.</p>
          <div class="scenario"><strong>🇨🇦 The HELOC Trap in Real Life</strong><p>Paul and Lisa had $22,000 in credit card debt at 20.99%. They used their HELOC at 6.5% to pay it off — saving roughly $3,000/year in interest. Smart move. But within 20 months, their credit cards were back at $18,000 AND they had $22,000 in HELOC debt. They now owe $40,000 instead of $22,000.</p></div>
          <div class="tip-box"><strong>🍁 The Rule:</strong> Only use a HELOC for debt consolidation if you simultaneously close or freeze the credit cards being paid off. Leave one card open for emergencies with a low limit ($500–$1,000). Cut the rest.</div>
          <h3>Calculating Your Debt-Free Date</h3>
          <p>Your debt-free date is the single most motivating number in personal finance. Here's how to calculate it:</p>
          <div class="number-callout">Debt-Free Date Formula:<br>Months remaining = Balance ÷ (Extra monthly payment)<br><br>Example: $12,000 total debt, paying $500/month above minimums<br>$12,000 ÷ $500 = 24 months = debt free in 2 years<br><br>Note: This is approximate — interest reduces the balance more slowly at first. Use an online amortization calculator for precision.</div>
          <p>Write your debt-free date on a sticky note and put it somewhere you'll see it daily. Canadian psychology research on financial behaviour consistently shows that people with a concrete target date pay off debt 40% faster than those without one.</p>
        `,
        checklist:['Calculate your exact debt-free date and write it down somewhere visible','If considering a HELOC: commit to closing or freezing the cards being consolidated','Set up automatic payments for all minimums so you never miss one','Celebrate your first debt paid off — tell someone, acknowledge the win']
      }
    ]
  },
  {
    num:'03', title:'TFSA + RRSP + FHSA Mastery',
    desc:'The three most powerful tax-advantaged accounts in Canada — most people use them wrong. This module fixes that.',
    lessons:[
      {
        title:'TFSA — The Most Misunderstood Account in Canada',
        meta:'Lesson 1 of 4 · 9 min read',
        content:`
          <h2>TFSA — The Most Misunderstood Account in Canada</h2>
          <p class="lesson-meta">Lesson 1 of 4 · 9 min read</p>
          <p>The Tax-Free Savings Account is not a savings account. This is the most costly misconception in Canadian personal finance. Millions of Canadians park their TFSA money in a bank savings account earning 2–3% interest when it could be invested and growing at 8–10% per year, completely tax-free.</p>
          <h3>What a TFSA Actually Is</h3>
          <p>A TFSA is a container — a registered account that the CRA allows you to hold almost any investment in, tax-free. You can hold: high-interest savings, GICs, ETFs, stocks, bonds, mutual funds, and more. The growth, dividends, and capital gains inside a TFSA are never taxed — not even when you withdraw.</p>
          <div class="number-callout">$7,000 in a TFSA bank savings account at 2.5%:<br>After 20 years: $11,481 (all tax-free)<br><br>$7,000 in a TFSA invested in a broad market ETF at 8%:<br>After 20 years: $32,596 (all tax-free)<br><br>The difference: $21,115 — for the same contribution, just invested differently.</div>
          <h3>2026 Contribution Room</h3>
          <p>The 2026 TFSA annual limit is $7,000. But your total lifetime room depends on your birth year. If you were born in 1991 and have never contributed, your total accumulated room in 2026 is $95,000.</p>
          <div class="scenario"><strong>🇨🇦 Important Rule — Over-Contributions</strong><p>If you over-contribute to your TFSA even by $1, the CRA charges you 1% per month on the excess until it's removed. This is not a minor penalty — it compounds monthly. Always know your exact room before contributing. Check your CRA My Account at canada.ca.</p></div>
          <div class="tip-box"><strong>🍁 The Withdrawal Rule:</strong> When you withdraw from your TFSA, that room is NOT lost permanently — it comes back on January 1 of the following year. This makes the TFSA uniquely flexible compared to any other account type in the world.</div>
        `,
        checklist:['Log into CRA My Account (canada.ca) and check your exact TFSA contribution room','Identify what your TFSA money is currently invested in (savings account vs. investments)','Open a TFSA at Wealthsimple or Questrade if you don\'t have one — it takes 10 minutes','Set up a monthly automatic contribution to your TFSA, even if it\'s $50 to start']
      },
      {
        title:'RRSP — How to Use It Correctly Based on Your Income',
        meta:'Lesson 2 of 4 · 10 min read',
        content:`
          <h2>RRSP — How to Use It Correctly Based on Your Income</h2>
          <p class="lesson-meta">Lesson 2 of 4 · 10 min read</p>
          <p>The Registered Retirement Savings Plan reduces your taxable income today and defers tax until withdrawal in retirement. The key word is "defer" — you will pay tax eventually. The RRSP works in your favour when you're in a higher tax bracket now than you'll be in retirement. It works against you if the opposite is true.</p>
          <h3>The Income Rule of Thumb</h3>
          <div class="number-callout">Under $50,000/year → Maximize TFSA first, RRSP second<br>$50,000–$100,000/year → Split contributions: both accounts<br>Over $100,000/year → Maximize RRSP first, TFSA second<br><br>Why: RRSP saves you tax at your current rate. If you're in a low bracket now<br>and expect to be in a similar bracket at retirement, the RRSP advantage shrinks.</div>
          <div class="scenario"><strong>🇨🇦 Scenario — The RRSP Refund Trap</strong><p>Ryan earns $45,000/year and contributes $5,000 to his RRSP. His tax refund: ~$1,200. This feels like a win. But at retirement, he'll withdraw that $5,000 and pay tax on it. If his retirement income puts him in the same bracket, he's just deferred the tax — not saved it. The RRSP only meaningfully wins when your retirement income bracket is lower than your working income bracket.</p></div>
          <h3>2026 RRSP Numbers</h3>
          <p>The 2026 RRSP limit is the lesser of: 18% of your 2025 earned income, or $32,490. Your exact room is on your latest Notice of Assessment from CRA, or in CRA My Account.</p>
          <div class="tip-box"><strong>🍁 The RRSP Refund Strategy:</strong> If you contribute to your RRSP and receive a refund, don't spend it. The optimal move is to invest the refund directly into your TFSA. This creates a compounding loop: RRSP reduces tax → refund goes to TFSA → both grow simultaneously.</div>
          <h3>The RRSP Deadline</h3>
          <p>Contributions must be made by March 3, 2026 to count for your 2025 tax return. There is no way to retroactively contribute after this date. Set a calendar reminder every February.</p>
        `,
        checklist:['Look up your RRSP deduction limit on your CRA Notice of Assessment or MyAccount','Determine your current marginal tax rate and compare it to your expected retirement income bracket','Set your RRSP contribution strategy: TFSA-first, RRSP-first, or split','If contributing to RRSP: commit to redirecting your refund to TFSA, not spending it','Set a calendar reminder for February 28 every year — RRSP deadline']
      },
      {
        title:'The FHSA — Canada\'s Best-Kept Secret',
        meta:'Lesson 3 of 4 · 9 min read',
        content:`
          <h2>The FHSA — Canada's Best-Kept Secret</h2>
          <p class="lesson-meta">Lesson 3 of 4 · 9 min read</p>
          <p>The First Home Savings Account launched in April 2023 and is the most powerful financial account the Canadian government has ever created — combining the best features of both the TFSA and RRSP. And yet most Canadians who qualify have never opened one.</p>
          <h3>Why the FHSA is Extraordinary</h3>
          <div class="number-callout">RRSP: Contributions are tax-deductible. Withdrawals are taxed.<br>TFSA: Contributions are NOT tax-deductible. Withdrawals are tax-free.<br><br>FHSA: Contributions ARE tax-deductible (like RRSP).<br>      Withdrawals for a qualifying home ARE tax-free (like TFSA).<br><br>This is the only account in Canadian history with BOTH benefits simultaneously.</div>
          <h3>Who Qualifies</h3>
          <p>You must: be a Canadian resident, be at least 18 years old, have a SIN, and be considered a "first-time home buyer" (meaning you haven't lived in a home you or your spouse owned in the current year or the preceding 4 calendar years).</p>
          <h3>The Numbers</h3>
          <p>You can contribute $8,000/year to an FHSA, up to a lifetime maximum of $40,000. Unused room carries forward (max $8,000 carryforward). The account can remain open for 15 years maximum.</p>
          <div class="scenario"><strong>🇨🇦 FHSA Scenario — First-Time Buyer in Hamilton</strong><p>Sarah, 27, earns $68,000/year in Ontario. She opens an FHSA today and contributes $8,000. Her tax savings: approximately $2,320 (at her marginal rate). She invests the $8,000 in XEQT inside the FHSA. In 5 years with $8,000/year contributions and 8% growth, she has approximately $51,200 — all available tax-free for her first home down payment. Plus she's saved roughly $11,600 in income tax over those 5 years.</p></div>
          <div class="tip-box"><strong>🍁 Open It Today — Even If You Only Have $100:</strong> The FHSA accumulates contribution room from the year you OPEN it, not from the year you were born (unlike the TFSA). Every year you delay opening your FHSA is $8,000 in room you lose forever. Open it with whatever you have today and contribute more later.</div>
        `,
        checklist:['Check if you qualify as a first-time home buyer under CRA\'s definition','Open an FHSA account today at Wealthsimple, Questrade, or your bank — even with $0','Contribute at least $1 to activate your account and start accumulating room','Decide what to invest the FHSA in — XEQT or VGRO recommended for long time horizons','Calculate your potential tax savings from this year\'s FHSA contribution']
      },
      {
        title:'Spousal RRSP & Account Stacking Strategy',
        meta:'Lesson 4 of 4 · 9 min read',
        content:`
          <h2>Spousal RRSP & Account Stacking Strategy</h2>
          <p class="lesson-meta">Lesson 4 of 4 · 9 min read</p>
          <p>For couples, Canada's registered account system offers powerful income-splitting strategies that can save thousands in tax annually. The spousal RRSP is one of the most underused tools in Canadian financial planning.</p>
          <h3>How Spousal RRSP Works</h3>
          <p>The higher-earning spouse contributes to an RRSP registered in the lower-earning spouse's name. The contributor gets the tax deduction at their higher rate. At retirement, the lower-earning spouse withdraws the funds at their lower rate. The household pays less total tax.</p>
          <div class="number-callout">Example — Combined family tax saving:<br><br>High earner: $120,000/year → marginal rate ~43.41% (Ontario)<br>Lower earner: $45,000/year → marginal rate ~29.65% (Ontario)<br><br>$15,000 spousal RRSP contribution saves: $6,511 in tax this year<br>At retirement, that $15,000+ growth is withdrawn at ~29.65%<br>Tax paid at withdrawal: ~$4,447<br><br>Lifetime household tax saving on this one contribution: ~$2,064+</div>
          <div class="scenario"><strong>🇨🇦 Spousal RRSP Scenario</strong><p>Michael earns $130,000; his spouse Amara earns $40,000. Michael contributes $20,000 to a spousal RRSP. His tax refund: ~$8,680 (at his 43.4% marginal rate). At retirement, Amara withdraws $20,000+ at her lower retirement income rate. This strategy, done consistently over 20 years, can save this couple $80,000–$120,000 in lifetime taxes.</p></div>
          <h3>The Account Stacking Order</h3>
          <p>For most Canadians, this is the optimal account priority sequence:</p>
          <div class="number-callout">Step 1: Emergency fund (3 months expenses in EQ Bank HISA)<br>Step 2: Employer RRSP match (if offered — it's free 50–100% return)<br>Step 3: FHSA if you're a first-time buyer ($8,000/year)<br>Step 4: TFSA ($7,000/year)<br>Step 5: RRSP (especially if income over $60,000)<br>Step 6: Non-registered investing (after above are maximized)</div>
          <div class="tip-box"><strong>🍁 Never Leave Employer Match on the Table:</strong> If your employer matches RRSP contributions — even partially — contributing enough to get the full match is the highest guaranteed return available anywhere. A 50% employer match is an immediate 50% return before any investment growth.</div>
        `,
        checklist:['If married/common-law and there\'s an income gap, research spousal RRSP contributions','Write down your account stacking priority order for next month\'s contribution','Check if your employer offers an RRSP matching program — contribute at minimum to the match limit','Open all three accounts (TFSA, RRSP, FHSA if eligible) even if you can\'t fund them immediately']
      }
    ]
  },
  {
    num:'04', title:'Investing for Real Canadians',
    desc:'ETFs, platforms, and the "do nothing" portfolio strategy that beats 80% of professional fund managers over 20 years.',
    lessons:[
      {
        title:'The MER Problem — What Canadian Mutual Funds Are Really Costing You',
        meta:'Lesson 1 of 4 · 9 min read',
        content:`
          <h2>The MER Problem — What Canadian Mutual Funds Are Really Costing You</h2>
          <p class="lesson-meta">Lesson 1 of 4 · 9 min read</p>
          <p>Canada has some of the highest mutual fund fees in the world. The average Management Expense Ratio (MER) on a Canadian mutual fund is 2.0–2.5% per year. This number is almost never mentioned by bank advisors — and it's quietly costing you an enormous amount of money.</p>
          <h3>What MER Actually Does</h3>
          <p>The MER is deducted automatically from your fund's returns — you never see a bill. If the market returns 8% and your fund has a 2.2% MER, you receive 5.8%. This seems small. Over 30 years, it's catastrophic.</p>
          <div class="number-callout">$500/month invested for 30 years at 8% market return:<br><br>Mutual Fund (2.2% MER → 5.8% net): $502,344<br>ETF (0.20% MER → 7.8% net): $755,189<br><br>Fee difference: $252,845<br><br>You and your bank advisor both invested the same $180,000.<br>He kept $252,845. You kept the rest.</div>
          <div class="scenario"><strong>🇨🇦 Scenario — The Bank Advisor Meeting</strong><p>Claire went to her RBC branch to "invest her money." The advisor put her in RBC Select Balanced Portfolio (MER: 1.98%). Claire felt taken care of. What the advisor didn't mention: Vanguard's VBAL ETF does virtually the same thing for 0.24% MER. Over 25 years, that difference on Claire's $400/month contribution: over $180,000.</p></div>
          <div class="tip-box"><strong>🍁 This is not illegal.</strong> Bank advisors are not fiduciaries in Canada — they are not legally required to act in your best interest. They recommend products their employer profits from. This is why you need to understand your options.</div>
        `,
        checklist:['Look up the MER on every mutual fund you currently own (check your account statement or fund fact sheet)','Calculate how much you\'ve paid in fees over the last 12 months','Research equivalent ETFs on justETF.com or the Canadian Couch Potato model portfolios','Decide if switching to lower-fee investments makes sense for your situation']
      },
      {
        title:'The Canadian Couch Potato — Investing Made Simple',
        meta:'Lesson 2 of 4 · 10 min read',
        content:`
          <h2>The Canadian Couch Potato — Investing Made Simple</h2>
          <p class="lesson-meta">Lesson 2 of 4 · 10 min read</p>
          <p>The Canadian Couch Potato strategy is the most evidence-supported approach to investing available to everyday Canadians. The name sounds passive — it is. That's the point. Research consistently shows that passive index investing outperforms active stock picking over any 20-year period.</p>
          <h3>All-in-One ETFs — The One Fund Solution</h3>
          <p>Three ETFs cover virtually every investing need for the majority of Canadians. They automatically rebalance, hold thousands of stocks globally, and require zero expertise to maintain:</p>
          <div class="number-callout">XEQT (iShares Core Equity ETF Portfolio) — MER: 0.20%<br>100% stocks, globally diversified. Best for: 10+ year time horizons, risk-tolerant investors.<br><br>VGRO (Vanguard Growth ETF Portfolio) — MER: 0.24%<br>80% stocks / 20% bonds. Best for: 7–15 year time horizons, moderate risk tolerance.<br><br>ZGRO (BMO Growth ETF) — MER: 0.20%<br>80% stocks / 20% bonds. Similar to VGRO, slightly different holdings mix.</div>
          <div class="scenario"><strong>🇨🇦 How to Choose</strong><p>Under 40 with 20+ years to retirement: XEQT. Between 40–55 with 10–20 years: VGRO or ZGRO. Within 10 years of retirement: consider VBAL (60% stocks / 40% bonds, MER: 0.24%) or VCNS (40% stocks / 60% bonds, MER: 0.24%).</p></div>
          <h3>Why One ETF is Enough</h3>
          <p>XEQT holds over 9,000 individual stocks across Canada, the US, Europe, Asia, and emerging markets. You are already diversified across every major economy on Earth with one purchase. Adding more ETFs doesn't diversify you further — it adds complexity without benefit.</p>
          <div class="tip-box"><strong>🍁 The Boring Truth:</strong> The research is unambiguous. A 25-year-old who buys XEQT monthly and never sells will almost certainly outperform the majority of actively managed funds — including those run by PhDs with Bloomberg terminals. The strategy is boring by design. Boring works.</div>
        `,
        checklist:['Choose your all-in-one ETF based on your time horizon and risk tolerance','Open a TFSA or RRSP at Wealthsimple Trade or Questrade (both free to open)','Place your first ETF purchase — even $50 to start building the habit','Set up automatic monthly purchases on payday so investing happens before spending']
      },
      {
        title:'Wealthsimple vs. Questrade — The Platform Decision',
        meta:'Lesson 3 of 4 · 8 min read',
        content:`
          <h2>Wealthsimple vs. Questrade — The Platform Decision</h2>
          <p class="lesson-meta">Lesson 3 of 4 · 8 min read</p>
          <p>For Canadians investing in ETFs, two platforms dominate: Wealthsimple Trade and Questrade. Both are legitimate, regulated, and vastly superior to using your bank's brokerage. Here's how to choose.</p>
          <h3>Wealthsimple Trade</h3>
          <p><strong>Best for:</strong> Beginners, simplicity, mobile-first investors.<br><strong>ETF trades:</strong> Free (no commission on buys or sells).<br><strong>Currency:</strong> CAD and USD accounts available.<br><strong>Accounts:</strong> TFSA, RRSP, FHSA, personal, joint.<br><strong>Drawback:</strong> 1.5% currency conversion fee on US-listed ETFs (buy Canadian-listed versions to avoid this).</p>
          <h3>Questrade</h3>
          <p><strong>Best for:</strong> More experienced investors, larger portfolios, those who want more control.<br><strong>ETF buys:</strong> Free. ETF sells: $4.95–$9.95.<br><strong>Currency:</strong> USD accounts available (Norbert's Gambit to avoid conversion fees).<br><strong>Accounts:</strong> TFSA, RRSP, FHSA, RESP, LIRA, personal.<br><strong>Drawback:</strong> More complex interface, slightly steeper learning curve.</p>
          <div class="number-callout">For most Canadians starting out:<br>Wealthsimple Trade → simpler, faster to open, zero-commission buys AND sells<br><br>For portfolios over $50,000 or those buying US-listed ETFs:<br>Questrade → more account types, Norbert's Gambit available for USD</div>
          <div class="scenario"><strong>🇨🇦 Recommendation</strong><p>If you're reading this module, start with Wealthsimple. Open it today — it takes 10 minutes. You can always add a Questrade account later as your portfolio grows. The most important thing is starting, not starting perfectly.</p></div>
          <div class="tip-box"><strong>🍁 Avoid:</strong> TD Direct Investing ($9.99/trade), RBC Direct Investing ($9.95/trade), and other bank brokerage platforms. Their fees are 10–30× higher for identical ETF purchases. There is no advantage to using your bank's platform.</div>
        `,
        checklist:['Choose your platform: Wealthsimple Trade (beginner) or Questrade (more experienced)','Open your account online — have your SIN, ID, and banking info ready','Link your bank account and make your first deposit','Search for your chosen ETF (XEQT, VGRO, or ZGRO) and place your first purchase']
      },
      {
        title:'Dollar Cost Averaging — The Strategy That Removes Emotion',
        meta:'Lesson 4 of 4 · 8 min read',
        content:`
          <h2>Dollar Cost Averaging — The Strategy That Removes Emotion</h2>
          <p class="lesson-meta">Lesson 4 of 4 · 8 min read</p>
          <p>Dollar Cost Averaging (DCA) means investing a fixed amount on a fixed schedule, regardless of market conditions. You buy more units when prices are low, fewer when prices are high. Over time, this smooths your average purchase price and removes the most destructive force in investing: emotional decision-making.</p>
          <h3>Why Market Timing Fails</h3>
          <p>Virtually every academic study on investment returns finds the same thing: investors who try to time the market (buy before it rises, sell before it falls) consistently underperform investors who simply buy on a schedule. The problem isn't analysis — it's that nobody knows what the market will do next week.</p>
          <div class="number-callout">Time in the market vs. timing the market:<br><br>$500/month in XEQT for 25 years (DCA, never timed): ~$456,000<br>Same investor who missed the 10 best market days: ~$280,000<br>Same investor who missed the 20 best market days: ~$185,000<br><br>The 20 best market days in a 25-year period is 20 out of 6,500 days.<br>Missing 0.3% of days costs you 59% of your wealth.</div>
          <div class="scenario"><strong>🇨🇦 DCA in Practice</strong><p>Fatima earns $4,800/month net. She sets up an automatic purchase of $400 of XEQT on the 1st of every month through Wealthsimple. She doesn't watch the market. When the market drops 20% (as it did in 2022), she doesn't panic — she actually buys 20% more units for the same $400. When the market recovers, those cheap units generate outsized gains. She has never made an emotional investment decision because the system is automatic.</p></div>
          <div class="tip-box"><strong>🍁 Set It and Forget It:</strong> The optimal DCA setup: automatic transfer from your chequing account to your TFSA/RRSP on payday → automatic ETF purchase on the same day. The money is invested before you see it, before you can spend it. Review your portfolio twice a year maximum. Checking daily causes anxiety and bad decisions.</div>
        `,
        checklist:['Set up an automatic monthly transfer to your investment account on payday','Enable automatic ETF purchases in your Wealthsimple or Questrade account','Commit to a "no panic sell" rule — write it down and tell someone to hold you accountable','Schedule two portfolio reviews per year (January and July) — no more, no less']
      }
    ]
  },
  {
    num:'05', title:'Canadian Side Hustle Playbook',
    desc:'23% of Canadians run a side hustle. Learn which ones pay best in your province, how CRA treats your income, and how to keep more of what you earn.',
    lessons:[
      {
        title:'The Canadian Side Hustle Landscape — What Actually Pays',
        meta:'Lesson 1 of 4 · 9 min read',
        content:`
          <h2>The Canadian Side Hustle Landscape — What Actually Pays</h2>
          <p class="lesson-meta">Lesson 1 of 4 · 9 min read</p>
          <p>Not all side hustles are equal. The gig economy in Canada is maturing, and the gap between high-value and low-value side income has never been wider. This lesson breaks down what actually earns well in Canada in 2026 — by effort, by province, and by skill level.</p>
          <h3>Tier 1 — High Income, Scalable (Over $40/hour effective)</h3>
          <div class="number-callout">Freelance web development: $50–$120/hr<br>Copywriting and content strategy: $45–$95/hr<br>Bookkeeping and accounting (entry): $30–$65/hr<br>Social media management: $500–$3,000/month per client<br>Online tutoring (university level): $40–$80/hr<br>Virtual assistance (specialized): $25–$55/hr</div>
          <h3>Tier 2 — Solid Income, Less Scalable ($20–$40/hour effective)</h3>
          <div class="number-callout">Rideshare (Uber/Lyft): $18–$28/hr after expenses<br>Food delivery (DoorDash/SkipTheDishes): $15–$22/hr after expenses<br>Dog walking/pet sitting (Rover): $20–$35/hr<br>House cleaning: $25–$40/hr<br>Handyman services: $30–$60/hr</div>
          <div class="scenario"><strong>🇨🇦 Province-Specific Demand</strong><p>Toronto and Vancouver: highest demand for digital services and delivery. Calgary and Edmonton: strong demand for trades services and oilfield-adjacent consulting. Ottawa: government contracting and bilingual (French/English) freelancers are premium-priced. Atlantic Canada: pet services, home maintenance, and local delivery fill demand gaps left by lower population density.</p></div>
          <div class="tip-box"><strong>🍁 The Skill Leverage Principle:</strong> Every hour you invest in learning a digital skill (copywriting, web development, social media) increases your effective hourly rate permanently. Every hour you spend delivering food increases your income by $0 permanently. Choose skills over transactions wherever possible.</div>
        `,
        checklist:['List your top 3 marketable skills that could generate side income','Research what freelancers in your province charge for those skills (check Fiverr, Upwork, and local Facebook groups)','Choose one side hustle to pursue for the next 90 days — just one','Set a 90-day income goal: what would you like to earn from this hustle?']
      },
      {
        title:'CRA and Your Side Hustle — What They Know and What You Owe',
        meta:'Lesson 2 of 4 · 10 min read',
        content:`
          <h2>CRA and Your Side Hustle — What They Know and What You Owe</h2>
          <p class="lesson-meta">Lesson 2 of 4 · 10 min read</p>
          <p>The CRA treats side hustle income as business income, which means you must declare it on your personal tax return. What most Canadians don't know is that this also means you can deduct legitimate business expenses — significantly reducing what you actually owe.</p>
          <h3>The $30,000 GST/HST Threshold</h3>
          <p>Once your side hustle revenue exceeds $30,000 in any 12-month period (across four consecutive quarters), you are legally required to register for a GST/HST number and collect tax from your clients. Below $30,000 it's voluntary — but there are reasons to register early.</p>
          <div class="scenario"><strong>🇨🇦 Why Register Early (Even Under $30,000)</strong><p>When you're GST/HST registered, you can claim Input Tax Credits — you get back the HST/GST you paid on business expenses. If you bought a $1,500 camera for your photography side hustle and paid $195 in HST, you can claim that back. This quickly adds up, especially with software, equipment, and home office costs.</p></div>
          <h3>CRA-Deductible Business Expenses</h3>
          <div class="number-callout">Home office: % of rent/mortgage equal to % of home used exclusively for work<br>Internet: business-use portion (typically 50–80%)<br>Phone: business-use portion<br>Vehicle: business kilometres × $0.70/km (first 5,000 km in 2026)<br>Software subscriptions: 100% if used for business<br>Professional development courses: 100%<br>Equipment (camera, laptop, etc.): CCA depreciation schedule<br>Bank fees on business account: 100%</div>
          <div class="tip-box"><strong>🍁 The Mileage Log:</strong> If you use your car for any business purpose (meeting clients, delivering products, running business errands), you must keep a mileage log. CRA can ask for it during an audit. A simple notebook or free app (MileIQ, Driversnote) that records date, destination, and purpose is sufficient. At $0.70/km, 3,000 business kilometres = $2,100 in deductions.</div>
          <h3>The 25-30% Tax Reserve Rule</h3>
          <p>Set aside 25–30% of every side hustle payment into a dedicated savings account. This is your CRA reserve. Unlike employment income, no tax is withheld on business income — the bill comes at tax time. Canadians who don't do this get caught with a devastating tax bill every April.</p>
        `,
        checklist:['Open a separate bank account exclusively for your side hustle income and expenses','Set up an automatic transfer of 27% of every payment received into a CRA reserve account','Download a mileage tracking app if you use your vehicle for business','Create a spreadsheet or use Wave Accounting (free) to track all business income and expenses','Research whether registering for HST/GST makes sense at your current revenue level']
      },
      {
        title:'Pricing Your Side Hustle — Why Most Canadians Undercharge',
        meta:'Lesson 3 of 4 · 9 min read',
        content:`
          <h2>Pricing Your Side Hustle — Why Most Canadians Undercharge</h2>
          <p class="lesson-meta">Lesson 3 of 4 · 9 min read</p>
          <p>The most common mistake Canadian side hustlers make isn't in their skill — it's in their pricing. Undercharging is epidemic, and it's rooted in a fundamental miscalculation: most people compare their hourly side hustle rate to their employment hourly rate without accounting for the real differences.</p>
          <h3>The True Cost of Your Time</h3>
          <p>As a self-employed person, you receive none of the hidden compensation that comes with employment: no employer CPP contribution (you pay both sides — 11.9% total), no EI coverage, no paid vacation, no sick days, no benefits. Your side hustle rate must compensate for all of this.</p>
          <div class="number-callout">If your goal is to match a $30/hr employee equivalent:<br><br>$30/hr employee value includes: vacation (4%), CPP employer contribution (~5.95%),<br>EI employer contribution (~2.2%), benefits (~10–15%)<br><br>Your true equivalent self-employed rate: $30 × 1.28 = $38.40/hr minimum<br>Plus tax reserve (27%): $38.40 × 1.27 = $48.77/hr gross to keep $30 in pocket</div>
          <div class="scenario"><strong>🇨🇦 Scenario — The Undercharging Trap</strong><p>David freelances as a graphic designer and charges $25/hr. He thinks he's doing well compared to his $22/hr day job. But after CPP (both sides), income tax on self-employment income, no paid vacation, and no employer benefits: David is actually making less than his employee colleagues — and working harder for it.</p></div>
          <h3>Value-Based vs. Hourly Pricing</h3>
          <p>The most successful Canadian freelancers move away from hourly pricing as quickly as possible. Instead they charge for deliverables and outcomes. A logo isn't "10 hours × $40" — it's a $600 brand asset. A website isn't "40 hours" — it's a $3,500 business infrastructure investment. This shift doubles or triples effective hourly rates without working more hours.</p>
          <div class="tip-box"><strong>🍁 The Rate Increase Test:</strong> If the last 5 clients you quoted all said yes immediately and nobody negotiated: your rate is too low. Ideal pricing results in roughly 70% acceptance and 30% who decline or negotiate. If you've never lost a client over price, you haven't tested your ceiling.</div>
        `,
        checklist:['Calculate your true equivalent self-employed hourly rate using the formula above','Review your current rates — are they accounting for CPP, tax, vacation, and benefits?','Identify one service you provide that could be repackaged as a fixed-price deliverable','Practice the rate increase conversation: raise your rate by 20% on your next new client']
      },
      {
        title:'Scaling Your Side Hustle — From Extra Income to Real Business',
        meta:'Lesson 4 of 4 · 9 min read',
        content:`
          <h2>Scaling Your Side Hustle — From Extra Income to Real Business</h2>
          <p class="lesson-meta">Lesson 4 of 4 · 9 min read</p>
          <p>There's a ceiling on every side hustle built around selling time. At some point you've priced your hours as high as the market will bear and there are only 24 hours in a day. Scaling means creating income that grows without proportional growth in your time.</p>
          <h3>Three Canadian Scaling Pathways</h3>
          <p><strong>Pathway 1: Productize Your Service</strong> — Turn a repeatable service into a fixed package. Instead of custom web design at $3,500 per project, offer a "5-page website package for Canadian tradespeople" at $2,500 with a defined scope. You work faster (same blueprint), market more clearly (specific audience), and can eventually deliver with help from a subcontractor.</p>
          <p><strong>Pathway 2: Create Digital Products</strong> — If you have expertise people pay for in your time, package it as a course, guide, template, or tool. A bookkeeper creates a "Canadian freelancer tax template pack." A fitness trainer creates an 8-week program. A mortgage broker creates a first-time buyer course. These sell while you sleep.</p>
          <p><strong>Pathway 3: Agency Model</strong> — Once you've established reliable client delivery, hire subcontractors to do the work while you handle sales and management. You move from a $50/hr freelancer to a business owner taking 20% margin on $50/hr subcontractors. A 5-person team generates revenue without you delivering every hour.</p>
          <div class="scenario"><strong>🇨🇦 Incorporation Threshold</strong><p>Once your side hustle nets over $80,000–$100,000/year consistently, incorporation becomes financially advantageous. A Canadian Controlled Private Corporation (CCPC) earning under $500,000 in active income pays a combined federal-provincial tax rate as low as 12.2% — vs. your personal top marginal rate of 43–53% depending on province. At that income level, incorporation saves $30,000–$40,000/year in tax.</p></div>
          <div class="tip-box"><strong>🍁 Don't Rush Incorporation:</strong> For most side hustlers earning under $60,000 in net business income, incorporation costs more (legal fees, accounting, compliance) than it saves. The correct time to incorporate is when your accountant confirms the tax savings outweigh the administrative burden — typically $80,000+ in net profit.</div>
        `,
        checklist:['Identify which of the three scaling pathways fits your side hustle best','Write down what a "productized" version of your service would look like','Set a revenue milestone at which you\'ll hire your first subcontractor or virtual assistant','Research your province\'s small business incorporation cost (Ontario: ~$300 online through ServiceOntario)']
      }
    ]
  },
  {
    num:'06', title:'Financial Independence Roadmap',
    desc:'Calculate your Canadian FI number, maximize CPP and OAS, and build the 5-year plan that gets you there.',
    lessons:[
      {
        title:'What Financial Independence Actually Means in Canada',
        meta:'Lesson 1 of 4 · 9 min read',
        content:`
          <h2>What Financial Independence Actually Means in Canada</h2>
          <p class="lesson-meta">Lesson 1 of 4 · 9 min read</p>
          <p>Financial Independence (FI) means your investment portfolio generates enough passive income to cover your living expenses indefinitely. You no longer need to work for money. Work becomes optional. This is not a retirement plan — many FI Canadians continue working, but on their own terms and timeline.</p>
          <h3>The 4% Rule — Adjusted for Canada</h3>
          <p>The 4% rule states that you can withdraw 4% of your portfolio annually in retirement with a high probability of never running out of money over 30 years. It was developed from US market data, but has held well in Canadian context with slight modifications.</p>
          <div class="number-callout">Your FI Number = Annual expenses × 25<br><br>Annual expenses: $45,000 → FI Number: $1,125,000<br>Annual expenses: $60,000 → FI Number: $1,500,000<br>Annual expenses: $80,000 → FI Number: $2,000,000<br><br>Canadian modifier: CPP + OAS reduce your required portfolio.<br>A couple receiving full CPP + OAS = ~$50,000/year government income.<br>This reduces their required portfolio by $50,000 × 25 = $1,250,000.</div>
          <div class="scenario"><strong>🇨🇦 Real Canadian FI Scenario</strong><p>Michael and Sandra, both 45, spend $72,000/year. Their raw FI number: $1,800,000. But at 65, they'll receive combined CPP of ~$26,000 and combined OAS of ~$15,800 = $41,800/year in guaranteed government income. This reduces their portfolio need by $41,800 × 25 = $1,045,000. Their real portfolio target: $755,000. That changes everything about their timeline.</p></div>
          <div class="tip-box"><strong>🍁 Lean FI vs. Fat FI:</strong> Lean FI means covering your basic needs from portfolio income. Fat FI means covering your full lifestyle. Most Canadians aim somewhere between — enough to quit their current job and do something less lucrative but more meaningful. Define YOUR version before calculating the number.</div>
        `,
        checklist:['Calculate your current annual living expenses (use your budget from Module 1)','Multiply by 25 to find your raw FI number','Estimate your expected CPP and OAS (use the CRA retirement estimator at canada.ca)','Subtract the portfolio equivalent of your government income to find your true FI target']
      },
      {
        title:'CPP and OAS — Maximizing Your Government Income',
        meta:'Lesson 2 of 4 · 10 min read',
        content:`
          <h2>CPP and OAS — Maximizing Your Government Income</h2>
          <p class="lesson-meta">Lesson 2 of 4 · 10 min read</p>
          <p>The Canada Pension Plan and Old Age Security are two of the most valuable financial assets most Canadians own — and most Canadians manage them poorly. The decisions you make about when to take CPP and OAS can be worth $100,000–$200,000 over your lifetime.</p>
          <h3>CPP — The Delay Decision</h3>
          <p>You can start CPP as early as age 60 or as late as age 70. For every month you delay past 65, your CPP increases by 0.7% (8.4% per year). Delay to 70 and you receive 42% more than you would at 65 — permanently, for life, indexed to inflation.</p>
          <div class="number-callout">Example — CPP at 65 vs. 70:<br><br>CPP at 65: $1,200/month<br>CPP at 70: $1,200 × 1.42 = $1,704/month<br><br>Monthly difference: $504<br>Annual difference: $6,048<br><br>Break-even age: approximately 82–83<br>(70 - 65 = 5 years of not collecting, recovered at ~$504/month)<br><br>If you live past 83: delaying was financially superior.</div>
          <div class="scenario"><strong>🇨🇦 When NOT to Delay CPP</strong><p>If you have serious health concerns and don't expect to live past your early 80s — take CPP early. If you have no other income and need the money at 60 or 65 — take it when you need it. The delay strategy is optimal for healthy Canadians with other income sources who can afford to wait.</p></div>
          <h3>OAS — The 75 Option</h3>
          <p>OAS begins at 65 but can also be deferred to 70, increasing by 0.6% per month deferred (7.2% per year). For healthy Canadians with sufficient retirement income, delaying OAS to 70 is often mathematically superior.</p>
          <div class="tip-box"><strong>🍁 OAS Clawback Alert:</strong> If your net income in retirement exceeds $90,997 (2026), the CRA begins clawing back your OAS at 15 cents per dollar above that threshold. If you expect high retirement income, plan your RRSP withdrawals and TFSA drawdown strategy to stay below this line.</div>
        `,
        checklist:['Create a My Service Canada account and check your CPP Statement of Contributions','Estimate your CPP at 65 and at 70 using the Service Canada calculator','Decide tentatively: delay CPP to 70 or take at 65? (Review with a fee-only planner if uncertain)','Check if you qualify for GIS (Guaranteed Income Supplement) if retirement income will be low','Plan your retirement income mix: CPP + OAS + TFSA + RRSP + any pension']
      },
      {
        title:'The 5-Year Canadian Wealth Acceleration Plan',
        meta:'Lesson 3 of 4 · 9 min read',
        content:`
          <h2>The 5-Year Canadian Wealth Acceleration Plan</h2>
          <p class="lesson-meta">Lesson 3 of 4 · 9 min read</p>
          <p>Financial independence doesn't happen in a single decision. It's the result of a sequence of right decisions made consistently over years. This module gives you the exact 5-year framework that, if followed, moves the average working Canadian from financial stress to genuine financial stability and trajectory.</p>
          <h3>Year 1 — Foundation</h3>
          <p>Goals: Eliminate all high-interest debt (credit cards, payday loans). Build a $1,000 emergency fund. Create and stick to a working budget for 3 consecutive months. Open TFSA, RRSP, and FHSA (if eligible) — even unfunded.</p>
          <div class="number-callout">Year 1 Success Metric: Zero credit card debt. Emergency fund started. All three accounts open.</div>
          <h3>Year 2 — Stabilization</h3>
          <p>Goals: Build emergency fund to 3 months of expenses. Maximize TFSA contribution ($7,000). Begin FHSA contributions ($8,000) if first-time buyer. Start RRSP if income over $60,000. Kill any remaining consumer debt.</p>
          <div class="number-callout">Year 2 Success Metric: Emergency fund complete. TFSA funded. FHSA contributions underway.</div>
          <h3>Year 3 — Acceleration</h3>
          <p>Goals: Maximize both TFSA and FHSA. Begin or increase RRSP contributions. Launch or grow side hustle to $500+/month. Redirect side income directly to investments. Increase total savings rate to 20%+.</p>
          <h3>Year 4 — Momentum</h3>
          <p>Goals: Side hustle at $1,000+/month. Savings rate at 25%+. Maximize all registered accounts. Begin non-registered investing if all registered room is used. Calculate updated FI number and timeline.</p>
          <h3>Year 5 — Trajectory</h3>
          <p>Goals: Clear net worth milestone reached. All high-interest debt history. Side hustle either scaled or monetized as digital product. FI date visible on the horizon — within 10–15 years for most Canadians who execute this plan.</p>
          <div class="scenario"><strong>🇨🇦 Real 5-Year Projection</strong><p>Amara, 30, earns $58,000/year in Hamilton. Year 1: kills $6,200 credit card debt. Year 2: TFSA fully funded, $400/month invested in XEQT. Year 3: adds $800/month freelance income, FHSA fully funded. Year 4: $1,200/month invested total. Year 5: net worth crosses $80,000, FHSA ready for home down payment, FI number calculated at $900,000, on track for age 55.</p></div>
        `,
        checklist:['Write down your Year 1 goal: what specific financial milestone will you hit by next April?','Identify your single biggest financial obstacle right now (debt? No budget? No investing habit?)','Share your 5-year plan with one trusted person — accountability dramatically increases follow-through','Schedule a quarterly "financial review date" — same weekend, every 3 months']
      },
      {
        title:'Staying the Course — The Psychology of Long-Term Wealth',
        meta:'Lesson 4 of 4 · 10 min read',
        content:`
          <h2>Staying the Course — The Psychology of Long-Term Wealth</h2>
          <p class="lesson-meta">Lesson 4 of 4 · 10 min read</p>
          <p>The financial system works. The math is proven. The strategies in this course are not complex. So why do most Canadians who understand this information still fail to build wealth? The answer is almost never knowledge — it's behaviour under pressure. This final lesson covers the psychological skills that separate Canadians who build wealth from those who don't.</p>
          <h3>Market Crashes — What to Do</h3>
          <p>You will experience a major market crash during your investing lifetime. Markets have dropped 20–50% multiple times in the last 30 years (2001, 2008, 2020, and others). Every single time, they recovered and went on to new highs. Every time.</p>
          <div class="number-callout">$10,000 invested in a broad Canadian ETF in January 2008:<br>By March 2009 (bottom of crash): worth ~$5,600 (down 44%)<br>By December 2013: worth ~$12,400 (fully recovered + gain)<br>By December 2023: worth ~$35,000<br><br>The investor who sold at the bottom: locked in a $4,400 loss<br>The investor who held: turned $10,000 into $35,000</div>
          <div class="scenario"><strong>🇨🇦 The Panic Sell Pattern</strong><p>During the COVID crash of March 2020, Canadian markets dropped 37% in 5 weeks. Thousands of Canadians sold their ETFs in a panic. Markets fully recovered within 5 months and went on to gain 60% by 2021. The investors who sold in March 2020 and stayed out missed one of the fastest and largest recoveries in market history.</p></div>
          <h3>Lifestyle Inflation — The Silent Wealth Killer</h3>
          <p>As Canadian incomes rise, expenses tend to rise at the same rate or faster. This is lifestyle inflation, and it's the primary reason high-earning Canadians often have less net worth than their lower-earning peers who maintained a stable lifestyle and invested the difference.</p>
          <div class="tip-box"><strong>🍁 The 50% Rule for Raises:</strong> Every time you receive a raise or meaningful income increase, commit to directing 50% of the after-tax increase to investments before adjusting your lifestyle. This lets your quality of life improve while simultaneously accelerating your wealth. A $5,000 raise after tax = $2,500 to lifestyle, $2,500 to TFSA. This single habit, applied consistently, accounts for the majority of the wealth gap between financially successful and unsuccessful Canadians at the same income level.</p></div>
          <p>You've completed CanadaWealthOS. The knowledge is yours. The tools are in your account. The only variable left is consistency. The Canadians who transform their finances aren't the most intelligent, the highest paid, or the most disciplined by nature. They're the ones who built systems that made good decisions automatic — and then stayed in their own lane.</p>
          <p><strong>You now have that system.</strong></p>
        `,
        checklist:['Write your personal "market crash protocol": what you will and will not do when markets drop','Set a rule: no selling investments without a mandatory 72-hour waiting period and written reason','Apply the 50% rule to your next raise or income increase','Review CanadaWealthOS once a year — every January — to stay calibrated','Share this with one Canadian who needs it — your accountability partner becomes theirs too']
      }
    ]
  }
];

// ═══════════════════════════════════════════
//              STATE
// ═══════════════════════════════════════════
let memberName = window._memberName || "";
let memberEmail = '';
let lessonProgress = {}; // { "modIdx-lessonIdx": true }
let checklistProgress = {}; // { "modIdx-lessonIdx-itemIdx": true }
let currentModIdx = 0;
let currentLessonIdx = 0;

// ═══════════════════════════════════════════
//              NAVIGATION
// ═══════════════════════════════════════════
function goHome() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('landing').style.display = 'block';
  window.scrollTo(0,0);
}

// ═══════════════════════════════════════════
//              CHECKOUT MODAL
// ═══════════════════════════════════════════
function openModal(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('checkoutModal').classList.remove('open');
  document.body.style.overflow = '';
}

function formatCard(input) {
  let v = input.value.replace(/\D/g,'').substring(0,16);
  input.value = v.replace(/(.{4})/g,'$1 ').trim();
}
function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'');
  if (v.length >= 2) v = v.substring(0,2) + '/' + v.substring(2,4);
  input.value = v;
}

function validateCheckout() {
  let valid = true;
  const name = document.getElementById('ch-name').value.trim();
  const email = document.getElementById('ch-email').value.trim();
  const card = document.getElementById('ch-card').value.replace(/\s/g,'');
  const expiry = document.getElementById('ch-expiry').value.trim();
  const cvv = document.getElementById('ch-cvv').value.trim();

  const setErr = (id, errId, condition) => {
    document.getElementById(id).classList.toggle('error', !condition);
    document.getElementById(errId).classList.toggle('show', !condition);
    if (!condition) valid = false;
  };

  setErr('ch-name','err-name', name.length >= 2 && name.includes(' '));
  setErr('ch-email','err-email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  setErr('ch-card','err-card', card.length === 16 && /^\d+$/.test(card));
  setErr('ch-expiry','err-expiry', /^\d{2}\/\d{2}$/.test(expiry));
  setErr('ch-cvv','err-cvv', cvv.length === 3 && /^\d+$/.test(cvv));

  return valid;
}

function processPurchase() {
  if (!validateCheckout()) return;
  memberName = document.getElementById('ch-name').value.trim();
  memberEmail = document.getElementById('ch-email').value.trim();
  const btn = document.getElementById('btn-submit');
  btn.disabled = true;
  btn.textContent = 'Processing...';
  setTimeout(() => {
    btn.disabled = false;
    btn.textContent = '✓ Complete Purchase — C$47';
    closeModal();
    // Show access code modal
    document.getElementById('accessModal').classList.add('open');
    // Pre-fill demo code hint
    document.getElementById('accessCodeInput').placeholder = 'CWO-DEMO1';
  }, 1800);
}

// ═══════════════════════════════════════════
//              ACCESS CODE GATE
// ═══════════════════════════════════════════
function closeAccessModal() {
  document.getElementById('accessModal').classList.remove('open');
}
function formatAccessCode(input) {
  let v = input.value.toUpperCase().replace(/[^A-Z0-9]/g,'');
  if (v.length > 3) v = v.substring(0,3) + '-' + v.substring(3,8);
  input.value = v;
}
function verifyAccessCode() {
  const code = document.getElementById('accessCodeInput').value.trim().toUpperCase();
  const err = document.getElementById('accessError');
  if (VALID_CODES.includes(code)) {
    err.textContent = '';
    document.getElementById('accessModal').classList.remove('open');
    showDashboard();
  } else {
    err.textContent = 'Invalid code. Check your email or contact support@canadawealthos.ca';
    const input = document.getElementById('accessCodeInput');
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 500);
  }
}

// ═══════════════════════════════════════════
//              DASHBOARD
// ═══════════════════════════════════════════
function showDashboard() {
  document.getElementById('landing').style.display = 'none';
  const dash = document.getElementById('dashboard');
  dash.style.display = 'block';
  const first = memberName ? memberName.split(' ')[0] : 'Member';
  const initials = memberName ? memberName.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase() : 'CW';
  document.getElementById('dashInitials').textContent = initials;
  document.getElementById('dashName').textContent = first;
  document.getElementById('greetName').textContent = first;
  renderModules();
  window.scrollTo(0,0);
}

function renderModules() {
  const grid = document.getElementById('moduleCards');
  const totalLessons = modules.reduce((a,m) => a + m.lessons.length, 0);
  let completedLessons = Object.keys(lessonProgress).filter(k => lessonProgress[k]).length;
  const pct = Math.round((completedLessons / totalLessons) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = `${completedLessons} of ${totalLessons} lessons complete`;

  grid.innerHTML = modules.map((m, mi) => {
    const totalL = m.lessons.length;
    const doneL = m.lessons.filter((_, li) => lessonProgress[`${mi}-${li}`]).length;
    const allDone = doneL === totalL;
    const isUnlocked = mi === 0 || modules[mi-1].lessons.every((_,li) => lessonProgress[`${mi-1}-${li}`]);
    const badge = allDone ? 'done' : (isUnlocked ? 'new' : 'locked');
    const badgeLabel = allDone ? '✓ Complete' : (isUnlocked ? '▶ Start' : '🔒 Locked');
    const progPct = Math.round((doneL / totalL) * 100);
    return `
      <div class="mod-card" onclick="${isUnlocked ? `openModule(${mi})` : `showLockMsg()`}">
        <div class="mod-card-header">
          <div class="mod-num">MODULE ${m.num}</div>
          <div class="mod-badge badge-${badge}">${badgeLabel}</div>
        </div>
        <div class="mod-card-body">
          <h4>${m.title}</h4>
          <p>${m.desc}</p>
          <div class="mod-progress">
            <div class="mod-progress-label">${doneL} of ${totalL} lessons complete</div>
            <div class="mod-progress-bar"><div class="mod-progress-fill" style="width:${progPct}%"></div></div>
          </div>
        </div>
      </div>`;
  }).join('');
}

function openModule(mi) {
  currentModIdx = mi;
  currentLessonIdx = 0;
  renderLesson();
  document.getElementById('lessonOverlay').classList.add('open');
}

function closeLesson() {
  document.getElementById('lessonOverlay').classList.remove('open');
  renderModules();
}

function showLockMsg() { alert('Complete all lessons in the previous module to unlock this one! 🔒'); }

// ═══════════════════════════════════════════
//              LESSON RENDERING
// ═══════════════════════════════════════════
function renderLesson() {
  const m = modules[currentModIdx];
  const l = m.lessons[currentLessonIdx];
  const key = `${currentModIdx}-${currentLessonIdx}`;

  document.getElementById('lessonModuleLabel').textContent = `MODULE ${m.num}`;
  document.getElementById('lessonModuleTitle').textContent = m.title;

  // Tabs
  const tabs = m.lessons.map((lesson, li) => {
    const isDone = lessonProgress[`${currentModIdx}-${li}`];
    const isActive = li === currentLessonIdx;
    return `<div class="lesson-tab ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" onclick="switchLesson(${li})">
      ${isDone ? '✓ ' : ''}Lesson ${li+1}
    </div>`;
  }).join('');
  document.getElementById('lessonTabs').innerHTML = tabs;

  // Content
  const checklistHTML = l.checklist ? `
    <div class="checklist-section">
      <h3>✅ Module Checklist — Take Action</h3>
      ${l.checklist.map((item, ci) => {
        const cKey = `${currentModIdx}-${currentLessonIdx}-${ci}`;
        const checked = checklistProgress[cKey];
        return `<div class="checklist-item ${checked ? 'item-done' : ''}" onclick="toggleChecklist('${cKey}', this)">
          <div class="checklist-box ${checked ? 'checked' : ''}"></div>
          <span>${item}</span>
        </div>`;
      }).join('')}
    </div>` : '';

  document.getElementById('lessonContent').innerHTML = l.content + checklistHTML;

  // Footer buttons
  document.getElementById('btnPrevLesson').disabled = currentLessonIdx === 0;
  document.getElementById('btnNextLesson').disabled = currentLessonIdx === m.lessons.length - 1;
  const isDone = lessonProgress[key];
  document.getElementById('btnMarkDone').textContent = isDone ? '✓ Completed' : '✓ Mark Complete';
  document.getElementById('btnMarkDone').style.background = isDone ? '#888' : '#1A7A4A';
}

function switchLesson(li) {
  currentLessonIdx = li;
  renderLesson();
  document.getElementById('lessonContent').scrollTop = 0;
}

function navigateLesson(dir) {
  const m = modules[currentModIdx];
  const newIdx = currentLessonIdx + dir;
  if (newIdx >= 0 && newIdx < m.lessons.length) {
    currentLessonIdx = newIdx;
    renderLesson();
    document.getElementById('lessonContent').scrollTop = 0;
  }
}

function markLessonDone() {
  const key = `${currentModIdx}-${currentLessonIdx}`;
  lessonProgress[key] = true;
  renderLesson();
  // Auto-advance to next lesson if available
  const m = modules[currentModIdx];
  if (currentLessonIdx < m.lessons.length - 1) {
    setTimeout(() => { currentLessonIdx++; renderLesson(); document.getElementById('lessonContent').scrollTop = 0; }, 400);
  }
}

function toggleChecklist(cKey, el) {
  checklistProgress[cKey] = !checklistProgress[cKey];
  el.classList.toggle('item-done', checklistProgress[cKey]);
  el.querySelector('.checklist-box').classList.toggle('checked', checklistProgress[cKey]);
}

// ═══════════════════════════════════════════
//              FAQ
// ═══════════════════════════════════════════
function toggleFaq(btn) {
  const ans = btn.nextElementSibling;
  const isOpen = ans.classList.contains('open');
  document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
  document.querySelectorAll('.faq-q').forEach(b => b.classList.remove('open'));
  if (!isOpen) { ans.classList.add('open'); btn.classList.add('open'); }
}

function logout() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('landing').style.display = 'block';
  lessonProgress = {}; checklistProgress = {};
  memberName = ''; memberEmail = '';
  window.scrollTo(0,0);
}
