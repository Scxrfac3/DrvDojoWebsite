import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { BlogArticle } from "@/types/BlogArticle";
import BlogArticleContent from "../blog/BlogArticleContent";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MessageSquare,
  ThumbsUp,
  Eye,
  Share2,
  Bookmark,
  Heart,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Zap,
} from "lucide-react";

// Sample blog data (will be replaced with API call)
const sampleBlogArticles: BlogArticle[] = [
  {
    id: "9",
    title:
      "24 Hours in the Life of a Driving Instructor: The Career Glow-Up You Need? 🚗",
    slug: "day-in-life-driving-instructor-career-change",
    content: `# 24 Hours in the Life of a Driving Instructor: The Career Glow-Up You Need? 🚗

Ever wondered what it's actually like to be a driving instructor? Is it just sitting in a car all day telling people to check their mirrors? Or is there more to this career path that's got everyone talking lately? Let's take you through a day in the life and see if this vibe matches your career goals.

## The Morning Routine: Not Your Average 9-5 💅

### 7:30 AM: Rise and Shine (But On Your Terms)

Meet Jas, a 28-year-old driving instructor who switched from corporate life two years ago. Her alarm goes off at 7:30 AM—not because her boss demands it, but because she's scheduled her first lesson for 9 AM.

"I used to drag myself out of bed at 6 AM to commute to my marketing job," Jas tells us while making her morning matcha. "Now I set my own hours. Some days I start at 9, others at noon if I want to hit the gym first. That work-life balance everyone's always posting about? It's actually real in this job."

### 8:15 AM: The Mobile Office Setup

Before heading out, Jas checks her teaching schedule on the Drive Dojo app. Today she has five lessons back-to-back, with a lunch break she scheduled herself. She makes sure her car is clean, her dual controls are working properly, and her playlist of chill driving tunes is ready to go.

"My car is literally my office," she laughs. "And yes, I can claim it as a business expense on my taxes. The girlies at my old job are so jealous of my commute—it's just downstairs to my parking spot."

## The Teaching Hours: Main Character Energy 💯

### 9:00 AM: First Student - The Nervous Beginner

Jas's first appointment is with Zoe, a 17-year-old who's had just two lessons so far. She's still in that shaky, nervous era of learning.

"The transformation from first lesson to test day is literally my favorite part of this job," Jas explains as she greets Zoe with a reassuring smile. "When someone goes from terrified to confident? That serotonin boost is unmatched."

The lesson focuses on basic control skills in a quiet residential area. Jas's teaching style is calm but engaging—she uses TikTok-inspired analogies that her Gen Z students actually relate to.

"Clutch control is just like trying to keep a fidget spinner perfectly balanced," she tells Zoe, who immediately gets it after struggling for 20 minutes.

### 11:00 AM: Second Student - The Test Preparer

Next up is Marcus, who has his driving test in two weeks. Today they're practicing parallel parking and emergency stops—the maneuvers that often trip people up on test day.

"The pressure is real with pre-test students," Jas admits. "But that's what makes it exciting. I'm literally the difference between them passing or failing sometimes."

Marcus nails a particularly difficult parallel park, and the high-five they share isn't just for show—it's a genuine moment of achievement that office workers rarely experience at 11:30 on a Tuesday morning.

### 1:00 PM: Lunch Break - Freedom to Choose

With a two-hour gap she intentionally scheduled, Jas parks up at her favorite café. She uses this time to catch up on admin, respond to new booking requests, and actually enjoy her lunch without eating at her desk.

"Sometimes I use this break to run errands, go to appointments, or just chill and scroll. Try doing that in a corporate job without someone side-eyeing you."

### 3:00 PM: Third Student - The Confident Overtaker

After lunch, Jas meets Amir, an experienced learner who's working on dual carriageway driving and overtaking. This lesson is more advanced, requiring Jas to switch teaching styles completely.

"Every student is different, and every lesson is different," she explains. "One minute I'm teaching someone how to move off without stalling, the next I'm guiding someone through complex traffic situations at 70mph. The variety keeps me engaged in ways my old desk job never could."

### 5:00 PM: Final Student - The Pass Plus Graduate

Jas's last lesson of the day is with Lily, who passed her test last week and is now taking Pass Plus lessons to build confidence on motorways.

"This is where the real teaching happens," Jas says as they merge onto the M25. "Passing the test is just the beginning. Helping new drivers become safe, confident road users for life—that's the mission."

## The Evening Wind-Down: Flexibility Unmatched 🌙

### 7:00 PM: Admin and Planning

Back home, Jas spends 30 minutes updating her students' progress records and planning tomorrow's lessons. With her specialized teaching app, this process is quick and painless.

"The admin side is minimal compared to my corporate job. No pointless meetings, no performance reviews, no office politics. Just me, my students, and the road."

### 7:30 PM: The Rest of the Evening Is YOURS

With work wrapped up completely, Jas's evening is entirely her own. Tonight she's meeting friends for dinner—friends she used to cancel on regularly when working late at her previous job.

"The best part? I'm not exhausted from commuting or dealing with office drama. I have actual energy to enjoy my life after work."

## The Financial Reality Check: Let's Talk Money 💰

Being transparent about the bag is important, so here's the tea on what driving instructors actually make:

### The Income Breakdown

- **Hourly rate:** Most independent instructors charge £35-45 per hour in London
- **Weekly potential:** Working 30 teaching hours = £1,050-1,350 per week
- **Annual earnings:** £40,000-£60,000+ depending on hours and rates
- **Franchise vs. Independent:** Franchisees with driving schools earn less but have fewer expenses and admin responsibilities

### The Expenses Reality

Jas breaks it down: "Yes, I make more than my old marketing coordinator role, but there are expenses to consider:"

- Car payments/maintenance
- Fuel costs
- Insurance (specialized instructor insurance)
- Franchise fees (if applicable)
- Self-employment taxes

"Even after expenses, I'm still clearing more than my old salary, with half the stress and twice the satisfaction," she adds.

<div class="pricing-card bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 my-8 text-white shadow-xl">
  <h3 class="text-2xl font-bold mb-4">Want to Become a Driving Instructor?</h3>
  <div class="space-y-4">
    <div class="flex justify-between items-center border-b border-white/20 pb-2">
      <span class="font-medium">ADI Training Course</span>
      <span class="text-xl font-bold">£1,500</span>
    </div>
    <div class="flex justify-between items-center border-b border-white/20 pb-2">
      <span class="font-medium">Part 1 Theory Preparation</span>
      <span>Included</span>
    </div>
    <div class="flex justify-between items-center border-b border-white/20 pb-2">
      <span class="font-medium">Part 2 Driving Ability</span>
      <span>Included</span>
    </div>
    <div class="flex justify-between items-center border-b border-white/20 pb-2">
      <span class="font-medium">Part 3 Instructional Ability</span>
      <span>Included</span>
    </div>
    <div class="flex justify-between items-center border-b border-white/20 pb-2">
      <span class="font-medium">Business Setup Guidance</span>
      <span>Included</span>
    </div>
    <div class="mt-6">
      <a href="/contact" class="block text-center bg-white text-purple-600 py-3 px-4 rounded-lg font-medium hover:bg-opacity-90 transition-colors">Book a Consultation Call</a>
    </div>
    <p class="text-sm text-center mt-4">Flexible payment plans available. Start your journey today!</p>
  </div>
</div>

## Is This Career Actually For You? The Vibe Check ✨

Before you quit your job and sign up for instructor training, Jas suggests asking yourself these questions:

### The Green Flags

- Do you genuinely enjoy helping others learn?
- Are you patient enough to explain the same concept multiple ways?
- Do you thrive with variety rather than routine?
- Is work-life balance a major priority for you?
- Are you comfortable being self-employed or running a small business?

### The Red Flags

- Do you get road rage easily? (Big yikes for this career)
- Do you need the structure of a traditional workplace?
- Are you looking for a completely passive income? (This ain't it)
- Do you dislike being in a car for extended periods?
- Are you uncomfortable with the responsibility of someone's safety?

## How to Get Started: Your Career Glow-Up Blueprint 📝

If you're still reading and thinking "this could be my next move," here's how to level up into driving instruction:

### 1. Check Your Eligibility

- Hold a full UK driving license for at least 3 years
- No more than 6 penalty points on your license
- Be able to pass an enhanced DBS check
- Meet the character requirements set by the DVSA

### 2. The Three-Part Qualification Journey

**Part 1: Theory and Hazard Perception**
- Multiple-choice questions on driving theory
- Hazard perception clips
- Pass mark: 85% (higher than the standard theory test)

**Part 2: Driving Ability**
- Advanced driving test (much harder than the standard test)
- Demonstrate perfect driving technique
- Eye-tracking technology to check observation skills

**Part 3: Instructional Ability**
- The final boss level: proving you can actually teach
- Role-play scenarios with an examiner
- Demonstrating different teaching methods

### 3. The Investment

"Be prepared to invest in your future," Jas advises. "The training and tests cost around £1,500-3,000 depending on how much support you need, but the return on investment is quick once you're qualified."

## The Reality No One Talks About: Instructor Tea ☕

Jas keeps it 100 with us about the challenges:

"It's not all TikTok-worthy moments. Some days you'll have a student who just doesn't get it, no matter how you explain. Some days you'll be sitting in traffic wondering if you made the right choice. And yes, sometimes you'll have to grab the wheel when a student makes a dangerous move."

But then she smiles: "But then you get that text from a student saying they passed their test, with a selfie of them holding their certificate. And you remember why you do this. You literally changed someone's life today. How many jobs can say that?"

## Ready to Switch Lanes in Your Career?

If Jas's day sounds better than your current 9-5 grind, driving instruction might be the career glow-up you've been scrolling for.

At Drive Dojo, we offer comprehensive instructor training programs that take you from complete beginner to qualified ADI. Our success rate is 20% higher than the national average because we understand what it takes to not just pass the tests, but build a sustainable, fulfilling career.

Drop us a DM or hit the contact button below to find out how you could be in the driver's seat of your own career within months. The road to freedom starts with a single turn of the key. 🔑

*No cap—this could be your life in 2024. Just saying.*`,
    excerpt:
      "Curious about life as a driving instructor? Follow Jas through her day—from flexible mornings to life-changing teaching moments—and discover if this career path could be your next move. With £40K+ earning potential and unmatched work-life balance, it might be the glow-up your career needs!",
    featuredImage:
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=800&q=80",
    author: {
      name: "Drive Dojo Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DriveDojo",
    },
    publishedDate: "March 15, 2024",
    category: "Career Opportunities",
    tags: [
      "driving instructor",
      "day in the life",
      "career change",
      "flexible work",
      "instructor salary",
      "work life balance",
      "ADI qualification",
      "self-employment",
    ],
    readTime: 8,
    views: 1876,
    likes: 243,
    comments: 68,
  },
  {
    id: "8",
    title: "Why Now Is The Perfect Time To Become A Driving Instructor 🔥",
    slug: "why-now-is-perfect-time-to-become-driving-instructor",
    content: `# Why Now Is The Perfect Time To Become A Driving Instructor 🔥

Looking for a career glow-up that hits different? London's roads are bussin', and the demand for skilled driving instructors is giving major opportunity vibes! With the city's population booming and more people than ever wanting that driving independence, there's never been a better time to level up your career game.

## The Driving Instructor Vibe Check

Becoming a driving instructor in London isn't just a job—it's a whole lifestyle upgrade. You'll be:

- The main character in someone's driving journey 🚗
- Securing that bag with flexible hours 💰
- Building your own empire as your own boss 👑

Whether you're looking to escape the 9-5 grind, need that work-life balance everyone's talking about on TikTok, or want a career that actually makes a difference, this path is giving everything it's supposed to give!

## Why It's Giving Career Goals

### 1. Flex Your Schedule, Not Just Your 'Gram

As a driving instructor, you're literally the CEO of your time. Morning person? Work those AM hours. Night owl? Evening lessons exist. Need a random Wednesday off for self-care? Make it happen.

This elite level of flexibility means you can:
- Design your schedule around your life, not the other way around
- Never miss another bestie's birthday brunch
- Actually use your gym membership

### 2. The Bag Secured 💸

Let's talk money moves—qualified instructors are pulling in £30K+ annually, and that's just the beginning. The math is simple: more lessons = more income. Unlike corporate jobs where you're begging for that 3% annual raise, your earnings directly reflect your grind.

Plus, in this economy? A career with consistent demand is the ultimate financial security blanket.

### 3. Main Character Energy Every Day

Imagine the serotonin boost when your student passes their test and is literally jumping with joy! As an instructor, you're not just teaching—you're unlocking someone's independence era.

Every "I DID IT!" text hits different when you know you helped make it happen. It's giving purpose, fulfillment, and all those things your current job could never.

## Why The Time Is Now (No, Seriously)

### 1. Post-Pandemic Plot Twist

The pandemic changed the game—public transport is giving "no thanks" energy, and everyone wants their own wheels now. This shift means driving schools across London are booked and busy, with waiting lists longer than the queue for the latest sneaker drop.

More students = more instructor opportunities. It's basic math, bestie.

### 2. Recession-Proof Your Future

While other industries are doing the layoff shuffle, driving instruction stays winning. People will always need to learn to drive—in economic booms and busts. That's the kind of job security that lets you sleep at night instead of doom-scrolling about the job market at 3 AM.

### 3. London's Driving Instructor Shortage? Your Opportunity!

The city is literally begging for qualified instructors right now. With more learners than teachers, you're stepping into a seller's market where your skills are the moment.

## The Blueprint: How To Get Started

### 1. Check Your Eligibility

First things first, you need:
- A UK license you've held for 3+ years
- Fewer than 6 penalty points (keep it clean, bestie)
- To pass those background checks (no tea, no shade)

### 2. The Qualification Era

The ADI qualification process has three main checkpoints:
- Theory test (flex that road knowledge)
- Driving test (time to show off those skills)
- Instructional ability test (prove you can actually teach)

### 3. Train With The Best

Link up with our expert team at Lanes School of Driving for that elite training. We've been in the game for decades and know exactly how to set you up for success. Our courses aren't just about passing tests—they're about building that instructor confidence.

### 4. Secure The License

Once you've cleared all three tests, you'll get your ADI license—the golden ticket to your new career. This is officially your "started from the bottom, now we're here" moment.

### 5. Launch Your Era

Time to build your student roster! Many new instructors start with established schools (like us!) for that built-in support system, while others go straight to independent boss mode.

## Ready To Switch Lanes?

If you're tired of the same old career routine and ready for a path with actual growth potential, becoming a driving instructor is the move.

Speak to one of our friendly and experienced trainers today to get all the tea on starting your instructor journey. Call 020 8290 2070 now—your future self will thank you for the career glow-up!

No cap, there's never been a better time to join the driving instructor community. The roads are waiting for your expertise, and so are we! 💅`,
    excerpt:
      "Ready for a career that's actually giving? London's driving instructor shortage is your opportunity era! Flexible hours, £30K+ earning potential, and the chance to be your own boss—find out why becoming a driving instructor is the ultimate career move right now.",
    featuredImage:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
    author: {
      name: "Drive Dojo Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DriveDojo",
    },
    publishedDate: "January 20, 2025",
    category: "Career Opportunities",
    tags: [
      "driving instructor",
      "career change",
      "london jobs",
      "flexible work",
      "instructor training",
      "ADI qualification",
      "self-employment",
    ],
    readTime: 7,
    views: 1243,
    likes: 187,
    comments: 52,
  },
  {
    id: "7",
    title: "How Many Driving Lessons Do You Actually Need? The Real Tea 🚗",
    slug: "how-many-driving-lessons-do-you-need",
    content: `# How Many Driving Lessons Do You Actually Need? The Real Tea 🚗

So you're ready to hit the road and get that license, but the big question is: how long is this gonna take? If you're stressing about the number of lessons you'll need before test day, you're not alone. Let's break down the facts and spill the tea on what really affects your driving journey.

## The Average Vibe Check: What Most People Need

Let's keep it 💯 - most people clock around 40-45 hours of professional lessons before they're test-ready. That's the sweet spot where you've mastered the basics and built enough confidence to handle whatever the road throws at you.

But wait, there's more! The DVSA (that's the Driver and Vehicle Standards Agency) actually recommends adding another 20 hours of independent practice with someone experienced riding shotgun. This combo is the ultimate cheat code for passing your test first time.

And don't sleep on your theory test! You'll need to study the Highway Code and pass that theory exam before you can even book your practical test. It's literally the gateway to your driving future.

## Why Some People Take Longer (No Shade)

### The Anxiety Factor

Feeling nervous behind the wheel? Totally normal, but it might mean you need a few extra lessons. Your confidence level is a major key to success, so take the time you need to feel secure. Remember: it's not a race (well, except when you're finally on the motorway 😉).

### Theory Knowledge Gaps

If you're struggling with road signs and rules, you might need more practical lessons to reinforce that knowledge. The theory and practical sides of driving are besties - they work together. Passing your theory test early is a power move that could actually reduce your overall lesson count.

### The Waitlist Situation

The driving test backlog is giving major festival waitlist energy right now. With tests booked up to six months in advance, you might need extra lessons just to keep your skills fresh while you wait. Silver lining? More practice could mean higher chances of passing first time!

## How to Speed Run Your Learning Journey

### Intensive Course Hack

Want to speedrun your way to a license? Intensive courses let you cram everything into 1-6 days of non-stop learning. It's like binge-watching a series, but for driving skills. These courses usually include your test at the end, so you could go from zero to hero in a week.

### Independent Practice FTW

Practicing between lessons with a parent or experienced friend is the ultimate XP boost. It helps cement what you've learned and builds your confidence without the pressure of an instructor watching. Just make sure whoever's supervising has the patience of a saint and valid insurance!

### Know Your Learning Style

Are you a visual learner? Audio? Hands-on? Understanding how you process information best can be a game-changer. If you're visual, maybe keep some driving tip flashcards around your room. If you learn by doing, focus on maximizing your time behind the wheel.

## The Bottom Line

Everyone's journey hits different. Some people pass after 20 lessons, others might take 60+ and that's completely fine! The goal isn't to use the fewest lessons possible - it's to become a safe, confident driver who's ready to pass that test and handle the roads solo.

Remember: your instructor is your biggest ally in this journey. They'll let you know when you're ready, so trust their vibe check on your progress. Quality lessons > quantity of lessons every time.

So, how many lessons will YOU need? The answer is: exactly as many as it takes for you to become that main character energy driver you're meant to be. No more, no less. And that's on period. 💅`,
    excerpt:
      "Wondering how many driving lessons you'll need before test day? From the average 40-45 hours to hacks for fast-tracking your progress, get the real tea on what affects your learning timeline. No cap!",
    featuredImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    author: {
      name: "Drive Dojo Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DriveDojo",
    },
    publishedDate: "August 28, 2023",
    category: "Learning Tips",
    tags: [
      "driving lessons",
      "test preparation",
      "learning to drive",
      "intensive courses",
      "driving anxiety",
      "theory test",
    ],
    readTime: 6,
    views: 1854,
    likes: 203,
    comments: 47,
  },
  {
    id: "6",
    title: "Intensive vs Standard Driving Courses: Which Is Right For You?",
    slug: "intensive-vs-standard-driving-courses",
    content: `# Intensive vs Standard Driving Courses: Which Is Right For You?

You have decided that it's time to learn to drive and are now trying to figure out the best way of doing so. With so many driving schools and instructors out there it can be a little overwhelming to know what is best to do. It doesn't matter whether you are young or a little more mature, whether you have some driving experience or not. What matters is that you get up to the right standard to be able to take your driving test and pass successfully.

## Making The Right Choice

Before you start looking around to book your first lesson, it's worth having in mind what sort of instruction you want and what the benefits and disadvantages are. Which is the right course for you – a standard or an intensive one?

There is no legal minimum set by the Driving and Vehicles Standards Agency (DVSA), it is up to you and your instructor to know when you are ready to take the test. Your driving instructor must, however, be approved by the DVSA. On average it takes between 40 and 50 hours of instruction and practice to feel ready to pass your test successfully.

## Standard Courses

A standard course will see you taking anything between one and three lessons a week, each lasting around an hour and a half. The benefit of doing it this way is taking the time to learn at your own pace and get some practice in with a friend or family member, who is already qualified, to embed what you learn with your instructor and get some experience of being on the road without them. The downside to this option is that it will take you longer and may cost you more in the long run.

## Intensive Courses

The other option is to take an intensive course. You may be pressed for time and need to get on the road fast, or you may have some driving knowledge but not enough to get to test standard. An intensive course can help you do just that in a compressed period of time. It works by spending a few days with an instructor getting all the knowledge and practice you need. This could be as many as six hours a day for five days, so it is definitely intense!

The benefits are the speed with which the course can be completed and the fact that you can be ready to take your test after just a few days. It can be a cheaper way of doing it as well, as you are committed to the hours that make up that intensive course.

The downside, if you are on the younger end of the scale with little previous knowledge or driving, is that the level of road-user experience that you get with an intensive course is no match for that which comes with a standard one. However, it may be just what you need if you do have some experience already and want to get on to the road quickly.`,
    excerpt:
      "Deciding between intensive and standard driving courses? Learn the pros and cons of each approach to find the best option for your learning style, schedule, and experience level.",
    featuredImage:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
    author: {
      name: "Drive Dojo Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DriveDojo",
    },
    publishedDate: "August 20, 2023",
    category: "Learning Tips",
    tags: [
      "intensive driving course",
      "standard driving lessons",
      "learn to drive",
      "driving test preparation",
      "DVSA",
    ],
    readTime: 5,
    views: 2103,
    likes: 178,
    comments: 42,
  },
  {
    id: "5",
    title: "Top 5 Qualities To Look For In A London Driving Instructor",
    slug: "top-5-qualities-london-driving-instructor-goodmayes",
    content: `# Finding Your Perfect Driving Instructor in London: 5 Must-Have Qualities

Choosing the right driving instructor in London—especially if you're planning to take your test at Goodmayes Test Centre—can literally make or break your driving journey. With hundreds of instructors across the city claiming to be the best, how do you separate the elite from the average?

## Why Your Choice of Instructor Matters

Before we dive into the qualities, let's get real about why this decision is so important. The average learner in London needs 45-50 hours of professional instruction before passing their test. That's a lot of time (and money) to spend with someone who might not be the right fit!

At Goodmayes Test Centre specifically, the pass rate hovers around 42%—slightly below the national average. This means having an instructor who knows the local test routes and challenging spots around Goodmayes is absolutely essential.

## 1. Proper Qualifications & Experience 🏆

This might seem obvious, but it's literally the foundation of everything else. Your instructor MUST be registered with the Driver and Vehicle Standards Agency (DVSA) as an Approved Driving Instructor (ADI).

- Look for the green badge displayed in their car window—this confirms they're fully qualified
- Ask how long they've been teaching in London specifically
- Inquire about their experience with the Goodmayes Test Centre routes
- Check if they have additional certifications beyond the minimum requirements

The best instructors in London continuously update their skills and knowledge. They should be familiar with the latest Highway Code updates and teaching methods.

## 2. Local Knowledge of Goodmayes and East London 🗺️

London's roads are uniquely challenging, and each test centre has its own notorious spots. A top-tier instructor will have:

- Detailed knowledge of common test routes around Goodmayes
- Understanding of local traffic patterns and rush hours
- Familiarity with tricky junctions and roundabouts specific to East London
- Strategies for navigating the busy A12 and local residential areas

An instructor with this specialized knowledge can prepare you for exactly what you'll face on test day, giving you a significant advantage.

## 3. Teaching Style That Matches Your Vibe ✨

This is where things get personal. Everyone learns differently, and the teaching approach that works for your friend might be completely wrong for you.

The best instructors adapt their teaching style to match your learning preferences. They should be:

- Patient when you're struggling (because everyone does at some point)
- Clear with instructions and feedback
- Able to explain concepts in multiple ways if you don't get it the first time
- Supportive but honest about areas you need to improve

During your first lesson, pay attention to how they communicate. Do they explain things in a way that makes sense to you? Do they make you feel comfortable asking questions? These are major green flags!

## 4. Professional Attitude & Reliability 💯

Your time and money are valuable. A professional instructor will respect both by:

- Being punctual for every lesson
- Maintaining a clean, well-serviced car
- Focusing entirely on your lesson (not taking calls or getting distracted)
- Providing structured lessons with clear objectives
- Keeping accurate records of your progress

Reliability extends beyond just showing up on time. It's about consistency in their teaching and being someone you can depend on throughout your learning journey.

## 5. Strong Track Record of Success 📈

Results speak volumes. Before committing to an instructor, ask about:

- Their first-time pass rate (especially at Goodmayes Test Centre)
- How many of their students pass with few or zero minors
- Reviews and testimonials from previous students
- Whether they're willing to put you in touch with past students

Many top instructors in London will proudly share this information on their website or social media. If they're hesitant to discuss their success rate, consider it a potential red flag.

## How to Find Your Perfect Match

Now that you know what to look for, here are some practical steps to find your ideal instructor:

1. Ask friends who've recently passed for recommendations
2. Check online reviews specifically mentioning Goodmayes Test Centre
3. Book a single assessment lesson before committing to a package
4. Trust your gut feeling—you'll be spending many hours with this person

## Why Drive Dojo Instructors Stand Out

At Drive Dojo, we pride ourselves on meeting all these criteria and more. Our instructors undergo rigorous training beyond DVSA requirements, have extensive experience with all London test routes (including specialized knowledge of Goodmayes), and maintain an impressive first-time pass rate.

We carefully match students with instructors based on learning style and personality, ensuring you get the most effective and enjoyable learning experience possible.

## Ready to Start Your Journey?

Finding the right driving instructor is your first step toward driving freedom in London. Take your time, do your research, and don't settle for less than you deserve.

Want to learn more about our approach or book a lesson with one of our top-rated instructors? Call us today on 020 8166 5678 or visit our website to schedule your first lesson. Your future as a confident London driver starts here!`,
    excerpt:
      "Looking for the perfect driving instructor in London, especially near Goodmayes test centre? Discover the essential qualities that make a great instructor who'll help you pass your test first time!",
    featuredImage:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    author: {
      name: "Drive Dojo Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DriveDojo",
    },
    publishedDate: "April 23, 2025",
    category: "Instructor Tips",
    tags: [
      "london driving instructor",
      "goodmayes test centre",
      "driving lessons",
      "instructor qualities",
    ],
    readTime: 6,
    views: 1872,
    likes: 143,
    comments: 37,
  },
  {
    id: "1",
    title: "Failed Your Driving Test? 7 Ways to Bounce Back and Pass Next Time",
    slug: "get-over-failing-your-driving-test",
    content: `# Failed Your Driving Test? Don't Stress! 😩

Failing your driving test can feel like the end of the world. All those hours of practice, the money spent, and the hype you built up with your friends—all for that dreaded "Sorry, you haven't passed today."

**But here's the tea: you're SO not alone.** The latest stats show that over 50% of learners fail their first attempt. Even some of the best drivers had to take their test multiple times!

## Why This Guide is Your New BFF

This article isn't just another boring "how-to" guide. We're breaking down:

- The psychology behind test failure (and why it's actually NBD)
- Practical steps to bounce back FAST
- Secret techniques driving examiners wish you knew
- Interactive quiz to identify your test-day weaknesses
- Real stories from people who failed but came back stronger

## 1. The Vibe Check: Don't Be Too Hard on Yourself 🧘‍♀️

Let's keep it 💯: failing feels awful. You might be in your feels right now, and that's valid! But here's why you shouldn't let it wreck your confidence:

- Driving is a complex skill that literally rewires your brain
- Test anxiety affects your performance (it's science, not just you)
- Even experienced drivers make the same mistakes you did

**Quick Self-Care Tip:** Take 24 hours to feel your feelings. Watch that comfort show, grab your favorite snack, or vent to your bestie. Then it's time to level up.

## 2. Main Character Energy: Learn From Your Mistakes 📝

When the examiner says you've failed, it's easy to zone out. But this feedback is literally your cheat code for next time!

- Take deep breaths and actively listen to their explanation
- Ask questions if something isn't clear (they expect this!)
- Review your test report like it's the most important study guide ever

**Pro Tip:** Record voice notes of what the examiner says right after your test while it's fresh. Future you will thank you.

## 3. Spill the Tea: Talk About Your Experience 🗣️

The worst thing you can do is keep your feelings bottled up or feel embarrassed.

- Share your experience with friends who drive (their fails will shock you)
- Join online communities like r/LearnerDrivers to find your people
- Be open with your instructor about what stressed you most

**Reality Check:** Everyone has failed at something important. Your driving test story will be a funny memory once you've passed!

## 4. Get Back in Your Bag: Return to Driving ASAP 🚗

The longer you avoid driving after failing, the more your skills fade and anxiety builds.

- Schedule a lesson within a week of your failed test
- Focus the first session on just rebuilding confidence, not perfection
- Drive the exact test routes where you had issues

**Mindset Shift:** Each minute behind the wheel after failing is worth double the practice time before.

## 5. Secure the Date: Book Your Next Test Strategically 📅

Don't rush into the next available test slot without a plan.

- Consult with your instructor on realistic timeframes
- Consider test center pass rates (some are literally easier than others)
- Book morning slots if you're sharper then, or afternoon if you need time to warm up

**Insider Hack:** Test slots often open up 48 hours before the date due to cancellations. Set notifications on the booking app!

## 6. Level Up: Targeted Practice Makes Perfect 🎯

Generic practice isn't it. You need to focus on your specific weak points.

- Create a personalized training plan based on your test report
- Master those tricky roundabouts or parallel parking spots that got you
- Practice commentary driving (narrating what you're doing) to improve awareness

**Common Fail Points:**
- Not checking mirrors enough (especially before signaling)
- Hesitation at junctions when it's safe to go
- Poor positioning on roundabouts
- Incorrect speed for conditions

## 7. Mindfulness > Stress: Manage Test Anxiety 🧠

For many, it's not driving skills but nerves that cause the fail.

- Practice visualization techniques (imagine passing your test in detail)
- Try the 4-7-8 breathing method before and during your test
- Use positive affirmations that actually work (not cringe ones)

**Quick Anxiety Hack:** When waiting for your test, squeeze and release your fists 10 times. It releases physical tension without being obvious.

## The Glow-Up: Success Stories 💫

**Zoe, 19:** "Failed 3 times for the same mistake—not checking my blind spot when moving off. Created a checklist song to the tune of 'Drivers License' and passed the 4th time with only 2 minors!"

**Marcus, 18:** "Test anxiety had me shaking. Failed twice. Started using a meditation app for 5 minutes before driving lessons. Passed third time and now I drive for Uber Eats on weekends for extra cash."

## Take the Quiz: Why Did You Really Fail? 🤔

Understand your driving test weaknesses by answering these quick questions:

1. During your test, did you feel more nervous about:
   - Specific maneuvers (parallel parking, etc.)
   - General road awareness
   - The examiner judging you

2. Did you make mistakes in areas you usually perform well in?
   - Yes, I was surprised by my errors
   - No, I failed on things I struggle with in lessons

3. How did you sleep the night before your test?
   - Great! 8+ hours
   - OK, 5-7 hours
   - Terrible, under 5 hours

## Ready to Secure That License? We've Got You 🔑

At Drive Dojo, our pass rate is 20% higher than the national average because we specialize in helping students who've failed before.

Our instructors are trained in anxiety management techniques alongside advanced driving skills. Plus, we offer a special "Test Recovery" package with:

- 1-hour assessment lesson
- 3 hours focused on your specific fail points
- Mock test with a different instructor
- Test day preparation session

Don't let one fail define your driving journey. Book your comeback lesson today by calling 020 8166 5678 or clicking the button below.

**Remember: The best drivers aren't those who passed first time—they're the ones who learned from their mistakes and became safer on the road because of it.**`,
    excerpt:
      "Failed your driving test? You're not alone—over 50% of learners don't pass first time! Discover 7 proven strategies to bounce back, manage test anxiety, and pass your next driving test with confidence. Includes interactive quiz and real success stories.",
    featuredImage:
      "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80",
    author: {
      name: "Drive Dojo Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DriveDojo",
    },
    publishedDate: "January 23, 2020",
    updatedDate: "June 15, 2024",
    category: "Test Preparation",
    tags: [
      "driving test fail",
      "test anxiety",
      "teen driving",
      "driving test tips",
      "driving test nerves",
      "pass driving test",
      "driving test retry",
      "first time fail",
    ],
    readTime: 7,
    views: 3245,
    likes: 189,
    comments: 43,
  },
  {
    id: "2",
    title: "Tips to Reduce the Cost of Insurance for Young Drivers",
    slug: "tips-to-reduce-the-cost-of-insurance-for-young-drivers",
    content: "Full article content here...",
    excerpt:
      "Insurance costs can be prohibitively expensive for young drivers. Discover practical strategies to lower your premiums without compromising on coverage.",
    featuredImage:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    author: {
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    publishedDate: "June 10, 2024",
    category: "Insurance",
    tags: ["insurance", "young drivers", "saving money"],
    readTime: 7,
    views: 2130,
    likes: 156,
    comments: 42,
  },
  {
    id: "3",
    title: "Driving Safely in Wet Weather Conditions",
    slug: "driving-safely-in-wet-weather",
    content: "Full article content here...",
    excerpt:
      "Wet roads can significantly increase stopping distances and reduce visibility. Learn essential techniques for staying safe when driving in rainy conditions.",
    featuredImage:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
    author: {
      name: "Emma Thompson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    publishedDate: "June 5, 2024",
    category: "Safety",
    tags: ["wet weather", "safety tips", "driving techniques"],
    readTime: 6,
    views: 1876,
    likes: 124,
    comments: 31,
  },
  {
    id: "4",
    title: "Ace Your Hazard Perception Test: 10 Fire Tips You Need RN 👀",
    slug: "hazard-perception-test-tips",
    content: `# Ace Your Hazard Perception Test: 10 Fire Tips You Need RN 👀

The hazard perception test is lowkey one of the most stressful parts of getting your license. It's giving anxiety for real, but don't stress! We've got the ultimate cheat code to help you pass this vibe check first time. No cap.

## What Even Is The Hazard Perception Test? 🤔

Before we spill the tea on how to ace it, let's break down what you're actually dealing with. The hazard perception test checks if you can spot potential dangers on the road before they become a whole situation. You'll watch 14 video clips (each about a minute long) and click when you see a developing hazard. The faster you spot it, the more points you secure—up to 5 per hazard. You need 44 out of 75 points to pass this section.

## The Hazard Perception Girlies & Bros Need These Tips 💅

### 1. Know The Assignment

First things first, understand the format. Each clip has at least one developing hazard, and some have two. You're looking for situations that would make you:
- Change speed
- Change direction
- Stop completely

The DVSA isn't trying to catch you out with random pedestrians just vibing on the sidewalk. They want to see if you can clock real dangers that would make you react.

### 2. Don't Just Click Randomly (It's Giving Bot Energy)

The algorithm will literally check you if you're just spam clicking. If the system thinks you're trying to game it, you'll get zero points for that clip. Instead, be strategic and only click when you actually see something sus.

### 3. Spot The Main Character Energy

In each clip, try to identify who's about to cause drama. Is it:
- That car with the turn signal that's about to pull out?
- The cyclist who's wobbling a bit too much?
- The pedestrian looking at their phone near a crossing?

These are your main characters—keep your eyes on them.

### 4. Use The 3-2-1 Method

This is literally a game-changer. Train yourself to:
- Scan the far distance (3)
- Check the middle distance (2)
- Glance at what's directly ahead (1)

Repeat this pattern constantly. It's the same technique race car drivers use, and it's lowkey the best way to spot hazards early.

### 5. Read The Road Signs Like They're Spoilers

Road signs are basically spoiler alerts for what's coming up. School zone sign? Get ready for children crossing. Sharp bend ahead? Watch for slowing traffic. The signs are literally telling you what kind of hazards to expect.

### 6. The Weather Matters, Bestie

If the clip shows rain, snow, or fog, automatically dial up your hazard radar. Poor visibility and slippery roads mean hazards will develop faster and be harder to spot. In these conditions, anything that moves is potentially about to cause problems.

### 7. Practice With POV TikToks (No, Seriously)

There are tons of hazard perception practice clips on YouTube and TikTok now. The more you watch, the better your hazard-spotting instincts will get. It's like training your FYP algorithm, but for road safety.

### 8. Vibe Check Your Environment

Before you start clicking on hazards, take a quick second to clock the environment:
- Are you in a residential area? Watch for driveways and children
- City center? Pedestrians and cyclists will be everywhere
- Rural road? Animals and tractors have entered the chat

### 9. Don't Wait For The Jump Scare

The biggest mistake? Waiting until the hazard is giving full jump scare energy before clicking. By then, it's too late for full points. You need to click when the hazard is still developing—when that pedestrian first steps toward the road, not when they're already crossing.

### 10. Take The Mock Tests Until You're Bored

Seriously, take so many practice tests that you're literally bored of them. The DVSA has official practice tests, but there are also free ones online. The more clips you watch, the more your brain will automatically start scanning for hazards.

## Red Flags To Watch For 🚩

These situations are always the main characters in hazard clips:

- Parked cars with brake lights that just turned on
- Vehicles edging out from side roads
- Children playing near the road
- Cyclists or motorcyclists in your blind spots
- Cars slowing suddenly ahead of you
- Pedestrians approaching crossings
- Road works or lane closures

## The Day Before Your Test

Don't stay up all night cramming practice tests—that's not the vibe. Instead:

- Get that full 8 hours of sleep
- Do a few practice clips in the morning to warm up
- Arrive early so you're not stressed about time
- Remember you only need 44/75 to pass, not a perfect score

## Final Thoughts

The hazard perception test isn't about having superhuman vision—it's about developing a sixth sense for road safety. Once you train your brain to constantly scan and assess, it becomes second nature.

Remember: your driving instructor is your biggest ally here. They've helped hundreds of students pass this test, so if you're struggling, just ask them to focus on hazard perception during your next lesson.

Now go get that pass, bestie! The road is waiting for your main character energy. 💯`,
    excerpt:
      "Struggling with the hazard perception test? These 10 fire tips will help you spot dangers early, avoid the algorithm checking you for spam clicks, and pass first time! Perfect for Gen Z learners who want practical, no-cap advice.",
    featuredImage:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    author: {
      name: "Drive Dojo Team",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DriveDojo",
    },
    publishedDate: "June 30, 2023",
    category: "Test Preparation",
    tags: [
      "hazard perception",
      "theory test",
      "driving test tips",
      "DVSA",
      "test anxiety",
      "driving hacks",
    ],
    readTime: 6,
    views: 4218,
    likes: 312,
    comments: 73,
  },
];

const BlogArticleDetail = () => {
  const { slug = "" } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [copyLinkText, setCopyLinkText] = useState("Copy Link");

  // Get related articles (same category or tags)
  const getRelatedArticles = () => {
    if (!article) return [];

    return sampleBlogArticles
      .filter((a) => a.id !== article.id) // Exclude current article
      .filter(
        (a) =>
          a.category === article.category ||
          a.tags.some((tag) => article.tags.includes(tag)),
      )
      .slice(0, 3); // Get up to 3 related articles
  };

  // Find the article based on the slug
  useEffect(() => {
    if (!slug) {
      setError("No article slug provided");
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Normalize the slug for comparison (trim whitespace, ensure lowercase)
    const normalizedSlug = slug.trim().toLowerCase();

    console.log("Looking for article with slug:", normalizedSlug);
    console.log(
      "Available articles:",
      sampleBlogArticles.map((a) => a.slug),
    );

    // Simulate API call delay
    setTimeout(() => {
      // Find article with case-insensitive comparison
      const foundArticle = sampleBlogArticles.find(
        (a) => a.slug.toLowerCase() === normalizedSlug,
      );

      if (foundArticle) {
        console.log("Found article:", foundArticle.title);
        setArticle(foundArticle);
        setIsLoading(false);
      } else {
        console.error("Article not found for slug:", normalizedSlug);
        setError("Article not found");
        setIsLoading(false);
      }
    }, 500);
  }, [slug]);

  const handleLike = () => {
    setLiked(!liked);
    // In a real app, you would update the likes count in the database
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    // In a real app, you would save this to the user's bookmarks
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyLinkText("Copied!");
    setTimeout(() => setCopyLinkText("Copy Link"), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
        <Navbar />
        <div className="pt-[120px] pb-20 flex justify-center items-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 bg-slate-200 rounded w-60 mb-4"></div>
            <div className="h-6 bg-slate-200 rounded w-40"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
        <Navbar />
        <div className="pt-[120px] pb-20 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Oops! Article Not Found</h1>
            <p className="mb-6">
              We couldn't find the article you're looking for.
            </p>
            <Button onClick={() => navigate("/blog")}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedArticles = getRelatedArticles();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>

      <Navbar />

      <main className="pt-[120px] pb-20 relative z-10">
        <div className="container mx-auto px-4">
          {/* Back to blog link */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="ghost"
              className="text-gray-600 hover:text-purple-600 hover:bg-purple-50 -ml-3"
              onClick={() => navigate("/blog")}
            >
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </Button>
          </motion.div>

          {/* Article header */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Link
                to={`/blog?category=${article.category}`}
                className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
              >
                {article.category}
              </Link>
              <span className="text-gray-400">•</span>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>{article.readTime} min read</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              {article.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-10 w-10 border-2 border-white mr-3">
                  <img
                    src={
                      article.author.avatar ||
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author.name}`
                    }
                    alt={article.author.name}
                  />
                </Avatar>
                <div>
                  <div className="font-medium text-gray-900">
                    {article.author.name}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.publishedDate}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button
                  className={`p-2 rounded-full ${liked ? "bg-red-50 text-red-500" : "bg-gray-100 text-gray-500"} hover:bg-red-50 hover:text-red-500 transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLike}
                >
                  <Heart className={`h-5 w-5 ${liked ? "fill-red-500" : ""}`} />
                </motion.button>

                <motion.button
                  className={`p-2 rounded-full ${bookmarked ? "bg-blue-50 text-blue-500" : "bg-gray-100 text-gray-500"} hover:bg-blue-50 hover:text-blue-500 transition-colors`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleBookmark}
                >
                  <Bookmark
                    className={`h-5 w-5 ${bookmarked ? "fill-blue-500" : ""}`}
                  />
                </motion.button>

                <div className="relative group">
                  <motion.button
                    className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-purple-500 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="h-5 w-5" />
                  </motion.button>

                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 hidden group-hover:block">
                    <div className="py-1">
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                        <Twitter className="h-4 w-4 mr-2" /> Share on Twitter
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                        <Facebook className="h-4 w-4 mr-2" /> Share on Facebook
                      </button>
                      <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                        <Linkedin className="h-4 w-4 mr-2" /> Share on LinkedIn
                      </button>
                      <button
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                        onClick={copyToClipboard}
                      >
                        <Copy className="h-4 w-4 mr-2" /> {copyLinkText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured image */}
          <motion.div
            className="mb-10 rounded-2xl overflow-hidden shadow-lg relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
            <img
              src={article.featuredImage}
              alt={article.title}
              className="w-full h-auto object-cover max-h-[500px] transition-transform duration-700 group-hover:scale-105"
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-yellow-300" />
                <span className="text-white font-medium text-sm">
                  Featured Article
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Article content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-xl shadow-md p-6 md:p-10 prose prose-lg max-w-none">
                <BlogArticleContent content={article.content} />
              </div>

              {/* Tags */}
              <div className="mt-8 flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog?tag=${tag}`}
                    className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    #{tag.replace(/\s+/g, "")}
                  </Link>
                ))}
              </div>

              {/* Author bio */}
              <motion.div
                className="mt-10 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full bg-purple-200/30"
                      style={{
                        width: Math.random() * 60 + 20,
                        height: Math.random() * 60 + 20,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      initial={{ opacity: 0.1, scale: 0 }}
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [0, 1, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                        y: [0, Math.random() * 50 - 25, 0],
                      }}
                      transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Avatar className="h-16 w-16 border-2 border-white mr-4 ring-4 ring-purple-100">
                        <img
                          src={
                            article.author.avatar ||
                            `https://api.dicebear.com/7.x/avataaars/svg?seed=${article.author.name}`
                          }
                          alt={article.author.name}
                        />
                      </Avatar>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 flex items-center">
                        About {article.author.name}
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.2, 1] }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        >
                          <Zap className="ml-2 h-5 w-5 text-yellow-500" />
                        </motion.div>
                      </h3>
                      <p className="text-gray-600">
                        Driving Instructor & Content Creator
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">
                    {article.author.name} is a certified driving instructor with
                    over 5 years of experience helping students pass their
                    tests. They specialize in helping anxious drivers build
                    confidence on the road.
                  </p>
                </div>
              </motion.div>

              {/* Comments section placeholder */}
              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-purple-500" />
                  Comments ({article.comments})
                </h3>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-center py-8">
                    <p className="text-gray-500">Comments are coming soon!</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="lg:col-span-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Related articles */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Related Articles
                </h3>

                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <div
                      key={relatedArticle.id}
                      className="flex items-start space-x-3 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                    >
                      <img
                        src={relatedArticle.featuredImage}
                        alt={relatedArticle.title}
                        className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                      />
                      <div>
                        <Link
                          to={`/blog/${relatedArticle.slug}`}
                          className="font-medium text-gray-900 hover:text-purple-600 line-clamp-2 transition-colors"
                        >
                          {relatedArticle.title}
                        </Link>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{relatedArticle.readTime} min read</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {relatedArticles.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No related articles found
                  </p>
                )}
              </div>

              {/* Popular tags */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Popular Tags
                </h3>

                <div className="flex flex-wrap gap-2">
                  {[
                    "driving test",
                    "safety tips",
                    "new drivers",
                    "theory test",
                    "insurance",
                    "wet weather",
                    "night driving",
                    "motorway",
                    "parking",
                  ].map((tag, index) => (
                    <Link
                      key={index}
                      to={`/blog?tag=${tag}`}
                      className="bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      #{tag.replace(/\s+/g, "")}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="bg-gradient-to-r from-purple-600 via-red-500 to-amber-400 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                <p className="mb-4 text-white/90">
                  Get the latest driving tips straight to your inbox — no cap fr
                  fr
                </p>

                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow px-4 py-2 rounded-l-md border-0 focus:ring-2 focus:ring-white text-gray-900"
                  />
                  <button className="bg-white text-purple-600 px-4 py-2 rounded-r-md font-medium hover:bg-gray-100 transition-colors">
                    Subscribe
                  </button>
                </div>

                <p className="mt-3 text-xs text-white/70">
                  No spam, just immaculate vibes. Unsubscribe anytime.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Next/Previous article navigation */}
          <div className="mt-16 border-t border-gray-200 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <Button
                variant="outline"
                className="mb-4 sm:mb-0 w-full sm:w-auto"
                onClick={() => navigate("/blog")}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous Article
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => navigate("/blog")}
              >
                Next Article
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticleDetail;
